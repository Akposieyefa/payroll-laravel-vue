<?php

namespace App\Repositories;

use App\Repositories\Contracts\StaffRepositoryInterface;
use App\Actions\StaffAction;
use Illuminate\Support\Facades\Validator;

class StaffRepository implements StaffRepositoryInterface
{
    private  StaffAction $action;

    public function __construct(StaffAction $action)
    {
        $this->action = $action;
    }

    public function createStaff($request): \Illuminate\Http\JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'staff_id' =>'required',
            'surname' => 'required',
            'other_name' => 'required',
            'department_id' => 'required',
            'conpcass' => 'required',
            'step_id' => 'required',
            'sex' => 'required',
            'union_id' => 'required',
            'dob' => 'required',
            'appointment_date' => 'required',
            'last_promotion_date' =>'required',
            'month_of_increment' => 'required',
            'email' => 'required',
            'level_id' => 'required',
            'state_id' => 'required',
            'lga_id' => 'required',
            'remark' =>'required',
            'bank_id' => 'required',
            'branch' => 'required',
            'bank_sort_code' => 'required',
            'bvn' => 'required',
            'nhf_number' => 'required',
            'rsa_code' => 'required',
            'rsa_pin' => 'required',
            'status' => 'required',
            'phone_number' => 'required',
            'coops_deposit' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->messages()->first(),
                'success' => false
            ], 422);
        }else {
            return $this->action->createStfAction($request);
        }
    }

    public function getAllStaffs(): \Illuminate\Http\JsonResponse|\Illuminate\Http\Resources\Json\AnonymousResourceCollection
    {
        return $this->action->getAllStfAction();
    }


    public function getSingleStaff($slug): \App\Http\Resources\StaffResource|\Illuminate\Http\JsonResponse
    {
        return $this->action->getStfAction($slug);
    }


    public function updateStaff($request, $id)
    {

    }


    public function deleteStaff($id): \Illuminate\Http\JsonResponse
    {
        return $this->action->deleteStfAction($id);
    }

}
