# 변수 type 

### undefined 
- 빈값인지 아닌지 알 수 없다.
- optional type일때 undefined로 지정이 가능하다
( 하지만, undefined보다는 ?를 사용해 optional type을 지정해주는걸 권장한다 )

```javascript
  let age: number | undefined
```


### union type
```jsx
type Direction = "left" | "right" | "up" | "down";
```
- 또는의 의미로 사용된다.
- 위의 코드에서 Direction은 "left", "right", "up", "down" 중의 하나여야만 한다.
- 보통 여러 타입 정의가 가능할때 enum타입 보다 union type을 사용하는것을 추천한다.
