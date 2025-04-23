import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import SamplesPage from "./pages/SamplesPage";
import DetailsPage from "./pages/DetailsPage";
import ApiSection from "./components/ApiSection";
import SignupPage from "./pages/SignUpPage";
// import SigninPage from "./pages/SignInPage";
import { AuthProvider } from "./components/AuthContext"; // Import the AuthProvider

function App() {
  const mainRef = useRef(null);
  const samplesRef = useRef(null);
  const detailsRef = useRef(null);
  const apiRef = useRef(null);

  const handleScrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AuthProvider> {/* Wrap the app with AuthProvider */}
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar
            scrollToSection={handleScrollToSection}
            refs={{ mainRef, samplesRef, detailsRef, apiRef }}
          />
          <main className="flex-grow">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <section ref={mainRef}>
                      <MainPage />
                    </section>
                    <section ref={samplesRef}>
                      <SamplesPage />
                    </section>
                    <section ref={apiRef}>
                      <ApiSection />
                    </section>
                    <section ref={detailsRef}>
                      <DetailsPage />
                    </section>
                  </>
                }
              />
              <Route path="/signup" element={<SignupPage />} />
              {/* <Route path="/signin" element={<SigninPage />} /> */}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
