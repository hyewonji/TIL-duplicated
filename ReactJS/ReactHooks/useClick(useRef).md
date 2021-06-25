## useClick(useRef)

- useRef() : ref를 이용해 특정 DOM 을 선택할 수 있다.

  ```jsx
  import React, { useState, useEffect, useRef } from "react";
  import ReactDOM from "react-dom";

  const App = () => {
    const potato = useRef();

    // 콘솔창에 <input placeholder="la" /> 출력된다.
    setTimeout(() => console.log(potato.current), 3000);
    // input에 focus가 된다.
    setTimeout(() => potato.current.focus(), 3000);

    return (
      <div className="App">
        <h1>Hi</h1>
        <input ref={potato} placeholder="la" />
      </div>
    );
  };

  export default App;
  ```

  - useClick
  - click 이벤트에 onClick함수를 부여한다.
    - onClick외에도 mouseenter등 다른 이벤트에도 적용할 수 있다.

  ```jsx
  import React, { useState, useEffect, useRef } from "react";
  import ReactDOM from "react-dom";

  const useClick = (onClick) => {
    if (typeof onClick !== "function") {
      return;
    }
    const element = useRef();

    useEffect(() => {
      // [dependency]가 존재하지 않는다면, componentDidMount, componentDidUpdate 때 호출됨.
      // [dependency]가 존재한다면, componentDidMount일때만 호출됨.
      if (element.current) {
        element.current.addEventListener("click", onClick);
      }

      // [dependency]가 존재하지 않을때, componentWillUnMount일때 호출됨.
      return () => {
        if (element.current) {
          element.current.removeEventListener("click", onClick);
        }
      };
    }, []);
    return element;
  };

  const App = () => {
    const sayHello = () => console.log("say Hello");
    const title = useClick(sayHello);
    return (
      <div className="App">
        <h1 ref={title}>Hi</h1>
      </div>
    );
  };

  export default App;
  ```
