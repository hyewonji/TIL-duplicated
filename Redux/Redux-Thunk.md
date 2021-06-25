# Redux-Thunk

### Redux-Thunk란?

- 리덕스에서 비동기 작업을 처리 할 때 가장 많이 사용하는 미들웨어이다.
- 이 미들웨어를 사용하면 액션 객체가 아닌 **함수를 디스패치 할 수 있다.**

### Redux-Thunk 코드

Redux-Thunk 코드는 다음과 유사하다.

```jsx
function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => (next) => (action) => {
    if (typeof action === "function") {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
```

- 함수를 디스패치 할 때에는, 해당 함수에서 dispatch 와 getState 를 파라미터로 받아와주어야 한다.
- 이 함수를 만들어주는 함수를 우리는 thunk 라고 부릅니다.
