# 명령, 절차 프로그래밍 ( Imperative and Procedural Programming )

- OOP의 반대말
- 절차 지향적 프로그램
- 함수와 데이터가 모두 얽혀있어 가독성이 떨어지고 수정, 유지보수, 확장이 어렵다.

<Br>

# 객체 지향 프로그래밍( Object Oreient Programming )

- 프로그램을 객체로 정의해서 객체들끼리 의사소통 하도록 하는 프로그램
- **유지보수** : object 단위로 만들기 때문에 수정이 필요하면 관련된 object만 수정하면 된다.
- **재활용성** : 재활용성이 좋은 코드를 작성할 수 있다.
- **확장성** : 새로운 기능 추가를 위한 object를 추가하면 되기 때문에 확장성이 좋다.
- object는 `데이터 + 함수`로 구성되어있다.
- 클래스를 통해 object를 생상할 수 있다.
- **object는 class의 instance이다.**

<Br>

## OOP의 4가지 원칙

### Encapsultation( 캡슐화 )

- 서로 관련있는 데이터와 함수를 한 object 안에 담아두어 캡술화 하는것

### Abstraction( 추상화 )

- 내부의 복잡한 기능을 이해하지 않고 외부에서 간단한 interface를 통해 사용하는것

### Inheritance( 상속화 )

- Parent - Child / Super - Sub / Base - Derived의 용어를 사용한다.
- 정의해둔 클래스를 재사용해서 기능을 추가한 새로운 클래스를 생성할 수 있다.

### Polymorphism( 다형성 )

- 상속을 통해 생성된 클래스들은 서로 다른 기능을 가지더라도 부모 클래스에서 제공하는 공통적인 함수로 접근할 수 있다.

<br>

## 실전코드

```jsx
  type CoffeeCup = { shots: number; hasMilk: boolean };

  // 1. ----------------------------------------------------------------------------
  class CoffeeMachine {


    // 2,3 -------------------------------------------------------------------------
    private static coffeeBeans: number = 0; // class level , 정보의 은닉화
    private BEANS_GRAMM_PER_CUP: number = 7; // instance (object) level, 정보의 은닉화

    private constructor(coffeeBeans: number) {
      CoffeeMachine.coffeeBeans = coffeeBeans;
    }

    // 2. --------------------------------------------------------------------------
    // static을 사용해서 object를 만들 수 있는 함수를 제공한다면
    // 누군가가 생성자(new)로 object를 생성하는것을 금지하기 위함이다.
    // constructor를 private로 설정해서 static한 함수만을 사용해서 object를 생성할 수 있게 한다.
    // new CoffeeMachine()이 되지 않도록!
    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater then 0");
      }
      CoffeeMachine.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (CoffeeMachine.coffeeBeans < shots * this.BEANS_GRAMM_PER_CUP) {
        throw new Error("Not Enough Coffee Beans");
      }

      CoffeeMachine.coffeeBeans -= shots * this.BEANS_GRAMM_PER_CUP;

      return { shots, hasMilk: false };
    }
  }

  // constructor를 private로 지정해서 `new CoffeeMachine`처럼 object를 생성할 수 없다.
  const coffeeMachine = CoffeeMachine.makeMachine(21);
}

```

1. class를 통해 객체지향적으로 코드를 생성한다.
2. static 선언

- class 내부에서만 변수 혹은 함수를 사용하도록 선언해준다.
- class로 object를 생성했다면, class 내부에 선언한 변수가 해당 object에 저장되어 메모리를 차지한다.
- class 내부에 선언한 변수를 외부에서 접근할 필요가 없다면 static을 붙여줘 전역 메모리에 할당되지 않게 하면서 **메모리 낭비를 줄인다.**
- 기본적으로 변수, 함수는 **instance level**이고 static 선언한 변수, 함수는 **class level**이다.
- 따라서 class level의 변수, 함수를 사용할 때에는 class 내부에서 `this.변수`가 아닌, `className.변수`처럼 사용한다.

3. 정보 은닉 방법 3가지 (default값 : public)

- public : 외부에서 볼 수 있으며 수정 가능하다.
- private : 외부에서 보지지 못하고 수정하지 못한다. 유효하지 않은 값으로 수정하는 오류를 방지하기 위해 사용한다.
- protected : 외부에서 접근하지는 못하지만 상속한 자식 클래스에서는 접근이 가능하다.
