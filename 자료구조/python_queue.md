# 큐(파이썬 사용)

### 큐 구조

- 가장 먼저 넣은 데이터를 가장 먼저 꺼낼 수 있는 구조
- FIFO,(First-In-First-Out), LILO(Last-In-Last-Out)로 부른다.

![https://www.fun-coding.org/00_Images/queue.png](https://www.fun-coding.org/00_Images/queue.png)

```python
import queue # queue 라이브러리 불러오기
data_queue = queue.Queue()

data_queue.put("funcoding")
data_queue.put(1) 

data_queue.get() # 첫번째로 넣은 인자 "funcoding"이 출력되고 삭제된다.
```

### LifoQueue()

- Last In First Out

```python
import queue # queue 라이브러리 불러오기
data_queue = queue.LifoQueue()

data_queue.put("funcoding")
data_queue.put(1) 

data_queue.get() # 마지막으로 넣은 인자 1이 출력되고 삭제된다.
```

### PriorityQueue()

- 각각의 데이터마다 우선순위 데이터를 넣어 우선순위에 따라 데이터를 꺼내는 순서가 달라진다.

```python
import queue # queue 라이브러리 불러오기
data_queue = queue.PriorityQueue()

data_queue.put((10,"korea"))
data_queue.put((5,1))
data_queue.put((15,"china"))

data_queue.get() # 우선순위가 가장낮은(가장 중요한) (5,1)이 출력되고 삭제된다.
```

### 큐가 어디에 많이 쓰일까?

- 멀티 테스킹을 위한 프로세스 스케쥴링 방식을 구현하기 위해 많이 사용된다.
