# computed vs watch

## Computed

Vue.js는 template, script, style이 분리되어있다. 따라서 template에는 표현식을 사용할 수는있지만 많은 연산을 하도록 하는것은 좋지 않은 방법이다.

따라서  computed 속성을 사용해 template 내 연산을 줄일 수 있다.

### 간단한 예제( Vue.js Docs 참조 )

**잘못된 코드**

```
<div id="example">
  {{ message.split('').reverse().join('') }}
</div>

```

위 코드는 가독성을 떨어트린다.

**수정한 코드**

```
<template>
	<div id="example">
	  <p>원본 메시지: "{{ message }}"</p>
	  <p>역순으로 표시한 메시지: "{{ reversedMessage }}"</p>
	</div>
</template>

<script>
	export default {
	  el: '#example',
	  data: {
	    message: '안녕하세요'
	  },data
	  computed: {
	    // 계산된 getter
	    reversedMessage: function () {
	      // `this` 는 vm 인스턴스를 가리킵니다.
	      return this.message.split('').reverse().join('')
	    }
	  }
	}
</script>

```

message가 수정되었을 때 computed가 새로운 값을 반환한다.

### 주의할 점

computed를 속성으로 사용하면 캐시가 된다. 위의 코드에서는 message가 변하지 않는이상 computed 속성인 reverseMessage를 여러번 호출해도 다시 계산하지 않고 캐시 되어있던 정보를 보여준다.

만약, 값을 매번 렌더링하고 싶다면, **메소드**를 사용해 값을 리턴해주는 방식으로 구현할 수 있다. 호출 방법은 다음과 같다.

```
<template>
	<div id="example">
	  <p>원본 메시지: "{{ message }}"</p>
	  <p>역순으로 표시한 메시지: "{{ reversedMessage() }}"</p> // reversedMessage() 함수 호출
	</div>
</template>

```

## watch

```
<template>
  <div>
    <p>원본 메시지: "{{ message }}"</p>
    <p>역순으로 표시한 메시지: "{{ reversedMessage }}"</p>
  </div>
</template>

<script>
export default {
  name: 'test',
  data(){
    return {
      message: '안녕하세요',
      reversedMessage: ''
    }
  },
  watch: {
    message: function (newVal, oldVal) {
      this.reversedMessage = newVal.split('').reverse().join('')
    }
  }
}
</script>

```

computed는 선언형 프로그래밍 방식이었다면, watch는 명령형 프로그래밍 방식이다.

위의 코드에서 message 데이터가 변화활 때 watch 함수를 실행한다.
특정 프로퍼티의 변경시점에 특정 액션을 취하고자 할때 적합하다. 특정값을 리턴하는 computed와 다르게 리턴하는 값이 없다.
