<?php

namespace App\Repositories\Contracts;

interface AuthRepositoryInterface
{
    public function login($request);

    public function logout();

    public function userProfile();

}
