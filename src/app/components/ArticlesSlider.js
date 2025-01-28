"use client";

import { useState, useEffect, useRef } from "react";
import ArticleCard from "./ArticleCard";

export default function ArticlesSlider() {
  const [currentArticleId, setCurrentArticleId] = useState(0);
  const [screenWidth, setScreenWidth] = useState(null);
  const [latestArticles, setLatestArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [itemsArray, setItemsArray] = useState([]);
  const [space, setSpace] = useState(null);
  const [cardWidth, setCardWidth] = useState(null);

  useEffect(() => {
    setLoading(true);
    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", () => setScreenWidth(window.innerWidth));
    setLatestArticles([
      {
        title: "0",
        image: "./Images/Blog/blog1.jpg",
        description:
          "In a small, forgotten village, the stars begin to speak—quietly at first, then louder with each passing night. A curious astronomer, drawn by an ancient legend, sets out to uncover the truth behind the celestial whispers. But as she delves deeper into the mystery, she discovers that the stars are not merely distant lights, but fragments of a forgotten past, holding secrets that could reshape the world.",
        link: "/",
      },
      {
        title: "1",
        image: "./Images/Blog/blog1.jpg",
        description:
          "In a small, forgotten village, the stars begin to speak—quietly at first, then louder with each passing night. A curious astronomer, drawn by an ancient legend, sets out to uncover the truth behind the celestial whispers. But as she delves deeper into the mystery, she discovers that the stars are not merely distant lights, but fragments of a forgotten past, holding secrets that could reshape the world.",
        link: "/",
      },
      {
        title: "2",
        image: "./Images/Blog/blog1.jpg",
        description:
          "In a small, forgotten village, the stars begin to speak—quietly at first, then louder with each passing night. A curious astronomer, drawn by an ancient legend, sets out to uncover the truth behind the celestial whispers. But as she delves deeper into the mystery, she discovers that the stars are not merely distant lights, but fragments of a forgotten past, holding secrets that could reshape the world.",
        link: "/",
      },
      {
        title: "3",
        image: "./Images/Blog/blog1.jpg",
        description:
          "In a small, forgotten village, the stars begin to speak—quietly at first, then louder with each passing night. A curious astronomer, drawn by an ancient legend, sets out to uncover the truth behind the celestial whispers. But as she delves deeper into the mystery, she discovers that the stars are not merely distant lights, but fragments of a forgotten past, holding secrets that could reshape the world.",
        link: "/",
      },
      {
        title: "4",
        image: "./Images/Blog/blog1.jpg",
        description:
          "In a small, forgotten village, the stars begin to speak—quietly at first, then louder with each passing night. A curious astronomer, drawn by an ancient legend, sets out to uncover the truth behind the celestial whispers. But as she delves deeper into the mystery, she discovers that the stars are not merely distant lights, but fragments of a forgotten past, holding secrets that could reshape the world.",
        link: "/",
      },
      {
        title: "5",
        image: "./Images/Blog/blog1.jpg",
        description:
          "In a small, forgotten village, the stars begin to speak—quietly at first, then louder with each passing night. A curious astronomer, drawn by an ancient legend, sets out to uncover the truth behind the celestial whispers. But as she delves deeper into the mystery, she discovers that the stars are not merely distant lights, but fragments of a forgotten past, holding secrets that could reshape the world.",
        link: "/",
      },
      {
        title: "6",
        image: "./Images/Blog/blog1.jpg",
        description:
          "In a small, forgotten village, the stars begin to speak—quietly at first, then louder with each passing night. A curious astronomer, drawn by an ancient legend, sets out to uncover the truth behind the celestial whispers. But as she delves deeper into the mystery, she discovers that the stars are not merely distant lights, but fragments of a forgotten past, holding secrets that could reshape the world.",
        link: "/",
      },
      {
        title: "7",
        image: "./Images/Blog/blog1.jpg",
        description:
          "In a small, forgotten village, the stars begin to speak—quietly at first, then louder with each passing night. A curious astronomer, drawn by an ancient legend, sets out to uncover the truth behind the celestial whispers. But as she delves deeper into the mystery, she discovers that the stars are not merely distant lights, but fragments of a forgotten past, holding secrets that could reshape the world.",
        link: "/",
      },
      {
        title: "8",
        image: "./Images/Blog/blog1.jpg",
        description:
          "In a small, forgotten village, the stars begin to speak—quietly at first, then louder with each passing night. A curious astronomer, drawn by an ancient legend, sets out to uncover the truth behind the celestial whispers. But as she delves deeper into the mystery, she discovers that the stars are not merely distant lights, but fragments of a forgotten past, holding secrets that could reshape the world.",
        link: "/",
      },
      {
        title: "9",
        image: "./Images/Blog/blog1.jpg",
        description:
          "In a small, forgotten village, the stars begin to speak—quietly at first, then louder with each passing night. A curious astronomer, drawn by an ancient legend, sets out to uncover the truth behind the celestial whispers. But as she delves deeper into the mystery, she discovers that the stars are not merely distant lights, but fragments of a forgotten past, holding secrets that could reshape the world.",
        link: "/",
      },
    ]);
    setTimeout(() => setLoading(false), 3000);
  }, []);

  useEffect(() => {
    if (latestArticles.length !== 0) {
      if (screenWidth >= 1536) {
        setCardWidth(375);
        setSpace((1512 - 1125) / 2);
        setItemsArray(find3());
      } else if (screenWidth >= 1280) {
        setCardWidth(375);
        setSpace((1256 - 1125) / 2);
        setItemsArray(find3());
      } else if (screenWidth >= 1024) {
        setCardWidth(375);
        setSpace(1000 - 750);
        setItemsArray(find2());
      } else if (screenWidth >= 768) {
        setCardWidth(300);
        setSpace(744 - 600);
        setItemsArray(find2());
      } else if (screenWidth >= 640) {
        setCardWidth(300);
        setSpace(616 - 600);
        setItemsArray(find2());
      } else {
        setCardWidth(screenWidth - 24);
        setSpace(12);
        setItemsArray(find1());
      }
    }
  }, [currentArticleId, screenWidth]);

  function find3() {
    let counter = 0;
    let beforeItems = [
      currentArticleId - 1 >= 0
        ? currentArticleId - 1
        : ++counter && latestArticles.length - counter,
      currentArticleId - 2 >= 0
        ? currentArticleId - 2
        : ++counter && latestArticles.length - counter,
      currentArticleId - 3 >= 0
        ? currentArticleId - 3
        : ++counter && latestArticles.length - counter,
      currentArticleId - 4 >= 0
        ? currentArticleId - 4
        : ++counter && latestArticles.length - counter,
    ];

    let afterItems = [
      currentArticleId + 3 < latestArticles.length
        ? currentArticleId + 3
        : currentArticleId + 3 - latestArticles.length,
      currentArticleId + 4 < latestArticles.length
        ? currentArticleId + 4
        : currentArticleId + 4 - latestArticles.length,
      currentArticleId + 5 < latestArticles.length
        ? currentArticleId + 5
        : currentArticleId + 5 - latestArticles.length,
    ];

    let centerItems = [
      currentArticleId,
      currentArticleId + 1 < latestArticles.length
        ? currentArticleId + 1
        : currentArticleId + 1 - latestArticles.length,
      currentArticleId + 2 < latestArticles.length
        ? currentArticleId + 2
        : currentArticleId + 2 - latestArticles.length,
    ];

    return [beforeItems, centerItems, afterItems];
  }

  function find2() {
    let counter = 0;
    let beforeItems = [
      currentArticleId - 1 >= 0
        ? currentArticleId - 1
        : ++counter && latestArticles.length - counter,
      currentArticleId - 2 >= 0
        ? currentArticleId - 2
        : ++counter && latestArticles.length - counter,
      currentArticleId - 3 >= 0
        ? currentArticleId - 3
        : ++counter && latestArticles.length - counter,
      currentArticleId - 4 >= 0
        ? currentArticleId - 4
        : ++counter && latestArticles.length - counter,
    ];

    let afterItems = [
      currentArticleId + 2 < latestArticles.length
        ? currentArticleId + 2
        : currentArticleId + 2 - latestArticles.length,
      currentArticleId + 3 < latestArticles.length
        ? currentArticleId + 3
        : currentArticleId + 3 - latestArticles.length,
      currentArticleId + 4 < latestArticles.length
        ? currentArticleId + 4
        : currentArticleId + 4 - latestArticles.length,
      currentArticleId + 5 < latestArticles.length
        ? currentArticleId + 5
        : currentArticleId + 5 - latestArticles.length,
    ];

    let centerItems = [
      currentArticleId,
      currentArticleId + 1 < latestArticles.length
        ? currentArticleId + 1
        : currentArticleId + 1 - latestArticles.length,
    ];

    return [beforeItems, centerItems, afterItems];
  }

  function find1() {
    let counter = 0;
    let beforeItems = [
      currentArticleId - 1 >= 0
        ? currentArticleId - 1
        : ++counter && latestArticles.length - counter,
      currentArticleId - 2 >= 0
        ? currentArticleId - 2
        : ++counter && latestArticles.length - counter,
      currentArticleId - 3 >= 0
        ? currentArticleId - 3
        : ++counter && latestArticles.length - counter,
      currentArticleId - 4 >= 0
        ? currentArticleId - 4
        : ++counter && latestArticles.length - counter,
      currentArticleId - 5 >= 0
        ? currentArticleId - 5
        : ++counter && latestArticles.length - counter,
    ];

    let afterItems = [
      currentArticleId + 1 < latestArticles.length
        ? currentArticleId + 1
        : currentArticleId + 1 - latestArticles.length,
      currentArticleId + 2 < latestArticles.length
        ? currentArticleId + 2
        : currentArticleId + 2 - latestArticles.length,
      currentArticleId + 3 < latestArticles.length
        ? currentArticleId + 3
        : currentArticleId + 3 - latestArticles.length,
      currentArticleId + 4 < latestArticles.length
        ? currentArticleId + 4
        : currentArticleId + 4 - latestArticles.length,
    ];

    let centerItems = [currentArticleId];

    return [beforeItems, centerItems, afterItems];
  }

  function translate(index) {
    if (itemsArray[0].includes(index)) {
      return (
        ((itemsArray[0].indexOf(index) + 1) * cardWidth +
          (itemsArray[0].indexOf(index) + 1) * space) *
        -1
      );
    } else if (itemsArray[2].includes(index)) {
      return (
        itemsArray[2].indexOf(index) * cardWidth +
        itemsArray[2].indexOf(index) * space +
        (itemsArray[1].length === 3
          ? 3 * cardWidth + 3 * space
          : itemsArray[1].length === 2
          ? 2 * cardWidth + 2 * space
          : cardWidth + space)
      );
    } else if (itemsArray[1].includes(index)) {
      return (
        itemsArray[1].indexOf(index) * cardWidth +
        itemsArray[1].indexOf(index) * space
      );
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[550px] md:h-[708px] w-full mx-auto text-2xl">
        Loading
      </div>
    );
  }

  return (
    <div className="h-[550px] md:h-[708px] w-full mx-auto relative">
      <div className="overflow-hidden relative w-full h-full">
        {latestArticles.map((item, index) => (
          <ArticleCard
            key={index}
            {...item}
            style={`translateX(${translate(index)}px)`}
            className={`absolute left-0 top-0 ${
              (itemsArray[0].indexOf(index) === itemsArray[0].length - 1 ||
                itemsArray[0].indexOf(index) === itemsArray[0].length - 2 ||
                itemsArray[2].indexOf(index) === itemsArray[2].length - 1 ||
                itemsArray[2].indexOf(index) === itemsArray[2].length - 2) &&
              "opacity-0"
            }`}
          />
        ))}
      </div>
      <div className="absolute left-0 -top-[40px] flex gap-6">
        <button
          onClick={() => {
            if (currentArticleId - 1 < 0) {
              setCurrentArticleId(latestArticles.length - 1);
            } else {
              setCurrentArticleId(currentArticleId - 1);
            }
          }}
        >
          <img src="./Images/Materials/left-arrow.svg" alt="left arrow" />
        </button>
        <button
          onClick={() => {
            if (currentArticleId + 1 > latestArticles.length - 1) {
              setCurrentArticleId(0);
            } else {
              setCurrentArticleId(currentArticleId + 1);
            }
          }}
        >
          <img src="./Images/Materials/right-arrow.svg" alt="right arrow" />
        </button>
      </div>
    </div>
  );
}
