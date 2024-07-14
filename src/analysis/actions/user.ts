import { Dispatch, UnknownAction } from "redux";

export type LogInRequestData = { nickname: string; password: string };

export const logIn = (data: LogInRequestData) => {
  // async action creator
  return (dispatch: Dispatch<UnknownAction>, getState: () => any) => {
    // async action
    dispatch(logInRequest(data));
    try {
      setTimeout(() => {
        dispatch(
          logInSuccess({
            userId: 1,
            nickname: "프엔",
          })
        );
      }, 2000);
    } catch (e) {
      dispatch(logInFailure(e));
    }
  };
};

export type LogInRequestAction = { type: "LOG_IN_REQUEST"; data: LogInRequestData };

export const logInRequest = (data: LogInRequestData): LogInRequestAction => {
  return {
    type: "LOG_IN_REQUEST",
    data,
  } as const;
};

export type LogInSuccessData = { userId: number; nickname: string };

export type LogInSuccessAction = {
  type: "LOG_IN_SUCCESS";
  data: LogInSuccessData;
};

export const logInSuccess = (data: LogInSuccessData): LogInSuccessAction => {
  return {
    type: "LOG_IN_SUCCESS",
    data,
  } as const;
};

export const logInFailure = (error: Error) => {
  return {
    type: "LOG_IN_FAILURE",
    error,
  } as const;
};

export type LogOutAction = {
  type: "LOG_OUT";
};

export const logOut = () => {
  return {
    // action
    type: "LOG_OUT",
  } as const;
};

export default {
  logIn,
  logOut,
};
