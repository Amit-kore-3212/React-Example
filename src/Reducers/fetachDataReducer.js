export const fetchDataReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCHDATA":
      return [...state, ...action.payload];
    default:
      return state.concat([]);
  }
};
