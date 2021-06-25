### Picker

- 여러 항목 중, 한개의 항목을 고르는 컴포넌트
- 패키지 설치
    - `$ npm install @react-native-picker/picker --save`
    - `$ yarn add @react-native-picker/picker`
- IOS의 경우, `npx pod-install` 를 추가 설치 해준다
- MAC OS의 경우, `pod install` 를 추가 설치 해준다.
- Android의 경우, 추가 설치할 필요 없다.
- 사용 : `import {Picker} from '@react-native-picker/picker';`

### Slider

- 특정 범위 내에 슬라이더를 사용해 값을 고르는 컴포넌트
- 패키지 설치
    - `$ yarn add @react-native-community/slider`
    - `$ npm install @react-native-community/slider --save`
- IOS의 경우, `npx pod-install` 를 추가 설치 해준다
- Android의 경우, 추가 설치할 필요 없다.
- 사용 : `import Slider from '@react-native-community/slider';`

### Simple Example

```jsx
import React, {Component} from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

class PickerComponent extends Component {
  state = {
    country: 'korea',
    value: 50,
  };
  
  // silder의 값이 변경될 때, state의 값 변경하는 함수
  sliderValueChange = value => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Slider
          style={{height: 40, width: 300}}
          value={this.state.value}
          minimumValue={0}
          maximumValue={100}
          onValueChange={this.sliderValueChange}
          maximumTrackTintColor="blue"
          minimumTrackTintColor="red"
          step={10}
        />
        <Text style={styles.input}>{this.state.value}</Text>
        <ActivityIndicator
          style={{paddingTop: 200}}
          size="large"
          color="orange"
        />
        <Picker
          style={{height: 50, width: 250}}
          selectedValue={this.state.country}
          onValueChange={(val, idx) => this.setState({country: val})}>
          {/*callback 함수 호출/ val: picker를 통해 선택된 값/ idx: picker에서 선택된 idx 값*/}
          <Picker.Item label="Korea" value="korea" />
          <Picker.Item label="Canada" value="canada" />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    marginBottom: 200,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    marginTop: 20,
    fontSize: 25,
  },
});

export default PickerComponent;
```
