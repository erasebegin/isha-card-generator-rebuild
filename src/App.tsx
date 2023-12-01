import { useRef, useState } from "react";
import "./App.sass";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SidePanel from "./components/SidePanel";
import Canvas from "./components/Canvas";

export type LanguageCode = "en" | "es" | "ru" | "de" | "it" | "pt" | "fr";

function App() {
  const [languageCode, setLanguageCode] = useState<LanguageCode>("en");
  const [currentImage, setCurrentImage] = useState(1);
  const canvasRef = useRef();

  const handleDownload = () => {
    canvasRef.current.downloadCanvasContent();
  };

  return (
    <div className="app">
      <Header />
      <Canvas
        currentImage={currentImage}
        languageCode={languageCode}
        ref={canvasRef}
      />
      <button onClick={handleDownload}>download</button>
      <SidePanel
        currentImage={currentImage}
        setCurrentImage={setCurrentImage}
        languageCode={languageCode}
      />
      <Footer />
    </div>
  );
}

export default App;
