import { createTypes, completeTypes } from 'redux-recompose';

import { getAlbums } from '../../services/services';

export const actions = createTypes(completeTypes(['GET_DATA']), '@@ALBUMS');

const actionsCreators = { 
  getAlbums: id => ({
    type: actions.GET_DATA,
    target: 'data',
    service: getAlbums.getDataById,
    payload: id,
    successSelector: response => response.data && response.data.data
  })
};

export default actionsCreators;
