/*
 * @Author: SmartNan
 * @Date: 2021-09-14 10:34:04
 * @LastEditTime: 2021-09-14 15:01:44
 * @Description: 相关描述
 */
import { defineConfig } from 'umi';

const TEA_APP_ID = process.env.NODE_ENV === 'production' ? 'pro_smart' : 'dev_smart';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  define: {
    AppID: TEA_APP_ID,
    // HttpRequest: 
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
});
