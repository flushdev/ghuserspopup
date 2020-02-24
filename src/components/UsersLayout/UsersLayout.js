import React, { useEffect } from "react";
import { connect } from "react-redux";
import { usersListFetching } from "../../store/actions/users";

import styles from "./usersLayout.module.css";

const UsersLayout = props => {
  useEffect(() => {
    props.fetchGithubUsers();
  }, [props]);

  return <div className={styles.users_card__layout}>{props.children}</div>;
};

const mapDispatchToProps = dispatch => ({
  fetchGithubUsers: () => dispatch(usersListFetching())
});

export default connect(
  null,
  mapDispatchToProps
)(UsersLayout);
