<template>
    <div>
        <!-- Dashboard -->
        <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
            <!-- Vertical Navbar -->
            <Nav />
            <!-- Main content -->
            <div class="h-screen flex-grow-1 overflow-y-lg-auto">
                <!-- Header -->
                <header class="bg-surface-primary border-bottom pt-6 pb-5">
                    <div class="container-fluid">
                        <div class="mb-npx">
                            <div class="row align-items-center">
                                <div class="col-sm-6 col-12 mb-4 mb-sm-0">
                                    <!-- Title -->
                                    <h1 class="h2 mb-0 ls-tight">Department List</h1>
                                </div>
                                <!-- Actions -->
                                <div class="col-sm-6 col-12 text-sm-end">
                                    <div class="mx-n1">
                                        <button  data-toggle="modal" data-target="#form" class="btn d-inline-flex btn-sm btn-dark mx-1">
                                    <span class=" pe-2">
                                        <i class="bi bi-plus"></i>
                                    </span>
                                            <span>Create</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <!-- Nav -->
                        </div>
                    </div>
                </header>

                <!-- Main -->
                <main class="py-6 bg-surface-secondary">
                    <div class="container-fluid">
                        <!-- Card stats -->
                        <div class="card shadow border-0 mb-7">
                            <div class="card-header">
                                <h5 class="mb-0">All Department</h5>
                            </div>
                            <div class="table-responsive">
                                <table class="table table-hover table-nowrap">
                                    <thead class="thead-light">
                                    <tr>
                                        <th scope="col">No..</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Staff</th>
                                        <th scope="col">Date</th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr
                                        v-for="(dept, index) in departments"
                                        :key="dept.id"
                                    >
                                        <td>
                                           {{ index + 1 }}
                                        </td>
                                        <td>
                                          {{ dept.name }}
                                        </td>
                                        <td>
                                            <i class="bi bi-people"></i>
                                            <a class="text-heading font-semibold" href="#">
                                              {{ dept.staffs.length }}
                                            </a>
                                        </td>
                                        <td>
                                           {{ formatDate(dept.created_at)}}
                                        </td>
                                        <td class="text-end">
                                            <a href="#" class="btn btn-sm btn-neutral">View</a>
                                            <button  class="btn btn-sm btn-neutral" @click="editMode(dept.id)" data-toggle="modal" data-target="#form">Edit</button>
                                            <button  @click="deleteDept(dept.id)" type="button" class="btn btn-sm btn-square btn-neutral text-danger-hover">
                                                <i class="bi bi-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="card-footer border-0 py-5">
                                <nav aria-label="...">
                                    <ul class="pagination">
                                        <li v-bind:class="[{disabled: !pagination.prev_page_url}]" class="page-item">
                                            <a class="page-link"  @click="getAllBnk(pagination.prev_page_url)" href="#" tabindex="-1">Previous</a>
                                        </li>
                                        <li class="page-item disabled"><a class="page-link" href="#">Page {{ pagination.current_page}} of {{ pagination.last_page}} </a></li>
                                        <li v-bind:class="[{disabled: !pagination.next_page_url}]" class="page-item">
                                            <a class="page-link" @click="getAllBnk(pagination.next_page_url)" href="#">Next</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>

        <!--Modal display-->
        <div class="modal fade" id="form" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header border-bottom-0">
                        <h5 class="modal-title" v-if="edit">Edit Department</h5>
                        <h5 class="modal-title" v-else>Add New</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form>
                        <div class="modal-body">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" v-model="department.name" class="form-control form-control-lg" id="name" aria-describedby="emailHelp" placeholder="Enter department name">
                            </div>
                            <div class="form-group">
                                <label for="description">Description</label>
                                <textarea
                                    id="description"
                                    v-model="department.description"
                                    placeholder="Enter department description"
                                    rows="6"
                                    class="form-control form-control-md"
                                    aria-label="With textarea"
                                ></textarea>
                            </div>
                        </div>
                        <div class="modal-footer border-top-0">
                            <button type="submit" @click="updateDept(department.id)" class="btn btn-sm btn-dark" v-if="edit">Update</button>
                            <button type="submit" @click="createDept()" class="btn btn-sm btn-dark" v-else>Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!--end of modal -->
    </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
    name: "Departments",
    components: {
        Header: () => import("../../../components/Header"),
        Nav: () => import("../../../components/Nav.vue"),
    },
    data() {
        return {
            department: {
                name: "",
                description: ""
            },
            departments: [],
            pagination: {},
            edit: false
        }
    },
    created() {
        this.getAllDpt();
    },
    computed: {
        ...mapGetters(["user"]),
    },
    methods : {
        async editMode(id){
            this.edit = true;
            const response = await axios.get("departments/" + id, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            this.department = response.data.data;
        },
        async updateDept(id) {
            try {
                const response = await axios.patch(
                    "departments/" + id,
                    {
                        name: this.department.name,
                        description: this.department.description
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                    }
                );
                await this.getAllDpt()
                this.$toasted.success(response.data.message)
                this.edit = false;
            } catch (e) {
                this.$toasted.error(e.response.data.message)
            }
        },
        async createDept() {
            try {
                const response = await axios.post(
                    "departments",
                    {
                        name: this.department.name,
                        description: this.department.description,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                    }
                );
                this.$toasted.success(response.data.message)
                this. clearDate()
                await this.getAllDpt();
            } catch (e) {
                this.$toasted.error(e.response.data.message)
            }
        },
        async getAllDpt(page_url) {
            let vm = this;
            page_url = page_url || 'departments'
            const response = await axios.get(page_url, {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            });
            this.departments = response.data.data;
            vm.makePagination(response.data.meta, response.data.links)
        },
        makePagination(meta, links) {
            this.pagination = {
                current_page: meta.current_page,
                last_page: meta.last_page,
                next_page_url: links.next,
                prev_page_url: links.prev
            };
        },
        async deleteDept(id) {
            if (confirm("Do you really want to delete this record?")) {
                try {
                    const response = await axios.delete("departments/" + id, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                    });
                    this.$toasted.success(response.data.message)
                    await this.getAllDpt();
                } catch (e) {
                    this.$toasted.error(e.response.data.message)
                }
            }
        },
        formatDate(dateString) {
            const options = { year: "numeric", month: "long", day: "numeric" };
            return new Date(dateString).toLocaleDateString(undefined, options);
        },
        clearDate() {
            this.department.name = ""
            this.department.description = ""
        }
    },
}
</script>

<style scoped>
    @import '../../../css/index.css';
    @import url("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.4.0/font/bootstrap-icons.min.css");
</style>
