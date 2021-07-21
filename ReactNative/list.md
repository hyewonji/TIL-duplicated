# list를 나타내는 방법

### 1. FlatList

```jsx
import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
```
- react native 에서 제공해주는 FlatList를 사용해 리스트를 나타낼 수 있다.
- ScrollView에 비해 많은 양의 데이터를 보여주기에 좋다.

### 2. Component
- 컴포넌트화 한다.

### 3. RecyclerListView
- 3rd-party 라이브러리 RecyclerListView를 사용한다.

---------------------------------
<img width="1047" alt="스크린샷 2021-07-21 오후 9 50 24" src="https://user-images.githubusercontent.com/60416187/126491501-43fd58bd-f20d-499f-9084-63779f5396fc.png">
출처 : https://gorapaduck.tistory.com/entry/React-Native-ScrollView-vs-FlatList-vs-RecyclerListView
