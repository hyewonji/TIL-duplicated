# Vue Instance

### 인스턴스 사용 원리

```jsx
function Vue(){
    this.logText = function(){
        console.log('hello')
    }
}

let vm = new Vue();
vm.logText();
// hello
```
Vue 안의 정의된 함수를 쉽게 쓰기 위함이다.

# this

### Vue에서 this의 쓰임
- 파일 내의 변수를 사용하는데 쓰인다. 
```jsx
<script>
export default {
  name: 'PaymentsHistory',
  data(){
    return {
      name:'혜원',
    }
  },
  methods:{
    nameFormat: function() {
      return `${this.name}🔥`. // data함수에 정의한 변수 name을 다음과 같이 사용한다.
    }
  }
}
</script>
```

- 프로젝트 내의 **전역변수**를 사용할 경우는 $를 사용한다.</br>
ex) `this.$emit`, `this.$router.push('/')`

# Life Cycle Diagram
<img src="https://user-images.githubusercontent.com/60416187/145717251-c38d24d3-8d85-423a-b09a-c4b2ae5e38d3.png" width="700"/>

- beforeCreate : 인스턴스가 생성된 다음 데이터가 초기화 괴는 시점
- created : 인스턴스가 생성된 다음 데이터 초기화가 끝난 시점
- beforeMount : 인스턴스가 DOM 요소에 마운트되는 시점
- mounted : 인스턴스가 DOM 요소에 마운트가 끝난 시점
- beforeUpdate ; 데이터가 수정돼 DOM에 반영되는 시점
- updated : 데이터가 수정돼 DOM에 반영이 끝난 시점
- beforeDestroy : Vue 인스턴스가 폐기되기 전
- destroyed : Vue 인스턴스가 폐기된 다음

[라이프 사이클 상세 설명](https://v3.ko.vuejs.org/api/options-lifecycle-hooks.html#created)

# components naming

Vue.js에서 컴포넌트 네이밍 하는 방법에는 두가지 옵션이 있다.

- kebab-case
- PascalCase

단, 케밥 케이스만 DOM에 바로 사용할 수 있다.

만약 import한 컴포넌트명을 수정하고 싶다면, 다음과 같이 작성해 사용할 수 있다.

```jsx
<template>
	<order-control></order-control>
<template>

<script>
import { orderControl } from '#modules/control-panel'

export default{
	components: {
	    'order-control': orderControl
	}
}
<script>
```
