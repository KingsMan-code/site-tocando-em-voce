import React, { useEffect, useRef, useState } from 'react';

// Importando as imagens da galeria
import galeria1 from '../assets/galeria_1.jpg'
import galeria2 from '../assets/galeria_2.jpg'
import galeria3 from '../assets/galeria_3.jpg'
import galeria4 from '../assets/galeria_4.jpg'
import galeria5 from '../assets/galeria_5.jpg'
import galeria6 from '../assets/galeria_6.jpg'
import galeria7 from '../assets/galeria_7.jpg'
import galeria8 from '../assets/galeria_8.jpg'
import galeria9 from '../assets/galeria_9.jpg'
import galeria10 from '../assets/galeria_10.jpg'
import galeria11 from '../assets/galeria_11.jpg'
import galeria12 from '../assets/galeria_12.jpg'
import galeria13 from '../assets/galeria_13.jpg'
import galeria14 from '../assets/galeria_14.jpg'
import galeria15 from '../assets/galeria_15.jpg'
import galeria16 from '../assets/galeria_16.jpg'
import galeria17 from '../assets/galeria_17.jpg'
import galeria18 from '../assets/galeria_18.jpg'
import galeria19 from '../assets/galeria_19.jpg'
import galeria20 from '../assets/galeria_20.jpg'
import galeria21 from '../assets/galeria_21.jpg'
import galeria22 from '../assets/galeria_22.jpg'
import galeria23 from '../assets/galeria_23.jpg'
import galeria24 from '../assets/galeria_24.jpg'

