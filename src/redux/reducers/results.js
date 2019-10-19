import { type as findResultsType } from '../actions/findResults';
import items from '../../data/items';

const defaulState = [];

function reducer(state = defaulState, { type, payload }) {
  switch (type) {
    case findResultsType: {
      const regex = new RegExp(`^${payload}`, 'i');
            
      return items.filter(n => regex.test(n.title));
    }

    default:
      return state;
  }
}

export default reducer;
