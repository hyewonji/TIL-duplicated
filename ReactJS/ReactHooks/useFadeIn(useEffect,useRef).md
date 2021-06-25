## useFadeIn( useEffect, useRef )

```jsx
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useFadeIn = (duration = 1, delay = 0) => {
  // 입력된 인자의 타입 확인
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }

  // 참조값 가져와서 useEffect에서 opacity transition을 준다.
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

const App = () => {
  // useFadeIn의 인자 duration, delay를 각각 입력해준다.
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(5, 10);
  return (
    <div className="App">
      {/* spread operator로 useFadeIn의 return값을 모두 가져온다 */}
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>lorem ipsum lalalla</p>
    </div>
  );
};

export default App;
```
