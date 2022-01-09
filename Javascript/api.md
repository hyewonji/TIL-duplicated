# Api 정리

## tabindex
- DOM요소의 포커스 조정가능한 HTML tag attributes이다.
- 키보드 이벤트를 받을수 없는 div 테그에 포커스를 주어 키보드 이벤트를 받는 등의 일을 할 수 있다.

```
// Tab키를 눌렀을 때 focus를 받을 수 있는 요소가 focus를 못 받도록 변경
// tabindex = "음수"

// Tab키를 눌렀을 때 focus를 받지 못하는 요소가 focus를 받도록 변경
tabindex = "0"
​
// Tab키를 눌렀을 때 focus를 받는 순서를 첫번째로 변경
tabindex = "양수"
```
