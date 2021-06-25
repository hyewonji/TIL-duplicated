### Spread Operator

```jsx
const days = ["Mon", "Tues", "Wed"];
const otherDays = ["Tue", "Fri", "Sat"];

const allDays1 = days + otherDays;
let allDays2 = [days + otherDays];
let allDays3 = [days, otherDays];

console.log(allDays1);
//Mon,Tues,WedThu,Fri,Sat
//배열이 아니고 String이 됨

console.log(allDays2);
//['Mon,Tues,WedThu,Fri,Sat']

console.log(allDays3);
//[Array[3],Array[3]]
```

```jsx
const days = ["Mon", "Tues", "Wed"];
const otherDays = ["Tue", "Fri", "Sat"];

let allDays = [...days, ...otherDays, "Sun"];

console.log(allDays);
//['Mon', 'Tues', 'Wed', 'Tue', 'Fri', 'Sat', 'Sun']
```

- Array 뿐만 아니라 Object에도 적용된다.

### Rest Operation

함수 선언시 정해지지 않은 수의 파라미터를 받아올 때 사용한다.

```jsx
const obj = { name: "Hyewon", favFood: "Kimchi", password: "12345" };

// password를 제외한 객체를 반환한다.
let removePassword = ({ password, ...rest }) => rest;

console.log(removePassword);
// { name: "Nicolas", favFood: "Kimchi"}
```

### Freeze

객체를 동결시킨다. 동결된 객체는 더 이상 변경될 수 없다.

```jsx
const obj = { name: "Hyewon", favFood: "Kimchi", password: "12345" };

let freezeObj = Object.freeze(obj);

freezeObj.name = "Jisu";
console.log(freezeObj.name);
// Hyewon

console.log(Object.keys(freezeObj));
// ["name", "favFood", "password"]
console.log(Object.values(freezeObj));
// ["Hyewon", "Kimchi", "12345"]
```
