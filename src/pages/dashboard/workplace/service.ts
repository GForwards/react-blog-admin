import request from 'umi-request';

export async function queryProjectNotice() {
  return request('/project/notice');
}

export async function queryActivities() {
  return request('/activities');
}

export async function fakeChartData() {
  return request('/fake_chart_data');
}

export async function queryCurrent() {
  return request('/currentUser');
}