const PhotoGallery = () => {
  const galleryRef = useRef(null);
  const [partsArray, setPartsArray] = useState([]);
  const [help, setHelp] = useState(true);
  
  const rows = 4;
  const cols = 6;
  const staggerTime = 150;

  // URLs das imagens da galeria do instituto
  const urls = [
    galeria1, galeria2, galeria3, galeria4, galeria5, galeria6,
    galeria7, galeria8, galeria9, galeria10, galeria11, galeria12,
    galeria13, galeria14, galeria15, galeria16, galeria17, galeria18,
    galeria19, galeria20, galeria21, galeria22, galeria23, galeria24
  ];

  const [selectedImage, setSelectedImage] = useState(urls[0]);
  const [helpText, setHelpText] = useState("Escolha uma foto");

  useEffect(() => {
    // Initialize parts array
    const newPartsArray = [];
    for (let row = 0; row < rows; row++) {
      newPartsArray[row] = [];
      for (let col = 0; col < cols; col++) {
        newPartsArray[row][col] = { showing: "front" };
      }
    }
    setPartsArray(newPartsArray);
  }, []);

  const isShowingBack = () => {
    if (partsArray.length === 0) return false;
    return partsArray[0][0].showing === "back" && 
           partsArray[0][cols - 1].showing === "back" && 
           partsArray[rows - 1][0].showing === "back" && 
           partsArray[rows - 1][cols - 1].showing === "back";
  };

  const waveChange = (rowN, colN) => {
    if (rowN >= rows || colN >= cols || rowN < 0 || colN < 0) return;
    if (partsArray[rowN] && partsArray[rowN][colN] && partsArray[rowN][colN].showing === "back") return;

    // Update parts array
    const newPartsArray = [...partsArray];
    if (newPartsArray[rowN] && newPartsArray[rowN][colN]) {
      newPartsArray[rowN][colN].showing = "back";
      setPartsArray(newPartsArray);

      // Remove show-front class
      const element = document.querySelector(`.demo__part-${rowN + 1}-${colN + 1}`);
      if (element) {
        element.classList.remove("show-front");
      }

      setTimeout(() => {
        waveChange(rowN + 1, colN);
        waveChange(rowN - 1, colN);
        waveChange(rowN, colN + 1);
        waveChange(rowN, colN - 1);
      }, staggerTime);
    }
  };

  const handlePartClick = (row, col, imageUrl) => {
    setSelectedImage(imageUrl);
    if (help) {
      setHelpText("Clique em qualquer peça para voltar");
      setHelp(false);
    }
    waveChange(row, col);
  };

  const handleBackClick = () => {
    if (!isShowingBack()) return;

    setHelpText("Escolha uma foto");

    setTimeout(() => {
      const newPartsArray = [...partsArray];
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          if (newPartsArray[row] && newPartsArray[row][col]) {
            newPartsArray[row][col].showing = "front";
          }
        }
      }
      setPartsArray(newPartsArray);
    }, staggerTime + (rows * cols * staggerTime) / 10);

    // Add show-front class to all parts
    for (let i = 0; i < rows * cols; i++) {
      setTimeout(() => {
        const row = Math.floor(i / cols) + 1;
        const col = (i % cols) + 1;
        const element = document.querySelector(`.demo__part-${row}-${col}`);
        if (element) {
          element.classList.add("show-front");
        }
      }, i * 10);
    }
  };

  const renderParts = () => {
    const parts = [];
    for (let row = 1; row <= rows; row++) {
      for (let col = 1; col <= cols; col++) {
        const index = (row - 1) * cols + (col - 1);
        const imageUrl = urls[index] || urls[0];
        
        parts.push(
          <div
            key={`${row}-${col}`}
            className={`demo__part demo__part-${row}-${col} show-front`}
            style={{
              position: 'relative',
              float: 'left',
              width: '110px',
              height: '110px',
              margin: '2px',
              transform: 'rotateY(180deg)',
              transformStyle: 'preserve-3d',
              transition: 'all 0.3s ease-in-out'
            }}
          >
            <div 
              className="demo__part-back"
              onClick={handleBackClick}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                backfaceVisibility: 'hidden',
                borderRadius: '5px',
                cursor: 'pointer',
                transform: 'rotateY(180deg) rotateX(0deg)'
              }}
            >
              <div 
                className="demo__part-back-inner"
                style={{
                  width: `${cols * 110 + (cols - 1) * 2 * 2}px`,
                  height: `${rows * 110 + (rows - 1) * 2 * 2}px`,
                  backgroundImage: `url(${selectedImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backfaceVisibility: 'hidden',
                  transform: `translate(${-(col - 1) * (110 + 2 * 2)}px, ${-(row - 1) * (110 + 2 * 2)}px)`
                }}
              />
            </div>
            <div 
              className="demo__part-front"
              onClick={() => handlePartClick(row - 1, col - 1, imageUrl)}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                backfaceVisibility: 'hidden',
                borderRadius: '5px',
                cursor: 'pointer',
                backgroundColor: '#708090',
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transform: 'rotateX(0deg)',
                transition: 'all 0.2s ease'
              }}
            >
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'black',
                  opacity: 0.5,
                  transition: 'all 0.2s ease'
                }}
              />
            </div>
          </div>
        );
      }
    }
    return parts;
  };

  return (
    <div className="demo flex flex-col items-center justify-center py-8">
      <div className="demo__help mb-6 text-2xl font-light text-gray-700">
        {helpText}
      </div>
      <div 
        ref={galleryRef}
        className="demo__gallery bg-gray-200 rounded-lg shadow-xl"
        style={{
          width: `${cols * 110 + 2 * cols * 2 + 2 * 2}px`,
          height: `${rows * 110 + 2 * rows * 2 + 2 * 2}px`,
          padding: '2px',
          perspective: '700px'
        }}
      >
        {renderParts()}
      </div>
      
      <style jsx>{`
        .demo__part.show-front {
          transform: none !important;
        }
        
        .demo__part-front:hover {
          box-shadow: 0 0 10px black;
          transform: scale(0.96) !important;
        }
        
        .demo__part-front:hover > div {
          opacity: 0 !important;
        }
      `}</style>
    </div>
  );
};

export default PhotoGallery;

