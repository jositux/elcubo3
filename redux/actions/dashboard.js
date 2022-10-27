export const SET_USERS_RANKING = 'set_users_ranking';
export const SET_CONFESSIONAL_DATA = 'set_confessional_data';

export const setUsersRanking = (payload) => {
  return { type: SET_USERS_RANKING, payload };
};

export const setConfessionalData = (payload) => {
  return { type: SET_CONFESSIONAL_DATA, payload };
};