import React, { useEffect, useState } from "react";
import { useAuth } from "../components/AuthContext";

const HistoryPage = () => {
  const { user } = useAuth();
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/history/${user.email}`);
        if (!response.ok) {
          throw new Error("Failed to fetch history");
        }
        const data = await response.json();
        setHistory(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (user?.email) {
      fetchHistory();
    }
  }, [user]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center text-red-600 mt-10">{error}</div>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-green-700">Your Prediction History</h1>

      {history.length === 0 ? (
        <p className="text-center text-gray-500">No history available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {history.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center"
            >
              <img
                src={`data:image/jpeg;base64,${item.image_base64}`}
                alt="Prediction"
                className="h-48 object-cover rounded-lg mb-4 border"
              />
              <p><strong>Type:</strong> {item.image_type}</p>
              <p><strong>Prediction:</strong> {item.prediction}</p>
              <p className="text-sm text-gray-500 mt-2">
                <strong>Date:</strong> {new Date(item.timestamp).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HistoryPage;
