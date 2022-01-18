# HTML로 자동완성기능 구현
 datalist tag를 사용하면 자동완성 기능을 구현할 수 있다.
 
## 특징
- input 입력값과 부분적으로 일치하는 값을 리스트로 보여준다. (candy 입력시 candy가 포함된 모든 값이 리스트에 보여짐)
- 클릭, 키보드 방향키 , 엔터의 이벤트를 받는다.
- 기본적으로 input 내부에 화살표가 있다.<br>
  `input::-webkit-calendar-picker-indicator { opacity: 0; }`로 화살표를 없앨 수 있다.
- 모바일 안드로이드 firefox 제외한 모든 웹, 모바일 브라우저에서 지원한다.

## 코드([MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/datalist) 참고)
```html
<input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice" />

<datalist id="ice-cream-flavors">
    <option value="Chocolate">
    <option value="Coconut">
    <option value="Mint">
    <option value="Strawberry">
    <option value="Vanilla">
</datalist>
```
- input의 list 속성에 보여주고자 하는 datalist의 id값을 입력한다.
- option tag의 value 속성에 자동완성이 필요한 값을 입력한다.
