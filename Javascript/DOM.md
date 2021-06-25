# DOM(Document Object Model)

## DOM이란?

DOM은 원본 단순 HTML을 JS가 이해할 수 있는 객체 형태로 파싱한 것이다.
조작하고 싶은 요소를 찾고, 속성(스타일, 텍스트 등)을 조작을 할 수있게 하는 Method와 Property를 제공한다.

DOM의 개체 구조는 `노드 트리`로 표현된다.
아래 HTML은 루트 요소인 `<html>` 은 `부모 줄기`, 루트 요소에 내포된 `태그`들은 `자식 나뭇가지`, `요소` 안의 컨텐츠는 `잎`에 해당한다.
![https://i2.wp.com/oursmalljoy.com/wp-content/uploads/2020/12/DOM.jpg?resize=1200%2C416&ssl=1](https://i2.wp.com/oursmalljoy.com/wp-content/uploads/2020/12/DOM.jpg?resize=1200%2C416&ssl=1)

### DOM의 역할

1. 브라우저가 자동으로 소스 코드의 오류를 수정한다.
   body, head 없이 작성된 html을 개발자 도구 통해 살펴보면 head와 body가 생성된것을 볼 수 있다.
2. 클라이언트 즉, JavaScript에 의해 수정된다.

### Node란?

[Node](https://developer.mozilla.org/ko/docs/Web/API/Node)는 여러 가지 DOM 타입들이 상속하는 인터페이스이다.
다음 인터페이스들은 모두 Node로부터 Method와 Properties를 상속한다.
Document, Element, CharacterData (Text, Comment, CDATASection이 상속), ProcessingInstruction, DocumentFragment, DocumentType, Notation, Entity, EntityReference

### [Document Node](https://developer.mozilla.org/ko/docs/Web/API/Document)

```jsx
document.body();
document.head();
document.querySelector();
```

중요한 요소들을 접근하기 쉽게 만들어 놓았다.

### [Document Element](https://developer.mozilla.org/ko/docs/Web/API/Element)

Document Element 는 HTML Tag인 요소들을 다루는 것이다.

```jsx
createElement();
tagName; // 요소에 호출된 태그 명을 가져온다.
children; // 호출된 요소의 모든 자식 노드의 elements를 담고있는 실시간 HTMLCollection을 반환.
getAttribute();
setAtrribute();
hasAttribute();
removeAttribute();
classList(); // (add, remove, toggle이 있고 setAttribute('class','children')는 class를 대체한다는 점에서 classList와 다르다.)
```

### DOM Event

이벤트 발생시 처리할 함수를 연결시켜줌(=event handler, event listener, evet 콜백함수)

```jsx
addEventListener(type: "click", listener[, options])
// [, options]는 필수 아님
// onClick : addEventListener 가 인자를 3개 받기 때문에 좀더 정교하게 조작 할 수 있음.
```

```jsx
//event type
load,
  scroll,
  resize,
  blur,
  focus,
  change,
  submit,
  click,
  mousedown,
  mouseenter,
  mouseleave,
  mouseup;
```

### DOM Event Flow

HTML Tag가 트리구조로 중첩이 되어있기 때문에 event flow가 발생한다.

**currentTarget과 target**
![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/84525734-cf3d-4332-b305-0fceedc0975a/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/84525734-cf3d-4332-b305-0fceedc0975a/Untitled.png)

**Event Flow**
![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/00b4b1f0-5f08-4825-be92-ce2f057a0c9c/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/00b4b1f0-5f08-4825-be92-ce2f057a0c9c/Untitled.png)

- Browser의 defualt값은 Bubble이다.
- `addEventListener`의 세번째 인자
  - true : Capture phase
  - flase : Bubble phase
  - 지정 안함 : Bubble phase
