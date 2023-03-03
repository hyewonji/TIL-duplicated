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