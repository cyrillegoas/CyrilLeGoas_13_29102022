export const LOGIN = 'LOGIN';
export const login = (token) => ({ type: LOGIN, payload: token });

export const LOGOUT = 'LOGOUT';
export const logout = () => ({ type: LOGOUT });

export const UPDATEUSERNAME = 'UPDATEUSERNAME';
export const updateUserName = (firstName, lastName) => ({
  type: UPDATEUSERNAME,
  payload: { firstName, lastName },
});
