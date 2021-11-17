/*
 * @Author: SmartNan
 * @Date: 2021-09-14 10:34:04
 * @LastEditTime: 2021-09-23 16:05:50
 * @Description: 相关描述
 */
import styles from './index.less';
import { createStore } from 'redux';

export default function IndexPage() {
  return (
    <div id="foo">
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
