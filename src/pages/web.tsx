/*
 * @Author: SmartNan
 * @Date: 2021-09-23 16:06:33
 * @LastEditTime: 2021-10-11 17:56:16
 * @Description: 第十二章 服务器端渲染
 */
// import { Button } from 'antd';
import { useRef, useReducer, useEffect, useCallback, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
    console.log(count + 1);
  }, [count]);

  return <p onClick={handleClick}>clicked {count} times</p>;
}

export default function () {
  return <Counter></Counter>;
}
