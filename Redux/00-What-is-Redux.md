# Redux

### Redux란?

오픈 소스 자바스크립트 전역 상태 관리 라이브러리다.

### 왜 Redux를 사용할까?

한 어플리케이션, 웹의 전역 상태를 관리하기 위해 사용한다.

1. 전역 상태관리를 하지 않을때는 컴포넌트에 props로 변수를 전달하는 과정이 필요한데 depth가 깊어지게 되면 어플리케이션의 복잡성이 올라간다.
2. 외부로부터 정보를 보안한다.(dispather, reducer로 정보수정 / getState로 정보 가져오기 때문에 각 부품(?)들은 독립성을 유지한다.)

# Redux를 효과적으로 사용하게 하는 도구

### Redux DevTools

- 상태 변화를 되돌려 볼 수 가 있다. 즉, 버전관리(시간여행)을 가능하게 한다.
- 댜운로드, 업로드 과정을 통해 이전상태를 그대로 복원할 수 있다.

### Reducer

- console.log(action.type, action, state, newState);
- 다음과 같이 원하는 정보를 reducer안에서 한번에 호출 할 수 있다.

<img src="https://user-images.githubusercontent.com/60416187/125717829-9866efd4-203b-412a-b3ef-ec3e4431d011.png" width="600">
