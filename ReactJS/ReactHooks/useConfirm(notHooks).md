## useConfirm( not Hooks )

```jsx
import React from "react";
import ReactDOM from "react-dom";

const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  if (onCancel && typeof onCancel !== "function") {
    return;
  }
  const confirmAction = () => {
    // message를 보여주는 경고창을 보여준다.
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};

const App = () => {
  const deleteWorld = () => console.log("Deleting the word...");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure", deleteWorld(), abort());
  return (
    <div className="App">
      {/* 클릭시 confirmDelete 실행 */}
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};

export default App;
```
