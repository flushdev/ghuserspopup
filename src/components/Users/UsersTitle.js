import React from "react";
import styles from "./users.module.css";

const UsersTitle = ({ total, successed }) => {
  return (
    <h2 className={styles.card_list__title}>
      Total users fetch: {total} | Fetched success: {successed}
    </h2>
  );
};

export default UsersTitle;
