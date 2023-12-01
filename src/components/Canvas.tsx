import { fabric } from "fabric";
import { useEffect, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import { cardText, cardTextFormat } from "../data/data";
import { LanguageCode } from "../App";
import "./Canvas.sass"

type Props = { languageCode: LanguageCode; currentImage: number };

type CardTextFormatType = {
  [key: number]: {
    text1: number;
    text2: number;
    color: string;
  };
};

const Canvas = ({ languageCode, currentImage }: Props) => {
  const initialT1 = cardText[languageCode]?.t1 || "";
  const initialT2 = cardText[languageCode]?.t2 || "";
  const initialTformat1 =
    (cardTextFormat as CardTextFormatType)[currentImage]?.text1 || {};
  const initialTformat2 =
    (cardTextFormat as CardTextFormatType)[currentImage]?.text2 || {};
  const [text1, setText1] = useState(initialT1);
  const [text2, setText2] = useState(initialT2);
  const [text1Format, setText1Format] = useState(initialTformat1);
  const [text2Format, setText2Format] = useState(initialTformat2);

  const { width: windowWidth } = useWindowSize();

  const src = `/img/${languageCode}/card_${languageCode}_${currentImage}.png`;
  console.log((cardTextFormat as CardTextFormatType)[currentImage].text1);

  const t1Options = (cardTextFormat as CardTextFormatType)[currentImage]
    ? {
        top: (cardTextFormat as CardTextFormatType)[currentImage].text1,
        fill: (cardTextFormat as CardTextFormatType)[currentImage].color,
      }
    : {};

  const t2Options = (cardTextFormat as CardTextFormatType)[currentImage]
    ? {
        top: (cardTextFormat as CardTextFormatType)[currentImage].text2,
        fill: (cardTextFormat as CardTextFormatType)[currentImage].color,
      }
    : {};

  const txtOptions = {
    left: 10,
    width: 300,
    fontSize: 16,
    fontWeight: 500,
    fontFamily: "Montserrat",
    textAlign: "center",
    lineHeight: 1.25,
  };

  useEffect(() => {
    let canv = new fabric.Canvas("fabric-canvas");
    const txt1 = new fabric.Textbox(text1, {
      ...t1Options,
      ...txtOptions,
    });
    const txt2 = new fabric.Textbox(text2, {
      ...t2Options,
      ...txtOptions,
    });

    canv.setWidth(350);
    canv.setHeight(350);

    // if (windowWidth && windowWidth > 500) {
    //   canv.setWidth(500);
    //   canv.setHeight(500);
    // }

    // if (windowWidth && windowWidth < 500) {
    //   canv.setWidth(windowWidth - 16);
    //   canv.setHeight(windowWidth - 16);
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
  }, [languageCode, currentImage]);
  return (
    <div className="canvas-container">
      <canvas id="fabric-canvas" />
    </div>
  );
};

export default Canvas;
