# Rest API

- 기계와 기계가 규격화된 방식으로 웹을 이용해 자원의 상태를 통신하도록 돕는 통신규약
- API : 컴퓨터에 기능을 실행시키는 방법
- REST API 는 HTTP를 이용하기 때문에 웹의 장점을 최대한 활용할 수 있다.

<br/>

### 구성

1. 자원(Resource) : 해당 소프트웨어가 관리하는 모든것
2. 행위(Method)
   - Create - POST
   - Read - GET
   - Update - PUT, FETCH
   - Delete - DELETE
3. 표현(Representations) 
   - 클라이엉트가 자원 상태에 대한 조작을 요청하면 서버는 이에 적절한 응답(Representations)을 보낸다.
   - 자원은 JSON, XML, TEXT, RSS 등의 형태의 Presentation으로 타나내어 질 수 있다.

<br/>

### Rest API 통신

- HTTP URI(Uniform Resource Identifier)를 통해 자원(Resource)을 명시한다. 
- HTTP Method(POST, GET, PUT, DELETE)를 통해 해당 자원에 대한 CRUD Operation을 적용해 통신한다.
- Server-Client 구조이다.
- 무상태(Stateless)성을 가져 정보를 저장하지 않는다.
- 캐시처리가 가능하다.(Cacheable)
- REST Servet는 다중계층으로 구성될 수 있다.

<br/>


### Post

- POST를 통해 해당 URI를 요청하면 리소스를 생성

<br/>

### GET

- 콜렉션 읽기
- Element 읽기(데이터의 식별자를 'fetch/2'와 같이 뒤에 붙여준다)

<br/>

### FETCH, PUT

- 부분수정 : fetch
- 전체수정 : put 전체가 수정되므로 전송하지 않은 데이터는 모두 삭제된다.

<br/>

### Delete

- 데이터 삭제(콜렉션 삭제, Element삭제가 모두 가능)
