import React, { useState } from "react";
import styles from "../../styles/confirmation_window/main.module.scss";
import mains from "../../styles/theme/main.module.scss";
import { IoCloseOutline } from "react-icons/io5";

function ConfirmContainer({
  onConfirm = () => console.log("confirmed"),
  onClose = () => console.log("confirmed"),
  showConfirmation,
  message = "Are you sure you want to delete?",
  caption = "This action can not be reversed!",
}) {
  //   const [showModal, setShowModal] = useState(true);
  //   const [confirmed, setConfirmed] = useState(false);

  //   const onClose = () => {
  //     setShowModal(false);
  //   };
  //   const onConfirm = () => {
  //     setConfirmed(true);
  //     setShowModal(false);
  //   };

  return (
    showConfirmation && (
      <div className={styles.confirm_container}>
        <div onClick={onClose} style={{ width: "100%", height: "100%" }}></div>
        <div className={styles.confirm__content}>
          <div className={styles.icon} onClick={onClose}>
            <IoCloseOutline />
          </div>
          <h3 className={mains.h5}>{message}</h3>
          <p className={mains.caption}>{caption}</p>
          <div className={styles.confirm__content__btn}>
            <button className={mains["btn--out--line"]} onClick={onConfirm}>
              confirm
            </button>
            <button
              className={mains["btn--danger--out--line"]}
              onClick={onClose}
            >
              cancel
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default ConfirmContainer;
