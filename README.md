# vue-router-auth

> A Vue.js project

## Build Setup

```bash
npm install -g @vue/cli
npm install -g @vue/cli-init
vue init webpack vue-router-auth

npm install --save axios
```

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


