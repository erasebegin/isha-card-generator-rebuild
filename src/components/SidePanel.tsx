import { cardTextFormat } from "../data/data";
import "./SidePanel.sass";

type Props = {
  languageCode: string;
  currentImage: number;
  setCurrentImage: (currentImage: number) => void;
};

const SidePanel = ({ languageCode, currentImage, setCurrentImage }: Props) => {
  // set the total number of greetings card images in the selection panel
  const numImages = Object.keys(cardTextFormat).length;
  console.log({ numImages });

  let thumbnailPaths: { index: number; path: string }[] = [];

  for (let i = 1; i <= numImages; i++) {
    thumbnailPaths.push({ index: i, path: `card_${languageCode}_${i}` });
  }

  return (
    <div className="side-panel">
      <div className="thumbnails">
        {thumbnailPaths.map((img) => (
          <button
            onClick={() => setCurrentImage(img.index)}
            className={currentImage === img.index ? "current" : ""}
          >
            <img src={`/thumbnails/${languageCode}/${img.path}.png`} alt="card thumbnail" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default SidePanel;
