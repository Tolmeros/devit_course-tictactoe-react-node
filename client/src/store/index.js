import {createStore, applyMiddleware} from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import reducer from './reducers';

const client = axios.create({ //all axios can be used, shown in axios documentation
  baseURL:'/api',
  responseType: 'json'
});

export default createStore(reducer,
  applyMiddleware(
    axiosMiddleware(client),
));
