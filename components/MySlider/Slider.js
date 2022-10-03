import { useEffect, useState } from "react";
import Slide from "./slide";
import styles from "../../styles/theme/main.module.scss";
import { HiArrowUp } from "react-icons/hi";
import { HiArrowDown } from "react-icons/hi";

const slides = [
  {
    image: "/images/slide1.jpg",
    title: "TRADE WITH SAFER-X",
    subtitle: "Buy, trade, and hold 350+ cryptocurrencies on Binance",
  },
  {
    image: "/images/slide7.jpg",
    title: "TRADE WITH SAFER-X",
    subtitle:
      "The collectibles industry has been around for a long time, and items such as baseball cards, stamps, and sneakers have long held value to collectors all over the world. But challenges like restricted access, the risk of forgery, and physical damage are common obstacles for many collectors.",
  },
  {
    image: "/images/slide3.webp",
    title: "TRADE WITH SAFER-X",
    subtitle: "Buy, trade, and hold 350+ cryptocurrencies on Binance",
  },
  {
    image: "/images/slide8.jpg",
    title: "TRADE WITH SAFER-X",
    subtitle: "Buy, trade, and hold 350+ cryptocurrencies on Binance",
  },
];
const Slider = () => {
  const [current, setCurrent] = useState(0);
  let timer;
  const goToSlide = (slideIndex) => {
    setCurrent(slideIndex);
  };
  useEffect(() => {
    autoSlide();
  }, [current]);

  const autoSlide = () => {
    timer = setTimeout(() => {
      setCurrent((prev) => (prev !== slides.length - 1 ? prev + 1 : 0));
    }, 4000);
  };
  return (
    <div style={{ position: "relative" }}>
      <div className={styles["carsoule--holder"]}>
        <div
          className={styles["slides--container"]}
          style={{
            transform: `translateY(-${current * 100}%)`,
          }}
        >
          {slides.map((item, index) => (
            <Slide
              key={index}
              image={item.image}
              title={item.title}
              subTitle={item.subtitle}
              current={current}
              index={index}
            />
          ))}
        </div>
      </div>
      <div className={styles["slider--controlles--container"]}>
        <div className={styles["slider--controlles"]}>
          <div
            className={styles["slider--controlles--icons"]}
            onClick={() => {
              setCurrent((prev) => (prev !== slides.length - 1 ? prev + 1 : 0));
              clearTimeout(timer);
            }}
          >
            <HiArrowUp />
          </div>
          {slides.map((item, index) => (
            <div
              style={{
                paddingLeft: current === index && "1rem",
                width: "100%",
              }}
            >
              <div
                key={index}
                style={{ marginBottom: "1rem!important" }}
                onClick={() => goToSlide(index)}
                className={`${styles["slider--controlles--numbers"]} ${
                  current === index &&
                  styles["slider--controlles--numbers__active"]
                }`}
              >
                {index + 1}
              </div>
            </div>
          ))}
          <div
            className={styles["slider--controlles--icons"]}
            style={{ marginTop: "1rem!important" }}
            onClick={() => {
              setCurrent((prev) => (prev !== 0 ? prev - 1 : slides.length - 1));
              clearTimeout(timer);
            }}
          >
            <HiArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Slider;
