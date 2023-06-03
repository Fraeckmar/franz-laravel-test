import Service from "../services/ResourceService";

const formData = {};

export default {
    data() {
        return {
            ...formData,
            resourceTerm: "t-e-r-m",
            isFormLoading: false,
            formKeys: [
                //put keys here
                //Object.keys(formData)
            ],
            serviceMethod: "post",
            successMessage: "Successfully Created",
            serviceParams: ["resourceTerm", "requestData"],
			formReference: "form",
			responseData: {}
        };
    },
    methods: {
        async submit() {
            this.apiErrors = {};
            this.isFormLoading = true;

            try {
                const params = this.serviceParams.map((param) => {
                    return this[param];
                });

                const service = Service[this.serviceMethod].apply(
                    Service,
                    params
                );

				this.responseData = await service;
                this.$root.$emit("notification", this.successMessage, "success");
                this.$emit("success", this.responseData);
				this.resetFormData()
            } catch (e) {
                this.$root.$emit("notification", e.data.message, "danger");
            }

			this.isFormLoading = false;
        },

        setDefaults() { },
        getParentModal(component) {
            const parent = component.$parent;
            if (parent.isModal) {
                return parent;
            }

            if (parent === this.$root) {
                return false;
            }

            return this.getParentModal(parent);
        },
		resetFormData() {
			Object.keys(this.formData).forEach((key) => {
				try {
				if (!this.dataExceptions.includes(key)) {
					this[key] = '';
				}
				} catch (e) {
				console.log(e);
				}
			});
		},
    },
    computed: {
        requestData() {
            let data = {};
            this.formKeys.forEach((key) => {
                data[key] = this[key];
            });
            return data;
        },
    },
    mounted() {
        this.setDefaults();
    },
};
