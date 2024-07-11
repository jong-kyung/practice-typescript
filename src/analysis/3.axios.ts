import axios, { AxiosError, AxiosResponse, isAxiosError } from "axios";

//* axios는 XMLHttpRequest를 사용하는 자바스크립트 라이브러리로, HTTP 요청을 만들어 서버로부터 데이터를 받아오는 기능을 제공한다.
//* 최근에는 브라우저에서는 ky 노드에서는 got에서 사용하는 추세이다.

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

(async () => {
  try {
    const response = await axios.get<Post, AxiosResponse<Post>>("https://jsonplaceholder.typicode.com/posts/1");
    const response2 = await axios.post<Created, AxiosResponse<Created>, Data>(
      "https://jsonplaceholder.typicode.com/posts",
      {
        title: "foo",
        body: "bar",
        userId: 1,
      }
    );
    const response3 = await axios({
      method: "post",
      url: "https://jsonplaceholder.typicode.com/posts",
      data: {
        title: "foo",
        body: "bar",
        userId: 1,
      },
    });
  } catch (error) {
    if (error instanceof AxiosError) {
      // AxiosError가 클래스이기 때문에 instanceof로 에러를 확인할 수 있다.
      console.error(error.response?.data);
    }

    if (isAxiosError(error)) {
      // 제공해주는 함수를 사용하여 에러를 확인할 수 있다.
      // 만약 { message: "Request failed with status code 404" } 이런 식으로 에러가 발생했다면
      console.error((error.response as AxiosResponse<{ message: string }>)?.data);
      // 혹은 아래와 같은 방식으로도 확인할 수 있다.
      console.error((error as AxiosError<{ message: string }>).response?.data);
    }
  }
})();
