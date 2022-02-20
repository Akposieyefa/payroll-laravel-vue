<?php

namespace App\Repositories\Contracts;

interface StaffRepositoryInterface
{
    public function createStaff($request);

    public function getAllStaffs();

    public function getSingleStaff($slug);

    public function updateStaff($request, $id);

    public function deleteStaff($id);
}
