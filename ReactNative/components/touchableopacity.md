# Touchableopacity

### Sample Example
```jsx
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"; //react-native에서 사용할 jsx 가저온다

const App = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  
  //View가 전체 컴포넌트를 감싸줘야한다.
  //단, View 안에 View를 생설할 수 있다.
  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text>Count: {count}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  //flex 는 Box에서 차지할 공간을 말한다. 
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  }
});

export default App;
```
