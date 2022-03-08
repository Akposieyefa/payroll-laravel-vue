<template>
    <nav class="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg" id="navbarVertical">
        <div class="container-fluid">
            <!-- Toggler -->
            <button class="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!-- Brand -->
            <router-link to="/dashboard" class="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0" href="#">
                <img :src="asset('img/logo.jpeg')" id="logo" alt="Website Logo" />
            </router-link>
            <!-- User menu (mobile) -->
            <div class="navbar-user d-lg-none">
                <!-- Dropdown -->
                <div class="dropdown">
                    <!-- Toggle -->
                    <a href="#" id="sidebarAvatar" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div class="avatar-parent-child">
                            <img alt="Image Placeholder" src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" class="avatar avatar- rounded-circle">
                            <span class="avatar-child avatar-badge bg-success"></span>
                        </div>
                    </a>
                    <!-- Menu -->
                    <div class="dropdown-menu dropdown-menu-end" aria-labelledby="sidebarAvatar">
                        <a href="#" class="dropdown-item">Profile</a>
                        <a href="#" class="dropdown-item">Settings</a>
                        <a href="#" class="dropdown-item">Billing</a>
                        <hr class="dropdown-divider">
                        <a href="#" class="dropdown-item">Logout</a>
                    </div>
                </div>
            </div>
            <!-- Collapse -->
            <div class="collapse navbar-collapse" id="sidebarCollapse">
                <!-- Navigation -->
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/dashboard">
                            <i class="bi bi-house"></i> Dashboard
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/departments">
                            <i class="bi bi-bar-chart"></i> Department
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/banks">
                            <i class="bi bi-server"></i> Bank
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/levels">
                            <i class="bi bi-chat"></i> Level
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/steps">
                            <i class="bi bi-bookmarks"></i> Step
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/staffs">
                            <i class="bi bi-people"></i>  Staff
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/payrolls">
                            <i class="bi bi-file-diff"></i>  Payroll
                        </router-link>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/profile">
                            <i class="bi bi-person-square"></i>  My Profile
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0)" @click="onLogout()">
                            <i class="bi bi-box-arrow-left"></i> Logout
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Nav",
    methods: {
        onLogout() {
            axios.post(
                "http://127.0.0.1:8000/api/v1/logout",
                { token: localStorage.getItem("token") },
                {
                    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
                }
            );
            localStorage.removeItem("token");
            this.$router.push("/");
        },
    }
}
</script>

<style scoped>
@import '../css/index.css';
@import url("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.4.0/font/bootstrap-icons.min.css");
#logo {
    width: 100px;
    height: 90px;
    margin-left: 3rem;
    margin-top: -1rem;
}
</style>
