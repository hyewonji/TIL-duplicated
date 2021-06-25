# JS Array

배열 : 대괄호 []를 이용해 표기하며 내부에는 어떠한 데이터 타입도 제약없이 값으로 사용할 수 있다.

## 배열의 기초

```javascript
// 배열 생성
let arr = [1, 2, 3];

// 배열 요소에 접근하기
arr[0]; // 1
arr[2]; // 3

// 배열 요소의 개수 확인하기
arr.length; // 3

// 마지막 요소에 접근
arr[arr.length - 1]; //=> 3

// 배열의 요소에 새로운 값 할당
arr[2] = 4;
console.log(arr); // [ 1, 2, 4 ]
```

## 배열의 메서드

- arry.from()
  함수의 arguments를 배열로 손쉽게 변경하는 메서드

```javascript
function f() {
  let args = Array.from(arguments);
  console.log(args);
}

f(1, 2, 3); // [ 1, 2, 3 ]
```

- arry.isArry()
  전발받은 객체가 배열인지, 아닌지 확인하는 메서드

```javascript
Array.isArray([1, 2, 3]); // true
Array.isArray({ foo: 123 }); // false
Array.isArray("foobar"); // false
```

- 배열 요소 추가 제거 메서드

  - push : 배열의 마지막에 새로운 요소를 추가한 후, 변경된 배열의 길이를 반환
  - pop : 배열의 마지막 요소를 제거한 후, 제거한 요소를 반환
  - unshift: 배열의 첫 번째 자리에 새로운 요소를 추가한 후, 변경된 배열의 길이를 반환(push와 반대)
  - shift : 배열의 첫 번째 요소를 제거한 후, 제거한 요소를 반환(pop과 반대)

  ```javascript
  let arr = [1, 2, 3];

  // 배열의 마지막 요소 제거, 제거된 요소 리턴
  arr.pop(); // 3

  // 배열 마지막에 요소 추가, 배열의 크기 리턴
  arr.push("new"); // 3
  console.log(arr); //-> [ 1, 2, 'new' ]

  // 배열의 첫번째 요소 제거, 제거된 요소 리턴
  arr.shift(); // 1

  // 배열의 처음에 요소 추가, 배열의 크기 리턴
  arr.unshift("day"); // 3
  console.log(arr); //-> [ 'day', 2, 'new' ]
  ```

* splice : 배열의 특정 위치에 배열 요소를 추가하거나 삭제하는데 사용함. 리턴값은 삭제한 배열 요소입니다. 삭제한 요소가 없다면 빈 배열을 반환함.

```javascript
/* 배열 임의의 위치에 요소 추가 제거 */
// start - 수정할 배열 요소의 인덱스
// deleteCount - 삭제할 요소 개수, 제거하지 않을 경우 0
// el - 배열에 추가될 요소
arr.splice(start, deleteCount, el);

let arr = [1, 5, 7];
arr.splice(1, 0, 2, 3, 4); // [], arr: [1, 2, 3, 4, 5, 7]
arr.splice(1, 2); // [2, 3], arr: [1, 4, 5, 7]
```

- reverse : 배열 요소의 순서를 뒤집음

```javascript
// 요소 순서를 반전 시킴
let arr = [1, 3, 5, 7];
arr.reverse(); // [7, 5, 3, 1]
```

- sort : 배열 내부의 요소를 정렬

```javascript
let arr = [11, 1, 115, 42, 12];
arr.sort(); //-> [ 1, 11, 115, 12, 42 ]
```

이와 같은 요류는 내부적으로 숫자를 문자로 변환한 후 값을 비교하기 때문에 나타낸다.
따라서 대부분의 경우 sort 함수의 인자값으로 비교 함수를 전달하여 정렬한다.

```javascript
var arr = [11, 1, 115, 42, 12];
arr.sort(function (a, b) {
  return a - b;
});
//-> [ 1, 11, 12, 42, 115 ]
```

비교함수 `function(a,b){}`의 반환값에 따라 다음과 같은 규칙을 따라 정렬된다.

1. 결과값이 0보다 작으면 a가 낮은 색인으로 정렬됩니다.
2. 결과값이 0이면 a와 b의 순서를 바꾸지 않습니다.
3. 결과값이 0보다 크면 b가 낮은 색인으로 정렬됩니다.
