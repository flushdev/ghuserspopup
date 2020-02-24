import React from "react";
import styles from "./users.module.css";

const UserErrors = ({ errors }) => {
  return (
    <>
      <h2 className={styles.errors__title}>Errors:</h2>
      {errors.map(error => (
        <div key={error.path} className={styles.user_card__error}>
          {error.message}
        </div>
      ))}
    </>
  );
};

export default UserErrors;
