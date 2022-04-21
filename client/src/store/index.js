import {createStore, applyMiddleware} from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import reducer from './reducers';
import {session} from './selectors';

const client = axios.create({
  baseURL:'/api',
  responseType: 'json',
});

const middlewareConfig = {
  interceptors: {
    request: [
      function ({getState, dispatch, getSourceAction}, req) {
        console.log('interceptors request ',req);
        const token = session(getState()).token;
        console.log('interceptors request ',token);
        if (token) {
          const newReq = {
            ...req,
            headers: {
              ...req.headers,
              // was it necessary to dive koa-jwt sources
              // for knowleges that authorization header must start
              // from Bearer ??? >`<
              authorization: `Bearer ${token}`,
            }
          }
          console.log('interceptors request',newReq);
          return newReq;
        };
        return req;
      },
    ],
    response: [

    ]
  }
};

export default createStore(reducer,
  applyMiddleware(
    axiosMiddleware(client, middlewareConfig),
    //axiosMiddleware(client),
));
