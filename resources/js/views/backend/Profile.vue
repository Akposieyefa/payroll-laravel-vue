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
                                    <h1 class="h2 mb-0 ls-tight">Profile</h1>
                                </div>
                                <!-- Actions -->
                                <div class="col-sm-6 col-12 text-sm-end">
                                    <div class="mx-n1">
                                        <router-link to="/staffs"  data-toggle="modal" data-target="#form" class="btn d-inline-flex btn-sm btn-dark mx-1">
                                            <span class=" pe-2">
                                                <i class="bi bi-plus"></i>
                                            </span>
                                            <span>Staff List</span>
                                        </router-link>
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
                        <header class="header">
                            <div class="container">
                                <div class="teacher-name">
                                    <div class="row">
                                        <div class="col-sm-9">
                                            <h2><strong>Rick Sanchez</strong></h2>
                                        </div>
                                        <div class="col-sm-3">
                                            <div class="button pull-right">
                                                <a href="#" class="btn btn-outline-success btn-sm">Edit Profile <i class="fa fa-pencil"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row" style="margin-top:20px;">
                                    <div class="col-sm-3">
                                        <a href="#"> <img class="rounded-circle" src="//images.weserv.nl/?url=i.imgur.com/Md9jS0Ib.jpg" alt="Rick" ></a>
                                    </div>

                                    <div class="col-sm-6">
                                        <h5Associate Professor, <small>Dept. of Alien Agriculture, Jaarvlar-3 University</small></h5>
                                        <p>PhD on Molecular Shwanky Physics</p>
                                        <p>Address: 123 Cuba str Tampa, Fl, Earth 137</p>
                                    </div>

                                    <div class="col-sm-3 text-center social">
                                        <span class="number">Phone:<strong>+0001732226402</strong></span>
                                        <div class="button-email">
                                            <a href="mailto:arick@yahoo.com" class="btn btn-outline-success btn-block"><i class="fa fa-envelope-o"></i> Send Email</a>
                                        </div>
                                        <div class="social-icons">
                                            <a href="#">
            <span class="fa-stack">
              <i class="fa fa-circle fa-stack-2x" ></i>
              <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
            </span></a>
                                            <a href="#">
            <span class="fa-stack">
              <i class="fa fa-circle fa-stack-2x"></i>
              <i class="fa fa-google-plus fa-stack-1x fa-inverse"></i>
            </span></a>
                                            <a href="#">
            <span class="fa-stack">
              <i class="fa fa-circle fa-stack-2x"></i>
              <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
            </span></a>
                                            <a href="#">
            <span class="fa-stack">
              <i class="fa fa-circle fa-stack-2x"></i>
              <i class="fa fa-slideshare fa-stack-1x fa-inverse"></i>
            </span></a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <div class="container">

                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="card card-block text-xs-left">
                                        <h5><i class="fa fa-user fa-fw"></i>Biography</h5>

                                        <p>Rick Sanchez C-137 is the father of Beth Smith, and the grandfather of Morty and Summer Smith. Aged 60 years old, he is said to have been away from the family for around fourteen years prior to the events of the show's first episode, "Pilot". He frequently travels on adventures through space and other planets and dimensions with his grandson Morty.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="card card-block">
                                        <h5><i class="fa fa-rocket fa-fw"></i>Interests</h5>
                                        <ul class="list-group" style="margin-top:15px;margin-bottom:15px;">
                                            <li class="list-group-item">Cloud & Parallel Computing</li>
                                            <li class="list-group-item">Big Data Analysis and Management</li>
                                            <li class="list-group-item">High-performance and Low-Power Real-Time Systems</li>
                                            <li class="list-group-item">Mobile Embedded Systems and Network Security</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- end -->
                    </div>
                </main>
            </div>
        </div>
        <!--end of modal -->
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "Profile",
    components: {
        Header: () => import("../../components/Header"),
        Nav: () => import("../../components/Nav.vue"),
    },
    computed: {
        ...mapGetters(["user"]),
    },
}
</script>

<style scoped>
@import '../../css/profile.css';
</style>
