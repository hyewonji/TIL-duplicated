## useScroll( useState, useEffect )

```jsx
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });

  // 현재 위치 setState를 이용해 state의 (x,y) 값을 변경시킨다.
  const onScroll = (event) => {
    setState({ y: window.scrollY, x: window.scrollX });
  };
  useEffect(() => {
    // scroll할때 onScroll함수를 실행시키는 EventListener를 생성한다.
    window.addEventListener("scroll", onScroll);
    // EventListener가 여러번 실행되지 않도록 EventListener를 삭제한다.
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
};

const App = () => {
  // useScroll의 return값의 y를 변수로 선언
  const { y } = useScroll();
  return (
    <div className="App" style={{ height: "1000vh" }}>
      {/* 현재 scroll의 y위치에 따라 색상 변경해준다. */}
      <h1 style={{ position: "fixed", color: y > 1000 ? "red" : "blue" }}>
        Hi
      </h1>
    </div>
  );
};

export default App;
```
