import { ActionUsers } from "../../constants/actions";

export const usersListFetching = () => ({
  type: ActionUsers.USERS_DATA_FETCH
});

export const usersListFetchingSuccess = data => ({
  type: ActionUsers.USERS_LIST_DATA_RESOLVED,
  data
});

export const usersListFetchingError = error => ({
  type: ActionUsers.USERS_LIST_DATA_REJECTED,
  error
});

export const usersAdditionalFetching = () => ({
  type: ActionUsers.USERS_ADDITIONAL_DATA_FETCH
});

export const usersAdditionalFetchingSuccess = data => ({
  type: ActionUsers.USERS_ADDITIONAL_DATA_RESOLVED,
  data
});

export const usersAdditionalFetchingError = error => ({
  type: ActionUsers.USERS_ADDITIONAL_DATA_REJECTED,
  error
});
