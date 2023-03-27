import {createStore,compose,applyMiddleware} from 'redux'

import thunk from 'redux-thunk';

import {rootReducer} from "./root-reducer";
import * as api from '../config';
import axios from "axios";

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store=createStore(rootReducer,composeEnhancers(
  applyMiddleware(
    thunk.withExtraArgument({
        client:axios,
        api,
    })
  )
))

export {store}