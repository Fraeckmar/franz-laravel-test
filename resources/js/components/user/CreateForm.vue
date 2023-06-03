<template>
	<form @submit.prevent="submitHamdle">
		<div class="mb-2"  v-if="serviceMethod != 'update'">
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
			<label class="form-label">Role</label>
			<select class="form-select" v-model="role_id">
				<option value="">-- Select --</option>
				<option value="1">Admin</option>
				<option value="2">Guest</option>
			</select>
		</div>
		<div class="mb-2" v-if="serviceMethod != 'update'">
			<label class="form-label">Password</label>
			<input type="password" class="form-control" v-model="password" required>
		</div>
		<div class="mb-2" v-if="serviceMethod != 'update'">
			<label class="form-label">Confirm Password</label>
			<input type="password" class="form-control" v-model="confirmPassword" required>
		</div>
		<div class="text-end mt-2">
			<button type="button" class="btn btn-secondary mx-1" @click="this.$emit('close')"> Close </button>
			<button type="submit" class="btn btn-primary mx-1"> 
				<span class="spinner-border text-light spinner-border-sm" role="status" v-if="isFormLoading"> </span> 
				Submit 
			</button>
		</div>
	</form>
</template>

<script>
import BaseCreateFrom from '../../components/forms/BaseForm.vue';

const formData = {
  username: "",
  email: "",
  phone_no: "",
  role_id: 0,
  password: "",
  confirmPassword: "",
};

export default {
	extends: BaseCreateFrom,
	data() {
		return {
			...formData,
			formData,
			formKeys: Object.keys(formData),
			resourceTerm: "users",
		};
	},
	methods: {
		async submitHamdle() {
			try {
				if (this.serviceMethod == 'post') {
					if (this.password.length < 5) {
						throw new Error('Password should greater than 6 characters')
					}
					if (this.password != this.confirmPassword) {
						throw new Error('Confirm Passowrd not equal to your password.')
					}
				}				

				// Call submit method if no error occur
				await this.submit()

			} catch (e) {
				this.$root.$emit('notification', e.message, 'danger')
			}
		}
	}
};
</script>

<style></style>
