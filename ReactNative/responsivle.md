# react-native-responsive-dimensions 패키지

```jsx
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const ZEPLIN__WINDOW__WIDTH = 375;
const ZEPLIN__WINDOW__HEIGHT = 812;

export const widthPercentage = (width) => {
  const percentage = (width / ZEPLIN__WINDOW__WIDTH) * 100;
  console.log(percentage);
  return responsiveWidth(percentage);
};

export const heightPercentage = (height) => {
  const percentage = (height / ZEPLIN__WINDOW__HEIGHT) * 100;
  console.log(percentage);
  return responsiveHeight(percentage);
};

export const fontPercentage = (size) => {
  const percentage = size * 0.125;

  return responsiveFontSize(percentage);
};
```
- `react-native-responsive-dimensions`의 `responsiveHeight`, `responsiveWidth`, `responsiveFontSize`를 사용해 핸드폰 화면 크기에 따른 픽셀을 구한다.
