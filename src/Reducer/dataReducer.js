const dataReducer = (state = [], action) => {
  switch (action.type) {
    case "BACKEND-DATA":
      return state.concat(action.payload);

    default:
      return state;
  }
};

export default dataReducer;
