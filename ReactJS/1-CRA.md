# CRA(Create-React-App)

React 어플리케이션을 만들기 위해서는 기본 webpack, bundle등의 설정을 해주어야 한다. 하지만 CRA를 사용하면 이런 설정을 따로 하지 않아도 명령어 몇 줄로 React 어플리케이션을 바로 시작 할 수 있다. CRA가 프로젝트 구조 작업, 설정 작업 등을 자동으로 진행해주는 boiler plate이기 때문이다.

<br>

### create-react-app 생성

1. `yarn global add npx` 입력
2. `npx create-react-app <프로젝트 이름>` 입력

<br>

### Seting

1. /src : App.css, index.css, logo.svg, serviceWorker.js 등, 필요없는 파일 삭제
2. /public/index.html : title → <프로잭트 이름>으로 변경

<br>

### React-Router-Dom 설치

1. 터미널에 `npm install react-router-dom --save` 입력
2. package.json파일에 "dependencies" 중 "react-router-dom" 이 있는지 확인해 본다.

<br>

**Router**

- React-Router : Routing 패키지

1. Router 정하기

   `{ HashRouter }` : App에 가까움

   `{ BrouserRouter }` : Web에 가까움

2. ```jsx
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

<br>

**withRouter**

- Header를 이용해 현재 페이지의 컴포넌트를 보여준다.

1.  `import { withRouter } from 'react-router-dom';`
2.  Component를 감싸준다.

    ```jsx
    const HeaderC = ({ location: { pathname } }) => (
      <Header>
        <List>
          <Item current={pathname === "/"}>
            <SLink to="/">Movies</SLink>
          </Item>
          <Item current={pathname === "/tv"}>
            <SLink to="/tv">TV</SLink>
          </Item>
          <Item current={pathname === "/search"}>
            <SLink to="/search">Search</SLink>
          </Item>
        </List>
      </Header>
    );

    export default withRouter(HeaderC);
    ```

<br>

### Axios 설치

1. 터미널에 `yarn add axios` 입력
2. package.json파일에 "dependencies" 중 "axios" 가 있는지 확인해 본다.

<br>

### Style

1. style.css 파일 생성

   - 각각의 `tag`마다 `className` 만들어줘야 한다.
   - 이 경우, 한 컴포넌트에 해당하는 `js 파일`과 `css파일`이 존재한다.
   - 따라서 js 파일에서 작성한 각 테그의 `className을 기억`해 css 파일에 작성해야 하는 번거로움이 있다.

2. `styled-component`이용

   - `CSS in JS`이다.
   - js 파일 안에서 style을 적용한 컴포넌트를 생성해 사용한다.
   - css 파일을 밖에 두지 않고, 컴포넌트 내부에 넣기 때문에, css가 전역으로 중첩되지 않도록 만들어주는 장점이 있습니다.
   - 생성한 컴포넌트에 props지정할 수 있고, 이를 사용해 props의 값에 따른 스타일을 지정할 수 있다.

   ```
   $ yarn add styled-componet // styled-component 패키지 설치
   $ yarn add styled-reset // CSS를 초기화 하는 패키지 설치
   ```

3. styled-component 외의 `CSS in JS`로는 emotion, styled-jsx이 있다.
