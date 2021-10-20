# Apollo Client

**React-Native 프로젝트**에 GraphQl, Apollo-Cli를 사용하면서 Redux, UseContext 등의 상태관리 라이브러리 없이 **Apollo-cli로 전역 상태관리**를 하려한다.

### Apollo Client 작동 원리

<img src="https://user-images.githubusercontent.com/60416187/128115774-5d9c188b-5d02-4633-9af3-5d7ef8fdf3f1.png" alt="drawing" width="700"/>

- Apollo Client의 작동 원리이다.
- 이때 요청한 필드가 로컬에 캐싱되어있지 않다면 GraphQL Server에 원격 필드를 요청한다.
- 이때 요청한 필드가 로컬에 캐싱되어있다면 밑의 그림과 같이 작동한다.

<br>

<img src="https://user-images.githubusercontent.com/60416187/128116150-bdca73b4-5cc8-4e9d-9a3c-d56088be9f1a.png" alt="drawing" width="700"/>

- 이 과정을 통해 클라이언트는 캐싱되어 있는 필드를 서버에 요청하지 않고 바로 가져와 사용할 수 있다.
- 이 작동원리를 보면 알 수 있듯이 Apollo Client는 `캐쉬를 통한 상태관리`를 하고있고 이 흐름대로 로컬상태 또한 관리할 수 있다.
- 다음과 같은 방법으로 Redux, MobX같은 추가적인 상태관리 라이브러리를 사용하지 않고 Apollo Client로 `서버와의 통신`과 `전역 상태관리`가 모두 가능하다.

참고 : https://chanyeong.com/blog/post/45
