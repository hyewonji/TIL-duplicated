### Style

1. style.css 파일 생성

   - 각각의 `tag`마다 `className` 만들어줘야 한다.
   - 이 경우, 한 컴포넌트에 해당하는 `.js 파일`과 `.css파일`이 존재한다.
   - 컴포넌트를 사용하는 이유는 어플리케이션의 일정 부분들을 `캡술화` 하는것이다.
   - 따라서, `javascript`, `logic`, `html`, `css`를 모두 **한 곳에 모아두는것**이 좋다.

2. Component별로 file을 생성

   - file 안에 `.js`, `.css`, `index.js` 를 넣어줘 캡슐화 한다.
   - Component마다 파일을 생성해야고,
   - `Global CSS`이기 때문에 **ClassName이 중복되지 않게** 해야하는 문제점이 있다.

3. 2번의 방법에서 `.css`파일을 `.module.css`로 바꿔준다.

   - `Local CSS`파일이다.
   - 여전히 **Component 내 ClassName을 기억**해야하는 어려움이 있다.

4. `styled-component`이용

   - `Local CSS`이다.
   - **.js안에서 style을 지정**할 수 있다.
   - `{ Link }` 는 반드시 **Router 안에서만 사용**할 수 있다.
   - SC(Styled Component)에서 `props`를 지정할 수 있다.

   1. `yarn add styled-componet` 입력
   2. `yarn add styled-reset` 입력
      - SC를 이용해 CSS를 초기화한다.
