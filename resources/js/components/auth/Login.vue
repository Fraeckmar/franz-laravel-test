<template>
  <div class="row min-vh-100 align-items-center">
	<div class="col-12 col-md-5 mx-auto">
		<h4 class="h4 text-center mb-3">LOGIN</h4>
		<div class='shadow p-4'>
			<form @submit.prevent="submitHamdle">
				<div class="mb-2">
					<label class="form-label">Username</label>
					<input type="text" class="form-control" v-model="username" required>
				</div>
				<div class="mb-2">
					<label class="form-label">Password</label>
					<input type="password" class="form-control" v-model="password" required>
				</div>
				<div>
					<button class="btn btn-primary w-100"><span class="spinner-border spinner-border-sm text-light" role="status" v-if="isFormLoading"></span> Submit</button>
				</div>
			</form>
		</div>
		<div class="mt-2 text-center">
			<router-link to="/" class="btn btn-link shadow">Back</router-link>
		</div>
	</div>
  </div>
</template>
<script>
import SessionStorage from '../../utils/SessionStorage'
import BaseForm from '../forms/BaseForm.vue'

const formData = {
	username: '',
	password: ''
}

export default {
	extends: BaseForm,
	data() {
		return {
			...formData,
			formData,
			formKeys: Object.keys(formData),
			resourceTerm: 'login',
			successMessage: 'Login Successfully.'
		}
	},
	methods: {
		async submitHamdle() {
			this.submit()
			.then(() => {
				if (this.responseData && this.responseData.user) {
					const { token, user } = this.responseData;
					SessionStorage.set('accessToken', token)
					SessionStorage.set('user', user)
					location.href = '/';
				}
			})
		},
	}
}
</script>

<style>

</style>