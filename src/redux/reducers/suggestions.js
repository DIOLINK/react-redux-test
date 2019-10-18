import { type as findSuggestionType } from "../actions/findSuggestion";
import items from "../../data/items";

const defaulState = [];

function reducer(state = defaulState, { type, payload }) {
  switch (type) {
    case findSuggestionType: {
      const regex = new RegExp(`^${payload}`, "i");

      return items.filter(n => regex.test(n.title));
    }

    default:
      return state;
  }
}

export default reducer;
