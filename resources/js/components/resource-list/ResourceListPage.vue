<script>
import ResourceService from "../../services/ResourceService";
import CustomModal from "../../components/modals/CustomModal.vue";

export default {
  components: {
    CustomModal,
  },
  data() {
    return {
      items: [],
      service: ResourceService,
      resourceTerm: "",
      toUpdate: {},
      toDelete: {},
      getParams: {},
	  fetchingItems: false
    };
  },
  methods: {
    async fetchData() {
		this.fetchingItems = true;
		try {
			this.items = await this.service.get(this.resourceTerm, this.getParams);
		} catch (e) {
			const message = e.data.message || "Something went wrong while fetching data.";
			this.$root.$emit("notification", message, "danger");
		}
		this.fetchingItems = false;
    },
	closeModal(modalRef) {
		this.$refs[modalRef].close();
	},
	openCreateModal() {
      this.$refs.createModal.open();
    },
    openUpdateModal(item) {
      this.$refs.updateModal.open();
      this.toUpdate = item;
    },
    openDeleteModal(item) {
      this.$refs.deleteModal.open();
      this.toDelete = item;
    },
  },
  mounted() {
    if (!this.resourceTerm) {
      console.error("Resource term not set");
      return;
    }
    this.fetchData();
  },
};
</script>

<style></style>
