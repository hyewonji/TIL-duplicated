# Promise 예제

### 단순 Promise 예제

```jsx
function getData() {
  return new Promise(function (resolve, reject) {
    $.get("url 주소/products/1", function (response) {
      if (response) {
        resolve(response);
      }
      reject(new Error("Request is failed"));
    });
  });
}

// 위 $.get() 호출 결과에 따라 'response' 또는 'Error' 출력
getData()
  .then(function (data) {
    console.log(data); // response 값 출력
  })
  .catch(function (err) {
    console.error(err); // Error 출력
  });
```

- getData함수를 통해 데이터를 요청한다.
- 데이터를 받아오는데 성공하면 resolve를, 실패하면 reject를 반환한다.
- reject반환 시, catch로 에러 메세지를 확인할 수 있다.

</br>

### 여러개의 Promise 연결 예제

```jsx
var userInfo = {
  id: "test@abc.com",
  pw: "****",
};

function parseValue() {
  return new Promise({
    // ...
  });
}
function auth() {
  return new Promise({
    // ...
  });
}
function display() {
  return new Promise({
    // ...
  });
}

getData(userInfo).then(parseValue).then(auth).then(diaplay);
```

- parseValue, auth, display는 각각 `프로미스를 반환해주는 함수`
