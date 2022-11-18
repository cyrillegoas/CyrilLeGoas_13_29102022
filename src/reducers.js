import { combineReducers } from 'redux';
import { LOGIN, LOGOUT, UPDATEUSERNAME } from './actions';

const initialState = {
  user: {
    firstName: '',
    lastName: '',
    jwt: '',
    isloggedIn: false,
  },
  account: {
    ids: [],
  },
};

const userReducer = (user = initialState.user, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...user, jwt: action.payload, isloggedIn: true };
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

const accountReducer = (state) => state;

export const reducer = combineReducers({
  user: userReducer,
  account: accountReducer,
});
