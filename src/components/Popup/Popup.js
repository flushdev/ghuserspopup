import React, { useState, useEffect } from "react";
import styles from "./popup.module.css";
import UserFirstLastName from "../Users/UserFirstLastName";
import UserGitHubName from "../Users/UserGitHubName";

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
        className={`${styles.popup__wrapper} ${props.popup && `${styles.popup__wrapper__active}`}`}
      >
        <div className={styles.popup__row}>
          <UserFirstLastName name={props.name} style={styles} />
          <UserGitHubName login={props.login} style={styles} />
        </div>
        <p className={styles.additional_user}>
          Email: {props.email ? <span> {props.email}</span> : " empty"}
        </p>
        <p className={styles.additional_user}>
          Created at: <span> {props.createdAt}</span>
        </p>
        <p className={styles.additional_user}>
          Company:
          {props.company ? <span> {props.company}</span> : " empty"}
        </p>
        <p className={styles.additional_user}>
          Bio:
          {props.bio ? <span> {props.bio}</span> : " empty"}
        </p>
        <p className={styles.additional_user}>
          Followers:
          {props.followers.totalCount ? <span> {props.followers.totalCount}</span> : " empty"}
        </p>
        <p className={styles.additional_user}>
          Following:
          {props.following.totalCount ? <span> {props.following.totalCount}</span> : " empty"}
        </p>
        <p className={styles.additional_user}>
          Website:
          {props.websiteUrl ? (
            <span>
              <a href={props.websiteUrl}> {props.websiteUrl}</a>
            </span>
          ) : (
            " empty"
          )}
        </p>
      </div>
    )
  );
};

export default Popup;
