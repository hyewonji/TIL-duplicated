# Prototype

### 1. 의문

- `const client = { id: 'hwjis28', type: 'student' }`의 객체가 있다고 하자.
- `client.keys()`는 객체의 키를 배열로 반환한다. (`[id, type]`)
- 이때 우리는 client를 객체 리터럴로 생성만 했는데 keys()라는 메서드를 사용할 수 있었다. 어떻게 이게 가능할까?
<br>

### 2. 상속이란

- 개념을 이해하기 위해 일단 **상속**이라는 사전지식이 필요하다.
- 상속은 객체지향 프로그래밍의 핵심 개념으로, 어떤 객체의 프로퍼티 또는 메서드를 다른 객체가 상속받아 그대로 사용할 수 있는것을 말한다.
- 객체의 가장 최상위의 부모는 Object이고, proptotype으로 keys, values 등을 가진다.
- 따라서 [1.의문]에서 객체 리터럴로 생성한 client는 Object의 자식이 되므로 부모의 proptotype(kyes. value 등의 프로퍼티 혹은 메서드)을 모두 사용할 수 있다.

<br>

### prototype은 부모에 있는 유전자이다.

- 프로토타입은 어떤 객체의 상위(부모) 객체의 역할을 하는 객체로서 다른 객체에 공유 프로퍼티를 제공한다.
- 프로토타입을 상송받은 하위(자식) 객체는 상위 객체의 프로퍼티를 자신의 프로퍼티처럼 자유롭게 사용할 수 있다.

```jsx
  function parents() {
    this.name = 'hyewon',
    this.gender = 'female',
  }

  parents.prototype.age = 20;

  // 생성자 함수 parents의 상속을 받는 children 객체 생성
  let children = new parents();

  // 부모 객체인 parents의 prototype를 상속받아 자식 객체인 children에서 사용할 수 있다.
  console.log(children.age) // 20
```
