# DOM(Document Object Model)

## DOM이란?

DOM은 원본 단순 HTML을 JS가 이해할 수 있는 객체 형태로 파싱한 것이다.
조작하고 싶은 요소를 찾고, 속성(스타일, 텍스트 등)을 조작을 할 수있게 하는 Method와 Property를 제공한다.

DOM의 개체 구조는 `노드 트리`로 표현되는데, 다음 그림에서 HTML tag들은 JS에서 Node로 변환된다.

![https://i2.wp.com/oursmalljoy.com/wp-content/uploads/2020/12/DOM.jpg?resize=1200%2C416&ssl=1](https://i2.wp.com/oursmalljoy.com/wp-content/uploads/2020/12/DOM.jpg?resize=1200%2C416&ssl=1)

<br>

## DOM의 역할

1. 브라우저가 자동으로 소스 코드의 오류를 수정한다.
   body, head 없이 작성된 html을 개발자 도구 통해 살펴보면 head와 body가 생성된것을 볼 수 있다.
2. 클라이언트 즉, JavaScript에 의해 수정된다.

<br>

## Node란?

[Node](https://developer.mozilla.org/ko/docs/Web/API/Node)는 Event Target에 상속되며, Document, Element, Text 등 여러 가지 DOM 타입들을 상속하는 인터페이스이다. HTML의 각각의 tag들이 Javascript에서 Node로 변환된다. 즉, HTML tag 하나하나가 node이다.

<br>

## DOM Event

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

이때, **options**에 once, passive의 설정을 통해 이벤트 옵션을 지정할 수 있다. **once**는 이벤트를 한번만 호출할수 있게 한다. **passive**는 `event.preventDefault()`를 호출하지 않는 scroll 이벤트 같은경우 기본값이 true로 되어있는데 이를 해지하려면 `{ passive: false }`를 해준다.

<br>

### DOM Event type

DOM 이벤트 타입에는 마우스이벤트, 키보드 이벤트, 윈도우 이벤트 등이 있다.
자세한 내용은 [MDN]('https://developer.mozilla.org/en-US/docs/Web/Events')사이트를 참고하면 좋다.

<br>

### DOM Event Flow

HTML Tag가 트리구조로 중첩이 되어있기 때문에 event flow가 발생한다.
이렇게 html을 작성했을때 button을 클릭하게 되면 button을 감싸고 있던 2개의 div에도 click이벤트가 발생하게 된다.

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
        <button class="button" />
      </div>
    </div>
    <script>
      const outerContainer = document.querySelector(".outer-container");
      const innerContainer = document.querySelector(".inner-container");
      const button = document.querySelector("button");

      outerContainer.addEventListener("click", (event) => {
        console.log("outer-container", event.target, event.currentTarget);
      });
      innerContainer.addEventListener("click", (event) => {
        console.log("outer-container", event.target, event.currentTarget);
      });
      button.addEventListener("click", (event) => {
        console.log("button", event.target, event.currentTarget);
      });
    </script>
  </body>
</html>
```

이런 결과가 나오는 이유는 event flow에서 capturing과 bubbling이 일어나기 때문이다.
capturing은 크게 중요하지 않고, bubbling을 살펴보자. bubbling은 한 요소에 이벤트가 발생하면, 이 요소에 할당된 핸들러가 동작하고, 이어서 부모 요소의 핸들러가 동작하는것을 말한다. 가장 최상단의 조상 요소를 만날 때까지 이 과정이 반복되면서 요소 각각에 할당된 핸들러가 동작한다.

![event-capturing-bubbling-sequence-diagram](https://user-images.githubusercontent.com/60169820/140947092-a254bcc7-72fc-48d9-808a-f27d300c594f.png)

버블링 때문에 상위 컴포넌트의 이벤트까지 발생하는것을 막기 위해 event.target, event.currentTarget을 비교해 이벤트 발생여부를 정해줄 수 있다.
