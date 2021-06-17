import axios from 'axios';
import { getUserInfo } from '@utils/userInfo';

const noop = () => {};

const instance = axios.create({
  timeout: 3000,
});

const method = {
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
}

const setHeader = () => {
  const userInfo = getUserInfo();

  instance.defaults.headers.common['x-dod-mid'] = userInfo && userInfo.id ? userInfo.id : '';
};

/**
 * axios loader
 * @param {string} url 
 * @param {Object} data 
 * @param {Function} successClbk 
 * @param {Function} errorClbk 
 */
export async function axiosLoader(url = '', data = {}, successClbk = noop, errorClbk = noop) {
  const { type = 'get', params = {} } = data;

  // axios header setting
  setHeader();

  try {
    const response = await method[type](url, params);
    // success callback
    successClbk(response);
  } catch (error) {
    // fail callback
    errorClbk(getResError(error));
  }
}

function getResError (err) {
  return err.response && err.response.data || {};
}