# 함수형 프로그래밍

1. 순수함수이다. 함수 내부에서 함수 외부의 상태값을 참조, 변경시키지 않는다. 즉, 독립적으로 사용되어야 햔다.
    
    **잘못된 함수형 프로그래밍**
    
    ```jsx
    const number = 10;
    function sum(a) {
    	return a + number;
    }
    ```
    
    **함수형 프로그래밍**
    
    ```jsx
    function sum(a + b) {
    	return a + b;
    }
    ```
    
2. 비상태, 불변성을 유지해야 한다. 기존 데이터를 변경하면서 발생하는 에러를 방지할 수 있다.
    
    Object.freeze() 함수를 사용해 객체를 불변성으로 만들어주는 방법도 있다.
    
    **잘못된 함수형 프로그래밍**
    
    ```jsx
    var person = { name: 'hyewon, age: 20 }
    function increaseAge(persion) {
    	person.age = person.age + 1;
    	return person;
    }
    ```
    
    **함수형 프로그래밍**
    
    ```jsx
    var person = { name: 'hyewon, age: 20 }
    function increaseAge(persion) {
    	return { ...person, age: person.age + 1 };
     }
    ```
    
3. Expressions only( for, if, switch문 등을 사용하지 않는다 )
    
    **함수형 프로그래밍**
    
    ```jsx
    function multiply(numbers, multiplier) {
    	return numbers.map(num => num * multiplier);
     }
    ```
    
4. 일급함수의 특징(함수를 변수에 할당하거나, 변수를 다른 함수에 인자로 전달 혹은 리턴할 수 있는 것)과 고차함수(함수를 다른 함수에 인자로 전달 혹은 리턴할 수 있는 것)의 특징을 가지고 있어야 한다.
    
    **일급함수의 특징을 만족하는 코드**
    
    ```jsx
    const addTwo = a => a + 2;
    const multiplyTwo = a => a * 2;
    const transform = numbers => number.map(addTwo).map(multiblyTwo):
    console.log(transform([1, 2, 3, 4]));
    // => [6, 8, 10, 12]
    ```
    
    **고차함수의 특징을 만족하는 코드**
    
    ```jsx
    const addToppings = topping => food => food + topping;
    const egg = addToppings('🍳');
    const bacon = addToppings('🥓');
    console.log(egg('🍔') // => 🍔🍳
    console.log(bacon('🍤'); // => 🍤🥓
    ```
