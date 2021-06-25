## useFullscreen(useRef)

```jsx
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useFullscreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      // Fullscreen을 요청한다.
      element.current.requestFullscreen();
      // callback함수에 true를 인자로 준다.
      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };
  const exitFull = () => {
    // Fullscreen에서 나오게 한다.
    document.exitFullscreen();

    // callback함수에 false를 인자로 준다.
    if (callback && typeof callback === "function") {
      callback(false);
    }
  };
  return { element, triggerFull, exitFull };
};

const App = () => {
  // 현재 화면의 ifFull의 bool값을 확인해 Fullscreen 여부를 콘솔창에 보여준다.
  const onFullS = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };

  // onFulls를 인자로 받고, element, triggerFull, exitFull을 변수로 선언
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);
  return (
    <div className="App">
      {/* Fullscreen 했을때, exitFull button이 보여지게 하기 위해 div에 'ref'를 주고, */}
      {/* div 태그 안에 img, button을 넣어줌 */}
      {/* 이렇게 하면 img가 꽉찬 화면으로 나오지 않은 단점이 있다. */}
      <div ref={element}>
        <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEyMDZfODEg%2FMDAxNjA3MjQzNDMwMDI2.P5MCnMBZWRIqyE_B-05nnru2ezA23DCqjqhvTd_jT0sg.JELgg4iT2Lcnambd-HZ4cE3tuRP1iMQB2bmU_21K4h0g.JPEG.qwertyui12222%2FKakaoTalk_20201130_124006846_03.jpg&type=sc960_832" />
        <button onClick={exitFull}>Exit Full Screen </button>
      </div>
      <button onClick={triggerFull}>Make Full Screen </button>
    </div>
  );
};

export default App;
```
