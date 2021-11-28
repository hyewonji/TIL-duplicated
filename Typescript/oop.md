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
