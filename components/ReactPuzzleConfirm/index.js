import React, { useState } from "react";
import styles from "../../styles/captcha/index.module.scss";
import mains from "../../styles/theme/main.module.scss";

function ReactPuzzleConfirm({
  onClose = () => console.log("close"),
  onSuccess = () => console.log("success"),
  showPuzzle,
  onFail = () => console.log("fail"),
  title = "Please fit the puzzle piece carefully",
  sliderTitle = "Slide to complete the puzzle",
  failMessage = "Confirmation failed",
  successMessage = "Confirmation passed",
  closeButtonLabel = "Close",
  refrefButtonLabel = "Refresh",
  disableRefreshIdleState = true,
}) {
  const minValue = 6;
  const maxValue = 36;
  const multiplier = 5;
  const randomValueCreator = () => {
    const min = Math.ceil(minValue);
    const max = Math.floor(maxValue);
    const randomIntegerInclusive =
      Math.floor(Math.random() * (max - min + 1)) + min;

    return randomIntegerInclusive;
  };
  const [value, setValue] = useState(0);
  const [status, setStatus] = useState("Idle");
  const [randomValue, setRandomValue] = useState(randomValueCreator());
  // const [showModal, setShowModal] = useState(true);

  const handleAttempt = () => {
    if (value === randomValue) {
      setStatus("Success");
      setTimeout(() => onSuccess(), 1000);
    } else {
      setStatus("Failed");
      onFail();
    }
  };

  // const onClose = () => {
  //   setShowModal(false);
  // };
  // const onSuccess = () => {
  //   setShowModal(false);
  // };

  const isFailed = status === "Failed";
  const statusMessage = isFailed ? failMessage : successMessage;

  return (
    showPuzzle && (
      <div className={styles["react-puzzle-confirm-modal"]}>
        <div onClick={onClose} style={{ width: "100%", height: "100%" }}></div>
        <div className={styles["react-puzzle-confirm"]}>
          <h1
            className={mains.h5}
            style={{ fontSize: "1.8rem", marginBottom: "1.4rem" }}
          >
            {title}
          </h1>
          <div className={styles["react-puzzle-confirm-body"]}>
            <div className={styles["react-puzzle-confirm-puzzle-wrapper"]}>
              <div className={styles["react-puzzle-confirm-puzzle"]}>
                <div
                  className={`${styles["react-puzzle-confirm-flash"]} ${
                    status === "Success" ? styles["flash--me"] : ""
                  }`}
                />
                <div
                  className={
                    styles["react-puzzle-confirm-puzzle-missing-piece"]
                  }
                  style={{
                    left: `${value * multiplier}px`,
                  }}
                >
                  <div
                    className={
                      styles["react-puzzle-confirm-puzzle-missing-piece-main"]
                    }
                    style={{
                      backgroundPositionX: -randomValue * multiplier - 1 / 2,
                    }}
                  />
                  <div
                    className={
                      styles["react-puzzle-confirm-puzzle-missing-piece-left"]
                    }
                  />
                  <div
                    className={
                      styles["react-puzzle-confirm-puzzle-missing-piece-right"]
                    }
                  />
                  <div
                    className={
                      styles["react-puzzle-confirm-puzzle-missing-piece-circle"]
                    }
                  />
                </div>
                <div
                  className={`${styles["react-puzzle-confirm-puzzle-missing-piece"]} ${styles["missing-piece-placeholder"]} `}
                  style={{ left: `${randomValue * multiplier}px` }}
                />
              </div>
            </div>
            <input
              disabled={isFailed}
              type="range"
              className={`${
                isFailed ? styles["react-puzzle-confirm-slider-disabled"] : ""
              } ${styles["typeRange"]}`}
              onMouseUp={handleAttempt}
              onTouchEnd={handleAttempt}
              name="points"
              value={value}
              onChange={(event) => {
                event.persist();
                const selectedValue = event.target.value;
                !isNaN(selectedValue) && setValue(parseInt(selectedValue));
              }}
              min="0"
              max={maxValue}
            />
            <div className={mains.caption} style={{ padding: "0.5rem 0" }}>
              {sliderTitle}
            </div>
          </div>

          <div
            className={mains.caption}
            style={{ color: isFailed ? "red" : "green" }}
            // className={`${styles["react-puzzle-confirm-state"]} ${
            //   isFailed ? "react-puzzle-confirm-state--fail" : ""
            // }`}
          >
            &nbsp; {status !== "Idle" && statusMessage}
          </div>

          <div className={styles["react-puzzle-confirm-button-group"]}>
            <button
              className={mains["btn--danger--out--line"]}
              onClick={onClose}
            >
              {closeButtonLabel}
            </button>
            <button
              className={mains["btn"]}
              disabled={!isFailed && disableRefreshIdleState}
              onClick={() => {
                setRandomValue(randomValueCreator());
                setValue(0);
                setStatus("Idle");
              }}
            >
              {refrefButtonLabel}
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default ReactPuzzleConfirm;
