<template>
    <div class="px-2 py-3">
        <div class="mb-2">
            <button class="btn btn-sm btn-outline-primary" @click="openCreateModal">Add New</button>
        </div>
        <table class="table table-responsive table-striped shadow">
            <thead>
                <tr>
                    <th v-for="(label, key) in tblHeaders" :key="key"> {{ label }} </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, idx) of items" :key="user.id">
                    <td v-for="(label, key) in tblHeaders" :key="key">
                        <span v-if="key == 'role'"> {{ user[key].role }} </span>
                        <div v-else-if="key == 'action'">
                            <button type="button" class="btn btn-sm btn-info me-1" @click="openUpdateModal(user)">Edit </button>
                            <button v-if="user.id != currentUser.id" type="button" class="btn btn-sm btn-danger" @click="openDeleteModal(user)"> Delete</button>
                        </div>
                        <span v-else-if="key == 'count'"> {{ idx+1 }} </span>
                        <span v-else> {{ user[key] }} </span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>


    <!-- Update Modal -->
    <CustomModal
      ref="createModal"
      v-bind="createModalAttrs"
    >
      <template v-slot:modal-body>
        <CreateForm
        @success="
          closeModal('createModal');
          fetchData();
        "
        @close="closeModal('createModal')"
      />
      </template>
    </CustomModal>

    <!-- Update Modal -->
    <CustomModal
      ref="updateModal"
      v-bind="updateModalAttrs"
    >
      <template v-slot:modal-body>
        <UpdateForm
        @success="
          closeModal('updateModal');
          fetchData();
        "
        :currentData="toUpdate"
        @close="closeModal('updateModal')"
      />
      </template>
    </CustomModal>

    <!-- Delete Modal -->
    <CustomModal
      ref="deleteModal"
      v-bind="deleteModalAttrs"
    >
      <template v-slot:modal-body>
        <DeleteForm
        @success="
          closeModal('deleteModal');
          fetchData();
        "
        :currentData="toDelete"
        @close="closeModal('deleteModal')"
      />
      </template>
    </CustomModal>
</template>
 
<script>
import ResourceListPage from "../resource-list/ResourceListPage.vue";
import CreateForm from "./CreateForm";
import UpdateForm from "./UpdateForm";
import DeleteForm from "./DeleteForm";
import Session from '../../utils/SessionStorage'

export default {
    extends: ResourceListPage,
    components: {
        CreateForm,
        UpdateForm,
        DeleteForm,
    },
    data() {
        return {
            currentUser: Session.userInfo(),
            tblHeaders: {
                count: '#',
                email: 'Email',
                phone_no: 'Phone Number',
                role: 'Role',
                action: 'Action'
            },
            resourceTerm: "users",
            createModalAttrs: {
                title: "Create User",
                btnLabel: "Create",
            },
            updateModalAttrs: {
                title: "Update User",
                btnLabel: "Update",
            },
            deleteModalAttrs: {
                title: "Delete User",
                btnLabel: "Delete",
                btnType: "danger"
            },
        };
    },
}
</script>