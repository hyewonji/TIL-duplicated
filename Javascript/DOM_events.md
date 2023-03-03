# DOM Event

DOM tree의 각각의 node들은 모두 Event Target에 속한다. Event Target API에는 addEventListener, removeEventListener, dispatchEvent가 있다.

**따라서 모든 노드에 addEventListener, removeEventListener, dispatchEvent를 사용할 수 있다.**

<br>

이벤트 등록 방법은 `target.addEventListener(type, listener[, options])`의 방식을 따른다. 실제 코드로 이벤트 등록을 해보면 다음과 같다.

```jsx
// vanilla js
const button = document.querySelector(".button");

button.addEventListener("click", () => {
  console.log(clicked);
});
```

이때, **options**에 once, passive의 설정을 통해 이벤트 옵션을 지정할 수 있다.
- **once** : 이벤트를 한번만 호출할수 있게 한다. 
- **passive** : `event.preventDefault()`를 호출하지 않는 scroll 이벤트 같은경우 기본값이 true로 되어있는데 이를 해지하려면 `{ passive: false }`를 해준다.

<br>

### DOM Event type

DOM 이벤트 타입에는 마우스이벤트, 키보드 이벤트, 윈도우 이벤트 등이 있다.
자세한 내용은 [MDN]('https://developer.mozilla.org/en-US/docs/Web/Events')사이트를 참고하면 좋다.

<br>

### DOM Event Flow

HTML Tag가 트리구조로 중첩이 되어있기 때문에 event flow가 발생한다.</br>

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Parcel Sandbox</title>
    <meta charset="UTF-8" />
  </head>

  <body>
    <div class="outer-container">
      <div class="inner-container">
        <button class="button">버튼</button>
      </div>
    </div>
    <script>
      const outerContainer = document.querySelector(".outer-container");
      const innerContainer = document.querySelector(".inner-container");
      const button = document.querySelector("button");

      outerContainer.addEventListener("click", (event) => {
        console.log("outer-container")
      });
      innerContainer.addEventListener("click", (event) => {
        console.log("inner-container")
      });
      button.addEventListener("click", (event) => {
        console.log("button")
      });
    </script>
  </body>
</html>
```
버튼을 클릭하면, 결과는 아래와 같다.
```
button
inner-container
outer-container
```
이런 결과가 나오는 이유는 event flow에서 **capturing**과 **bubbling**이 일어나기 때문이다.</br>
capturing은 크게 중요하지 않고, bubbling을 살펴보자.</br>
bubbling은 한 Element에 이벤트가 발생하면, 이 Element에 할당된 핸들러가 동작하고, 이어서 부모 Element의 핸들러가 동작하는것을 말한다. 가장 최상단의 Element를 만날 때까지 이 과정이 반복된다.

![event-capturing-bubbling-sequence-diagram](https://user-images.githubusercontent.com/60169820/140947092-a254bcc7-72fc-48d9-808a-f27d300c594f.png)

버블링 때문에 상위 컴포넌트의 이벤트까지 발생하는것을 막기 위해 event.target, event.currentTarget을 비교해 이벤트 발생여부를 정해줄 수 있다.

```jsx
const outerContainer = document.querySelector(".outer-container");
const innerContainer = document.querySelector(".inner-container");
const button = document.querySelector("button");

outerContainer.addEventListener("click", (event) => {
  if (event.target !== event.currentTarget) event.preventDefault();
  else console.log("outer-container");
});
innerContainer.addEventListener("click", (event) => {
  if (event.target !== event.currentTarget) event.preventDefault();
  else console.log("inner-container");
});
button.addEventListener("click", (event) => {
  if (event.target !== event.currentTarget) event.preventDefault();
  else console.log("button");
});
```
다시 버튼을 클릭하면, 결과는 아래와 같다.
```
button
```