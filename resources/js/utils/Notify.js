import { defineComponent } from 'vue'
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'

class Notification {
	static show(message, type) {
        createToast(message, { type })
    }
}

export default Notification