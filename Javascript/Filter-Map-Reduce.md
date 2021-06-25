# Arry (map, filter, forEach)

### map()

모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다.

**매개변수**

- callback 함수(새로운 배열 요소를 생성하는 함수) : currentValue, index, array

**반환값**

- 배열의 각 요소에 대해 실행한 callback의 결과를 모은 새로운 배열

**예시**

```jsx
const arry = [1, 4, 9, 16];

const map = arry.map((x) => x * 2);

console.log(map);
// [2, 8, 18, 32]
```

```jsx
const days = ["Mon", "Tue", "Wed", "Thurs", "Fri"];

const addDays = (day, index) => `#${index + 1} 😆${day}`;

const smilingDays = days.map(addDays);

console.log(smilingDays);
//['#1 😆Mon','#2 😆Tue','#3 😆Wed','#4 😆Thurs','#5 😆Fri'];
```

### filter

주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환

**매개변수**

- callback(true를 반환하면 요소를 유지하고, false를 반환하면 버린다.) : element, index, arry

**반환값**

- 테스트를 통과한 요소로 이루어진 새로운 배열. 어떤 요소도 테스트를 통과하지 못했으면 빈 배열을 반환한다.

**예시**

```jsx
const numbers = [2, 4, 10, 40, 452, 1, 0, 63];

const testCondition = (number) => number > 15;

const biggerThan15 = numbers.filter(testCondition);

console.log(biggerThan15);
//[40, 452, 63]
```

### reduce

배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환한다.

**매개변수**

- callback(각 요소에 대해 실행할 함수) : accumulator, currentValue, currentIndex, arry

**반환값**

- 누적 계산의 결과 값

**예시**

```jsx
const numbers = [1, 2, 3];

// 초기값을 0으로 한, numbets의 합(누적값)을 구하는 함수
let result = numbers.reduce((acc, cur, i)) => {
	console.log(acc,cur,i);
	return acc + cur;
},0)
// 0 1 0
// 1 2 1
// 3 3 2

console.log(result); // 6
```

reduce로 map을 구현하는 방법

```jsx
const numbers = [1, 2, 3];

let result = oneTwoThree.reduce((acc, cur) => {
  // 숫자인 경우 (cur % 2 === 1)을 해주지 않아도,
  // (cur % 2)의 결과값이 0이 아닌 경우에는 모두 true가 된다.
  // 반대인 경우는 false가 된다.
  acc.push(cur % 2 ? "홀수" : "짝수");
  return acc;
}, []);

console.log(result); // ['홀수', '짝수', '홀수']
```

reduce로 filter를 구현하는 방법

```jsx
const numbers = [1, 2, 3];

let result = oneTwoThree.reduce((acc, cur) => {
  if (cur % 2) acc.push(cur);
  return acc;
}, []);
result; // [1, 3]
```
