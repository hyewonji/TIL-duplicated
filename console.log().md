# console.log() 알아보기

- 안드로이드, ios, 브라우저, 노드에서 지원한다.
- 개발 단계에서 부수적인 데이터를 출력할때 사용한다.
- 성능문제 때문에 삭제하고 배포하는것이 좋다.

### log level

1. 출력 : console.log()
2. 정보 : console.info()
3. 경보 : console.warn()
4. 예상치 못한 에러, 시스템 에러 : console.error()

### assert

- 첫번째 매개변수의 조건이 참이 아닐 경우만 출력
```jsx
console.assert(2 == 3, "not same!");
console.assert(2 == 2, "same!");
```

### print object

```jsx
const dog = { type: "푸들", name: "보리", owner: { name: "hyewon" } };
console.assert(dog);
console.assert(2 == 2, "same!");
```
