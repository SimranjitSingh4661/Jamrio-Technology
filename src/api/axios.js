import Axios from 'axios';
import Config from 'react-native-config';
import {ERROR_MESSAGES} from '../constants/string';
import {NavigationService} from '../services';
import {CommonActions} from '@react-navigation/native';

const defaultOptions = () => {
  return {
    headers: {
      'Accept': 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'Content-Type': 'application/json',
      'Accept-Type': 'application/json',
      // Authorization: "",
    },
  };
};

export const APIClient = () => {
  const axios = Axios.create({
    baseURL: Config.API_HOST,
    ...defaultOptions(),
  });
  axios.interceptors.response.use(
    response => response,
    err => {
      console.log(
        '[AXIOS ERROR INTECEPTOR]',
        err.response?.data?.message || err?.message,
      );
      if (err?.response?.data?.code === 401 || err?.response?.status === 401) {
        const resetAction = CommonActions.reset({
          index: 0,
          key: null,
          routes: [{name: 'error404Screen'}],
        });
        NavigationService?.getNavigator()?.dispatch(resetAction);
        return;
      }
      if (err?.response?.data?.code === 502) {
        throw {
          err,
          errorMessage: ERROR_MESSAGES.SOMETHING_WENT_WRONG,
        };
      }
      throw {
        err,
        errorMessage: ERROR_MESSAGES.SOMETHING_WENT_WRONG,
      };
    },
  );
  return axios;
};
