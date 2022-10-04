import { useEffect, useState } from "react";
import Slide from "./slide";
import styles from "../../styles/theme/main.module.scss";
import { HiArrowUp } from "react-icons/hi";
import { HiArrowDown } from "react-icons/hi";

const Slider = ({ locale, slides }) => {
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
    }, 8000);
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
              alt={item.altImg[locale]}
              title={item.title[locale]}
              hint={item.hint[locale]}
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
