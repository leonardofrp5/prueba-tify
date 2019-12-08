import { createReducer, completeReducer } from 'redux-recompose';

import { actions } from './actions';

const initialState = {
  data: []
};

const reducerDescription = {
  primaryActions: [actions.GET_DATA]
};

export default createReducer(initialState, completeReducer(reducerDescription));
