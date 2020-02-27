import React, { useState, useEffect } from "react";
import styles from "./popup.module.css";
import UserFirstLastName from "../Users/UserFirstLastName";
import UserGitHubName from "../Users/UserGitHubName";
import UserAdditional from "../UserAdditional/UserAdditional";

const Popup = props => {
  const [displayPopup, setDisplayPopup] = useState(false);
  useEffect(() => {
    props.popup && setDisplayPopup(props.popup);
    const timeout = setTimeout(() => !props.popup && setDisplayPopup(false), 2000);
    return () => clearTimeout(timeout);
  }, [props]);

  return (
    displayPopup && (
      <div
        className={`${styles.popup__wrapper} ${props.popup ? styles.popup__wrapper__active : null}`}
      >
        {/*<div className={styles.popup__row}>*/}
        {/*  <UserFirstLastName name={props.name} style={styles} />*/}
        {/*  <UserGitHubName login={props.login} style={styles} />*/}
        {/*</div>*/}
        <UserAdditional {...props} style={styles} />
      </div>
    )
  );
};

export default Popup;
