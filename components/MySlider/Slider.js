import { useEffect, useState } from "react";
import Slide from "./slide";
import styles from "../../styles/theme/main.module.scss";

const Slider = () => {
  const [current, setCurrent] = useState(0);
  console.log(current);
  let timer;
  const goToSlide = (slideIndex) => {
    setCurrent(slideIndex);
  };
  useEffect(() => {
    autoSlide();
  }, [current]);

  const autoSlide = () => {
    timer = setTimeout(() => {
      setCurrent((prev) => (prev !== 2 ? prev + 1 : 0));
    }, 4000);
  };
  return (
    <div>
      <div
        className={styles["carsoule--holder"]}
        // style={{
        //   width: "90vw",
        //   height: "600px",
        //   display: "flex",
        //   overflow: "hidden",
        //   margin: "0 auto",
        // }}
      >
        <div
          className={styles["slides--container"]}
          style={{
            transform: `translateY(-${current * 100}%)`,
          }}
        >
          <Slide
            image="/images/slide1.jpg"
            title="TRADE WITH SAFER-X"
            subTitle="Buy, trade, and hold 350+ cryptocurrencies on Binance"
          />
          <Slide
            image="/images/slide2.jpg"
            title="TRADE WITH SAFER-X"
            subTitle="Buy, trade, and hold 350+ cryptocurrencies on Binance"
          />
          <Slide
            image="/images/slide3.webp"
            title="TRADE WITH SAFER-X"
            subTitle="Buy, trade, and hold 350+ cryptocurrencies on Binance"
          />
          {/* <div
            style={{ width: "50px", height: "50px", backgroundColor: "red" }}
          >
            1
          </div>
          <div
            style={{ width: "50px", height: "50px", backgroundColor: "green" }}
          >
            2
          </div>
          <div
            style={{ width: "50px", height: "50px", backgroundColor: "blue" }}
          >
            3
          </div> */}
        </div>
      </div>
      <button
        onClick={() => {
          setCurrent((prev) => (prev !== 2 ? prev + 1 : 0));
          clearTimeout(timer);
        }}
      >
        next
      </button>
      <button
        onClick={() => {
          setCurrent((prev) => (prev !== 0 ? prev - 1 : 2));
          clearTimeout(timer);
        }}
      >
        back
      </button>
      <div key={0} onClick={() => goToSlide(0)}>
        ●
      </div>
      <div key={1} onClick={() => goToSlide(1)}>
        ●
      </div>
      <div key={2} onClick={() => goToSlide(2)}>
        ●
      </div>
    </div>
  );
};
export default Slider;
