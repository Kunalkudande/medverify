import demoImage1 from '../images/demoimage2.jpg';
import demoImage2 from '../images/demoimage3.png';

function SamplesPage() {
  const samples = [
    { src: demoImage1, label: 'Demo Image 1' },
    { src: demoImage2, label: 'Demo Image 2' }
  ];

  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl font-bold mb-6 text-center">Sample Images</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {samples.map((sample, index) => (
          <div
            key={index}
            className="shadow-md p-4 rounded border flex flex-col items-center"
          >
            <img
              src={sample.src}
              alt={sample.label}
              className="w-full h-64 object-cover rounded"
            />
            <p className="text-center mt-2 text-lg font-medium">{sample.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SamplesPage;
