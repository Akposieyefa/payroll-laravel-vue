<?php

namespace App\Repositories\Contracts;

interface UsersRepositoryInterface
{

    public function createAccount($request);

    public function changePassword($request, $id);

    public function deleteAccount($id);

}
