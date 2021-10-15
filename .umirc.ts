/*
 * @Author: SmartNan
 * @Date: 2021-09-14 10:34:04
 * @LastEditTime: 2021-10-09 15:11:43
 * @Description: 相关描述
 */
import { defineConfig } from 'umi';
import routes from './src/router/routes';

const TEA_APP_ID =
  process.env.NODE_ENV === 'production' ? 'pro_smart' : 'dev_smart';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  define: {
    AppID: TEA_APP_ID,
    // HttpRequest:
  },
  history: {
    type: 'browser',
  },
  routes: routes,
  fastRefresh: {},
  locale: {
    default: 'zh-CN',
    title: true,
    baseNavigator: true,
    baseSeparator: '-',
  },
});
