# 쓰로틀링 디바운딩

input 값이 변할때마다 해당하는 데이터를 요청하는 기능을 구현했다. ( 자동완성 기능 ) 키보드를 누를때마다 데이터를 요청하기 때문에 불필요한 요청이 발생한다. 이를 해결하기 위한 방법으로 쓰로틀링(throttling)과 디바운싱(debouncing)이 있다.

- 쓰로틀링 : 특정 함수가 호출된 후 일정 시간이 지나기 전에 다시 호출되지 않는 것
- 디바운싱 : 연이어 호출되는 함수들 등 마지막 함수(또는 제일 처음)만 호출하도록 하는것.

쓰로틀링은 스크롤 이벤트 발생시, 디바운싱은 ajax 검색시 주로 사용한다고 한다.

### 쓰로틀링

스크롤이벤트는 스크롤을 조금만 움직여도 많이 발생하기 때문에 콜백함수가 수백번 호출되는 부하가 생긴다. 이를 방지하기 위해 **일정시간에 딱 한번만 실행**되도록 제한을 두는것이 쓰로틀링이다.

```jsx
var throttler 
window.addEventListener('scroll', function (e) { 
	if (throttler) { 
		return 
	} 
	throttler = setTimeout(function() { 
		console.log('스크롤 이벤트 발생!'); 
	}, 200); 
})
```

- 0.2초마다 1번 실행되도록 설정했다.
- 때문에 스크롤을 했을때, 수백번 호출될 콜백함수가 몇번만 호출된다.

### 디바운싱

input 값이 바뀔때마다 api를 호출하게 되면 유효한 값이 아니더라도 api요청이 가기 때문에 불필요한 요청이 발생한다. 이를 방지하기 위해 일정시간 안에 같은 함수가 호출될 경우 이전 이벤트에 기록된 디바운스를 지우고 다시 디바운서를 킨다. 결과적으로 마지막 발생한 이벤트에 대해서만 콜백함수를 호출하게 된다.

```jsx
var debouncer;
document.querySelector('#input').addEventListener('input', function(e) {
  if (debouncer) {
    clearTimeout(debouncer);
  }
  debouncer = setTimeout(function() {
    console.log('여기에 ajax 요청', e.target.value);
  }, 200);
});
```

- 0.2초 이전에 같은 이벤트가 발생하면 이전 이벤트 콜백함수를 지운다.
- ‘hyewon’을 입력했을 경우, api 6번 호출을 1번의 호출로 줄일 수 있다.

**참고** : underscore, loadash 를 사용하고 있다면 해당 라이이브러리 메소드에 쓰로틸링과 디바운싱 메소드를 사용하면 된다.
