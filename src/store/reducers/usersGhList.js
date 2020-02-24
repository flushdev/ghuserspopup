import { ActionUsers } from "../../constants/actions";

const initialState = {
  users: [],
  usersAdditional: [],
  error: null,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionUsers.USERS_DATA_FETCH:
      return Object.assign({}, state, { loading: true });
    case ActionUsers.USERS_LIST_DATA_RESOLVED:
      return Object.assign({}, state, { loading: true, users: [action.data] });
    case ActionUsers.USERS_LIST_DATA_REJECTED:
      return Object.assign({}, state, { loading: false, error: action.error });

    case ActionUsers.USERS_ADDITIONAL_DATA_RESOLVED:
      return Object.assign({}, state, { loading: false, usersAdditional: action.data });
    case ActionUsers.USERS_ADDITIONAL_DATA_REJECTED:
      return Object.assign({}, state, { loading: false, error: action.error });
    default:
      return state;
  }
};
