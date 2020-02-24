import React, { useState } from "react";
import styles from "./users.module.css";
import Popup from "../Popup/Popup";

const UserAvatar = ({ avatar, user }) => {
  const [popup, setPopup] = useState(false);
  const handleShowPopup = value => {
    setPopup(value);
  };
  return (
    <div
      className={styles.img_popup__container}
      onMouseOver={() => handleShowPopup(true)}
      onMouseOut={() => handleShowPopup(false)}
    >
      <img src={avatar} alt="avatar" />
      <Popup {...user} popup={popup} />
    </div>
  );
};

export default UserAvatar;
