# 비동기 처리와 콜백 함수

### Promise란?

- 자바스크립트 비동기 처리에 사용되는 객체

</br>

### 비동기처리란?

- 비동기처리 : 요청이 여러개 발생했을 때, 앞선 요청 처리가 지연되면 처리가 끝날때까지 기다리지 않고 다음 코드를 먼저 실행하게 하는 처리
- 동기 처리에 비해 여러가지 요청을 더 빨리 처리가 가능하다.

</br>

### 콜백함수로 비동기 처리 방식의 문제점 해결하기

  </br>

**비동기 처리**

```jsx
function getData() {
  var tableData;
  $.get("https://domain.com/products/1", function (response) {
    tableData = response;
  });
  return tableData;
}

console.log(getData()); // undefined
```

- ajax통신 부분인 \$.get()에서 데이터를 받아올 때까지 기다리지 않고 `return tableData`를 실행한다.
- console 창에 데이터 값이 아닌 undefined가 출력된다.

</br>

**콜백함수 동기 처리**

```jsx
function getData(callbackFunc) {
  $.get("https://domain.com/products/1", function (response) {
    callbackFunc(response); // 서버에서 받은 데이터 response를 callbackFunc() 함수에 넘겨줌
  });
}

getData(function (tableData) {
  console.log(tableData); // $.get()의 response 값이 tableData에 전달됨
});
```

- ajax통신 부분인 \$.get()에서 받은 데이터를 callbackFunc() 함수에 넘겨준다.
- response 값이 tableData에 전달되어 console창에 데이터가 출력된다.

</br>

### 콜백 지옥

```jsx
$.get("url", function (response) {
  parseValue(response, function (id) {
    auth(id, function (result) {
      display(result, function (text) {
        console.log(text);
      });
    });
  });
});
```

- 로그인, 사용자 인증, 등 여러 절차를 비동기로 처리해야 하는 경우 발생한다.
- 콜백함수 안에 콜백 함수를 넣게되어 발생한다.
- 가독성이 떨어지며 로직을 변경하기 힘들다.

</br>

### 콜백 지옥 해결하기

1. Promise를 사용한다.
2. Async를 사용한다.
3. 코딩 패턴을 개선한다.

   ```jsx
   function parseValueDone(id) {
     auth(id, authDone);
   }
   function authDone(result) {
     display(result, displayDone);
   }
   function displayDone(text) {
     console.log(text);
   }
   $.get("url", function (response) {
     parseValue(response, parseValueDone);
   });
   ```
