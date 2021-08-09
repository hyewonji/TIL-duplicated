# Fetching

### queries example

```jsx
// 쿼리 작성
const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;

function DogPhoto({ breed }) {

  // breed라는 변수를 쿼리에 입력해서 데이터를 받아온다.
  // loading : 로딩상태 확인
  // error : 에러상태 확인
  // data : 쿼리에서 받아온 데이터 담겨져 있는 객체
  const { loading, error, data } = useQuery(GET_DOG_PHOTO, {
    variables: { breed },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />);
}
```
