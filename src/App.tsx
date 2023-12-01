import "./App.sass";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SidePanel from "./components/SidePanel";
import { fabric } from "fabric";
import { useEffect, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import { cardText, cardTextFormat } from "./data/data";

type LanguageCode = "en" | "es" | "ru" | "de" | "it" | "pt" | "fr";

function App() {
  const [languageCode, setLanguageCode] = useState<LanguageCode>("en");
  const initialT1 = cardText[languageCode]?.t1 || "";
  const initialT2 = cardText[languageCode]?.t2 || "";
  const [text1, setText1] = useState(initialT1);
  const [text2, setText2] = useState(initialT2);
  const [image, setImage] = useState<HTMLImageElement>();
  const [currentImage, setCurrentImage] = useState(1);

  const { width: windowWidth } = useWindowSize();

  const src = `/img/${languageCode}/card_${languageCode}_${currentImage}.png`;

  const txtOptions = {
    width: 300,
    fontSize: 16,
    fontWeight: 500,
    fontFamily: "Montserrat",
    textAlign: "center",
    lineHeight: 1,
  };

  useEffect(() => {
    let canv = new fabric.Canvas("fabric-canvas");
    const txt1 = new fabric.Textbox(text1, {
      ...cardTextFormat[currentImage].t1,
      ...txtOptions,
    });
    const txt2 = new fabric.Textbox(text1, {
      ...cardTextFormat[currentImage].t2,
      ...txtOptions,
    });

    if (windowWidth && windowWidth > 500) {
      canv.setWidth(500);
      canv.setHeight(500);
    }

    if (windowWidth && windowWidth < 500) {
      canv.setWidth(windowWidth - 16);
      canv.setHeight(windowWidth - 16);
    }

    // if (!windowWidth) {
    //   canv.setWidth(500);
    //   canv.setHeight(500);
    // }

    canv.add(txt1);
    canv.add(txt2);

    fabric.Image.fromURL(src, function (img) {
      // add background image
      canv.setBackgroundImage(img, canv.renderAll.bind(canv), {
        scaleX: canv.width && img.width && canv.width / img.width,
        scaleY: canv.height && img.height && canv.height / img.height,
      });
    });

    return () => {
      canv.dispose();
    };
  }, [languageCode, currentImage, windowWidth]);

  return (
    <div className="app">
      <Header />
      <canvas id="fabric-canvas" />
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
