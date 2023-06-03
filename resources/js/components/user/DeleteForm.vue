<template>
	<form 
		@submit.prevent="submit"
		ref="form"
	>
		<p>Are you sure to delete this user?</p>
		<div class="text-end mt-2">
			<button type="button" class="btn btn-secondary mx-1" @click="this.$emit('close')"> Close </button>
			<button type="submit" class="btn btn-danger mx-1"> 
				<span class="spinner-border text-light spinner-border-sm" role="status" v-if="isFormLoading"> </span> 
				Delete 
			</button>
		</div>
	</form>
</template>
<script>
import ResourceFormMixin from "../../mixins/resource-form";
import UpdateFormMixin from "../../mixins/update-form";

export default {
  mixins: [UpdateFormMixin, ResourceFormMixin],
  data() {
    return {
		resourceTerm: "users",
		serviceMethod: "delete",
		successMessage: "Delete Successfully.",
		serviceParams: ["resourceTerm", "resourceId", "requestData"],
	  
    };
  }
};
</script>