import React from "react";
import styles from "./loader.module.css";

const Loader = ({ data }) => {
  return data ? (
    <div className={`${styles.preloader__users} ${styles.preloader__users__additional}`}>
      <h1>Loading users profile data...</h1>
    </div>
  ) : (
    <div className={styles.preloader__users}>
      <h1>Loading list of GitHub users...</h1>
    </div>
  );
};

export default Loader;
