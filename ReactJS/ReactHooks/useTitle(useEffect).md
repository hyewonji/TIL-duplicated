## useEffect

- useEffect는 ComponentDidMount, ComponentWillUnMount, ComponentDidUpdate이다.
- 2개의 인자를 받는다 (`function`, `[change]`)
- 'change'가 변경될 때 'function'이 실행된다.

```jsx
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const sayHello = () => console.log("Hello!");

  // 새로고침하거나 버튼을 누를때 useEffect가 실행된다.
  useEffect(() => {
    sayHello();
  });

  // 새로고침 하거나 number가 바뀔때 useEffect실행된다.
  useEffect(sayHello, [number]);

  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  return (
    <div className="App">
      <div>Hi</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
};
```

- title 변경하기
- 주석의 1 → 2 → 3 → 4 순으로 실행된다.

```jsx
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);

  // 3. html에서 title을 가져와 useState의 title값으로 대체
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };

  // 2. useState의 title이 변경될 때 updateTitle을 실행
  useEffect(updateTitle, [title]);
  return setTitle;
};

const App = () => {
  // 1. useState의 title을 'Loading...'으로 변경
  const titleUpdater = useTitle("Loading...");

  // 4. 페이지가 새로고침되고 5초 후에 titleUpdate("Home")이 실행된다.
  setTimeout(() => titleUpdater("Home"), 5000);
  return (
    <div className="App">
      <h1>Hi</h1>
    </div>
  );
};

export default App;
```
