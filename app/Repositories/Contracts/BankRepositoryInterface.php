<?php

namespace App\Repositories\Contracts;

interface BankRepositoryInterface
{
    public function createBank($request);

    public function getAllBanks();

    public function getSingleBank($id);

    public function updateBank($request, $id);

    public function deleteBank($id);
}

