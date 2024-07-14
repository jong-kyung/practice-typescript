import { legacy_createStore as createStore, applyMiddleware, Middleware } from "redux";

import reducer from "./reducers";
import { logIn } from "./actions/user";
import { ThunkMiddleware } from "redux-thunk";

const initialState = {
  user: {
    isLoggingIn: true,
    loading: false,
    data: null,
  },
  posts: [] as string[],
};

const firstMiddleware: Middleware<{}, typeof initialState> = (store) => (next) => (action) => {
  console.log("로깅", action);
  next(action);
};

const thunkMiddleware: Middleware<{}, typeof initialState> = (store) => (next) => (action) => {
  if (typeof action === "function") {
    // 비동기
    return action(store.dispatch, store.getState);
  }
  return next(action); // 동기
};

const enhancer = applyMiddleware(firstMiddleware, thunkMiddleware as ThunkMiddleware);

const store = createStore(reducer, initialState, enhancer);
export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;

console.log("1st", store.getState());

// --------------------------------------

store.dispatch(
  logIn({
    nickname: "프엔",
    password: "1234",
  })
);
console.log("2nd", store.getState());

export { store };
