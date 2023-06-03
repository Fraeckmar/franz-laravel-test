<template>
  <div class="row min-vh-100 align-items-center">
	<div class="col-12 col-md-3 mx-auto text-center">
		<div v-if="!userInfo">
			<router-link to="/register" class="btn btn-default d-block mb-2 shadow">REGISTER</router-link>
			<router-link to="/login" class="btn btn-primary d-block shadow">LOGIN</router-link>
		</div>
		<div v-else>
			<router-link v-if="userInfo.role.role == 'admin'" to="/users" class="btn btn-default d-block mb-2 shadow">VIEW RECORDS</router-link>
			<router-link v-else to="/unsubscribe" class="btn btn-default d-block mb-2 shadow">UNSUBSCRIBE</router-link>
			<router-link to="/logout" class="btn btn-primary d-block shadow">LOGOUT</router-link>
		</div>
	</div>
  </div>
</template>

<script>
import SessionStorage from '../utils/SessionStorage'
export default {
	data() {
		return {
			userInfo: SessionStorage.get('user') || null
		}
	}
}
</script>

<style>

</style>