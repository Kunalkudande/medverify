import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import SamplesPage from "./pages/SamplesPage";
import DetailsPage from "./pages/DetailsPage";
import ApiSection from "./components/ApiSection";

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
    <div className="min-h-screen flex flex-col">
      <Navbar
        scrollToSection={handleScrollToSection}
        refs={{ mainRef, samplesRef, detailsRef, apiRef }}
      />
      <main className="flex-grow">
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
      </main>
      <Footer />
    </div>
  );
}

export default App;
