### useEffect 동작원리

- useEffect Hook는 컴포넌트가 화면을 전부 다 그린 후 실행된다.
- 렌더링 마다 실행된다.(제어 가능)
- 구독하고 있는 상태가 있을 경우, 상태 변화시 마다 수행된다.
- return을 통해 구독을 반환해 종료를 할 수 있다.

<br>

### 1. 단일 목적의 useEffect

**잘못된 코드**

```jsx
function App() {
  const [varA, setVarA] = useState(0);
  const [varB, setVarB] = useState(0);

  // 이렇게 하면 안된다!
  useEffect(() => {
    const timeoutA = setTimeout(() => setVarA(varA + 1), 1000);
    const timeoutB = setTimeout(() => setVarB(varB + 2), 2000);

    return () => {
      clearTimeout(timeoutA);
      clearTimeout(timeoutB);
    };
  }, [varA, varB]); // 2개의 상태를 한번에 지정했다.

  return (
    <span>
      Var A: {varA}, Var B: {varB}
    </span>
  );
}
```

위의 코드는 varA와 varB를 하나의 useEffect 디펜던시에 넣어 varA, 혹은 varB가 바뀔때 모두 동일한 useEffect를 수행하게 되어 의도하지않은 실행결과를 나타낸다.

**올바른 코드**

```jsx
function App() {
  const [varA, setVarA] = useState(0);
  const [varB, setVarB] = useState(0);

  // 옳은 방법
  useEffect(() => {
    const timeout = setTimeout(() => setVarA(varA + 1), 1000);
    return () => clearTimeout(timeout);
  }, [varA]);

  useEffect(() => {
    const timeout = setTimeout(() => setVarB(varB + 2), 2000);
    return () => clearTimeout(timeout);
  }, [varB]);
  return (
    <span>
      Var A: {varA}, Var B: {varB}
    </span>
  );
}
```

varA, 혹은 varB가 바뀔때 실행하고자 하는 코드를 각각의 useEffect에 적어주며 코드를 분리했다.

<br>

### 2. 가능하다면 커스텀 훅을 사용한다.

첫번째 예시에서 나온 useEffect를 커스텀해보면 다음과 같다.

```jsx
function App() {
  const [varA, setVarA] = useVarA();
  const [varB, setVarB] = useVarB();

  return (
    <span>
      Var A: {varA}, Var B: {varB}
    </span>
  );
}

function useVarA() {
  const [varA, setVarA] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setVarA(varA + 1), 1000);

    return () => clearTimeout(timeout);
  }, [varA]);

  return [varA, setVarA];
}

function useVarB() {
  const [varB, setVarB] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setVarB(varB + 2), 2000);

    return () => clearTimeout(timeout);
  }, [varB]);

  return [varB, setVarB];
}
```

이렇게 커스텀 혹을 사용하게 되면 각각의 훅이 어떤 기능을 하는지 바로 알 수 있어 코드의 가독성을 높힌다. 또한 유지보수가 유리하다.

<br>

### 3. 조건부 useEffect 사용법

변수 varA를 초기값 0에서5까지 1초마다 1씩 증가시키기고자 한다.

이때는 조건이 맞지 않으면 함수의 초기에 바로 반환해버리는 방법을 쓴다.

결과적으로 의도치 않은 useEffect의 실행을 막을 수 있다.

이 방법은 Meterial UI 등 많은 곳에서 사용되고 있다.

```jsx
function App() {
  const [varA, setVarA] = useState(0);

  useEffect(() => {
    if (varA >= 5) return;

    const timeout = setTimeout(() => setVarA(varA + 1), 1000);

    return () => clearTimeout(timeout);
  }, [varA]);

  return <span>Var A: {varA}</span>;
}
```

### 4. useEffect 안에 사용하는 모든 변수들을 디펜던시 배열에 추가한다.

useEffect함수 내에 사용되는 모든 변수들을 디펜던시 배열에 추가해야 한다.

이렇게 하면 테스트가 수월해지고 발생할 수 있는 문제를 쉽게 탐지할 수 있다.

```jsx
function App() {
  const [varA, setVarA] = useState(0);

  useEffect(() => {
    if (varA > 0) return;

    const timeout = setTimeout(() => setVarA(varA + 1), 1000);

    return () => clearTimeout(timeout);
  }, [varA]); // 이렇게 해야한다. 모든 디펜더시가 배열에 들어가 있다.

  return <span>Var A: {varA}</span>;
}
```
