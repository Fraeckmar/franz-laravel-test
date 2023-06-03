<template>
	<div>unsubscribe</div>
</template>
<script>
import SessionStorage from '../../utils/SessionStorage'
import Service from '../../services/ResourceService'

export default {
	data() {
		return {
			id: SessionStorage.userInfo()?.id || null,
		}
	},
	mounted() {
		if (this.id && confirm('Are you sure to unsubscribe?')) {
			Service.delete('users', this.id)
			SessionStorage.set('accessToken', null)
			SessionStorage.set('user', null)
			location.href = '/';
		}
	}
}
</script>

<style>

</style>