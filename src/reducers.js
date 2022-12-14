import { combineReducers } from 'redux';
import { LOGIN, LOGOUT, UPDATEUSERNAME } from './actions';

const initialState = {
  user: {
    firstName: '',
    lastName: '',
    jwt: '',
    isLoggedIn: false,
  },
  account: {
    ids: [],
  },
};

const userReducer = (user = initialState.user, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...user, jwt: action.payload, isLoggedIn: true };
    case LOGOUT:
      return { ...initialState.user };
    case UPDATEUSERNAME:
      return {
        ...user,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      };
    default:
      return user;
  }
};

const accountReducer = (account = initialState.account) => account;

export const reducer = combineReducers({
  user: userReducer,
  account: accountReducer,
});
