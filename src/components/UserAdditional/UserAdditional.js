import React, { useState, useEffect } from "react";
import styles from "../Popup/popup.module.css";

const UserAdditional = props => {
  const [additional, setAdditional] = useState(props);
  useEffect(() => {
    setAdditional(props);
  }, [props]);
  const fields = {
    email: `Email: `,
    createdAt: `Created at: `,
    company: `Company: `,
    bio: `Bio: `,
    followers: `Followers: `,
    following: `Following: `,
    websiteUrl: `Website URL: `
  };
  return Object.keys(fields).map(field => (
    <p key={field + additional.id} className={props.style.additional_user}>
      {fields[field]}
      {additional[field] ? (
        <span>{additional[field]?.totalCount ?? additional[field]}</span>
      ) : (
        "empty"
      )}
    </p>
  ));
};

export default UserAdditional;
