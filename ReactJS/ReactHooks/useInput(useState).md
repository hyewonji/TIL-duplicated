## useInput

- `input` : value change 이벤트, validation 테스트 실행

```jsx
import React, { useState } from "react";
import ReactDOM from "react-dom";

const useInput = (initialValue, validation) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validation === "function") {
      willUpdate = validation(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const App = () => {
  const test = (value) => !value.includes("@");
  const name = useInput("Mr. ", test);
  return (
    <div className="App">
      <h1>UseInput</h1>
      <input placeholder="name" {...name} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```
