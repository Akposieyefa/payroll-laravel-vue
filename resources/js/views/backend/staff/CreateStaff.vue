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
                                    <h1 class="h2 mb-0 ls-tight">Onboard Staff</h1>
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
                        <div class="card shadow border-0 mb-7">
                            <div class="card-header">
                                <h5 class="mb-0">Add New Staff</h5>
                            </div>

                            <div class="container">
                                <div> <br>
                                    <div class="row jumbotron">
                                        <div class="col-sm-3 offset-9 form-group">
                                            <input type="file" class="form-control" placeholder="Select profile image"  >
                                        </div>
                                        <div class="col-sm-6 form-group">
                                            <label for="surname">Surname</label>
                                            <input type="text" class="form-control" v-model="staff.surname"  id="surname" placeholder="Enter surname" required>
                                        </div>
                                        <div class="col-sm-6 form-group">
                                            <label for="other-name">Othername</label>
                                            <input type="text" class="form-control" id="other-name" v-model="staff.othername" placeholder="Enter othername" required>
                                        </div>
                                        <div class="col-sm-6 form-group">
                                            <label for="email">Email</label>
                                            <input type="email" class="form-control" id="email" v-model="staff.email" placeholder="Enter email." required>
                                        </div>
                                        <div class="col-sm-6 form-group">
                                            <label for="staff-id">Staff ID</label>
                                            <input type="text" class="form-control" v-model="staff.staff_id" id="staff-id" placeholder="Enter staff id" required>
                                        </div>
                                        <div class="col-sm-4 form-group">
                                            <label for="phone-number">Phone</label>
                                            <input type="text" class="form-control" v-model="staff.phone"  id="phone-number" placeholder="Enter phone number" required>
                                        </div>
                                        <div class="col-sm-4 form-group">
                                            <label for="dob">Date Of Birth</label>
                                            <input type="date"  class="form-control" v-model="staff.dob" id="dob"  required>
                                        </div>
                                        <div class="col-sm-4 form-group">
                                            <label for="coops-deposit">Coops Deposit</label>
                                            <input type="text" class="form-control" v-model="staff.coops_deposit"  id="coops-deposit" placeholder="Enter coops deposit" required>
                                        </div>
                                        <div class="col-sm-4 form-group">
                                            <label for="conpcass">Conpcass</label>
                                            <input type="text" class="form-control" v-model="staff.conpcass" id="conpcass" placeholder="Enter conpcass" required>
                                        </div>
                                        <div class="col-sm-4 form-group">
                                            <label for="appointment-date">Appointment Date</label>
                                            <input type="date" class="form-control" v-model="staff.appointment_date" id="appointment-date"  required>
                                        </div>
                                        <div class="col-sm-4 form-group">
                                            <label for="last-promotion">Last Promotion</label>
                                            <input type="date" class="form-control" v-model="staff.last_promotion_date" id="last-promotion"   required>
                                        </div>
                                        <div class="col-sm-4 form-group">
                                            <label for="Country">Bank</label>
                                            <select v-model="staff.bank" class="form-control">
                                                <option value="0">Select a bank</option>
                                                <option
                                                        v-for="(bank, index) in banks"
                                                        v-bind:value="bank.id"
                                                        :key="index"
                                                        class="form-control"> {{ bank.bank_name }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="col-sm-4 form-group">
                                            <label for="bvn">BVN</label>
                                            <input type="number" class="form-control" v-model="staff.bvn" id="bvn" placeholder="Enter bvn" required>
                                        </div>
                                        <div class="col-sm-4 form-group">
                                            <label>Bank Branch</label>
                                            <input type="text" class="form-control" v-model="staff.branch"  placeholder="Enter bank branch." required>
                                        </div>
                                        <div class="col-sm-4 form-group">
                                            <label for="dpt">Department</label>
                                            <select v-model="staff.dept" class="form-control">
                                                <option value="0">Select a department</option>
                                                <option
                                                        v-for="(department, index) in departments"
                                                        v-bind:value="department.id"
                                                        :key="index"
                                                        class="form-control"> {{ department.name }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="col-sm-4 form-group">
                                            <label for="Country">Level</label>
                                            <select v-model="staff.level" class="form-control">
                                                <option value="0">Select a level</option>
                                                <option
                                                        v-for="(lev, index) in levels"
                                                        v-bind:value="lev.id"
                                                        :key="index"
                                                        class="form-control"> {{ lev.name }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="col-sm-4 form-group">
                                            <label for="Country">Step</label>
                                            <select v-model="staff.step" class="form-control">
                                                <option value="0">Select a step</option>
                                                <option
                                                        v-for="(stp, index) in steps"
                                                        v-bind:value="stp.id"
                                                        :key="index"
                                                        class="form-control"> {{ stp.name }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="col-sm-4 form-group">
                                            <label for="nhf-number">NHF Number</label>
                                            <input type="text" class="form-control"  v-model="staff.nhf_number" id="nhf-number" placeholder="Enter nhf-number" required>
                                        </div>
                                        <div class="col-sm-4 form-group">
                                            <label for="rsa-code">RSA Code</label>
                                            <input type="text" class="form-control" v-model="staff.rsa_code" id="rsa-code" placeholder="Enter rsa-code" required>
                                        </div>
                                        <div class="col-sm-4 form-group">
                                            <label for="rsa-pin">RSA Pin</label>
                                            <input type="text" class="form-control" v-model="staff.rsa_pin" id="rsa-pin" placeholder="Enter rsa-pin" required>
                                        </div>
                                        <div class="col-sm-6 form-group">
                                            <label for="remark">Remark</label>
                                            <input type="text" class="form-control" v-model="staff.remark" id="remark" placeholder="Enter remark" required>
                                        </div>
                                        <div class="col-sm-6 form-group">
                                            <label for="status">Status</label>
                                            <input type="text" class="form-control" v-model="staff.status" id="status" placeholder="Enter status" required>
                                        </div>
                                        <div class="col-sm-4 form-group">
                                            <label for="inc">Month of Increment</label>
                                            <input type="date" class="form-control" v-model="staff.month_of_increment" id="inc"   required>
                                        </div>
                                        <div class="col-sm-4 form-group">
                                            <label for="srt_code">Bank sort code</label>
                                            <input type="text" class="form-control" v-model="staff.bank_sort_code" id="srt_code"   required>
                                        </div>
                                        <div class="col-sm-4 form-group">
                                            <label for="Country">Union</label>
                                            <select v-model="staff.union" class="form-control">
                                                <option value="0">Select staff union</option>
                                                <option
                                                    v-for="(union, index) in unions"
                                                    v-bind:value="union.id"
                                                    :key="index"
                                                    class="form-control"> {{ union.union_name }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="col-sm-4 form-group">
                                            <label for="cod">State of Origin</label>
                                            <select class="form-control" v-model="staff.state" @change='getStateLga(staff.state)'>
                                                <option data-countryCode="US" value="0" selected>Select State</option>
                                                <option
                                                    v-for="(state, index) in states"
                                                    v-bind:value="state.id"
                                                    :key="index"
                                                    class="form-control"> {{ state.state_name }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="col-sm-4 form-group">
                                            <label for="lga">Local government area</label>
                                            <select v-model="staff.lga" class="form-control" id="lga">
                                                <option class="form-control" value="0" selected>Select local government area</option>
                                                <option
                                                    v-for="(lga, index) in lgas"
                                                    v-bind:value="lga.id"
                                                    :key="index"
                                                    class="form-control"> {{ lga.lga_name }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="col-sm-4 form-group">
                                            <label for="sex">Gender</label>
                                            <select id="gender" v-model="staff.gender" class="form-control">
                                                <option value="0">Select gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </select>
                                        </div>
                                        <div class="col-sm-12 form-group mb-0">
                                            <button class="btn btn-dark btn-sm float-right" @click="createStaff()">Submit</button>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </main>
            </div>
        </div>
        <!--end of modal -->
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "CreateStaff",
    components: {
        Header: () => import("../../../components/Header"),
        Nav: () => import("../../../components/Nav.vue")
    },
    created() {
      this.getHelpers();
    },
    data() {
        return {
            staff: {
                surname : "",  othername : "",
                email : "",  phone : "",
                dept : 0,  step : 0,
                level : 0, bank : 0,
                bank_sort_code : "", state : 0,
                lga : 0, staff_id : "",
                remark: "", status : "",
                nhf_number : "", rsa_code : "",
                rsa_pin : "", conpcass : "",
                gender : 0, union : 0,
                dob : "", appointment_date : "",
                last_promotion_date : "", month_of_increment : "",
                branch : "", coops_deposit : ""
            },
            departments : [],  levels : [],  steps : [],
            banks : [], states : [],  lgas : [], unions : []
        }
    },
    methods: {
        async getHelpers() {
            const response = await axios.get("create-helpers", {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            });
            this.departments = response.data.data.departments;
            this.steps = response.data.data.steps;
            this.levels = response.data.data.levels;
            this.banks = response.data.data.banks;
            this.states = response.data.data.states;
            this.unions = response.data.data.unions;
        },
        async getStateLga(state_id)
        {
            const response = await axios.get("lga-helper/" + state_id, {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            });
            this.lgas = response.data.data.lgas;
        },
        async createStaff() {
            try {
                const response = await axios.post(
                    "staffs",
                    {
                        staff_id : this.staff.staff_id,
                        surname : this.staff.surname,
                        other_name : this.staff.othername,
                        department_id : this.staff.dept,
                        conpcass : this.staff.conpcass,
                        step_id : this.staff.step,
                        sex  : this.staff.gender,
                        union_id : this.staff.union,
                        dob : this.staff.dob,
                        appointment_date : this.staff.appointment_date,
                        last_promotion_date : this.staff.last_promotion_date,
                        month_of_increment : this.staff.month_of_increment,
                        email : this.staff.email,
                        level_id : this.staff.level,
                        state_id : this.staff.state,
                        lga_id : this.staff.lga,
                        remark : this.staff.remark,
                        bank_id : this.staff.bank,
                        branch : this.staff.branch,
                        bank_sort_code : this.staff.bank_sort_code,
                        bvn : this.staff.bvn,
                        nhf_number : this.staff.nhf_number,
                        rsa_code : this.staff.rsa_code,
                        rsa_pin : this.staff.rsa_pin,
                        status  : this.staff.status,
                        phone_number : this.staff.phone,
                        coops_deposit : this.staff.coops_deposit
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                    }
                );
                this.$toasted.success(response.data.message)
                this. clearDate()
            } catch (e) {
                this.$toasted.error(e.response.data.message)
            }
        },
        clearDate() {
            this.staff.staff_id = ""; this.staff.surname = ""; this.staff.othername = "";
            this.staff.dept = ""; this.staff.conpcass = ""; this.staff.step = "";
            this.staff.gender = ""; this.staff.union = ""; this.staff.dob = "";
            this.staff.appointment_date = ""; this.staff.last_promotion_date = "";
            this.staff.month_of_increment = ""; this.staff.email = "";
            this.staff.level = ""; this.staff.state = ""; this.staff.lga = "";
            this.staff.remark = ""; this.staff.bank = ""; this.staff.branch = "";
            this.staff.bank_sort_code = ""; this.staff.bvn = ""; this.staff.nhf_number = "";
            this.staff.rsa_code = ""; this.staff.rsa_pin = ""; this.staff.status = "";
            this.staff.phone = ""; this.staff.coops_deposit = ""
        }

    }
}
</script>

<style scoped>
</style>
