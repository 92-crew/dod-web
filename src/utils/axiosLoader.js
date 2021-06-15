import axios from 'axios';
import { getUserInfo } from '@utils/userInfo';

const noop = () => {};

const userInfo = getUserInfo();

const instance = axios.create({
  headers: { 
    'x-dod-mid': userInfo && userInfo.id ? userInfo.id : '',
  },
  timeout: 3000,
});

const method = {
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
}

/**
 * axios loader
 * @param {string} url 
 * @param {Object} data 
 * @param {Function} successClbk 
 * @param {Function} errorClbk 
 */
export async function axiosLoader(url = '', data = {}, successClbk = noop, errorClbk = noop) {
  const { type = 'get', params = {} } = data;
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