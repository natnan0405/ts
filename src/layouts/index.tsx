/*
 * @Author: SmartNan
 * @Date: 2021-10-14 10:17:51
 * @LastEditTime: 2021-10-14 10:33:15
 * @Description: 相关描述
 */
import { Provider } from 'react-redux';
import storeFactory from '@/store';

export default function Layouts(props) {
  const store = storeFactory();
  return (
    <Provider store={store}>
      <h1>THIS IS HEADER</h1>
      {props.children}
      <h1>THIS IS FOOTER</h1>
    </Provider>
  );
}
