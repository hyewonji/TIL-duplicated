# Linked List

### 목적

- 링크드 리스트를 코드로 직접 구현할 줄 안다.

<br>

### 구조

- 배열은 미리 사용할 공간을 예상해 공간을 마련한다.
- 반면, 링크드 리스트는 필요할 때마다 데이터를 추가할 수 있는 구조이다.(배열의 단점 극복)
- 노드(Node)와 포인터(Pointer)로 구성된다.
  - 노드(Node) : 데이터 저장 단위(데이터값 + 포인터)로 구성
  - 포인터(Pointer) : 각 노드 안에서, 다음이나 이전의 노드와의 연결 정보를 가지고 있는 공간

![https://blog.kakaocdn.net/dn/4IY2U/btqJlujxYtj/ymn3nUgk5DIOh3gXIV6hG1/img.png](https://blog.kakaocdn.net/dn/4IY2U/btqJlujxYtj/ymn3nUgk5DIOh3gXIV6hG1/img.png)


<br>

### 간단한 링크드 리스트 예시

**노드 생성**

```python
class Node: # 데이터값, 포인터를 모두 저장해야 하기 때문에 클래스 사용
	def __init__(self,data,next=None):
		self.data = data
		self.next = next
```

**노드 연결**

```python
node1 = Node(1)
node2 = Node(2)
node1.next = node2
head = node1 #가장 앞의 주소를 명시

```

**데이터 추가**

```python
def add(data):
	node = head # head에는 node1의 값이 저장되어 있다.
	while node.next: # node의 다음 주소가 있는지 확인한다.
		node = node.next
	node.next = Node(data) # 마지막 node.next에 다음 노드 주소 저장(연결함)
```

**예시**

```python
# 해당 노드의 데이터와 다음 노드의 주소를 저장하는 클래스
class Node:
	def __init__(self,data,next = None):
		self.data = data
		self.next = next

class NodeMgmt:
	def __init__(self,data):
		self.head = Node(data)

	# 링크드 리스트 마지막에 노드를 추가하는 함수
	def add(self, data):
		if self.head == '':
			self.head = Node(data)
		else:
			node = self.head

			# node.next가 None이 아니면 node는 node의 next값을 가진다.
			while node.next:
				node = node.next
			node.next = Node(data)

	# 데이터를 모두 순회하면서 출력하는 함수
	def desc(self):
		node = self.head
		while node:
			print(node.data)
			node = node.text

linkedlist1 = NodeMgmt(0)
linkedlist1.desc()
# 데이터를 0 한개만 넣었기 때문에 0 출력

for data in range(1,10):
	linkedlist1.add(data)
linkedlist1.desc()
#
```

<br>

### 링크드 리스트의 장단점

**장점**

- 미리 데이터 공간을 할당하지 않아도 된다.

**단점**

- 연결을 위한 별도 데이터 공간이 필요하기 때문에 저장공간 효율일 높지 않다.
- 연결 정보를 찾는 시간이 필요해서 접근 속도가 느리다.
- 중간 데이터 삭제 혹은 삽입시, 데이터 연결을 재구성해야 하는 작업이 필요 하다.

<br>

### 복잡한 기능의 링크드 리스트

**중간 노드 삽입**

```python
node = head
search = True
while search:
	if node.data == 1:
		search = False
	else:
		node = node.next

node3 = Node(1.5)

node_next = node.next
node.next = node3
node3.next = node_next
```

**중간 노드 삭제**

```python
def delete(self,data):
		if self.head == ":
			print("해당 값을 가진 노드가 없습니다")
			return
		
		if self.head.data == data:
			temp = self.head
			self.head = self.head.next
			del temp
		else:
			node = self.head
			while node.next:
				if node.next.data == data:
					temp = node.next
					node.next = node.next.next
					del temp
					return
				else:
					node = node.next
```

