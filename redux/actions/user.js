export const SET_CURRENT_USER = 'set_current_user';

export const setUser = (user) => {
  return { type: SET_CURRENT_USER, payload: { user } };
};