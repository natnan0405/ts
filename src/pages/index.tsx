/*
 * @Author: SmartNan
 * @Date: 2021-09-14 10:34:04
 * @LastEditTime: 2021-09-23 16:05:50
 * @Description: 相关描述
 */
import styles from './index.less';
import { createStore } from 'redux';

export default function IndexPage() {
  // const color = (state = {}, action) => {
  //   switch (action.type) {
  //     case 'ADD_COLOR':
  //       return {
  //         id: action.id,
  //         title: action.title,
  //         color: action.color,
  //         timestamp: action.timestamp,
  //         rating: 0,
  //       };
  //     case 'RATE_COLOR':
  //       return state.id !== action.id
  //         ? state
  //         : { ...state, rating: action.rating };
  //   }
  // };

  // const action = {
  //   type: 'ADD_COLOR',
  //   id: '12',
  //   color: '#000000',
  //   title: 'black',
  //   titmestamp: '2021.09.14',
  // };

  // console.log(color({}, action));

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
