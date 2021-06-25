- App.js

1. `npm install --s axios` 입력해 axios 설치

```jsx
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import useAxios from "./useAxios";

const App = () => {
  // useAxios의 opts에 url을 준다.
  const { loading, data, error, refetch } = useAxios({
    url: "yts.am/api/v2/list_movies.json",
  });

  // loading, error, data를 console창에 보여준다.
  console.log(
    `Loading: ${loading}\nError:${error}\nData:${JSON.stringify(data)}`
  );
  return (
    <div className="App">
      {/* data가 null이 아니면, status를 보여준다. */}
      <h1>{data && data.status}</h1>
      {/* loading이 ture이면, 'Loading'를 보여준다. */}
      <h2>{loading && "Loading"}</h2>
      {/* Click이벤트에 refetch를 한다. */}
      <button onClick={refetch}>refetch</button>
    </div>
  );
};

export default App;
```
