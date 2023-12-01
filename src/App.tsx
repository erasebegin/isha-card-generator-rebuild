import "./App.sass";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";
import MobileMenuButton from "./components/MobileMenuButton";
import SidePanel from "./components/SidePanel";
import { fabric } from "fabric";
import { useEffect, useState } from "react";

function App() {
  const [text1, setText1] = useState("woop");
  const [text2, setText2] = useState("wee");
  const [image, setImage] = useState<HTMLImageElement>();
  const [currentImage, setCurrentImage] = useState(1);
  const [languageCode, setLanguageCode] = useState("en");
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  const src = `/img/card_${languageCode}_${currentImage}.png`

  const txtOptAll = () => ({
    txt1: {
      left: 10,
      top: 60,
      width: 300,
      fill: "blue",
      fontSize: 16,
      fontWeight: 500,
      fontFamily: "Montserrat",
      textAlign: "center",
      lineHeight: 1,
    },

    txt2: {
      left: 10,
      top: 195,
      width: 300,
      fill: "blue",
      fontSize: 16,
      fontWeight: 700,
      fontFamily: "Montserrat",
      textAlign: "center",
      lineHeight: 1,
    },
  });

  useEffect(() => {
    let canv = new fabric.Canvas("fabric-canvas");
    const txt1 = new fabric.Textbox(text1, txtOptAll().txt1);
    const txt2 = new fabric.Textbox(text2, txtOptAll().txt2);

    canv.setWidth(500);
    canv.setHeight(500);
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
  }, [languageCode, currentImage]);

  return (
    <div className="app">
      <MobileMenuButton
        mobileMenuIsOpen={mobileMenuIsOpen}
        setMobileMenuIsOpen={setMobileMenuIsOpen}
      />
      <MobileMenu mobileMenuIsOpen={mobileMenuIsOpen} />
      <Header />
      <canvas id="fabric-canvas"/>
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
