import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { countReducer } from "../Reducers/countReducer";
import { fetchDataReducer } from "../Reducers/fetachDataReducer";

const configureStore = () => {
  const store = createStore(
    combineReducers({
      count: countReducer,
      data: fetchDataReducer,
    }),
    applyMiddleware(thunk)
  );
  return store;
};

export default configureStore;
