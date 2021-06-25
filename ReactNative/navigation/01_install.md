# React-Navigation 

### React-Navigation 설치

1. React-Navigation 설치를 원하는 `디렉토리로 이동`
2. cmd창에 `react-native init —version 0.61.5 [프로젝트 명]` 입력
3. 생성한 프로젝트 파일을 불러온다.
4. cmd창에  `npm install @react-navigation/native` 또는 `yarn add @react-navigation/native` 입력
5. Expo 프로젝트인 경우, cmd 창에`expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view` 입력

    React-Native 프로젝트인 경우, cmd창에`npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view` 입력

    - 만약, `Mac혹은 IOS환경`인 경우, `ios폴더로 이동`한 후, cmd창에 `npx pod-install ios`입력
6. entry file인 index.js가 App.js에서 실행되기 때문에 App.js에 `import 'react-native-gesture-handler';` 를 입력한다.

### Stack Navigator 설치

1. cmd창에 `npm install @react-navigation/stack` 또는 `yarn add @react-navigation/stack` 을 입력한다.

### Package설치 확인

- package.json의 "dependencies"에 설치한 파일들이 있는지 확인한다.
