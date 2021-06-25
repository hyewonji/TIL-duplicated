# Promise

### Promise란?

- 자바스크립트 비동기 처리에 사용되는 객체이다.
- 비동기 처리에 관한 TIL

</br>

### Promise 코드

**콜백 함수를 사용한 비동기 처리**

```jsx
function getData(callbackFunc) {
  $.get("url 주소/products/1", function (response) {
    callbackFunc(response); // 서버에서 받은 데이터 response를 callbackFunc() 함수에 넘겨줌
  });
}

getData(function (tableData) {
  console.log(tableData); // $.get()의 response 값이 tableData에 전달됨
});
```

</br>

**프로미스를 사용한 비동기 처리**

```jsx
function getData(callback) {
  // new Promise() 추가
  return new Promise(function (resolve, reject) {
    $.get("url 주소/products/1", function (response) {
      // 데이터를 받으면 resolve() 호출
      resolve(response);
    });
  });
}

// getData()의 실행이 끝나면 호출되는 then()
getData().then(function (tableData) {
  // resolve()의 결과 값이 여기로 전달됨
  console.log(tableData); // $.get()의 reponse 값이 tableData에 전달됨
});
```

</br>

### Promise의 상태(처리 과정)

- 프로미스는 `new Promise()`로 프로미스를 생성하고 종료될 때까지 `Pending`,`Fulfuilled`,`reject`의 3가지 상태를 갖는다.

</br>

**Pending(대기)**

```jsx
new Promise(function (resolve, reject) {
  // ...
});
```

- 비동기 처리 로직이 아직 완료되지 않은 상태

</br>

**Fulfilled(이행)**

```jsx
function getData() {
  return new Promise(function (resolve, reject) {
    var data = 100;
    resolve(data);
  });
}

// resolve()의 결과 값 data를 resolvedData로 받음
getData().then(function (resolvedData) {
  console.log(resolvedData); // 100
});
```

- 비동기 처리가 완료되어 프로미스가 `resolve()`로 결과 값을 반환해준 상태

</br>

**Rejected(실패)**

- 비동기 처리가 실패하거나 오류가 발생해 `reject()`로 결과 값을 반환해준 상태
- 실패한 경우, `error메세지`를 `catch()`로 받을 수있다.

</br>

### Promise의 에러 처리

Promise의 실행결과 reject메서드가 호출된 경우에 에러 처리방법은 다음과 같다.

1. .then()의 두 번째 인자로 에러메세지를 받는다.

   ```jsx
   getData().then(handleSuccess, handleError);
   ```

   </br>

   예시)

   ```jsx
   // then()의 두 번째 인자로는 감지하지 못하는 오류function getData() {
     return new Promise(function(resolve, reject) {
       resolve('hi');
     });
   }

   getData().then(function(result) {
     console.log(result);
     throw new Error("Error in then()");// 콜백함수 내부에서 오류를 발생시킨다.
     console.log('then error : ', err);
   });
   ```

   - 콜백함수 첫번째 인자에서 오류를 발생 시키면 두번째 인자에서 에러를 인식하지 못한다는 문제가 발생한다.

</br>

2. .catch()로 에러메세지를 받는다.

   ```jsx
   getData().then().catch();
   ```

   </br>
   예시)

   ```jsx
   // catch()로 오류를 감지하는 코드function getData() {
     return new Promise(function(resolve, reject) {
       resolve('hi');
     });
   }

   getData().then(function(result) {
     console.log(result);// hithrow new Error("Error in then()");
   }).catch(function(err) {
     console.log('then error : ', err);// then error :  Error: Error in then()});
   ```

   - .then()의 오류를 .catch()가 잡아낼 수 있다.

**따라서, 가급적이면 .catch()를 사용해 에러 처리를 하는것을 권장한다.**
