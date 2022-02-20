<template>
    <div>
        <!-- Dashboard -->
        <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
            <!-- Vertical Navbar -->
            <Nav />

            <!-- Main content -->
            <div class="h-screen flex-grow-1 overflow-y-lg-auto">
                <!-- Header -->
                <Header />
                <!-- Main -->
                <main class="py-6 bg-surface-secondary">
                    <div class="container-fluid">
                        <!-- Card stats -->

                        <DashboardComponent />

                        <!-- End of card state -->
                        <div class="card shadow border-0 mb-7">
                            <div class="card-header">
                                <h5 class="mb-0">Most Recent Staffs</h5>
                            </div>
                            <div class="table-responsive">
                                <table class="table table-hover table-nowrap">
                                    <thead class="thead-light">
                                    <tr>
                                        <th scope="col">No..</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Staff ID</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Appointment Date</th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody>

                                    <tr
                                        v-for="(staff, index) in staffs"
                                        :key="staff.id"
                                    >
                                        <td> {{ index + 1 }} </td>
                                        <td>
                                            <img alt="..." src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" class="avatar avatar-sm rounded-circle me-2">
                                            <a class="text-heading font-semibold" href="#">
                                                {{ staff.full_name }}
                                            </a>
                                        </td>
                                        <td> {{ staff.staff_id}}</td>
                                        <td> {{ staff.email }}</td>
                                        <td> {{ staff.phone_number }} </td>
                                        <td> {{formatDate(staff.appointment_date) }} </td>
                                        <td class="text-end">
                                            <a href="#" ></a>
                                            <router-link
                                                v-bind:to="'/staff-profile/' + staff.slug"
                                                id="text-link"
                                                class="btn btn-sm btn-neutral"
                                            >
                                                View
                                            </router-link>
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
    </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
    name: "Dashboard",
    components: {
        DashboardComponent: () => import("../../components/DashboardComponent"),
        Header: () => import("../../components/Header"),
        Nav: () => import("../../components/Nav.vue"),
    },
    created() {
        this.getAllStaffs();
    },
    data() {
        return {
            staffs: []
        }
    },
    methods : {
        async getAllStaffs() {
            const response = await axios.get("staffs", {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            });
            this.staffs = response.data.data;
        },
        formatDate(dateString) {
            const options = { year: "numeric", month: "long", day: "numeric" };
            return new Date(dateString).toLocaleDateString(undefined, options);
        },
    },
    computed: {
        ...mapGetters(["user"]),
    },
}
</script>

<style scoped>
    @import '../../css/index.css';
    @import url("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.4.0/font/bootstrap-icons.min.css");
</style>
