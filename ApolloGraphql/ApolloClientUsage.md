# Apollo Client
- Apollo Graphql 과 Apollo client를 사용해 백엔드와 로컬 스테이트 관리를 해준다.
- cache에 저장해야하는 정보를 저장해 로컬로 관리한다.

## Local-only State Management
**쿼리 정의**

```jsx
export const USER = gql`
  query user {
      id @client
         username @client
         phoneNumber @client
  }
`;
```

- 각 field에 `@client`를 적어 데이터를 찾기 위해 서버로 가지 않고 바로 `캐시`에서 찾도록 한다.

**쿼리 호출**

```jsx
const {data, laoding, error, refetch} = useQuery(USER)
```

- 일반적인 쿼리 호출처럼 호출한다.
- refetch 함수는 쿼리를 재호출할때 사용한다.

**쿼리 수정( 상태 변경시 )**

```jsx
const client = useApolloClient();

client.writeQuery({
      query: USER,
      data: {
         ...data,
          phoneNumber: '01012345678'
      },
});
```

- `client.wirtheQuery` 를 사용해 캐시 데이터를 수정해준다.
- client.writeQuery 대신 `InMemoryCache` 로 선언한 cache를 불러와 `cachce.writeQuery`로 사용하는것도 가능하다.
