# 권한 부여

1. Vuex에 login 여부를 저장한다.
2. router의 routes 배열 안에 권한이 필요한 페이지 `meta: { authRequired: true }`를 설정한다.
3. 네비게이션 가드로 `meta: { authRequired: true }`인 path에 접근했을때 이벤트를 설정한다.

```jsx
// router/index.js
import Vue from "vue/dist/vue.js";
import VueRouter from "vue-router";
import store from "../vuex/store";
import LoginForm from "../components/LoginForm.vue";
import PaymentsHistory from "../components/PaymentsHistory.vue";
import Questions from "../components/Questions.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: LoginForm },
  {
    path: "/bills",
    name: "bills",
    component: PaymentsHistory,
    meta: { authRequired: true },  // 2. 권한부여 설정
    props: true
  },
  {
    path: "/questions",
    name: "questions",
    component: Questions,
    meta: { authRequired: true },  // 2. 권한부여 설정
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach(function(to, from, next) {
  // to: 이동할 url에 해당하는 라우팅 객체
  // 3. 권한설정해둔 path에 접근했을때, 이벤트 설정
  if (
    to.matched.some(function(routeInfo) {
      return routeInfo.meta.authRequired;
    })
  ) {
    // 1. vuex store에 저장해둔 로그인 여부를 확인한다.
    if (store.state.isLoggedin) {
      console.log("routing success : '" + to.path + "'");
      next(); // 로그인 완료시 페이지 전환
    } else {
      //로그인 하지 않고 접근하는 경우 경고 창을 띄우고 페이지 전환은 하지 않음
      alert("Login Please!");
    }
  } else {
    console.log("routing success : '" + to.path + "'");
    next(); // 페이지 전환
  }
});

export default router;
```
