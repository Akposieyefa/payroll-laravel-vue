<template>
    <div class="row g-6 mb-6">
        <div class="col-xl-3 col-sm-6 col-12">
            <div class="card shadow border-0">
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <span class="h6 font-semibold text-muted text-sm d-block mb-2">Departments</span>
                            <span class="h3 font-bold mb-0">{{ departments }}</span>
                        </div>
                        <div class="col-auto">
                            <div class="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                                <i class="bi bi-credit-card"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-sm-6 col-12">
            <div class="card shadow border-0">
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <span class="h6 font-semibold text-muted text-sm d-block mb-2">Staff's</span>
                            <span class="h3 font-bold mb-0">{{ staffs }}</span>
                        </div>
                        <div class="col-auto">
                            <div class="icon icon-shape bg-primary text-white text-lg rounded-circle">
                                <i class="bi bi-people"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-sm-6 col-12">
            <div class="card shadow border-0">
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <span class="h6 font-semibold text-muted text-sm d-block mb-2">Unions</span>
                            <span class="h3 font-bold mb-0">{{ unions }}</span>
                        </div>
                        <div class="col-auto">
                            <div class="icon icon-shape bg-info text-white text-lg rounded-circle">
                                <i class="bi bi-clock-history"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-sm-6 col-12">
            <div class="card shadow border-0">
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <span class="h6 font-semibold text-muted text-sm d-block mb-2">Levels</span>
                            <span class="h3 font-bold mb-0">{{ levels }}</span>
                        </div>
                        <div class="col-auto">
                            <div class="icon icon-shape bg-warning text-white text-lg rounded-circle">
                                <i class="bi bi-minecart-loaded"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "DashboardComponent",
    created() {
        this.getDashboardHelper();
    },
    data() {
        return {
            staffs : 0,
            departments : 0,
            levels : 0,
            unions : 0

        }
    },
    methods : {
        async getDashboardHelper() {
            const response = await axios.get("dashboard-helpers", {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            });
            this.staffs = response.data.data.staffs;
            this.departments = response.data.data.departments;
            this.levels = response.data.data.levels;
            this.unions = response.data.data.unions;
        },
    }
}
</script>

<style scoped>

</style>
