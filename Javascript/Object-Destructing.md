### Object Destructuring

```jsx
const human = {
	name: 'hyewon',
	lastName: 'ji',
	nationality: 'Korea'
	favFood: {
		breakfast: 'fork',
		lunch: 'kimchi',
		dinner: 'fork + kimchi'
	}
}

const {
	name,
	lastName,
	nationality: difName, //이름을 바꿔줌
	favFood:{dinner,breakfast,lunch} //favFood의 dic안의 요소 탐색
} = human;

console.log(name, lastname, difName);
//hyewon ji Korea
```
