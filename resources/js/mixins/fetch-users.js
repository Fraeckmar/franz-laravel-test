import Service from "../services/ResourceService";

export default {
	data() {
		return {
			users: [],
			usersFetching: false,
		};
	},
	methods: {
		async fetchUsers() {
			this.usersFetching = true;
			try { 
				this.users =await Service.get("users");;
			} catch (e) {
				const message = e.data.message || "Something went wrong";
				this.$root.$emit("notfication", message, "danger");
			}
			this.usersFetching = false;
		},
	},
	mounted() {
		this.fetchUsers();
	},
};
