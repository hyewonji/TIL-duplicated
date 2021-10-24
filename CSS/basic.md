# CSS

### 성능(Reflow, Repaint)

- Rendring할때, Reflow인지 Repaint인지 따라서 성능차이가 나타난다.
- Reflow는 `DOM의 추가삭제`, `CSS의 기하학적인 변화(높이/넓이/위치)`의 겨우 발생한다.
- Repaint는 `CSS의 기하학적 이외의 변화`가 발생할 경우가 해당된다.
- 브라우저의 성능은 rendering 할 때 가장많이 잡아먹는데 특히 reflow가 순간적으로 많이 발생 할 경우 치명적이다.

<br>

### display: none VS visibility: hidden

**display: none**

- 요소가 보이지 않음
- 레이아웃에 포함되지도 않음
- 렌더링 트리에서 요소를 완전히 제거

**visibility: hidden**

- 요소가 보이지 않음
- 여전히 레이아웃에서 공간을 차지
