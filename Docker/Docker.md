# Docker

### Docker란?
Docker :  개발할 때 필요한 거의 모든 환경들을 `이미지`란 형태로 찾을 수 있다.  
          Go언어로 작성된 리눅스 컨테이너 기반으로하는 오픈소스 가상화 플랫폼이다.  
          현재 Docker 0.9버전 부터는 직접 개발한 libcontainer 컨테이너를 사용하고 있다.  
          `**이미지 : 리눅스 컴퓨터의 특정 상태를 캡쳐해서 박제해 놓은 것`  
          
          
### Docker 이미지란?
- 리눅스에 Node.js가 설치된 상태를 그대로 급속냉동해 클라우드에 올려놓은 것이다.
- 터미널에서 `docker run -it node`를 하면 실행을 위해 도커가 컴퓨터에서 node이미지를 찾는다. 
- 없으면 도커허브에서 이미지를 다운받는다.

### Container란?

Container : 컨테이너는 가상화 기술 중 하나로 대표적으로 LXC(Linux Container)가 있다. 
            기존 OS를 가상화 시키던 것과 달리 컨테이너는 OS레벨의 가상화로 프로세스를 격리시켜 동작하는 방식으로 이루어진다.
           
            
### VM과 Docker의 차이
![9934023E5B8D2CCF15](https://user-images.githubusercontent.com/60416187/125199910-5e9fa700-e2a3-11eb-8e59-6d768f8c29c2.jpg)
