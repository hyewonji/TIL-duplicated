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
