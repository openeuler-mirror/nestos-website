/* openeuler对接，预留对搜索词的埋点功能
 * @param search_key(string): 搜索关键字的value
 */
export function addSearchBuriedData(search_key) {
  const search_event_id = `${search_key}${new Date().getTime()}${(window)['sensorsCustomBuriedData']?.ip || ''}`;
  const obj = {
    search_key,
    search_event_id
  };
  (window)['addSearchBuriedData'] = obj;
  let sensors = (window)['sensorsDataAnalytic201505'];
  sensors?.setProfile({
    profileType: 'searchValue',
    ...((window)['sensorsCustomBuriedData'] || {}),
    ...((window)['addSearchBuriedData'] || {})
  });
}

/* openeuler对接，对点击事件埋点
 * @param item(object): 绑定点击事件的数据
 * @param type(string): 统计类型文字描述
 */
export function addClickBuriedData(item, type) {
  let sensors = (window)['sensorsDataAnalytic201505'];
  const searchKeyObj = {
    search_tag: type,
    search_rank_num: 1,
    search_result_total_num: 1,
    search_result_url: item.path,
  };
  const sensorObj = {
    profileType: 'selectSearchResult',
    ...(item || {}),
    ...(window['sensorsCustomBuriedData'] || {}),
    ...(window['addSearchBuriedData'] || {}),
    ...searchKeyObj,
  };

  sensors.setProfile(sensorObj);
}