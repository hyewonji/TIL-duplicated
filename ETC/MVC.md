# MVC pattern

Vue에서 MVC 패턴을 사용해 개발을 하게되어 공부한내용을 정리하고자 한다.

## 기본규칙
1. Model은 Controller와 View에 의존하지 않아야 한다.
    
    ( Model 내부에 Controller와 View에 관련된 코드가 있으면 안된다. )
    
2. View는 Model에만 의존해야 하고, Controller에는 의존하면 안 된다.
    
    ( View 내부에 Model의 코드만 있을 수 있고, Controller의 코드가 있으면 안 된다. )
    
3. View가 Model로부터 데이터를 받을 때는, 사용자마다 다르게 보여줘야 하는 데이터에 대해서만 받아야 한다.
4. Controller는 Model과 View에 의존해도 된다.
    
    ( controller 내부에는 Model과 View의 코드가 있을 수 있다. )
    
5. View가 Model로부터 데이터를 받을 때, 반드시 Controller에서 받아야 한다.
