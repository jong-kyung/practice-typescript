import axios, { AxiosError, AxiosResponse } from "axios";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Created {}

interface Data {
  title: string;
  body: string;
  userId: number;
}

interface Config<D = any> {
  method?: "post" | "get" | "put" | "delete" | "patch" | "head" | "options";
  url?: string;
  data?: D;
}

interface A {
  get: <T = any, R = AxiosResponse<T>>(url: string) => Promise<R>;
  post: <T = any, R = AxiosResponse<T>, D = any>(url: string, data: D) => Promise<R>;
  isAxiosError: (error: unknown) => error is AxiosError;
  <T = any, R = AxiosResponse<T>, D = any>(config: Config<D>): Promise<R>;
  <T = any, R = AxiosResponse<T>, D = any>(url: string, config?: Config<D>): Promise<R>;
}

const a: A = axios;

(async () => {
  try {
    const response = await a.get<Post, AxiosResponse<Post>>("https://jsonplaceholder.typicode.com/posts/1");
    const response2 = await a.post<Created, AxiosResponse<Post>>("https://jsonplaceholder.typicode.com/posts/1", {
      title: "foo",
      body: "bar",
      userId: 1,
    });
    const response3 = await a({
      method: "post",
      url: "https://jsonplaceholder.typicode.com/posts",
      data: {
        title: "foo",
        body: "bar",
        userId: 1,
      },
    });
    const response4 = await a("https://jsonplaceholder.typicode.com/posts", {
      method: "post",
      data: {
        title: "foo",
        body: "bar",
        userId: 1,
      },
    });
  } catch (error) {
    if (a.isAxiosError(error)) {
      // 제공해주는 함수를 사용하여 에러를 확인할 수 있다.
      // 만약 { message: "Request failed with status code 404" } 이런 식으로 에러가 발생했다면
      console.error((error.response as AxiosResponse<{ message: string }>)?.data);
      // 혹은 아래와 같은 방식으로도 확인할 수 있다.
      console.error((error as AxiosError<{ message: string }>).response?.data);
    }
  }
})();
