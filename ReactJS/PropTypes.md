# PropTypes

- 앱이 커짐에 따라 타입 확인을 하면 많은 버그를(bug) 잡을 수 있다.
- React에서 PropTypes를 사용해 타입을 확인한다.

```jsx
import React, { Component } from "react";
import PropTypes from "prop-types";

class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

Greeting.propTypes = {
  name: PropTypes.string,
};
```

<br/>

1. 초기 Prop 값

```jsx
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

// props의 초깃값을 정의합니다.
Greeting.defaultProps = {
  name: "Stranger",
};

// "Hello, Stranger"를 랜더링 합니다.
ReactDOM.render(<Greeting />, document.getElementById("example"));
```

- defaultProps 프로퍼티를 할당함으로써 props의 초깃값을 정의할 수 있다.

<br/>

2. 하나의 자식만 요구하기

```jsx
import PropTypes from "prop-types";

class MyComponent extends React.Component {
  render() {
    // 이것은 반드시 하나의 엘리먼트여야 합니다. 아니라면, 경고(warn)가 일어날 것입니다.
    const children = this.props.children;
    return <div>{children}</div>;
  }
}

MyComponent.propTypes = {
  children: PropTypes.element.isRequired,
};
```

- PropTypes.element를 이용하여 컴포넌트의 자식들(Children)에 단 하나의 자식(Child)만이 전달될 수 있도록 명시할 수 있다.

<br/>

3. Function Components

```jsx
import PropTypes from "prop-types";

function HelloWorldComponent({ name }) {
  return <div>Hello, {name}</div>;
}

HelloWorldComponent.propTypes = {
  name: PropTypes.string,
};

export default HelloWorldComponent;
```

- 함수형 컴포넌트에 PropTypes 지정 하는 방법이다.
  <br/>

4. PropTypes의 타입 종류

```jsx
import PropTypes from "prop-types";

MyComponent.propTypes = {
  // 가능한 props의 타입들
  // 모두 선택 사항이다.
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,

  // Render 가능한 객체 타입
  // 숫자(numbers), 문자(strings), 엘리먼트(elements), 또는 이러한 타입들(types)을 포함하고 있는 배열(array) (혹은 배열의 fragment)
  optionalNode: PropTypes.node,

  // React 엘리먼트.
  optionalElement: PropTypes.element,

  // React 엘리먼트 타입 (ie. MyComponent)
  optionalElementType: PropTypes.elementType,

  // JavaScript의 instanceof 연산자를 사용해 prop가 클래스의 인스턴스임을 선언
  optionalMessage: PropTypes.instanceOf(Message),

  // 열거형(enum)으로 처리하여 prop가 특정 값들로 제한되도록 설정
  optionalEnum: PropTypes.oneOf(["News", "Photos"]),

  // 여러 종류중 하나의 종류가 될 수 있는 객체
  optionalUnion: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Message),
  ]),

  // 특정 타입의 행렬
  optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

  // 특정 타입의 프로퍼티 값들을 갖는 객체
  optionalObjectOf: PropTypes.objectOf(PropTypes.number),

  // 특정 형태를 갖는 객체
  optionalObjectWithShape: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number,
  }),

  // An object with warnings on extra properties
  optionalObjectWithStrictShape: PropTypes.exact({
    name: PropTypes.string,
    quantity: PropTypes.number,
  }),

  // prop가 반드시 있어야 한다는 설정
  requiredFunc: PropTypes.func.isRequired,

  // 모든 데이터 타입이 가능한 필수값
  requiredAny: PropTypes.any.isRequired,

  // 사용자 정의 유효성 검사기를 지정할 수 있다.
  // 검사 실패 시에는 에러(Error) 객체를 반환해야 한다.
  // `oneOfType`안에서는 작동하지 않으므로 `console.warn` 혹은 throw 하면 안된다.
  customProp: function (props, propName, componentName) {
    if (!/matchme/.test(props[propName])) {
      return new Error(
        "Invalid prop `" +
          propName +
          "` supplied to" +
          " `" +
          componentName +
          "`. Validation failed."
      );
    }
  },

  // `arrayOf` 와 `objectOf 에 사용자 정의 유효성 검사기를 적용할 수 있다.
  // 검사 실패 시에는 에러(Error) 객체를 반환해야 한다.
  // 유효성 검사기는 배열(array) 혹은 객체의 각 키(key)에 대하여 호출된다.
  // 유효성 검사기의 첫 두 개의 변수는 배열 또는 객체 자신과 현재 아이템의 키다.

  customArrayProp: PropTypes.arrayOf(function (
    propValue,
    key,
    componentName,
    location,
    propFullName
  ) {
    if (!/matchme/.test(propValue[key])) {
      return new Error(
        "Invalid prop `" +
          propFullName +
          "` supplied to" +
          " `" +
          componentName +
          "`. Validation failed."
      );
    }
  }),
};
```
