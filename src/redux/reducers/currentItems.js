import { type as findCurrentItemType } from '../actions/findCurrentItems';
import items from '../../data/items';

const defaulState = [];

function reducer(state = defaulState, { type, payload }) {
  switch (type) {
    case findCurrentItemType: {
      return items.find(n => n.id === payload);
    }

    default:
      return state;
  }
}

export default reducer;
