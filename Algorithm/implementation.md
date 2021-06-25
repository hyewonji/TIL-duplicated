# 구현(Implementation)

- 풀이를 떠올리는 것은 쉽지만 소스코드로 옮기기 어려운 문제를 의미
- 완전탐색 유형과 시물레이션 유형이 포함됨
- 구현문제 유형
  - 알고리즘은 간단한데 코드가 지나칠 만큼 길어지는 문제
  - 실수 연산을 다루고, 특정 소수점 자리까지 출력해야 하는 문제
  - 문자열을 특정한 기주에 따라 끊어 처리해야 하는 문제
  - 적절한 라이브러리를 찾아서 사용해야 하는 문제
- Tip : 완전탐색으로 풀 수 있는지 생각해보고 불가능할 것 같으면 Greedy나 DP로 풀어본다.
  - 문제가 큰 문제와 작은문제로 나눠지고 작은문제에서 나온 답이 큰 문제에서 사용되면 DP문제일 경우가 많다.

1. 방향 벡터 활용

   ```python
   #2차원 공간에서 x는 행, y는 열을 의미

   #동, 북, 서, 남
   dx = [0, -1, 0, 1]
   dx = [1, 0, -1, 0]
   ```

2. 시각

   - 정수 N이 입력되면 00시 00분 00초부터 N시 59분 59초까지의 모든 시각 중에서 3이 하나라도 포함되는 모든 경우의 수를 구하는 프로그램을 작성해라.
   - 하루는 24 _ 60 _ 60 = 86400초 이므로 모든 경우의 수가 작아서 완전탐색으로 문제를 푼다.

   ```python
   h = int(input())

   count = 0
   for i in range(h + 1):
   	for j in range(60):
   		for k in range(60):
   			if '3' in str(i) + str(j) + str(k):
   				count += 1

   print(count)
   ```

3. 상하좌우

   - 여행가 A는 N x N 크기의 정사각형 공간 위에 서 있다. 이 공간은 1 x 1 크기의 정사각형으로 나누어져 있다. 가장 왼쪽 위 자표는 (1, 1)이며, 가장 오른쪽 아래 좌표는 (N, N)에 해당한다. 여행가 A는 상, 하, 좌, 우 방항으로 이동할 수 있고, 시작 좌표는 항상 (1, 1)이다. 우리 앞에는 여행가 A가 이동할 계획이 적힌 계획이 놓여있다.(1 ≤ N ≤ 100, 1 ≤ 이동 횟수 ≤ 100)
   - 계획서에는 하나의 줄에 띄어쓰기를 기준으로 하여 L, R, U, D (왼쪽, 오른쪽, 위, 아래로 한 칸 이동)중 하나의 문자가 반복적으로 적혀 있습니다.

   ```python
   n = int(input())
   x, y = 1, 1
   plans = input().split()

   dx = [0,0,-1,1]
   dy = [-1,1,0,0]
   move_types = ['L','R','U','D']

   for plan in plans:
   	for i in range(len(move_types)):
   		if plan == move_type[i]:
   			nx = x + dx[i]
   			ny = y + dy[i]

   	if nx < 1 or ny < 1 or nx > 1 or ny > n:
   			continue

   	x, y = nx, ny

   print(x, y)
   ```

4. 문자 재정렬

   - 알파벳 대문자 숫자로만 구성된 문자열이 입력으로 주어진다. 이때 모든 알파벳을 오름차순으로 정렬하여 이어서 출력한 뒤, 그 뒤에 모든 숫자를 더한 값을 이어 출력한다.
   - K1KA5CB7이라는 값이 들어오면 ABCKK13을 출력

   ```python
   data = input()
   result = []
   value = 0

   for x in data:
   	if x.isalpha():
   		result.append(x)
   	else:
   		value += int(x)

   result.sort()

   if value != 0:
   	result.append(str(value))

   # 출력 구분자를 설정해주는 코드
   print(''.join(result))
   ```
