import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styles from "./users.module.css";
import UserAvatar from "./UserAvatar";
import UserFirstLastName from "./UserFirstLastName";
import UserGitHubName from "./UserGitHubName";
import Loader from "../Loader/Loader";
import UsersTitle from "./UsersTitle";
import UserErrors from "./UsersErrors";

const Users = ({ data, additional }) => {
  const [usersData, setUsersData] = useState(null);
  useEffect(() => {
    const forMap = additional && {
      users: additional[0]?.filter(user => user),
      errors: additional[1]
    };
    additional && setUsersData(forMap);
  }, [data, additional]);

  return usersData?.users ? (
    <>
      <UsersTitle total={additional[0].length} successed={usersData.users.length} />
      {usersData?.errors && <UserErrors errors={usersData.errors} />}
      {usersData?.users?.map(user => (
        <div key={user.id} className={styles.user_card}>
          <span className={styles.user_card__main}>
            <UserAvatar avatar={user.avatarUrl} user={user} />
            <UserFirstLastName name={user.name} />
          </span>
          <UserGitHubName login={user.login} />
        </div>
      ))}
    </>
  ) : (
    <Loader data={data.length} />
  );
};

const mapStateToProps = state => ({
  data: state.usersGhList.users,
  additional: state.usersGhList.usersAdditional
});

export default connect(mapStateToProps)(Users);
