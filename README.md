# vue-router-auth

> A Vue.js project

+ client : Vue (Port 3000) - [Senspond20/Vue-Router-Auth](https://github.com/senspond20/Vue-Router-Auth)
+ server : Spring (Port 8080) - [Senspond20/Spring JWT](https://github.com/senspond20/Spring_JWT)

## Build Setup

```bash
npm install -g @vue/cli
npm install -g @vue/cli-init
vue init webpack vue-router-auth

npm install --save axios
```

+ axios

```js
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'

Vue.prototype.$http = Axios;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
```

## **vuex**
+ Vue.js 애플리케이션에 대한 상태 관리 패턴 + 라이브러리

```bash
npm install vuex --save
```

## 토큰 기반 인증 

1. 클라이언트에서 이메일/비밀번호를 서버로 전송한다.

2. 서버에서 유효한 사용자인지 검증한 후 토큰(token)을 발행한다.

3. 토큰을 클라이언트의 로컬스토리지(localStorge)에 저장 후  필요할때마다 사용한다.
( API를 호출할때, 로컬스토리지(localStorge)에 있는 토큰을 복사하고 복사본을 API 요청 해더에 담아 보낸다.)

    + localStorge 에 저장하는 이유? : 새로 고침시 사라지지 않으려면 브라우저 메모리에 저장되어 있어야 한다.

4. 서버는 토큰(token)을 복호화(decrypts)하고 이 토큰이 요청된 자료에 접근권한(ROLE)이 있는지 확인한다.


