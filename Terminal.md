# 터미널 사용방법

터미널 : 사용자와 컴퓨터 사이의 인터페이스
터미널은 shell을 기본적으로 사용

shell : 문자기반의 명령어들을 컴퓨터 언어로 변환하여 컴퓨터와 소통을 가능하게 해준다.

## Mac

### cd(change directory) : 디렉토리 경로를 변경

- cd(cd ~) + Enter : home 디렉토리로 이동(User/jihyewon)
- cd / : 사용자의 폴더중 제일 상위 단계 폴더 Root 디렉토리로 이동 가능
- cd .. : 하위 디렉토리로 이동
- cd + D + tap : 현재 내가 갈 수 있는 폴더들 중 D로 시작하는 폴더가 리스팅 된다. 여기서 탭을 한번 더 눌러주면 하단에 3개중 왼쪽부터 차례로 입력된다.
- pwd : Print Working Directory로 현재 내가 있는 폴더의 위치
- drag and drop : 이동하고 싶은 폴더 드래그 앤 드랍으로 바로 그 폴더 디렉토리로 갈 수 있다.

특정 디렉토리로 이동 : cd /Users/사용자이름(?)/Desktop/python

→ 바탕화면의 python폴더로 직행할 수 있다.(Root부터 시작을 하기 때문에 **/Users/사용 이름**을 꼭 명시 해줘야됨.)

### ls(List Segments) : 디렉토리 내 현재 파일 리스트를 출력

- ls + -a : 숨겨진 파일/폴더 보여주기
- ls + -l : shown as list.
- ls + -la : 숨겨진 파일/폴더 리스트로 보여줌
- ls + [옵션명] + [경로명] : 명시한 경로를 옵션에맞게 보여줌

```
명시한 경로의 하위 파일/디렉토리 나열

$ls -l /example/exampleDir
```

- F : 디랙토리 이름 뒤에 slash(‘/’), 실행가능한 파일 뒤에 (‘\*’) 심볼릭 링크 뒤에 (‘@’)를 붙여서 보여준다.
- .bash_profile에 내가 원하는 커맨드 + 플래그를 alias로 등록해면 매번 플래그를 입력하지 않아도 편하게 사용 가능.

  ```
  $ vim ~/.bash_profile
  alias ls="/bin/ls -al"
  ```

### CP(Copy)/ MV(Move)

cp [원본파일][대상파일] / mv [원본파일][대상파일]

```
/example 디렉토리의 ExampleFile 파일을 /examplee 디렉토리로 복사/이동
$cp /example/exampleFile /examplee/exampleFile
$mv /example/exmpleFile /examplee/exmapleFile

/example 디렉토리의 ExampleDir 디렉토리 및 하위파일을 /examplee 디렉토리의 ExampleDirectory로 복사/이동
$cp -r /example/exampleFile /examplee/exampleDirectory
$mv -r ./example/exampleDir ./examplee/exampleDirectory
```

### touch / mkdir/ echo

touch / make directory (mkdir)

```
/example 디렉토리에 exmpleFile 이름의 빈 파일 생성
$touch /example/exampleFile

/example 디렉토리에 exampleDirectory 이름의 빈 디렉토리 생성
$mkdir /example/exampleDirectory

/'project test'라는 내용이 있는 test.html 파일을 생성
$echo 'project test' > test.html

/무시해야할 소스파일 만들기. 소스파일 버전관리.
$<파일명> .gitignore
```

### rm / rmdir

remove / remove directory

```
/example 디렉토리의 exampleFile을 삭제
$rm /example/exampleFile

/example 디렉토리의 exampleDir 디렉토리를 삭제
$rm -rf /example/exampleDir
$rmdir /example/exampleDir
```
