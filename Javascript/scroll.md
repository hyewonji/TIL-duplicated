## 특정 Element로 scroll 하기

자동완성 리스트의 키보드 컨트롤을 하기 위한 Javascript 기능을 정리하려 한다. 

- Element.scrollIntoView
- Element.scrollIntoViewIfNeeded()

### **scrollIntoView(**Value || Option**)**

- `value`는 **boolean** 값이고 **defult는 true**이다.
    
    - `true` : 해당 element가 scroll에서 가장 위에 위치하게 한다.
    
    - `false` : 해당 element가 scroll에서 가장 밑에 위치하게 한다.
    
- `option`은 객체로 **block**, **inline**, **behavior** 값을 지정해줄 수 있다.
    
    - `block` : 세로 스크롤의 위치를 설정한다. `start`, `end`, `nearest`
    
    - `inline` : 가로 스크롤의 위치를 설정한다. `start`, `end`, `nearest`
    
      - start, end는 말그대로 scroll의 가장 위, 가장 밑에 위치하게 한다.
      - nearest는 해당 element가 위치하는곳의 가장 가까운 모서리로 위치하게 한다.
        
        (윗부분과 가깝다면 가장 위로 스크롤, 밑부분과 가깝다면 가장 밑으로 스크롤 )
        
    
    - `behavior` : 스크롤 에니메이션을 설정한다. `auto`, `smooth`
    
- **대부분의 브라우저가 지원한다.**

### **scrollIntoViewIfNeeded(**Value**)**

- `value`는 **boolean** 값이고 **defult는 true**이다.
    
    - `true` : 해당 element가 **scroll에서 벗어나면** `center`로 옮겨준다.
    
    - `false` : 해당 element가 **scroll에서 벗어나면** element를 가장 가까운 모서리로 스크롤해준다. (scrollIntoView option의 nearest와 같은 기능이다.)
    
- **firefox에서 지원하지 않는 기능이다.**
