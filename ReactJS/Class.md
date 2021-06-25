# Class

```jsx
class Human {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }
}

const hw = new Human("Hyewon", "Ji");

console.log(hw.name);
//Hyewon
```

```jsx
class Human {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }
}

class Baby extends Human {
  cry() {
    console.log("Waaaaaa");
  }
  sayName() {
    console.log(`My name is ${this.name}`);
  }
}

const myBaby = new Baby("mini", "me");

console.log(myBaby.cry(), myBaby.sayName());
//Waaaaaa
//My name is mini
```
