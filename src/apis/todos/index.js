import { axiosLoader } from '@utils/axiosLoader';

const API_LIST = {
  LIST: '/api/content/v1/todos',
}

export function getTodoList() {
  axiosLoader(API_LIST.LIST, {}, (res) => {
    console.log(res);
  }, errorClbk);
}


function errorClbk(err) {
  alert('로그인에 실패하였습니다.\n다시 시도해주십시오.')
  console.log(err);
}