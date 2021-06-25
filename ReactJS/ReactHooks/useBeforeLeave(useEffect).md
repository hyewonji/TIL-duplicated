## useBeforeLeave( useEffect )

```jsx
import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function") {
    return;
  }

  // clientY가 0이하이면 onBefore을 실행한다
  // 즉, 마우스가 window창 위를 벗어나면 onBefore실행
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };

  // mouseleave이벤트가 발생하면 handle 함수를 실행한다.
  // Eventlistener을 한번만 실행하기 위해서 return값으로 Eventlistener를 삭제해준다.
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

const App = () => {
  const begForLife = () => console.log("Pls dont leave");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
};

export default App;
```
