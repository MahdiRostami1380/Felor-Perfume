"use client";

import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

export default function ProductsSlider() {
  const [currentPerfumeId, setCurrentPerfumeId] = useState(0);
  const [screenWidth, setScreenWidth] = useState(null);
  const [bestProducts, setBestProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [itemsArray, setItemsArray] = useState([]);
  const [space, setSpace] = useState(null);
  const [cardWidth, setCardWidth] = useState(null);

  let toGenerateTailwind = [
    "translate-x-[900px]",
    "translate-x-[1200px]",
    "translate-x-[1500px]",
    "translate-x-[1800px]",
    "-translate-x-[300px]",
    "-translate-x-[600px]",
    "-translate-x-[900px]",
    "-translate-x-[1200px]",
    "translate-x-[0px]",
    "translate-x-[300px]",
    "translate-x-[600px]",
    "translate-x-[1780px]",
    "translate-x-[2070px]",
    "-translate-x-[1160px]",
    "-translate-x-[870px]",
    "-translate-x-[580px]",
    "-translate-x-[290px]",
    "translate-x-[290px]",
    "translate-x-[1490px]",
    "-translate-x-[556px]",
    "-translate-x-[278px]",
    "translate-x-[1478px]",
    "translate-x-[1756px]",
    "translate-x-[2034px]",
    "-translate-x-[1390px]",
    "-translate-x-[1112px]",
    "-translate-x-[834px]",
  ];

  useEffect(() => {
    setLoading(true);
    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", () => setScreenWidth(window.innerWidth));
    setBestProducts([
      {
        image: "./Images/p3.png",
        name: "Felor 0",
        price: "220.00",
        volume: "100",
        id: 0,
      },
      {
        image: "./Images/p3.png",
        name: "Felor 1",
        price: "220.00",
        volume: "100",
        id: 1,
      },
      {
        image: "./Images/p3.png",
        name: "Felor 2",
        price: "220.00",
        volume: "100",
        id: 2,
      },
      {
        image: "./Images/p3.png",
        name: "Felor 3",
        price: "220.00",
        volume: "100",
        id: 3,
      },
      {
        image: "./Images/p3.png",
        name: "Felor 4",
        price: "220.00",
        volume: "100",
        id: 4,
      },
      {
        image: "./Images/p3.png",
        name: "Felor 5",
        price: "220.00",
        volume: "100",
        id: 5,
      },
      {
        image: "./Images/p3.png",
        name: "Felor 6",
        price: "220.00",
        volume: "100",
        id: 6,
      },
      {
        image: "./Images/p3.png",
        name: "Felor 7",
        price: "220.00",
        volume: "100",
        id: 7,
      },
      {
        image: "./Images/p3.png",
        name: "Felor 8",
        price: "220.00",
        volume: "100",
        id: 8,
      },
      {
        image: "./Images/p3.png",
        name: "Felor 9",
        price: "220.00",
        volume: "100",
        id: 9,
      },
    ]);
    setTimeout(() => setLoading(false), 3000);
  }, []);

  useEffect(() => {
    if (bestProducts.length !== 0) {
      if (screenWidth >= 1536) {
        setCardWidth(260);
        setSpace((1512 - 1040) / 3);
        setItemsArray(find4());
      } else if (screenWidth >= 1280) {
        setCardWidth(260);
        setSpace((1256 - 1040) / 3);
        setItemsArray(find4());
      } else if (screenWidth >= 1024) {
        setCardWidth(260);
        setSpace((1000 - 780) / 2);
        setItemsArray(find3());
      } else if (screenWidth >= 768) {
        setCardWidth(260);
        setSpace(744 - 520);
        setItemsArray(find2());
      } else if (screenWidth >= 640) {
        setCardWidth(260);
        setSpace(616 - 520);
        setItemsArray(find2());
      } else {
        setCardWidth(screenWidth - 24);
        setSpace(12);
        setItemsArray(find1());
      }
    }
  }, [currentPerfumeId, screenWidth]);

  function find4() {
    let counter = 0;
    let beforeItems = [
      currentPerfumeId - 1 >= 0
        ? currentPerfumeId - 1
        : ++counter && bestProducts.length - counter,
      currentPerfumeId - 2 >= 0
        ? currentPerfumeId - 2
        : ++counter && bestProducts.length - counter,
      currentPerfumeId - 3 >= 0
        ? currentPerfumeId - 3
        : ++counter && bestProducts.length - counter,
    ];

    let afterItems = [
      currentPerfumeId + 4 < bestProducts.length
        ? currentPerfumeId + 4
        : currentPerfumeId + 4 - bestProducts.length,
      currentPerfumeId + 5 < bestProducts.length
        ? currentPerfumeId + 5
        : currentPerfumeId + 5 - bestProducts.length,
      currentPerfumeId + 6 < bestProducts.length
        ? currentPerfumeId + 6
        : currentPerfumeId + 6 - bestProducts.length,
    ];

    let centerItems = [
      currentPerfumeId,
      currentPerfumeId + 1 < bestProducts.length
        ? currentPerfumeId + 1
        : currentPerfumeId + 1 - bestProducts.length,
      currentPerfumeId + 2 < bestProducts.length
        ? currentPerfumeId + 2
        : currentPerfumeId + 2 - bestProducts.length,
      currentPerfumeId + 3 < bestProducts.length
        ? currentPerfumeId + 3
        : currentPerfumeId + 3 - bestProducts.length,
    ];

    return [beforeItems, centerItems, afterItems];
  }

  function find3() {
    let counter = 0;
    let beforeItems = [
      currentPerfumeId - 1 >= 0
        ? currentPerfumeId - 1
        : ++counter && bestProducts.length - counter,
      currentPerfumeId - 2 >= 0
        ? currentPerfumeId - 2
        : ++counter && bestProducts.length - counter,
      currentPerfumeId - 3 >= 0
        ? currentPerfumeId - 3
        : ++counter && bestProducts.length - counter,
      currentPerfumeId - 4 >= 0
        ? currentPerfumeId - 4
        : ++counter && bestProducts.length - counter,
    ];

    let afterItems = [
      currentPerfumeId + 3 < bestProducts.length
        ? currentPerfumeId + 3
        : currentPerfumeId + 3 - bestProducts.length,
      currentPerfumeId + 4 < bestProducts.length
        ? currentPerfumeId + 4
        : currentPerfumeId + 4 - bestProducts.length,
      currentPerfumeId + 5 < bestProducts.length
        ? currentPerfumeId + 5
        : currentPerfumeId + 5 - bestProducts.length,
    ];

    let centerItems = [
      currentPerfumeId,
      currentPerfumeId + 1 < bestProducts.length
        ? currentPerfumeId + 1
        : currentPerfumeId + 1 - bestProducts.length,
      currentPerfumeId + 2 < bestProducts.length
        ? currentPerfumeId + 2
        : currentPerfumeId + 2 - bestProducts.length,
    ];

    return [beforeItems, centerItems, afterItems];
  }

  function find2() {
    let counter = 0;
    let beforeItems = [
      currentPerfumeId - 1 >= 0
        ? currentPerfumeId - 1
        : ++counter && bestProducts.length - counter,
      currentPerfumeId - 2 >= 0
        ? currentPerfumeId - 2
        : ++counter && bestProducts.length - counter,
      currentPerfumeId - 3 >= 0
        ? currentPerfumeId - 3
        : ++counter && bestProducts.length - counter,
      currentPerfumeId - 4 >= 0
        ? currentPerfumeId - 4
        : ++counter && bestProducts.length - counter,
    ];

    let afterItems = [
      currentPerfumeId + 2 < bestProducts.length
        ? currentPerfumeId + 2
        : currentPerfumeId + 2 - bestProducts.length,
      currentPerfumeId + 3 < bestProducts.length
        ? currentPerfumeId + 3
        : currentPerfumeId + 3 - bestProducts.length,
      currentPerfumeId + 4 < bestProducts.length
        ? currentPerfumeId + 4
        : currentPerfumeId + 4 - bestProducts.length,
      currentPerfumeId + 5 < bestProducts.length
        ? currentPerfumeId + 5
        : currentPerfumeId + 5 - bestProducts.length,
    ];

    let centerItems = [
      currentPerfumeId,
      currentPerfumeId + 1 < bestProducts.length
        ? currentPerfumeId + 1
        : currentPerfumeId + 1 - bestProducts.length,
    ];

    return [beforeItems, centerItems, afterItems];
  }

  function find1() {
    let counter = 0;
    let beforeItems = [
      currentPerfumeId - 1 >= 0
        ? currentPerfumeId - 1
        : ++counter && bestProducts.length - counter,
      currentPerfumeId - 2 >= 0
        ? currentPerfumeId - 2
        : ++counter && bestProducts.length - counter,
      currentPerfumeId - 3 >= 0
        ? currentPerfumeId - 3
        : ++counter && bestProducts.length - counter,
      currentPerfumeId - 4 >= 0
        ? currentPerfumeId - 4
        : ++counter && bestProducts.length - counter,
      currentPerfumeId - 5 >= 0
        ? currentPerfumeId - 5
        : ++counter && bestProducts.length - counter,
    ];

    let afterItems = [
      currentPerfumeId + 1 < bestProducts.length
        ? currentPerfumeId + 1
        : currentPerfumeId + 1 - bestProducts.length,
      currentPerfumeId + 2 < bestProducts.length
        ? currentPerfumeId + 2
        : currentPerfumeId + 2 - bestProducts.length,
      currentPerfumeId + 3 < bestProducts.length
        ? currentPerfumeId + 3
        : currentPerfumeId + 3 - bestProducts.length,
      currentPerfumeId + 4 < bestProducts.length
        ? currentPerfumeId + 4
        : currentPerfumeId + 4 - bestProducts.length,
    ];

    let centerItems = [currentPerfumeId];

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
        (itemsArray[1].length === 4
          ? 4 * cardWidth + 4 * space
          : itemsArray[1].length === 3
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
      <div className="flex items-center justify-center h-[442px] mx-auto w-full text-2xl">
        Loading
      </div>
    );
  }

  return (
    <div className="h-[442px] relative mx-auto w-full">
      <div className="overflow-hidden relative w-full h-full">
        {bestProducts.map((item, index) => (
          <ProductCard
            key={item.id}
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
            if (currentPerfumeId - 1 < 0) {
              setCurrentPerfumeId(bestProducts.length - 1);
            } else {
              setCurrentPerfumeId(currentPerfumeId - 1);
            }
          }}
        >
          <img src="./Images/Materials/left-arrow.svg" alt="left arrow" />
        </button>
        <button
          onClick={() => {
            if (currentPerfumeId + 1 > bestProducts.length - 1) {
              setCurrentPerfumeId(0);
            } else {
              setCurrentPerfumeId(currentPerfumeId + 1);
            }
          }}
        >
          <img src="./Images/Materials/right-arrow.svg" alt="right arrow" />
        </button>
      </div>
    </div>
  );
}
