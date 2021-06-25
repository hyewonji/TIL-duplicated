## usePreventLeave( not Hooks )

```jsx
import React from "react";
import ReactDOM from "react-dom";

const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = ""; // 써주지 않으면 경고창이 나타나지 않는다.
  };

  // 페이지가 unload되기 전에 경고창을 보여주는 이벤트리스너를 추가한다.
  const enablePrevent = () => window.addEventListener("beforeunload", listener);

  // 페이지가 unload되기 전에 경고창을 보여주는 이벤트리스너를 삭제한다.;
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);
  return { enablePrevent, disablePrevent };
};

const App = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div className="App">
      <button onClick={enablePrevent}>Proptect</button>
      <button onClick={disablePrevent}>Unproptect</button>
    </div>
  );
};

export default App;
```
