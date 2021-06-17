import { axiosLoader } from '@utils/axiosLoader';

const API_LIST = {
  LOGIN: '/api/v1/member/login',
  JOIN: '/api/v1/member/join',
  DUPLICATE: '/api/v1/member/check/duplicate',
}

/**
 * 로그인 실행
 * @param {Object} params param data
 */
export function memberLogin(params, successClbk, errorClbk) {
  axiosLoader(API_LIST.LOGIN, {
    type: 'post',
    params,
  }, successClbk, errorClbk);
}

export function memberJoin(params, successClbk, errorClbk) {
  axiosLoader(API_LIST.JOIN, {
    type: 'post',
    params,
  }, successClbk, errorClbk);
}

export function checkDuplicateId(params, successClbk, errorClbk) {
  axiosLoader(API_LIST.DUPLICATE + `?email=${params.email}`, {}, successClbk, errorClbk);
}