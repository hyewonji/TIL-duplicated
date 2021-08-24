# React Navigation 스텍 변경하기

- RN앱을 개발하던 중, 프로필 수정 완료후 `navigation.navigate('profliePage')`를 사용했더니 프로필 수정 완료 후 프로필 페이지에서 뒤로가기 버튼을 눌렀을 때 다시 프로필 수정페이지로 가는 문제가 발생했다.
- **프로필 페이지 → 프로필 수정 페이지 → 프로필페이지** 순서로 스텍이 쌓였기 때문이다.
- 이를 해결하기 위한 두가지 방법이 있다.

</br>

### navigation.reset

```jsx
const resetAction = StackActions.reset({
  index: 1,
  actions: [
    NavigationActions.navigate({ routeName: 'MainPage' }),
    NavigationActions.navigate({ routeName: 'ProfilePage' }),
  ],
});
```

- `스텍을 재정의` 해주는 방법이다.
- actions에 있는 배열의 순서로 스텍이 새로 쌓이게 되고 index는 스텍이 재정의 된 후에 보여지는 페이지이다.
- 이방법을 사용하면 프로필 수정 후에는 [메인페이지, 프로필페이지]만 스텍에 쌓여있어 문제를 해결 할 수 있다.

</br>

### navigation.replace

```jsx
navigation.dispatch(
  StackActions.replace('ProfilePage'),
);
```

- `StackActions.replace`를 사용해 현재 프로필 수정 스텍을 ProfilePage으로 바꾼다.
- 이 방법을 사용하면 이전에 쌓인 스텍은 그대로 있고 현재 페이지만 원하는 페이지로 바꿀 수 있다.
