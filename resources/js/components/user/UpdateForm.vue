<script>
import CreateForm from "./CreateForm";
import UpdateFormMixin from "../../mixins/update-form";

export default {
  extends: CreateForm,
  mixins: [UpdateFormMixin],
  data() {
    return {
      serviceMethod: "update",
      successMessage: "User update successfully",
      serviceParams: ["resourceTerm", "resourceId", "requestData"],
    };
  },
};
</script>