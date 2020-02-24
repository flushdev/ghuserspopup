import React from "react";
import styles from "./users.module.css";

const UserFirstLastName = ({ name, style }) => {
  return style ? (
    <span className={style.user_card__name}>
      <p className={style.popup_firstname}>
        First name:
        {name ? <span className={style.user_text__info}> {name?.split(" ")[0]}</span> : " empty"}
      </p>
      <p className={style.popup_lastname}>
        Last name:
        {name && name.split(" ").length > 1 ? (
          <span className={style.user_text__info}> {name?.split(" ")[1]}</span>
        ) : (
          " empty"
        )}
      </p>
    </span>
  ) : (
    <span className={styles.user_card__name}>
      <p className={styles.user_text__placehold}>
        First name:
        {name ? <span className={styles.user_text__info}> {name?.split(" ")[0]}</span> : " empty"}
      </p>
      <p className={styles.user_text__placehold}>
        Last name:
        {name && name.split(" ").length > 1 ? (
          <span className={styles.user_text__info}> {name?.split(" ")[1]}</span>
        ) : (
          " empty"
        )}
      </p>
    </span>
  );
};

export default UserFirstLastName;
