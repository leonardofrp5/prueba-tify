import { createTypes, completeTypes } from 'redux-recompose';

import { getSongs } from '../../services/services';

export const actions = createTypes(completeTypes(['GET_DATA']), '@@ALBUMS');

const actionsCreators = { 
  getSongs: id => ({
    type: actions.GET_DATA,
    target: 'data',
    service: getSongs.getDataById,
    payload: id,
    successSelector: response => response.data && response.data.data
  })
};

export default actionsCreators;
