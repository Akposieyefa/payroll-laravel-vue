<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\Contracts\DepartmentRepositoryInterface;
use Illuminate\Http\Response;

class DepartmentsController extends Controller
{
    private DepartmentRepositoryInterface $departmentRepositoryInterface;

    public function __construct(DepartmentRepositoryInterface $departmentRepositoryInterface)
    {
        $this->departmentRepositoryInterface = $departmentRepositoryInterface;
    }

    public function index()
    {
       return  $this->departmentRepositoryInterface->getAllDepartments();
    }

    public function store(Request $request)
    {
        return $this->departmentRepositoryInterface->createDepartment($request);
    }

    public function show(int $id)
    {
        return $this->departmentRepositoryInterface->getSingleDepartment($id);
    }

    public function update(Request $request, int $id)
    {
        return $this->departmentRepositoryInterface->updateDepartment($request, $id);
    }

    public function destroy(int $id)
    {
        return $this->departmentRepositoryInterface->deleteDepartment($id);
    }
}
