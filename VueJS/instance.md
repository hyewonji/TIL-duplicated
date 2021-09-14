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
