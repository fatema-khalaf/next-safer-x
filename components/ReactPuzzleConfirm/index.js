import React, { useState } from "react";
import styles from "../../styles/captcha/index.module.scss";

function ReactPuzzleConfirm({
  // onSuccess = () => console.log("success"),
  onFail = () => console.log("fail"),
  title = "Please fit the puzzle piece carefully",
  sliderTitle = "Slide to complete the puzzle",
  failMessage = "Error",
  successMessage = "Success",
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
  const [showModal, setShowModal] = useState(true);

  const handleAttempt = () => {
    if (value === randomValue) {
      setStatus("Success");
      setTimeout(() => onSuccess(), 1000);
    } else {
      setStatus("Failed");
      onFail();
    }
  };

  const onClose = () => {
    setShowModal(false);
  };
  const onSuccess = () => {
    setShowModal(false);
  };

  const isFailed = status === "Failed";
  const statusMessage = isFailed ? failMessage : successMessage;

  return (
    showModal && (
      <div className={styles["react-puzzle-confirm-modal"]}>
        <div onClick={onClose} style={{ width: "100%", height: "100%" }}></div>
        <div
          className={styles["react-puzzle-confirm"]}
          style={{ position: "absolute" }}
        >
          <h1 className={styles["react-puzzle-confirm-title"]}>{title}</h1>
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
            <div className={styles["react-puzzle-confirm-slider-note"]}>
              {sliderTitle}
            </div>
          </div>

          <div
            className={`${styles["react-puzzle-confirm-state"]} ${
              isFailed ? "react-puzzle-confirm-state--fail" : ""
            }`}
          >
            &nbsp; {status !== "Idle" && statusMessage}
          </div>

          <div className={styles["react-puzzle-confirm-button-group"]}>
            <button
              className={`${styles["react-puzzle-confirm-button"]} ${styles["react-puzzle-confirm-button--secondary"]}`}
              onClick={onClose}
            >
              {closeButtonLabel}
            </button>
            <button
              className={styles["react-puzzle-confirm-button"]}
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
