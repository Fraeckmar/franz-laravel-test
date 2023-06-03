<template>
	<div :class="modalBackdrop" tabindex="-1"></div>
	<div :class="modalClass">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<slot name="modal-header">
						<h5 class="modal-title" id="exampleModalLiveLabel"> {{ title }} </h5>
					</slot>
				</div>
				<div class="modal-body">
					<slot name="modal-body"></slot>
				</div>
				<div class="modal-footer p-0 border-0">
					<slot name="modal-footer"></slot>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: "CustomModal",
  data() {
    return {
      showModal: false,
      isModal: true,
    };
  },
  props: {
    btnLabel: {
      default: "Submit",
    },
	btnType: {
		default: "primary"
	},
    title: {
      default: "Create",
    },
  },
  methods: {
    close() {
      this.showModal = false;
    },
    open() {
      this.showModal = true;
    },
  },
  computed: {
	modalClass() {
		return 'modal ' + (this.showModal ? 'show fade d-block' : '')
	},
	modalBackdrop() {
		return this.showModal ? 'modal-backdrop fade show' : ''
	}
  }
};
</script>

<style></style>
