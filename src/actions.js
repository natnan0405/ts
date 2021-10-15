/*
 * @Author: SmartNan
 * @Date: 2021-10-14 10:28:34
 * @LastEditTime: 2021-10-14 10:29:54
 * @Description: 相关描述
 */
import C from './constants';
import { v4 } from 'uuid';

export const addColor = (title, color) => ({
  type: C.ADD_COLOR,
  id: v4(),
  title,
  color,
  timestamp: new Date().toString(),
});

export const removeColor = (id) => ({
  type: C.REMOVE_COLOR,
  id,
});

export const rateColor = (id, rating) => ({
  type: C.RATE_COLOR,
  id,
  rating,
});

export const sortColors = (sortBy) => ({
  type: 'SORT_COLORS',
  sortBy,
});
