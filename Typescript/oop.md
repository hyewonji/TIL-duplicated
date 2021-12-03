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

### Abstraction( 추상화 )

- 내부의 복잡한 기능을 이해하지 않고 외부에서 간단한 interface를 통해 사용하는것

**실전 코드**
```jsx
{
  type CoffeeCup = { shots: number; hasMilk: boolean };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private coffeeBeans: number = 0;
    private BEANS_GRAMM_PER_CUP: number = 7;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // 머신 만드는 함수 ( 새로운 instance 생성 )
    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    // 커피콩 채우는 함수
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater then 0");
      }
      this.coffeeBeans += beans;
    }

    // 커피머신 청소하는 함수
    clean() {
      console.log("cleaning the machine...🧼");
    }

    // 커피콩 가는 함수
    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * this.BEANS_GRAMM_PER_CUP) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * this.BEANS_GRAMM_PER_CUP;
    }

    // 커피머신 데우기 함수
    private preheat(): void {
      console.log("heating up... 🔥");
    }

    // 샷 추출 함수
    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots... ☕️`);
      return { shots, hasMilk: false };
    }

   // 커피 만드는 함수 
    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  const maker: CoffeeMaker = CoffeeMachine.makeMachine(32);
  maker.makeCoffee(2);

  const maker2: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
  maker2.fillCoffeeBeans(32);
  maker2.makeCoffee(2);
  maker2.clean();
}
```
- 서로다른 CoffeMaker, CommercialCoffeeMaker 인터페이스를 정의해 코드를 작성해보았다.
- maker는 CoffeMaker라는 makeCoffee만 정의된 인터페이스를 사용하고,
- maker2는 CommercialCoffeeMaker라는 fillCoffeeBeans,clean이 추가로 정의된 인터페이스를 사용했다.
- 따라서 maker, maker2가 접근할 수 있는 함수의 범위가 달라진다.
- 인터페이스는 단순히 타입을 정의할 뿐 아니라 해당 객체의 사용방법을 알려주는 역할을 한다.

### Inheritance( 상속화 )

- Parent - Child / Super - Sub / Base - Derived의 용어를 사용한다.
- 정의해둔 클래스를 재사용해서 기능을 추가한 새로운 클래스를 생성할 수 있다.

```jsx
{
  type CoffeeCup = { shots: number; hasMilk: boolean };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  // interface를 구현할 때는 implements를 쓴다.
  // 위 추상화에서 사용한 CoffeeMacine을 2가지만 수정하고 그대로 사용한다.( 생략 )
  // 1. constructor를 public으로 설정을 바꿔줘서 자식 객체에서접근이 가능하게 한다.
  // 2. makeMachine 함수에 자식 클래스에서만 사용하는 serialNumber를 option으로 넣어준다.(부모객체 생성 할때 필수 아님)
  class CoffeeMachine implements CoffeeMaker {
  ... 
  }

  //-----------------------------------------------여기부터 상속받는 클래스!!
  // 다른 클레스를 상속할 때는 extends를 쓴다.
  class CaffeLatteMachine extends CoffeeMachine {
    // readonly : 한번 선언한 후 바뀌지 않는 변수 설정
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans); // 자식클래스에서 생성자를 따로 구현해야 하는경우 super로 부모 생성자를 호출해야 한다.
    }

    static makeLatteMachine(
      coffeeBeans: number,
      serialNumber: string
    ): CaffeLatteMachine {
      return new CaffeLatteMachine(coffeeBeans, serialNumber);
    }

    private steamMilk(): void {
      console.log("steaming some milk...🥛");
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots); // 부모 객체의 함수를 가져올 때에는 super호출
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  const latteMachine = CaffeLatteMachine.makeLatteMachine(23, "sss");
  const coffee = latteMachine.makeCoffee(1);
  console.log(coffee);
  console.log(latteMachine.serialNumber);
}  
```
```
grinding beans for 1
heating up... 🔥
Pulling 1 shots... ☕️
steaming some milk...🥛
{ shots: 1, hasMilk: true }
sss
```
- 결과값은 위와같다. hasMilk가 true로 바뀐것을 볼 수 있다.
- extends를 사용해 부모 클래스를 상속받을 수 있다.
- super를 사용해 부모클래스의 함수 및 변수를 사용할 수 있다.

### Polymorphism( 다형성 )

- 상속을 통해 생성된 클래스들은 서로 다른 기능을 가지더라도 부모 클래스에서 제공하는 공통적인 함수로 접근할 수 있다.
