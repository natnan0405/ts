/*
 * @Author: SmartNan
 * @Date: 2021-10-14 10:17:51
 * @LastEditTime: 2021-10-14 10:33:15
 * @Description: 相关描述
 */

export default function Layouts(props) {
  return (
    <div>
      <h1>THIS IS HEADER Hello</h1>
      {props.children}
      <h1>THIS IS FOOTER</h1>
    </div>
  );
}
