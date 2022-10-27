import ApiService from 'services/Api';
import Cookies from 'js-cookie';

const isLoggedIn = () => {

  try {
    const res = Cookies.get('RTVCPLAYUSERT');
    const resJSON = res ? JSON.parse(res) : null;
  
    ApiService.resetAccessToken();
    ApiService.setAccessToken(resJSON.access_token);
    return true;
  } catch (error) {
    ApiService.resetAccessToken();
    return false;
  }
};

export default {
  isLoggedIn,
};