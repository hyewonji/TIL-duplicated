# react-hook-form Input

### React Native에서 react-hook-form의 Input 사용하기

```jsx
import React from "react";
import { Text, View, TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";

export default function App() {
	// formState에 있는 errors를 호출해 사용할 수 있다.
  const { control, handleSubmit, formState: { errors } } = useForm();

	// Controller에 저장된 데이터 처리하는 함수.
	// error가 있으면 작동하지 않는다.
  const onSubmit = data => console.log(data);
	
	// 이메일 유효성 검사 오류 메세지 
  const emailMessage = '웹메일 주소가 잘못입력되었습니다.';

  return (
    <View>
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            {register('email', {
                required: emailMessage,
                pattern: {
                  value: /^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/,
                  message: emailMessage,
                },
              }); // register를 통해 유효성 검사 해준다.
            }
          />
        )}
        name="firstName"
        defaultValue=""
      />
      {errors.firstName && <Text>This is required.</Text>}
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
```

### 위의 코드를 컴포넌트화 해서 재사용 하면 다음과 같다.

**inputFrom.js**

```jsx
/* eslint-disable no-nested-ternary */
import React, { useRef } from 'react';

import {Text, View, StyleSheet} from 'react-native';

import {useForm} from 'react-hook-form';

import Input from './components/Input';

const styles = StyleSheet.create({
  inputContainer: {
    marginLeft: '7%',
  },
  textInput: {
    width: '91%',
    borderWidth: 1.5,
    borderColor: '#5e656f',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
  }
});

export default function SignupFirstPage({navigation}) {

  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    formState: {errors},
  } = useForm({mode: 'all'});

  const onSubmit = (data) => {
    console.log(data);

    reset({
      email: '',
      password: '',
      confirmPassword: '',
    });
  };
  
  return (
      <View style={styles.inputContainer}>
        <Text>회원가입</Text>
        <Input
          name="email"
          control={control}
          register={register}
          inputStyle={styles.textInput}
          placeholder="학교 웹메일"
          watch={watch}
        />
        {errors.email ? <Text>{errors.email.message}</Text> : null}
        <Input
          secureTextEntry
          name="password"
          register={register}
          control={control}
          inputStyle={styles.textInput}
          watch={watch}
          placeholder="비밀번호"
        />
        {errors.password ? <Text>{errors.password.message}</Text> : null}
        <Input
          secureTextEntry
          name="confirmPassword"
          register={register}
          control={control}
          inputStyle={styles.textInput}
          watch={watch}
          placeholder="비밀번호 확인"
        />
        {errors.confirmPassword ? (
          <Text>{errors.confirmPassword.message}</Text>
        ) : null}
      </View>
  );
```

**Input.js**

```jsx
import React from 'react';

import {TextInput} from 'react-native';

import {Controller} from 'react-hook-form';

const Input = ({
  autoCompleteType,
  secureTextEntry,
  name,
  control,
  inputStyle,
  placeholder,
  register,
  watch,
}) => {
  const emailMessage = '웹메일 주소가 잘못입력되었습니다.';
  const passwordMessage = '8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.';
  const confirmPasswordMessage = '비밀번호가 일치하지 않습니다.';

	// 이메일 유효성 검사
  const emailRegister = register('email', {
    required: emailMessage,
    pattern: {
      value: /^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/,
      message: emailMessage,
    },
  });
	
	// 비밀번호 유효성 검사
  const passwordRegister = register('password', {
    required: passwordMessage,
    pattern: {
      value: /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/,
      message: passwordMessage,
    },
  });

	// 비밀번호 일치여부 확인(watch 사용)
  const confirmPasswordRegister = register('confirmPassword', {
    validate: (value) => value === watch('password') || confirmPasswordMessage,
    required: confirmPasswordMessage,
  });

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            secureTextEntry={secureTextEntry}
            autoCompleteType={autoCompleteType}
            placeholder={placeholder}
            style={inputStyle}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            inputRef={
              name === 'email'
                ? emailRegister
                : name === 'password'
                ? passwordRegister
                : name === 'confirmPassword'
                ? confirmPasswordRegister
                : null
            }
          />
        )}
        defaultValue=""
        rules={{required: true}}
      />
    </>
  );
};

export default Input;
```
