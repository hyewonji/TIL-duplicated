# Virture DOM

## Virtual DOM이란?

돔의 구조만 간결하게 흉내낸 Javascript객체이다.

기존 DOM은 화면의 변경사항을 DOM을 직접 조작하여 브라우저에 반영하였다. 이 방법으로 DOM을 조작할 경우, 돔 트리가 수정될 때마다 렌더 트리가 실시간으로 갱신되게 된다.

가상돔을 사용하게 되면 이런 **불필요한 렌더링 횟수를 줄일 수 있다.** 가상 돔을 활용한 대표적인 프런트앤드 프레임 워크가 `리액트`,`뷰`,`앵귤러`이다. 이러한 프레임워크들은 화면에 변화가 있을 때마다 실시간으로 돔 트리를 수정하지 않고 변경사항이 모두 반영된 가상 돔을 만들어낸다. 그 후 가상 돔을 이용해 한 번만 돔을 수정하게 되고`한번의 렌더 트리`만을 만들어낸다. 결과적으로 브라우저는 한번만 렌더링을 하게 됨으로 불필요한 렌더링 횟수를 줄일 수 있게 된다.

### Virtual DOM Flow

- 로컬에서 Virtual DOM을 생성 시키고, 브라우저에 Render를 요청하기 전에 변경 사항을 요청한다.

1. 변경사항 발생
2. ReactDOM.render()가 호출된다.
3. 변경점을 찾고 이를 UI에 적용한다.

[이해하기 쉬운 virtual dom에 대한 영상](https://youtu.be/muc2ZF0QIO4)