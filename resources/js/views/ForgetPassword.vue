<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4 offset-md-4">
                <div class="card login-form">
                    <div class="card-body">
                        <h3 class="card-title text-center">Reset password</h3>
                        <div class="card-text">
                            <div class="form">
                                <div class="form-group">
                                    <label>Enter your email address and we will send you a link to reset your password.</label>
                                    <input type="email" class="form-control form-control-sm" placeholder="Enter your email address">
                                </div>
                                <button type="submit" class="btn btn-primary btn-block">Send password reset email</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ForgetPassword"
}
</script>

<style scoped>
    body{
        display: -ms-flexbox;
        display: -webkit-box;
        display: flex;
        -ms-flex-align: center;
        -ms-flex-pack: center;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        background-color: #f5f5f5;
    }

    .form{
        padding-top: 10px;
        font-size: 14px;
        margin-top: 30px;
    }

    .card-title{ font-weight:300; }

    .btn{
        font-size: 14px;
        margin-top:20px;
    }

    .login-form{
        width:320px;
        margin:20px;
    }

    span{
        font-size:14px;
    }
</style>
