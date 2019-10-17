export const type = "findSuggestion";

const findSuggestion = text => {
  return {
    type,
    payload: text,
  };
};

export default findSuggestion;
