<?php

namespace App\Repositories\Contracts;

interface DepartmentRepositoryInterface
{
    public function createDepartment($request);

    public function getAllDepartments();

    public function getSingleDepartment($id);

    public function updateDepartment($request, $id);

    public function deleteDepartment($id);
}
