<template>
  <div class="row min-vh-100 align-items-center">
	<div class="col-12 col-md-5 mx-auto">
		<h4 class="h4 text-center mb-3">REGISTRATION FORM</h4>
		<div class="shadow p-4">
			<form @submit.prevent="submitHamdle" ref="form">
				<div class="mb-2">
					<label class="form-label">Username</label>
					<input type="text" class="form-control" v-model="username" required>
				</div>
				<div class="mb-2">
					<label class="form-label">Email</label>
					<input type="email" class="form-control" v-model="email" required>
				</div>
				<div class="mb-2">
					<label class="form-label">Phone Number</label>
					<input type="text" class="form-control" v-model="phone_no" required>
				</div>
				<div class="mb-2">
					<label class="form-label">Password</label>
					<input type="password" class="form-control" v-model="password" required>
				</div>
				<div class="mb-2">
					<label class="form-label">Confirm Password</label>
					<input type="password" class="form-control" v-model="confirmPassword" required>
				</div>
				<div>
					<button class="btn btn-primary w-100"><span class="spinner-border spinner-border-sm text-light" role="status" v-if="isFormLoading"></span> SUBMIT</button>
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
import BaseForm from "../forms/BaseForm";

const formData = {
	role_id: 2, // default role is guest
	username: '',
	email: '',
	phone_no: '',
	password: '',
	confirmPassword: '',
}

export default {
	extends: BaseForm,
	data() {
		return {
			...formData,
			formData,
			formKeys: Object.keys(formData),
			resourceTerm: 'register',
			successMessage: 'Registered Successfully.'
		}
	},
	methods: {
		async submitHamdle() {
			try {
				if (this.password.length < 5) {
					throw new Error('Password should greater than 6 characters')
				}
				if (this.password != this.confirmPassword) {
					throw new Error('Confirm Passowrd not equal to your password.')
				}

				// Call submit method if no error occur
				await this.submit()

			} catch (e) {
				this.$root.$emit('notification', e.message, 'danger')
			}
		}
	}
}
</script>

<style>

</style>