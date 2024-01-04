import {SAMPLE} from '../constants';

const initialState = {};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAMPLE:
      return {
      };
    default:
      return state;
  }
};
export default AppReducer;
