## useNotification( not Hooks )

```jsx
import React, { useState, useEffect, useRef, useCallback } from "react";
import ReactDOM from "react-dom";

const useNotification = (title, options) => {
  // window.Notification 여부 확인
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      // Notification.permission이 'granted'가 아닐때, 'grated'로 바꾸고 Notification 생성
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};

const App = () => {
  const triggerNotif = useNotification("Can I steal your kimchi?", {
    body: "I love kimchi don't you",
  });
  return (
    <div className="App">
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
};

export default App;
```
