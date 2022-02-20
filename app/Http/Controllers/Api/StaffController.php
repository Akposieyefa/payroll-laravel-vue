<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\Contracts\StaffRepositoryInterface;

class StaffController extends Controller
{
   private  StaffRepositoryInterface $staffRepositoryInterface;

   public  function __construct(StaffRepositoryInterface $staffRepositoryInterface)
   {
       $this->staffRepositoryInterface = $staffRepositoryInterface;
   }

    public function index()
    {
       return $this->staffRepositoryInterface->getAllStaffs();
    }

    public function store(Request $request)
    {
        return $this->staffRepositoryInterface->createStaff($request);
    }

    public function show($slug)
    {
        return $this->staffRepositoryInterface->getSingleStaff($slug);
    }

    public function update(Request $request, $id)
    {
        return $this->staffRepositoryInterface->updateStaff($request, $id);
    }

    public function destroy($id)
    {
        return $this->staffRepositoryInterface->deleteStaff($id);
    }
}
