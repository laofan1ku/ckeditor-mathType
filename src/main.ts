import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue';
import CKEditorPlugin from '@ckeditor/ckeditor5-vue';

const app = createApp(App)

app.use(CKEditorPlugin)

app.mount('#app')
