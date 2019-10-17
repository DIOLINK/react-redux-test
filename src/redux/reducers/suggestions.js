const defaulState = [
  {
    id: 2,
    title: "test"
  }
];

function reducer(state = defaulState, { type, payload }) {
  switch (type) {
    case "findSuggestion": {
      return [
        {
          id: 1,
          title: "findSuggestion"
        }
      ];
    }

    default:
      return state;
  }
}

export default reducer;
