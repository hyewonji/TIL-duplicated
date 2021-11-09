# Prototype

### 의문

- Object 객체 안의 값을 얻기 위해서는 `Object.key` 와같은 방법으로 호출 할 수 있다.
- 하지만 배열에서 `.length`, `.filter()`, `.sort()` 등의 메소드를 정의해준 적이 없지만 어떻게 사용할 수 있는것일까?( 배열 외에 string, number, object 등에도 똑같은 문제?가 발생한다. )

<br>

### 상속이란

- 개념을 이해하기 위해 일단 상속이라는 사전지식이 필요하다.
- 상속은 다음과 같은 과정을 통해 이뤄진다.

```jsx
  // 1. 객체를 생성하는 부모
  function parents() {
    this.name: 'stephanie',
    this.gender: 'female',
  }

  // 2. 부모객체로부터 신규 객체 생성.
  // 다음과 같이 새로운 변수에 부모를 상속할 수 있다.
  // 여러개의 자식을 생성 할 수 있다.
  // props를 전달해 각각의 자식객체 속성을 변경할 수도 있다.
  let children = new parents();
  let secondChildren = new parents();

  console.log(children); // { 'name': 'stephanie', 'gender': 'female' }
  console.log(secondChildren); // { 'name': 'stephanie', 'gender': 'female' }
```

<br>

### prototype은 부모에 있는 유전자이다.

유전자는 부모에게 있지만 자식에게 전달해주지 않으면 자식이 가질 수 없다. 하지만 자식이 부모의 유전자를 조회할 수 있다.

개념을 이해하기 위해 위의 코드를 다시 보자.

```jsx
  // 1. 객체를 생성하는 부모
  function parents() {
    this.name = 'stephanie',
    this.gender = 'female',
  }

  // 2. 부모객체로부터 신규 객체 생성.
  let children = new parents();
  let secondChildren = new parents();
```

이 상태에서 콘솔창에 `parents.prototype`를 찍어보면 parents이 가지고 있는 있는 정보들을 조회 수 있다. 또한 `parents.prototype.age = 20`의 방법으로 새로운 prototype을 정의할 수 있다.

이때 parents에 새롭게 정의한 propotype은 children에서도 접근이 가능하다.

```jsx
  // 1. 객체를 생성하는 부모
  function parents() {
    this.name = 'stephanie',
    this.gender = 'female',
  }

  parents.prototype.age = 20;

  // 2. 부모객체로부터 신규 객체 생성.
  let children = new parents();

  console.log(children) // { 'name': 'stephanie', 'gender': 'female' }
  console.log(children.age) // 20
```

이처럼 찾고자 하는 속성이 자식에게 없다면 부모의 속성을 찾는다. 따라서 children을 콘솔에 찍었을때 age라는 속성은 없지만, 부모에게 age속성을 정의해 주었기 때문에 age값을 조회할 수 있다.

<br>

### 그렇다면 .length, filter(), sort()는 부모의 prototype인가?

그렇다. 우리가 변수를 선언할 때 `const numbers = [1, 2, 3]`와 같이 작성 하지만 실제로는 `const numbers = new Array(1,2,3)`으로 numbers는 Array라는 부모에게 상속받은것이고 Array.prototype안에 length. filter(), sort() 등의 속성이 있는것이다. 그렇기 때문에 `number.length, number.sort()` 등을 정의하지 않아도 사용할 수 있다.

문자, 숫자, 객체, 배열 등이 모두 이러한 방식으로 선언된다.
