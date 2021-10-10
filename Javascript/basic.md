# javascript의 기초 중 알아두면 좋은 개념들을 정리한다.

### 1. Logical operators: ||(or), &&(and), !(not)

```jsx
const value1 = true;
const value2 = 4 < 2;

console.log(`or: ${value1 || value2 || value3()}`); // value1, value2, value3 중 하나라도 true 이면 true를 반환한다.

function vaule3() {
  for (let i = 0; i < 10; i++) {
    console.log(`count: ${i}`);
  }

  return true;
}
```

- JS 파일이 컴파일 될 때, `console.log(`or: \${value1 || value2 || value3()}`)`구문에서 value1, value2, value3의 값을 차례로 확인한다.
- 이때 value1이 true일 경우 value2, value3이 어떤 값이든 true를 반환한다.
- 이렇기 때문에 **연산의 양이 적은 값을 앞쪽에, 연산이 많은 값을 뒤쪽에 작성해야한다.**
- value3을 앞쪽에 두었다면 `console.log(`count: \${i}`)`이 10 번 실행되야 하기 때문에 비효울적이다.
- **&&(and)연산자도 마찬가지**로 연산의 양이 적은 값을 앞쪽에, 연산이 많은 값을 뒤쪽에 작성해야한다.

### 2. Equality

```JSX
console.log(0 == false);   // T
console.log(0 === false);  // F
console.log('' == false);  // T
console.log('' === false); // F
console.log(null == undefined)  // T
console.log(null === undefined) // F
```

- `==` : loose equality, with type conversion(타입체크를 하지 않는다.)
- `===` : strict equality, no type conversion(타입이체크를 한다.)

### 3. Function

- Early return, Early exit

### 4. Hoisting

- 자바스크립트에 선언된 변수들을 가장 위로 올려주는 것.
- 함수 혹은 변수를 선언하기 이전에 호출하더라도 JS의 hoisting 기능이 적용되면 에러가 나지 않는다.
