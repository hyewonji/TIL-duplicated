### iTerm2에서 yarn을 포함해 create-react-app 생성하기

1. `yarn global add npx` 입력
2. `npx create-react-app <폴더이름>` 입력

### Seting

1. /src : App.css, index.css, logo.svg, serviceWorker.js 삭제
2. /public/index.html : title → <프로잭트 명>으로 변경

### React-Router-Dom 설치

1. 터미널에 `npm install react-router-dom --save` 입력
2. package.json파일에 "dependencies" 중 "react-router-dom" 이 있는지 확인해 본다.

### Router

- React-Router : Routing 패키지
  - DOM과 react-native에서 사용할 수 있다.

1. Router 정하기

   `{ HashRouter }` : App에 가까움

   `{ BrouserRouter }` : Web에 가까움

2.

```jsx
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";

// Switch : Redirect시 오직 하나의 Route만 render할 수 있게 해준다.
// Switch가 없으면 "/"의 path에서 Route와 Redirect가 모두 render된다.
<Switch>
  <Route path="/" exact component={Home} />
  <Route path="/tv" exact component={TV} />
  {/* "/tv"안의 새로운 경로를 render한다. */}
  <Route path="/tv/popular" render={() => <h1>Popular</h1>} />
  <Route path="/search" component={Search} />
  {/* 잘못된 경로로 이동시 "/"(Hom)으로 Redirect한다.*/}
  <Redirect from="*" to="/" />
</Switch>;
```

### withRouter

- Header를 이용해 현재 페이지의 컴포넌트를 보여준다.

1.  `import { withRouter } from 'react-router-dom';`
2.  Component를 감싸준다.

    1.


        ```jsx
        const HeaderC = ({ location: { pathname } }) => (
            <Header>
                <List>
                    <Item current={pathname === '/'}>
                        <SLink to='/'>Movies</SLink>
                    </Item>
                    <Item current={pathname === '/tv'}>
                        <SLink to='/tv'>TV</SLink>
                    </Item>
                    <Item current={pathname === '/search'}>
                        <SLink to='/search'>Search</SLink>
                    </Item>
                </List>
            </Header>
        );

        export default withRouter(HeaderC);
        ```

    2.


        ```jsx
        export default withRouter(({ location: { pathname } }) => (
            //console.log(props)
            <Header>
                <List>
                    <Item current={pathname === '/'}>
                        <SLink to='/'>Movies</SLink>
                    </Item>
                    <Item current={pathname === '/tv'}>
                        <SLink to='/tv'>TV</SLink>
                    </Item>
                    <Item current={pathname === '/search'}>
                        <SLink to='/search'>Search</SLink>
                    </Item>
                </List>
            </Header>
        ));
        ```

### Axios 설치

1. 터미널에 `yarn add axios` 입력
2. package.json파일에 "dependencies" 중 "axios" 가 있는지 확인해 본다.

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
   - SC(Styled Component)에서 `props`를 지정할 수 있

   1. `yarn add styled-componet` 입력
   2. `yarn add styled-reset` 입력
      - SC를 이용해 CSS를 초기화한다.
