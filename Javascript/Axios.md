# Axios

react에서 네트워크 통신을 도와주는 api로 axios와 fetch가 있다.

</br>

### Fetch

- 지원하지 않는 브라우저가 있다.
- 자바스크립트 `내장 라이브러리이기` 때문에 import하지 않고 사용할 수 있다.
- 라이브러리의 `업데이트에 따른 에러 방지`가 가능하다 ( React Native의 경우 업데이트가 잦아서 라이브러리가 쫓아오지 못하는 경우가 많은데, fetch의 경우 이를 방지할 수 있다.)
- `네트워크 에러`가 발생했을 때 기다려야 한다. (reponse timeout API 제공 x)
- fetch 의 request 함수는 response 객체가 `ok 프로퍼티`를 포함하는 것으로 정상적인 요청/응답을 체크한다.
- fetch 는 response 객체에 .json() 메소드를 호출하여서 `json 객체`를 얻는다.
- return 값은 `Promise객체 형태`이다.

</br>

### Axios

- 다양한 `브라우저를 지원`한다.(구형 포함)
- `응답시간 초과를 설정`하는 방법이 있다.
- `request aborting` (요청취소)가 가능하다
- catch에 걸렸을 때, .then을 실행하지 않고, .`console창에 해당 에러 로그`를 보여준다.
- axios 는 status 값이 200 인지와 `statusText` 를 통해서 확인한다.
- axios 는 response 객체의 `data property` 에 접근함으로써 얻는다.
- return 값은 `Promise 객체 형태`이다.

</br>

### Axios 사용

- URL의 반복되는 부분을 변수로 선언하고 사용한다.
- HTTP 클라이언트 **라이브러리**로 비동기 방식으로 HTTP 데이터 요청을 진행한다.
- JS의 비동기처리를 해결하기 위해 async, await를 같이 쓴다.
- axios 설치 : `yarn add axios`

</br>

**api.js**

```jsx
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "1f6fc0066c5b5060cc2577e302c34ea9",
    language: "en-US",
  },
});

api.get("tv/popular ");
// 이때 "/tv/popular"처럼 /로 시작하면 '절대경로'로, baseURL을 덮어쓰게 된다.
// 따라서 반드시 상대경로인 "tv/popular"로 써야 한다.
```

```jsx
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "1f6fc0066c5b5060cc2577e302c34ea9",
    language: "en-US",
  },
});

export default movieApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) => {
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term),
      },
    });
  },
};
```

- 이런식으로 여러 URL을 불러올 수 있다.

</br>

### Async/Await

JS의 **비동기 처리란?**

- 특정 코드의 연산이 끝날 때까지 코드의 실행을 멈추지 않고, 다음 코드를 먼저 실행하는 것을 의미한다.
- 원하는 데이터를 모두 불러오고 그 이후에 다음 코드들을 순차적으로 실행하기 위해 async, await 함수를 쓴다.
- 기존 async/await를 사용하지 않았을때 썼던 .then() 혹은 콜백함수를 사용하지 않아도 된다.

</br>

**HomeContainer.js**

```jsx
import { movieApi } from "api";

export default class extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const {
        //변수를 바꿔주는 방법
        data: { results: nowPlaying },
      } = await movieApi.nowPlaying();
      const {
        data: { results: upcoming },
      } = await movieApi.upcoming();
      const {
        data: { results: popular },
      } = await movieApi.popular();

      //자바스크립트에서 'nowPlaying: nowPlaying' 과 'nowPlaying'는 같은 의미
      this.setState({
        nowPlaying,
        upcoming,
        popular,
      });
    } catch {
      this.setState({
        error: "Can't find movie information.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }
}
```

- api.js 파일에서 movieApi를 불러온다.
- 원하는 데이터를 불러온 후 state에 저장한다.
- try, catch, finally를 통해 정상작동, error 발생, 처리 완료시 처리방법을 설정한다.
