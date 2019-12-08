import { createTypes, completeTypes } from 'redux-recompose';

import { getArtists } from '../../services/services';

export const actions = createTypes(completeTypes(['GET_DATA']), '@@GENERES');

const actionsCreators = { 
  getArtists: () => ({
    type: actions.GET_DATA,
    target: 'data',
    service: getArtists,
    successSelector: response => response.data && response.data.data
    //successSelector: response => response.data && response.data.data
  })
};

export default actionsCreators;
