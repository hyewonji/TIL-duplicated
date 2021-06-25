# React-Navigation 화면전환
- 'To User Screen' 버튼을 누르면 user.js가 보여진다.
- 'To Home Screen' 버튼을 누르면 home.js가 보여진다.
</br>

### App.js

```jsx
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

// Navigation구조와, 상태를 관리한다. 모든 Navigation 구조는 NavigationContainer안에 들어가야 한다.
import {NavigationContainer} from '@react-navigation/native';
// Screen, Navigator라는 두개의 properties를 리턴
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/home';
import UserScreen from './src/user';

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" Component={HomeScreen} />
          <Stack.Screen name="User" Component={UserScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
```
- NavigationContainer을 통해 Navigation 구조와 상태관리한다. 
- createStackNavigator을 사용해 Screen, Navigator을 활용한다.
- Screen의 component에 navigation prop을 전달해준다.
- Stack.Screen의 props name을 사용해서 화면전환한다.
</br>

### Home.js

```jsx
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

class HomeScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Home Screen</Text>
        <Button
          title="To User Screen"
          onPress={() => {
            this.props.navigation.navigate('User');
          }}
        />
      </View>
    );
  }
}

export default HomeScreen;
```
- Button의 Touch Event로 onPress Props를 정의한다.
- Screen으로부터 전달받은 navigation의 navigate함수를 이용한다.
- App.js에서 Stack.Screen의 name값 을 불러온다.
</br>

### user.js

```jsx
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

class UserScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>User Screen</Text>
        <Button
          title="To Home Screen"
          onPress={() => {
            this.props.navigation.navigate('Home');
          }}
        />
      </View>
    );
  }
}

export default UserScreen;
```
- Button의 Touch Event로 onPress Props를 정의한다.
- Screen으로부터 전달받은 navigation의 navigate함수를 이용한다.
- App.js에서 Stack.Screen의 name값을 불러온다.
