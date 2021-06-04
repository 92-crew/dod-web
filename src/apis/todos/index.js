import { axiosLoader } from '@utils/axiosLoader';

const API_LIST = {
  TODOS: '/api/content/v1/todos',
}

const noop = () => {};

/**
 * todo 리스트 전체 조회
 * @param {Function} successClbk success callback
 * @param {Function} errorClbk error callback
 */
export function getTodoList(successClbk = noop, errorClbk = noop) {
  axiosLoader(API_LIST.TODOS, {}, successClbk, errorClbk);
}

/**
 * todo 리스트 조회
 * @param {number} id 단일 데이터 id
 * @param {Function} successClbk success callback
 * @param {Function} errorClbk error callback
 */
export function getTodoData(id, successClbk = noop, errorClbk = noop) {
  axiosLoader(`${API_LIST.TODOS}/${id}`, {}, successClbk, errorClbk);
}

/**
 * todo 리스트 조회
 * @param {Object} params param data
 * @param {Function} successClbk success callback
 * @param {Function} errorClbk error callback
 */
export function addTodoData(params, successClbk = noop, errorClbk = noop) {
  axiosLoader(API_LIST.TODOS, {
    type: 'post',
    params,
  }, successClbk, errorClbk);

}

/**
 * todo 리스트 조회
 * @param {number} id 단일 데이터 id
 * @param {Object} params param data
 * @param {Function} successClbk success callback
 * @param {Function} errorClbk error callback
 */
export function modifyTodoData(id, params, successClbk = noop, errorClbk = noop) {
  axiosLoader(`${API_LIST.TODOS}/${id}`, {
    type: 'put',
    params,
  }, successClbk, errorClbk);

}

/**
 * todo 리스트 조회
 * @param {number} id 단일 데이터 id
 * @param {Function} successClbk success callback
 * @param {Function} errorClbk error callback
 */
export function removeTodoData(id, successClbk = noop, errorClbk = noop) {
  axiosLoader(`${API_LIST.TODOS}/${id}`, {
    type: 'delete',
  }, successClbk, errorClbk);
}
