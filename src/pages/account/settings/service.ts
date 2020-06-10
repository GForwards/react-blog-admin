import request from 'umi-request';

export async function queryCurrent() {
  return request('/currentUser');
}

export async function queryProvince() {
  return request('/geographic/province');
}

export async function queryCity(province: string) {
  return request(`/geographic/city/${province}`);
}

export async function query() {
  return request('/users');
}
