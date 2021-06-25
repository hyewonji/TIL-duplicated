# ScrollVeiw, Button, TextInput 활용

### Sample Example
1. TextInput에 값을 입력하고 Button을 클릭한다.
2. 입력한 값이 추가되어 화면에 표시된다.

```jsx

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TextInput,
} from 'react-native';

class App extends Component {
  state = {
    myTextInput: '',
    textList: ['a', 'b', 'c', 'd'],
  };

  // TextInput의 Input값 변경시키는 props
  // 그외의 TextInput props -> autoCapitalize(앞문자 대문자로 바꿔준다), editable(Input을 편집가능하게 한다) 
  onChangeInput = event => {
    this.setState({
      myTextInput: event,
    });
  };

  // 버튼 터치시, TextInput의 값을 추가한다.
  onAddTextInput = () => {
    this.setState(prevState => {
      return {
        myTextInput: '',
        textList: [...prevState.textList, prevState.myTextInput],
      };
    });
  };

  render() {
    return (
      <View style={styles.mainView}>
        <TextInput
          value={this.state.myTextInput}
          style={styles.input}
          onChangeText={this.onChangeInput}
          autoCapitalize={'none'}
          editable={true}
        />
        <Button title="Add Text Input" onPress={this.onAddTextInput} />
        <ScrollView>
          {this.state.textList.map((text, idx) => (
            <Text style={styles.textBox} key={idx}>
              {text}
            </Text>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
  },
  textBox: {
    backgroundColor: 'pink',
    margin: 20,
    color: 'red',
    padding: '10px',
  },
  input: {
    width: '100%',
    backgroundColor: '#cecece',
    marginTop: 20,
  },
});

export default App;
```
