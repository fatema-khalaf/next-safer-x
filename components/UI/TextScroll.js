import { useEffect, useRef, useState } from "react";
import styles from "../../styles/theme/main.module.scss";
import React from "react";

const TextScroll = () => {
  const ref = useRef(null);
  //   const [width, setWidth] = useState();
  //   const [height, setHeight] = useState();

  //   // This function calculates width and height of the list
  //   const getListSize = () => {
  //     const newWidth = ref.current.clientWidth;
  //     setWidth(newWidth);

  //     const newHeight = ref.current.clientHeight;
  //     setHeight(ref.current.clientHeight);

  //     console.log(newWidth, newHeight);
  //   };

  // Get 'width' and 'height' after the initial render and every time the list changes
  //   useEffect(() => {
  //     getListSize();
  //     // console.log(height);
  //   }, []);

  //   useEffect(() => {
  //     window.addEventListener("resize", getListSize);
  //     // console.log(height);
  //   }, []);

  // useEffect(() => {
  //   React.cloneElement(ref.current, null, null); //third parameter is null
  //   console.log(React.cloneElement(ref.current, null, null));
  // }, []);

  return (
    <div className={styles["scroller--section"]}>
      <div className={styles["text--scroll"]}>
        <p className={`${styles["marquee"]} ${styles["body-2"]}`}>
          <span className={styles["marquee__span"]} ref={ref}>
            Bitcoin <span style={{ color: "red" }}>-5.58%</span> &nbsp; &nbsp;
            &nbsp; Bitcoin <span style={{ color: "red" }}>-5.58%</span> &nbsp;
            Bitcoin
            <span style={{ color: "red" }}>-5.58%</span> &nbsp; &nbsp; &nbsp;
            Bitcoin <span style={{ color: "red" }}>-5.58%</span> &nbsp; &nbsp;
            &nbsp; Bitcoin <span style={{ color: "red" }}>-5.58%</span> &nbsp;
            &nbsp; &nbsp; Bitcoin <span style={{ color: "red" }}>-5.58%</span>{" "}
            &nbsp; &nbsp; &nbsp; Bitcoin{" "}
            <span style={{ color: "red" }}>-5.58%</span> &nbsp; &nbsp; &nbsp;
            Galxe <span style={{ color: "green" }}>+3,43%</span> &nbsp; &nbsp;
            &nbsp; Bitcoin <span style={{ color: "red" }}>-5.58%</span> &nbsp;
            &nbsp; &nbsp; Galxe <span style={{ color: "green" }}>+3,43%</span>{" "}
            &nbsp; &nbsp; &nbsp;Galxe{" "}
            <span style={{ color: "green" }}>+3,43%</span> &nbsp; &nbsp;
            &nbsp;Galxe <span style={{ color: "green" }}>+3,43%</span> &nbsp;
            &nbsp; &nbsp;Galxe <span style={{ color: "green" }}>+3,43%</span>{" "}
            &nbsp; &nbsp; &nbsp;Galxe{" "}
            <span style={{ color: "green" }}>+3,43%</span> &nbsp; &nbsp;
            &nbsp;Galxe <span style={{ color: "green" }}>+3,43%</span> &nbsp;
            &nbsp; &nbsp;Galxe <span style={{ color: "green" }}>+3,43%</span>{" "}
            &nbsp; &nbsp; &nbsp;Galxe{" "}
            <span style={{ color: "green" }}>+3,43%</span> &nbsp; &nbsp;
            &nbsp;Galxe <span style={{ color: "green" }}>+3,43%</span> &nbsp;
            &nbsp; &nbsp;
          </span>
        </p>
        {/* <p className={`${styles["marquee"]} ${styles["marquee2"]}`}>
        <span className={styles["marquee__span"]}>
          This is text - This is text - This is text - This is text - This is
          text - This is text - This is text - This is text - This is text -
          This is text - This is text - This is text -&nbsp; This is text - This
          is text - This is text - This is text - This is text - This is text -
          This is text - This is text - This is text - This is text - This is
          text - This is text -&nbsp; This is text - This is text - This is text
          - This is text - This is text - This is text - This is text - This is
          text - This is text - This is text - This is text - This is text
          -&nbsp;
        </span>
      </p> */}
      </div>
    </div>
  );
};
export default TextScroll;
