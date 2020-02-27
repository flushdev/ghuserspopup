import React from "react";
import styles from "./users.module.css";

const UserGitHubName = ({ login, style }) => {
  return style ? (
    <span className={style.popup_card__login}>
      <p className={style.popup_text__placehold}>GitHub nickname</p>
      <p className={style.popup_text__info}>{login}</p>
    </span>
  ) : (
    <span className={styles.user_card__login}>
      <p className={styles.user_text__placehold}>GitHub nickname</p>
      <p className={styles.user_text__info}>{login}</p>
    </span>
  );
};

export default UserGitHubName;
