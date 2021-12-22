# CSS에서 몰랏던 지식, 중요한 지식 정리

## HTML table tag에서 border-radius가 적용되지 않는다.

- 이는 table tag 에서 border-collapse속성이 collapse인데 이 속성과 border-radius가 충돌하서 발생하는 문제라고 한다.
- 이를 해결하기 위해서 밑의 코드를 추가해준다.

```css
border-style: hidden;
box-shadow: 0 0 0 1px #000; // table 테두리(두께, 색깔 변경가능 하다)
```

[참고](https://blog.naver.com/handam81/222336995291)
