/*
 * @Author: SmartNan
 * @Date: 2021-09-23 10:07:28
 * @LastEditTime: 2021-10-14 10:16:20
 * @Description: 相关描述
 */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { colors, sort } from './reducers';
import stateData from '@/data/initialState';

const logger = (store) => (next) => (action) => {
  let result;
  console.groupCollapsed('dispatching', action.type);
  console.log('prev state', store.getState());
  console.log('action', action);
  result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

const saver = (store) => (next) => (action) => {
  let result = next(action);
  localStorage['redux-store'] = JSON.stringify(store.getState());
  return result;
};

const storeFactory = (initialState = stateData) =>
  applyMiddleware(logger, saver)(createStore)(
    combineReducers({ colors, sort }),
    localStorage['redux-store']
      ? JSON.parse(localStorage['redux-store'])
      : stateData,
  );

export default storeFactory;
