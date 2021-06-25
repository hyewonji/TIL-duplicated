# CORS

### CORS란?

- `Cross-Origin Resource Sharing`의 줄임말이다.
- 즉, `다른 출처간의 리소스 공유`라는 의미이다.
- 아래 그림에서 Origin은 `스킴`, `호스트`, `포트번호`를 포함한다.
  ![https://user-images.githubusercontent.com/60416187/114274245-75422200-9a58-11eb-8438-4edda01d163b.jpeg](https://user-images.githubusercontent.com/60416187/114274245-75422200-9a58-11eb-8438-4edda01d163b.jpeg)

</br>

### SOP란?

- `Same-Origin Policy`의 줄임말이다.
- "`같은 출처에서만 리소스를 공유`할 수 있다”라는 규칙을 가진 정책이다.
- 그러나, 웹에서는 오픈스페이스 환경에서 다른 출처에 있는 리소스를 가져와서 사용하는 일은 굉장히 흔한 일이다.
- 이 때문에 출처가 다르더라도 `예외 조항`에 포함되는 리소스 요청을 허용하기로 했다.
- 이 중 한개가 `CORS정책을 지킨 리소스 요청`이다.

</br>

### CORS 정책이 꼭 필요한가?

- 어차피 개발자는 정해진 서버하고만 통신을 하도록 어플리케이션을 작성할 텐데 왜 굳이 CORS정책을 만들어서 개발자들을 귀찮게 할까?

1. 웹에서 돌아가는 클라이언트 어플리케이션은 `사용자의 공격에 취약`하다.
2. 개발자도구로 DOM이 어떻게 작성되어있는지, 어떤 서버와 통신하는지, 리소스의 출처는 어디인지와 같은 각종 정보들을 아무런 제재없이 열람할 수 있다.
3. 자바스크립트가 난독화 되었다고 하지만 암호화가 아니기 때문에 보안이 취약하다.
4. 이러한 보안 취약점 때문에 CSRF(Cross-Site Request Forgery)나 XSS(Cross-Site Scripting)와 같은 공격으로 사용자 정보를 탈취할 수 있다.

</br>

### CORS가 동작하는 방법

1. 웹 클라이언트 어플리케이션이 다른 출처의 리소스를 요청할 때는 `HTTP 프로토콜을 사용하여 요청`을 보낸다.
2. 응답을 받은 브라우저는 자신이 보냈던 요청의 `Origin`과 서버가 보내준 응답의 `Access-Control-Allow-Origin`을 `비교`해본 후 이 응답이 유효한 응답인지 아닌지를 결정한다.

</br>

### CORS가 동작하는 방식

- CORS가 동작하는 방식은 3가지로 분류된다.
- 시나리오들을 알아두면 CORS 정책 위반으로 인한 문제가 발생했을 경우 삽질하는 시간을 단축할 수 있ㄷ.

</br>

**Preflight Request**

- 일반적으로 우리가 웹 어플리케이션을 개발할 때 가장 마주치는 시나리오이다
- 브라우저가 `예비 요청`과 `본 요청`을 나누어 서버로 전송한다.
- 이때 브라우저가 본 요청을 보내기 전에 보내는 예비 요청을 Preflight라고 부르는 것이며, 이 예비 요청에는 HTTP 메소드 중 OPTIONS 메소드가 사용된다.
- 예비 요청의 응답을 받은 이후 CORS 정책 위반 여부를 판단하기 때문에 `예비 요청 응답코드`와 `CORS정책 위반 여부`는 `상관이 없다.`
- 응답 헤더에 `Access-Control-Allow-Origin`의 존재 여부가 중요하다.

![https://evan-moon.github.io/static/c86699252752391939dc68f8f9a860bf/21b4d/cors-preflight.png](https://evan-moon.github.io/static/c86699252752391939dc68f8f9a860bf/21b4d/cors-preflight.png)

</br>

**Simple Request**

- 예비 요청을 보내지 않고 `바로 서버에게 본 요청`을 하는 시나리오이다.
- Preflight Request에서 예비 요청이 빠진 시나리오다.
- 응답받은 헤더에 `Access-Control-Allow-Origin`과 같은 값이 있다면, 브라우저가 CORS 정책 위반 여부를 검사하는 방식이다.

![https://evan-moon.github.io/static/d8ed6519e305c807c687032ff61240f8/21b4d/simple-request.png](https://evan-moon.github.io/static/d8ed6519e305c807c687032ff61240f8/21b4d/simple-request.png)

- `특정 조건을 만족하는 경우에만` 예비 요청을 사용할 수 있지만, 웹 어플리케이션의 경우 이 조건을 모두 충족시키는 경우는 거의 없어 많이 사용하지 않을 것이다.

</br>

**Credentialed Request**

- `인증된 요청을 사용`하는 시나리오이다.
- 다른 출처 간 통신에서 좀 더 `보안을 강화하고 싶을 때` 사용하는 방법이다.
- 기본적으로 브라우저가 제공하는 비동기 리소스 요청 API인 XMLHttpRequest 객체나 fetch API는 별도의 옵션 없이 브라우저의 쿠키 정보나 인증과 관련된 헤더를 함부로 요청에 담지 않는다.
- 이때 요청에 인증과 관련된 정보를 담을 수 있게 해주는 옵션이 바로 credentials 옵션이다.
  - same-origin : 같은 출처 간 요청에만 인증 정보를 담을 수 있다.
  - include : 모든 요청에 인증 정보를 담을 수 있다.
  - omit : 모든 요청에 인증 정보를 담지 않는다.
