import { setUser } from 'redux/actions/user';
import ApiService from './Api';

const getMe = async () => {
  const res = await ApiService.get(`oauth/me`);
  return res;
};

const update = async (id, data) => {
  const res = await ApiService.patch(`user/${id}?_format=json`, data);
  return res;
};

const resetInteractive = async (id, defaultData) => {
  const res = await ApiService.patch(`user/${id}?_format=json`, {
    field_ec2_interactive_data_json: {
      value: JSON.stringify(defaultData),
    },
    field_ec2_interactive_score: {
      value: 0
    }
  });
  return res;
};

export default {
  getMe,
  update,
  resetInteractive
};
