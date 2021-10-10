# Apollo

### GrapqhQl을 위한 환경설정

<img width="805" alt="스크린샷 2021-10-06 오후 3 21 55" src="https://user-images.githubusercontent.com/60416187/136151431-cda09904-8adc-4cf8-bc2b-c8983710442a.png">

</br>

### Apollo Client란?

- GraphQL API를 호출할 때 사용하는 클라이언트 라이브러리
- React, Agular, Vue를 동시 지원한다.
- 중앙 상태관리가 가능해 Redux를 대체할 수 있다.

<br>

### 환경설정

**패키지 설치**

```
$ npm i apollo-client apollo-cache-inmemory apollo-link-http graphql graphql-tag
```

<br>

### GraphQL 호출 방법

**패키지 임포트**

```jsx
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import gql from "graphql-tag";
```

**클라이언트 생성**

```jsx
const client = new ApolloClient({
  link: createHttpLink({ uri: "https://countries.trevorblades.com" }),
  cache: new InMemoryCache(),
});
```

- link와 cache는 필수이다.
- link에는 연동할 GraphQL서버의 uri를 설정해준다.
- cache에는 특별한 요구사항이 없다면 InMemoryCache를 기본적으로 사용한다.

**쿼리 작성 및 호출**

```jsx
// 쿼리 작성
const GET_USERLIST = gql`
  query getSearchedUsers($filter: SearchFilter!) {
    getSearchedUsers(filter: $filter) {
      users {
        id
      }
    }
  }
`;

// 쿼리 호출
const { loading, error, data } = useQuery(GET_USERLIST, {
  variables: { filter: { category: "디자인", searchKeyword: "" } },
});
```

- 위의 코드는 `category`, `searchKeyword` 라는 변수값으로 필더된 user의 id를 호출한다.
- 변수는 variables에 객체로 넣어준다.
- 단, 변수(\$filter 와 같은)가 없다면 variables를 적어줄 필요가 없다.
- 호출이 성공적으로 이뤄졌다면 **값**은 `data`, **에러 메세지**는 `error`, **로딩여부**는 `loading`에 담겨진다.
