function SamplesPage() {
  const samples = [
    { src: '/images/real1.jpg', label: 'Real Image 1' },
    { src: '/images/fake1.jpg', label: 'Fake Image 1' },
    // Add more sample images here.
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Sample Images</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {samples.map((sample, index) => (
          <div key={index} className="shadow-md p-4 rounded border">
            <img src={sample.src} alt={sample.label} className="w-full h-64 object-cover rounded" />
            <p className="text-center mt-2">{sample.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SamplesPage;
