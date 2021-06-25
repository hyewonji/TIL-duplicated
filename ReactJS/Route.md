### Router

- React-Router : Routing 패키지
  - DOM과 react-native에서 사용할 수 있다.

1. Router 정하기

   - `{ HashRouter }` : App에 가까움
   - `{ BrouserRouter }` : Web에 가까움

2. Switch, Redirect

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
