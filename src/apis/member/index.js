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
export function doLogin(params, successClbk) {
  axiosLoader(API_LIST.LOGIN, {
    type: 'post',
    params,
  }, successClbk, (err) => {
    errorClbk(err, '로그인에 실패하였습니다.\n다시 시도해주십시오.');
  });
}

export function doJoin(params, successClbk) {
  axiosLoader(API_LIST.JOIN, {
    type: 'post',
    params,
  }, successClbk, (err) => {
    errorClbk(err, '회원가입에 실패하였습니다.\n다시 시도해주십시오.');
  });
}

export function checkDuplicateId(params, successClbk) {
  axiosLoader(API_LIST.DUPLICATE + `?email=${params.email}`, {}, successClbk, (err) => {
    errorClbk(err, '중복된 id입니다.\n다시 시도해주십시오.');
  });
}

function errorClbk(err, msg) {
  alert(msg);
  console.log(err);
}