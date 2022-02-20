<?php

namespace App\Repositories\Contracts;

interface ForgetPasswordRepositoryInterface
{
    public function sendPasswordResetLink($request);

    public function resetPassword($request);
}
