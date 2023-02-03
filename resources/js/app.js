require('./bootstrap');

import MainComponent from './components/MainComponent.vue'
import 'ant-design-vue/dist/antd.css';
import { createApp } from 'vue';

import {
    Col,
    Row,
    Input,
  } from 'ant-design-vue';

const app = createApp(MainComponent)

app.use(Col);
app.use(Row);
app.use(Input);
app.mount('#app');
