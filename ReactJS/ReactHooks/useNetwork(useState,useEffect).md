## useNetwork( useState, useEffect )

```jsx
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      // navigator.onLine이 true이면 false로, false이면 true로 변경된다.
      onChange(navigator.onLine);
    }
    // 변경된 navigator.onLine의 값을 status의 값으로 변경해줌.
    setStatus(navigator.onLine);
  };

  // onLine, offLine으로 변경될 때 handleChange 함수 실행
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);

  // useState의 status를 return값으로 설정
  return status;
};

const App = () => {
  // 단순히 UI변경이 아닌것을 보여주기 위해 함수를 useNetwork의 인자로 넣어준다.
  const handleNetworkChange = (online) => {
    console.log(online ? "We just went online" : "We are Offline");
  };
  const onLine = useNetwork(handleNetworkChange);
  return (
    <div className="App">
      {/* onLine이 true이면 "Online", false이면 "Offline"을 보여준다. */}
      <h1>{onLine ? "Online" : "Offline"}</h1>
    </div>
  );
};

export default App;
```
