## **파이썬**

### 기본 문법 중 알아두면 좋은것들!

- 타입 힌트

  ```python
  a: str = "1"
  b: int = 1

  # type 힌트를 줘서 가독성을 높인다.
  # a라는 정수형 변수를 입력받아 true 혹은 false를 리턴할 것이다.
  def fn(a: int) -> bool:
  ```

  - \$ `pip install mypy` : 타입힌트가 잘못 지정된 경우 타입힌트의 오류를 자동으로 확인해준다.

- 리스트 컴프리헨션

  ```python
  # 리스트
  [n*2 for n in range(1,10+1) if n%2 == 1]

  # 딕셔너리
  a = {key: value for key, value in original.item()}
  ```

- 제너레이터

  - yeild, next()를 사용해 필요할때 숫자를 생성한다.
  - 여러 타입의 값을 하나의 함수에서 생성하는것도 가능하다.

  ```python
  def get_natural_number():
  		    n = 0
  				while True:
  					n += 1
  					yield n
  g = get_natural_number()
  for _ in range(0,100):
  				print(next(g)

  1
  2
  ...
  99
  100
  ```

- range

  - 제너레이터의 방식을 활용한다.
  - 리스트와 같이 인덱스에 접근이 가능하다.
  - 실제로 저장하지 않고 생성해야 한다는 조건만 담겨있어 메모리를 적게 차지한다.

  ```python
  a = [n for n in range(1000000)]
  b = range(1000000)

  sys.getsizeof(a)
  8697464
  sys.getsizeof(b)
  48
  ```

- enumerate

  - 자료형을 인덱스를 포함한 enumerate 객체로 리턴한다.

  ```python
  for i,v enumerate(a):
      print(i,v)
  ```

- 나눗셈 연산자

  ```python
  # divmod: 몫과 나머지를 한번에 구할 때 사용
  divmod(5,3)
  (1,2)
  ```

- print

  - sep: 파라미터로 구분

  ```python
  print("A1","B2",sep=",")
  A1,B2
  ```

  - end: 줄바꿈을 하지 않고 출력

  ```python
  print("aa",end=" ")
  print("bb")
  aa bb
  ```

  - join: 리스트를 출력

  ```python
  a = ['A','B']
  print(' ',join(a))
  A B
  ```

  - f-string (버전 3.6+에서만 지원한다.)

  ```python
  idx = 1
  fruit = "Apple"
  print(f'{idx+1}: {fruit}')
  2: Apple
  ```

- locals

  - 로컬에 선언된 모든 변수를 조회할 수 있다.

  ```python
  # pprint로 출력하면 보기 좋게 줄바꿈 처리를 해준다.
  import pprint
  pprint.pprint(local())
  {'num': [2,7 11 15],
  'pprint': <module 'pprint' from '/usr/lib/python3.8/pprint.py'>,
  'target': 9}
  ```
