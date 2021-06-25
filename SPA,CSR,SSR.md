# 웹 동작원리

### SPA : Single Page Application

<img width="400" alt="" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c4825c10-32b9-4eaf-8d24-6900cdfcd9d9/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210507T074833Z&X-Amz-Expires=86400&X-Amz-Signature=494ff7f032119ddb9cb4f83033adf055c09c3e4abae87dbf959eaf8019f5d384&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22">

- `웹 사이트가 고도화`됨에 따라 한 페이지에 해당하는 용량이 커져, 매번 새로운 페이지를 전달하는게 버거워졌다.
- `단 하나의 HTML 문서`로만 돌아가는 웹페이지, `사용자의 요청`에 따라 내용이 `동적(dynamic)`으로 바뀌는 SPA가 등장했다.
- 브라우저에 최초에 한번 페이지 전체를 로드하고, 이후부터는 특정 부분만 `Ajax`를 통해 데이터를 바인딩하는 방식이다.
    - Asynchronous Javascript And Xml비동기식 자바스크립트와 xml)
    - JavaScript를 사용한 비동기 통신, 클라이언트와 서버간에 XML 데이터를 주고받는 기술
- 대표적인 라이브러리/프론태프레임워크는 `React`, `Vue`, `Anguler`가 있다.
    - Virture DOM(실제 DOM 트리를 흉내 낸 가상의 객체 트리)을 사용한다.
    - Virture DOM의 가상트리에 변경이 생기면 모든 변화를 모아 단 한번 브라우저를 호출해 화면을 갱신하는 방법.
- HTML5의 history api를 이용해 새로고침 없이 페이지를 전환한다.

### CSR : Cilent Side Rendering

<img width="600" alt="스크린샷 2021-05-06 오후 9 18 11" src="https://user-images.githubusercontent.com/60416187/117415823-b3493d80-af53-11eb-9a5f-5e4a75dbda10.png">

- CSR방식은 최초 요청시에 HTML을 비롯해 CSS, Javascript, 로직 등 각종 `리소스`를 받아온다.
- 이후에는 서버에 `데이터만 요청`하고, `자바스크립트`로 `뷰를 컨트롤` 한다.(동적 html생성)
- 만약 인터넷 속도가 아주 느리다면, 유저는 제대로된 화면을 한참 후에나 만나볼 수 있을 것이다. 일단 처음 받게될 HTML은 빈페이기 때문
- 초기 요청 때 SSR 보다 많은 리소스를 요청하기 때문에, `초기렌더링은 속도`는 SSR보다 `느리다`.
- 초기 렌더링 이후 다른 페이지로의 이동시에는 `SSR 보다 빠른` 페이지 전환 속도와 더 나은 사용자 경험을 제공한다.
- lazy loading을 지원해준다
    - lazy loading이란 ? 페이지 로딩 시 중요하지 않은 리소스의 로딩을 늦추는 기술(Ex. 스크롤 내려야만 해당 이미지 보이게 하는 것)
- 사용자가 가장 필요로하는 정보를 첫번째로 보여줄 수 있도록 JS 파일을 효율적으로 많이 분할하는것이 중요하다.
- `SEO를 제공하지 않는다` : 네에버, 다음은 자바스크립트를 해석할 수 있는 엔진이 없어 빈 페이지로 인식한다.

**구글은 크롤러 안에 JS엔진이 들어있어, 크게 문제될게 없다. 

### SSR : Server Side Rendering

<img width="600" alt="스크린샷 2021-05-06 오후 9 20 01" src="https://user-images.githubusercontent.com/60416187/117415836-b6dcc480-af53-11eb-9703-8162c19c2a71.png">

- 서버사이드 렌더링 프레임워크에는 `next.js`, `gatby`가 있다.
- 모든 컨텐츠가 HTML에 담겨있어 `초기 렌더링 시간이 짧다`.
- 모든 컨텐츠가 HTML에 담겨있어 `SEO` 적용하기 용이하다.
- 모든 요청에 관해 필요한 부분만 수정하는 것이 아닌, 완전히 `새페이지`를 로딩하고 렌더해준다.(새로고침)
- 사용자 경험 좋지 않다
    - 웹사이트 클릭시, 전체 파일을 다시 서버에서 받아오기 때문에 `깜빡임 이슈`가 발생
    - 전체를 로딩하다보니 `렌더링 속도`가 CSR보다 `느리고`, `과부하` 걸릴 수 있다.
    - 화면단에는 html요소들이 보이지만, JS파일이 다 다운로드 되지않아서 버튼이 클릭되지않는 등의 현상이 있을 수 있음
- 사용자가 화면을 볼 수 있을 때 부터, Interaction 할 수 있을 때까지의 `시간차를 줄이도록` 프로그래밍한다.

### CSR으로 SEO하는 방법

- 웹페이지 header에 메타데이터를 정확하게 쓰기

    [https://velog.io/@byseop/SPA에서-서버사이드-렌더링을-구축하지-않고-SEO-최적화하기](https://velog.io/@byseop/SPA%EC%97%90%EC%84%9C-%EC%84%9C%EB%B2%84%EC%82%AC%EC%9D%B4%EB%93%9C-%EB%A0%8C%EB%8D%94%EB%A7%81%EC%9D%84-%EA%B5%AC%EC%B6%95%ED%95%98%EC%A7%80-%EC%95%8A%EA%B3%A0-SEO-%EC%B5%9C%EC%A0%81%ED%99%94%ED%95%98%EA%B8%B0)

- 로그인과 admin 페이지는 CRA로 작업(eject 스크립트를 사용하면 CSR, SSR 혼합사용이 가능하다)하고, 다른 페이지의 노출을 위해 Next.js를 사용한다.
- HTML시맨틱 구조를 잘 활용하여 구글이 크롤링 할 때 더 쉽게 정보를 입력할 수 있게 작업.
