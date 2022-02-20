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
                                    <h1 class="h2 mb-0 ls-tight">Steps</h1>
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
                                <h5 class="mb-0">All Steps</h5>
                            </div>
                            <div class="table-responsive">
                                <table class="table table-hover table-nowrap">
                                    <thead class="thead-light">
                                    <tr>
                                        <th scope="col">No..</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Date</th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr
                                        v-for="(stp, index) in steps"
                                        :key="stp.id"
                                    >
                                        <td>
                                            {{ index + 1 }}
                                        </td>
                                        <td>
                                            {{ stp.name }}
                                        </td>
                                        <td>
                                            {{ formatDate(stp.created_at)}}
                                        </td>
                                        <td class="text-end">
                                            <a href="#" class="btn btn-sm btn-neutral">View</a>
                                            <button class="btn btn-sm btn-neutral" @click="editMode(stp.id)" data-toggle="modal" data-target="#form">Edit</button>
                                            <button @click="deleteStp(stp.id)" type="button" class="btn btn-sm btn-square btn-neutral text-danger-hover">
                                                <i class="bi bi-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="card-footer border-0 py-5">
                                <span class="text-muted text-sm">Showing 10 items out of 250 results found</span>
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
                        <h5 class="modal-title" v-if="edit">Edit Step</h5>
                        <h5 class="modal-title"  v-else>Add New</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form>
                        <div class="modal-body">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" v-model="step.name" class="form-control form-control-lg" id="name" aria-describedby="emailHelp" placeholder="Enter level name">
                            </div>
                        </div>
                        <div class="modal-footer border-top-0">
                            <button type="submit" @click="updateStp(step.id)" class="btn btn-sm btn-dark" v-if="edit">Update</button>
                            <button type="submit" @click="createStp()" class="btn btn-sm btn-dark" v-else>Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!--end of modal -->
    </div>
</template>

<script>
import {mapGetters} from "vuex";
import axios from "axios";

export default {
    name: "Steps",
    components: {
        Header: () => import("../../../components/Header"),
        Nav: () => import("../../../components/Nav.vue"),
    },
    data() {
        return {
            step: {
                name: "",
            },
            steps: [],
            edit: false
        }
    },
    created() {
        this.getAllStp();
    },
    computed: {
        ...mapGetters(["user"]),
    },
    methods : {
        async editMode(id){
            this.edit = true;
            const response = await axios.get("steps/" + id, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            this.step = response.data.data;
            console.log(this.step)
        },
        async updateStp(id) {
            try {
                const response = await axios.patch(
                    "steps/" + id,
                    {
                        name: this.step.name,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                    }
                );
                await this.getAllStp();
                this.$toasted.success(response.data.message)
                this.edit = false;
            } catch (e) {
                this.$toasted.error(e.response.data.message)
            }
        },
        async createStp() {
            try {
                const response = await axios.post(
                    "steps",
                    {
                        name: this.step.name
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                    }
                );
                this.$toasted.success(response.data.message)
                this. clearDate()
                await this.getAllStp();
            } catch (e) {
                this.$toasted.error(e.response.data.message)
            }
        },
        async getAllStp() {
            const response = await axios.get("steps", {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            });
            this.steps = response.data.data;
        },
        async deleteStp(id) {
            if (confirm("Do you really want to delete this record?")) {
                try {
                    const response = await axios.delete("steps/" + id, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                    });
                    this.$toasted.success(response.data.message)
                    await this.getAllStp();
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
            this.step.name = ""
        }
    },
}
</script>

<style scoped>
@import '../../../css/index.css';
@import url("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.4.0/font/bootstrap-icons.min.css");
</style>

