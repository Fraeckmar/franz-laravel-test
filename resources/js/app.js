import './bootstrap';

import { createApp } from 'vue'
import App from './App.vue'
import Notification from './utils/Notify'
import routes from './routes'

createApp(App, {
	onNotification(message, type) {
		Notification.show(message, type)
	}
}).use(routes).mount('#app')