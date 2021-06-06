import axios from 'axios';
import { getUserInfo } from '@utils/userInfo';

const noop = () => {};

const { mid } = getUserInfo();

const instance = axios.create({
  headers: { 
    'x-dod-mid': mid || 2,
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
 * @param {Function} failClbk 
 */
export async function axiosLoader(url = '', data = {}, successClbk = noop, failClbk = noop) {
  const { type = 'get', params = {} } = data;
  try {
    const response = await method[type](url, params);
    // success callback
    successClbk(response);
  } catch (error) {
    // fail callback
    failClbk(error);
  }
}
