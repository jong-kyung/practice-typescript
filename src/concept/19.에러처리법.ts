interface Axios {
  get(): void;
}

class CustomError extends Error {
  response?: {
    data: any;
  };
}

declare const axios: Axios;

async () => {
  try {
    await axios.get();
  } catch (err: unknown) {
    //* 이런식으로 작성하는 코드는 좋지 않다.
    const customError = err as CustomError; // as로 직접 바꾼 부분은 1회성이므로 변수에 할당해주는 것이 좋다. 되도록 as를 사용하지 않는 것이 좋다.
    console.error(customError.response?.data);
    customError.response?.data;

    //* 좋은 예시
    if (err instanceof CustomError) {
      console.error(err.response?.data);
      err.response?.data;
    }
  }
};
