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
