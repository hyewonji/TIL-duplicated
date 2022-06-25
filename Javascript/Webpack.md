# Webpack

## 1. 배경

- 모든 브라우저에서 모듈화 사용의 필요성
  - 여러 js 파일을 모듈화하지 않고 하나의 html에 넣게된다면 스코프의 중첩이 발생합니다.
  - es6부터 표준으로 module system지원이 공식화 되었지만, 모든 브라우저에서 지원하지 않는 문제점이 있었습니다.

- html에 필요한 파일 요청 단일화 필요성
  - html에 필요한 모든 파일들을 http로 일일이 요청하게 되면 서버의 부하가 생기거나 사용자의 경험이 안좋아질 수 있습니다.
  - 번들러를 사용하면 필요한 모든 파일을 요청 한번에 가져올 수 있습니다.
    

## 2. 웹팩

### 2-1. 개념

- 여러개의 JS, CSS, HTML, 이미지 파일들을 하나의 파일로 합쳐주는 번들러입니다.
- 엔트리 파일(./src/index.js)에서 시작해 의존성을 갖는파일들을 모두 찾아 dependancy graph를 빌드한 다음, 모든 모듈을 브라우저에 의해 로드 되는 하나(혹은 그 이상)의 번들로 묶습니다.

### 2-2. Configuration
    
  > Tip<br>
  기본적으로 webpack 버전 4.0.0 이후에는 별도의 설정파일이 필요하지 않습니다.<br>
  더 다양한 설정을 원한다면 webpack.config.js 파일을 생성해 options를 설정해줍니다.
  > 
  <br>  
  / webpack.config.js:
    
  ```jsx
  const path = require("path")
  const HtmlWebpackPlugin = require('html-webpack-plugin')
  
  module.exports = {
    mode: "development",
    entry: {
      main: "./src/index.js",
    },
    output: {
      filename: "[name].js",
      path: path.resolve("./dist"),
    },
    module: {
      rules: [
        {
          test:  /\.css$,
          use: ['css-loader']
          // require() 혹은 import문 내에서 '.css' 파일로 확인되는 경로를 발견하면 번들에 추가하기 전에 css-loader를 사용하여 변환합니다."
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    ]
  }
  ```
    
  - Mode
    - 번들 모드를 설정합니다. 해당 모드에 맞는 최적화를 해줍니다.
    - `development`, `production`, `none`
  
  - Entry
    - 어플리케이션의 진입접을 설정해 dependancy graph를 생성할 수 있게 합니다.
    - 기본설정은 `./scr/index.js` 입니다.
    - 규칙
        - HTML 페이지 당 하나의 엔트리 포인트를 줍니다. SPA: 하나의 엔트리 포인트, MPA: 다중 엔트리 포인트.
    - 옵션
        - Entry descriptor ****:**** string, 배열, 객체로 설정할 수 있습니다. 객체로 값을 전달해 entry에대한 다양한 옵션을 지정할 수 있습니다.
            - import : 진입점
            - filename : 번들된 파일의 이름
            - dependOn: 다른 엔트리 청크로 모듈 공유
            - etc..
  
  - Output
    - 번들결과가 저장되는 파일명과 경로 등의 옵션을 설정합니다.
    - 파일명, 경로 외에도 다양한 옵션을 지정할 수 있습니다.
    - 옵션 참고 : [Output option list](https://webpack.kr/configuration/output/#outputassetmodulefilename)
  
  - Loader
    - ts를 js로 변환하거나, image, css전처리를 합니다.
    - 설정방법
        1. webpack.config.js
            - test : 변환이 필요한 파일(들)을 식별
            - use : 변환을 수행하는데 사용되는 로더 명시, 배열 혹은 객체로 여러개의 로더를 지정할 수 있습니다.
        2. Inline
            - `import Styles from 'style-loader!css-loader?modules!./styles.css';`
    - 특징
        - 여러 로더를 체인으로 연결할 수 있습니다. 체인은 역순으로 실행됩니다.
        - 로더는 Node.js에서 실행되며 Node.js에서 가능한 모든 작업을 수행 할 수 있습니다.
    - Loader list : [Loader list](https://webpack.kr/loaders)  
  - Plugin
    - 번들된 결과물을 처리하는 역할을 합니다.
    - plugin의 옵션 및 메소드를 사용하기 위해 인스턴스를 생성해 넣줍니다.

### 2-3. Bundle
  /package.json:
  ```json
  "scripts": {
    "build": "./node_modules/.bin/webpack"
  }
  ```
  
- `npm run build`로 webpack을 통한 빌드를 실행시킵니다.
- `"build": "webpack --config prod.config.js"` 로 특정 상황에 따라 다른 설정파일 사용이 가능합니다.