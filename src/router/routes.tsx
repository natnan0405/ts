/*
 * @Author: SmartNan
 * @Date: 2021-10-09 14:07:36
 * @LastEditTime: 2021-10-14 10:27:13
 * @Description: 相关描述
 */
export default [
  // exact 表示是否严格匹配，即 location 是否和 path 完全对应上
  {
    exact: false,
    path: '/',
    component: '@/layouts/index',
    routes: [
      { path: '/', component: '@/pages/index', redirect: '/index' },
      { exact: true, path: '/index', component: '@/pages/index' },
      { exact: true, path: '/web', component: '@/pages/web' },
      { component: '@/pages/404', redirect: '/404' },
    ],
  },
];
