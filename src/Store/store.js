import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"; // redux-saga
import countReducer from "../Reducer/countReducer";
import dataReducer from "../Reducer/dataReducer";

const configureStore = () => {
  const store = createStore(
    combineReducers({
      count: countReducer,
      data: dataReducer,
    }),
    applyMiddleware(thunk)
  );
  return store;
};

export default configureStore;

//createStore helps us to create stores
//middleware i/p -> middleware -> output // handles asynchronous operation
