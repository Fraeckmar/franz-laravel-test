<template>
	<div class="d-flex shadow px-4 py-2 align-items-center justify-content-between" v-if="userData">
		<div class="d-flex">
			<div v-for="(item, idx) of breadCrumbs" :key="idx"> 
				<router-link :to="item.path" class="btn btn-link"> {{ item.text }}</router-link> 
				<span v-if="Object.values(breadCrumbs).length > idx+1"> | </span>
			</div>
		</div>
		<div>
			<strong>Welcome</strong>, {{ userData.username }}
		</div>
	</div>
    <div class="container">
        <router-view> </router-view>
    </div>
</template>
 
<script>
	import Session from './utils/SessionStorage'
	import routes from './routes'

    export default {
		data() {
			return {
				userData: Session.userInfo(),
			}
		},
		computed: {
			breadCrumbs() {
				let items = [{
					path: '/',
					text: 'Home'
				}];

				let sub = routes.options.routes.filter((r) => r.path != '/' &&  r.path == this.$route.path)
				
				if (sub) {
					for (let item of sub) {
						items.push({
							path: item.path,
							text: item.meta.label || ''
						})
					}
				}
				return items
			}
		},
	}
</script>