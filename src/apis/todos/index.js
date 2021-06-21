import { axiosLoader } from '@utils/axiosLoader';

const API_LIST = {
  TODO: '/api/v1/content/todo',
}

const noop = () => {};

/**
 * todo 리스트 전체 조회
 * @param {Function} successClbk success callback
 * @param {Function} errorClbk error callback
 */
export function getTodoList(successClbk = noop, errorClbk = noop) {
  axiosLoader(`${API_LIST.TODO}s`, {}, successClbk, errorClbk);
}

/**
 * todo 아이템 조회
 * @param {number} id 단일 데이터 id
 * @param {Function} successClbk success callback
 * @param {Function} errorClbk error callback
 */
export function getTodoItem(id, successClbk = noop, errorClbk = noop) {
  axiosLoader(`${API_LIST.TODO}/${id}`, {}, successClbk, errorClbk);
}

/**
 * todo 아이템 추가
 * @param {Object} params param data
 * @param {Function} successClbk success callback
 * @param {Function} errorClbk error callback
 */
export function addTodoItem(params, successClbk = noop, errorClbk = noop) {
  axiosLoader(API_LIST.TODO, {
    type: 'post',
    params,
  }, successClbk, errorClbk);

}

/**
 * todo 아이템 수정
 * @param {Object} params param data
 * @param {Function} successClbk success callback
 * @param {Function} errorClbk error callback
 */
export function modifyTodoItem(params, successClbk = noop, errorClbk = noop) {
  axiosLoader(API_LIST.TODO, {
    type: 'put',
    params,
  }, successClbk, errorClbk);

}

/**
 * todo 아이템 제거
 * @param {number} id 단일 데이터 id
 * @param {Function} successClbk success callback
 * @param {Function} errorClbk error callback
 */
export function removeTodoItem(id, successClbk = noop, errorClbk = noop) {
  axiosLoader(`${API_LIST.TODO}/${id}`, {
    type: 'delete',
  }, successClbk, errorClbk);
}
