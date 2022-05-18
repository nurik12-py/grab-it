import { combineReducers } from "./core/CombineReducers";
import { createStore } from "./core/CreateStore";
import fridgeReducer from "./reducers/fridgeReducer";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
  fridgres: fridgeReducer,
  user: userReducer,
});

const store = createStore(rootReducer, { fridges: [], user: null });

export default store;
