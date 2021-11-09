# MobX 란

- React에서 전역 상태관리를 위한 툴이다. ( Redux와 비교대상이 된다. )
- Redux는 함수형 아이디어이고, MobX는 반응형 아이디어이다.
- 상태를 관찰(observe) 하고상태가 변경되는것을 감지하고 반영한다. 즉, MobX는 상태를 observable하게 관리 하도록 돕는 라이브러리다.

### MobX 작동방식
- 데이터 단방향 흐름 Flux 패턴을 사용한다.
![flow2](https://user-images.githubusercontent.com/60169820/140641877-4dd6eb44-9737-4844-ae7c-6b712981fdbc.png)

</br>
</br>

이번 글에서는 **React에서 mobx 사용**하는 방법을 알아본다.

</br>

### 설치

```
$ npm i mobx mobx-react-light
```

- mobx-react-light : mobx-react의 라이트 버전으로 함수형 컴포넌트만을 지원한다.

### 세팅 - 전역변수 store 설정 및 사용

다음은 [공식문서]('https://mobx.js.org/react-integration.html#tips')에서 전역변수 설정하는 방법 중, React context를 사용한 방법이다.

1. `root/store` 폴더 안에 **stores 생성(observable 변수, action 매서드 포함)**
2. `root/store` 폴더 안에 정의해둔 여러개의 stores를 `root/store`의 `index`파일에서 하나로 합쳐준다.
3. observable 변수를 참조하는 react 컴포넌트를 mobx-react-light의 **obsever로 감싸준다.**
4. store가 들어있는 **context를 생성**하고 app에서 store의 변화를 감지해 rendering 해주기 위해 **context provider로 app을 감싸준다.**

전역 상태를 참조하는 컴포넌트에서 context의 변수 및 action을 사용한다.
