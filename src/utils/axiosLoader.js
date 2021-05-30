import axios from 'axios';

const noop = () => {};

const method = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
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
