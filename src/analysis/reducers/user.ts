import { Reducer } from "redux";

import { LogInRequestAction, LogInSuccessAction, LogInSuccessData, LogOutAction } from "../actions/user";

export interface InitialState {
  isLoggingIn: boolean;
  loading: boolean;
  data: LogInSuccessData | null;
}

export const initialState: InitialState = {
  isLoggingIn: false,
  loading: false,
  data: null,
};

type UserReducerActions = LogInSuccessAction | LogOutAction | LogInRequestAction;

const userReducer: Reducer<InitialState, UserReducerActions> = (prevState = initialState, action) => {
  // 새로운 state 만들어주기
  switch (action.type) {
    case "LOG_IN_REQUEST":
      return {
        ...prevState,
        loading: true,
      };
    case "LOG_IN_SUCCESS":
      return {
        ...prevState,
        loading: false,
        data: { success: true },
      };
    case "LOG_OUT":
      return {
        ...prevState,
        data: null,
      };
    default:
      return prevState;
  }
};

export default userReducer;
