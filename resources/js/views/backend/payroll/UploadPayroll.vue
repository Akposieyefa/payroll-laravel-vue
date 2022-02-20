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
                                    <h1 class="h2 mb-0 ls-tight">Upload Payroll</h1>
                                </div>
                                <!-- Actions -->
                                <div class="col-sm-6 col-12 text-sm-end">
                                    <div class="mx-n1">
                                        <router-link to="/staffs"  data-toggle="modal" data-target="#form" class="btn d-inline-flex btn-sm btn-dark mx-1">
                                            <span class=" pe-2">
                                                <i class="bi bi-plus"></i>
                                            </span>
                                            <span>Payrolls</span>
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
                                <h5 class="mb-0">Upload</h5>
                            </div>
                            <div class="container">
                                <form> <br>
                                    <div class="row jumbotron col-10 offset-1">
                                        <div class="col-sm-6 offset-3 form-group">
                                            <input type="text" class="form-control"  id="name-f" placeholder="Enter file title">
                                        </div>
                                        <div v-if="!file">
                                            <div class="form-group">
                                                <div
                                                    :class="['dropZone', dragging ? 'dropZone-over' : '']"
                                                    @dragenter="dragging = true"
                                                    @dragleave="dragging = false"
                                                >
                                                    <div class="dropZone-info" @drag="onChange">
                                                        <span class="fa fa-cloud-upload dropZone-title"></span> <br />
                                                        <i class="fa fa-file fa-5x" aria-hidden="true"></i> <br>
                                                        <span class="dropZone-title">Drag and drop your ipps sheet file</span><br />
                                                        <button class="btn btn-md" id="success">BROWSE FILE</button>
                                                        <div class="dropZone-upload-limit-info">
                                                            <div>supported file format: xlss </div>
                                                        </div>
                                                    </div>
                                                    <input type="file" @change="onChange" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group" v-else>
                                            <div class="dropZone-uploaded">
                                                <div class="dropZone-uploaded-info">
                                                    <span class="dropZone-title">Uploaded</span>
                                                    <button
                                                        type="button"
                                                        class="btn btn-danger removeFile"
                                                        @click="removeFile"
                                                    >
                                                        Remove File
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-12 form-group mb-0">
                                            <button class="btn btn-dark btn-sm float-right">Submit</button>
                                        </div>

                                    </div>
                                </form>
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
export default {
    name: "UploadPayroll",
    components: {
        Header: () => import("../../../components/Header"),
        Nav: () => import("../../../components/Nav.vue"),
    },
    data() {
        return {
            file: "",
            dragging: false,
            loading: false,
        }
    },
    methods : {
        onChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) {
                this.dragging = false;
                return;
            }
            this.createFile(files[0]);
        },
        createFile(file) {
            if (!file.type.match("pdf.*")) {
                alert("please select pdf file");
                this.dragging = false;
                this.loading = false;
                return;
            }
            this.file = file;
            this.dragging = false;
        },
        removeFile() {
            this.file = "";
        },
    }
}
</script>

<style scoped>
@import '../../../css/index.css';
@import url("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.4.0/font/bootstrap-icons.min.css");
.dropZone {
    width: 100%;
    height: 200px;
    position: relative;
    border: 2px dashed #00a36d;
}

.dropZone:hover .dropZone-title {
    color: #129017;
}

.dropZone-info {
    color: #a8a8a8;
    position: absolute;
    top: 50%;
    width: 100%;
    transform: translate(0, -50%);
    text-align: center;
}

.dropZone-title {
    color: #787878;
    margin-top: -60px;
}

.dropZone input {
    position: absolute;
    cursor: pointer;
    top: 0px;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
}

.dropZone-upload-limit-info {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
}

.dropZone-over {
    background: #5c5c5c;
    opacity: 0.8;
}

.dropZone-uploaded {
    width: 100%;
    height: 200px;
    position: relative;
    border: 2px dashed #eee;
}

.dropZone-uploaded-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #a8a8a8;
    position: absolute;
    top: 50%;
    width: 100%;
    transform: translate(0, -50%);
    text-align: center;
}
.removeFile {
    width: 200px;
}
#success {
    background: #129017;
    color: #ffffff;
    border-radius: 0px;
}
</style>
