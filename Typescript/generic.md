# 제네릭

제네릭을 사용하면 유연하고, 타입보장되며, 재사용성 높히는 코드를 작성할 수 있다. 또한, 오픈소스 코드를 읽을때 이해하기 쉬워진다.

### 제네릭 사용의 간단한 예시

null 타입을 체크해주는 함수를 작성해보자. 제네릭을 사용하지 않고 작성하면 다음과 같다.

```tsx
function checkNotNull(arg: number | null): number {
  if(arg == null) {
    throw new Error('not valid number!');
  }
  return arg;
}

const result = checkNotNull(123); // 123
checkNotNull(null); // Error
```

이 함수는 타입체크는 가능하지만, 여러 타입의 null 타입 체크를 하기 위해 위와같은 함수를 여러번 작성해줘야 한다. 그렇다면 코드가 중복되 좋지 않은 코드가 된다. 제네릭을 이용하면 코드의 중복 없이 같은 함수에서 여러 타입을 받을 수 있다.

```tsx
function genericCheckNotNull<T>(arg: T | null): T {
  if(arg == null){
    throw new Error('not valid number!');
  }
  return arg;
}

const number = genericCheckNotNull(123); // 123
const bool = genericCheckNotNull(true); // true
```

### Any랑 다른게 뭐야?

제네릭을 사용하면 변수에 여러타입을 지정할 수 있다는 장점이 있다. 동시에 any와 같은역할 아닌가? 생각이 들 수 있다. 위의 코드를 재사용해보겠다.

```tsx
function genericCheckNotNull<T>(arg: T | null): T {
  if(arg == null){
    throw new Error('not valid number!');
  }
  return arg;
}

const number = genericCheckNotNull(123); // 123 -> Type : number
const bool = genericCheckNotNull(true); // true -> Type : boolean
```

제네릭을 사용하면 여러타입을 허용하면서 변수의 타입을 지정해준다. 따라서 위 코드에서 number와 bool에 마우스를 갖다대면 number, boolean의 타입을 알려준다. 

```tsx
const number: 123
const boal: true
```

**any를 사용하면 어떻게 되나?**

```tsx
function genericCheckNotNull<T>(arg: T | null): T {
  if(arg == null){
    throw new Error('not valid number!');
  }
  return arg;
}

const number = genericCheckNotNull(123); // 123 -> Type : number
const bool = genericCheckNotNull(true); // true -> Type : boolean
```

타입을 잃어버려 더이상 어떤 타입인지 알 수가 없다.

```tsx
const number: any
const boal: any
```
