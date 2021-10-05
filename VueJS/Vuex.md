# Vuex
- Vue 전역 상태관리 툴

**예시**

1.store에 초기 상태와 상태 뮤테이션을 정의한다.
```jsx
// vuex/index.js
const store = new Vuex.Store({
  // state에 초기 상태 정의
  state: {
    isLoggedIn: false,
    adminId: ""
  },
  // mutation에 뮤테이션 정의
  mutations: {
    login (state) {
      state.isLoggedIn = true;
      state.adminId = id;
    }
  }
})
```
</br>

2. store.commit메소드로 상태변경을 트리거 한다.
```jsx
// App.vue
<template>
  <div class="login">
    <h5>로그인</h5>
    <b-form @submit="checkForm" class="formContainer">
      <b-form-group id="group-phoneNum" class="group">
        <b-form-input
          id="phoneNum"
          v-model="phoneNum"
          type="text"
          placeholder="휴대폰 번호"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="group-password" class="group">
        <b-form-input
          id="password"
          v-model="password"
          type="password"
          placeholder="비밀번호"
          required
        ></b-form-input>
      </b-form-group>
      <p v-if="errors">
        {{ errors }}
      </p>
      <b-button type="submit" class="button">로그인</b-button>
    </b-form>
  </div>
</template>

<script>
import { LOGIN } from "../queries";
export default {
  name: "LoginForm",
  data() {
    return {
      errors: "",
      phoneNum: null,
      password: null
    };
  },
  methods: {
    checkForm: function(e) {
      e.preventDefault();
      this.$apollo
        .mutate({
          mutation: LOGIN,
          variables: {
            username: this.phoneNum,
            password: this.password
          }
        })
        .then(res => {
          const adminId = res.data.login.user.id;
          this.$store.commit("login", adminId);  // 로그인 완료시, Vuex store의 상태를 변화시킨다.
          this.$router.push({ name: "bills" });  // 로그인 완료시, 권한이 필요한 페이지로 전환한다.
        })
        .catch(e => {
          this.errors = "핸드폰 번호와 비밀번호를 확인해주세요";
          console.log(e);
        });
    }
  }
};
</script>
```

