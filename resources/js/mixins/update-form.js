export default {
    methods: {
        setDefaults() {
            Object.keys(this.currentData).forEach((key) => {
				try {
					if (!this.dataExceptions.includes(key)) {
						this[key] = this.currentData[key];
					}
				} catch (e) { }
			});
        },
    },
    watch: {
        currentData: {
            deep: true,
            handler() {
                this.setDefaults();
            },
        },
    },
    props: {
        currentData: {
            default: () => ({}),
        },
    },
    computed: {
        resourceId() {
            return this.currentData.id;
        },
    },
};
