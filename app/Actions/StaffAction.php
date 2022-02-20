<?php

namespace App\Actions;

use App\Models\Staff;
use App\Http\Resources\StaffResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use App\Helpers\FileStorageHelper;

/**
 * staff action
 */
class StaffAction
{
    /**
     * @var Staff
     */
    private Staff $model;

    private FileStorageHelper $file;

    /**
     * @param Staff $model
     * @param FileStorageHelper $file
     */
    public function __construct(Staff $model, FileStorageHelper $file)
    {
        $this->model = $model;
        $this->file = $file;
    }

    /**
     * create staff record
     * @param $req
     * @return JsonResponse
     */
    public function createStfAction($req): JsonResponse
    {
        try {
            $stf = $this->model->create([
                'staff_id' => $req->staff_id,
                'surname' => $req->surname,
                'other_name' => $req->other_name,
                'department_id' => $req->department_id,
                'conpcass' => $req->conpcass,
                'step_id' => $req->step_id,
                'sex' => $req->sex,
                'union_id' => $req->union_id,
                'dob' => $req->dob,
                'appointment_date' => $req->appointment_date,
                'last_promotion_date' => $req->last_promotion_date,
                'month_of_increment' => $req->month_of_increment,
                'email' => $req->email,
                'level_id' => $req->level_id,
                'state_id' => $req->state_id,
                'lga_id' => $req->lga_id,
                'remark' => $req->remark,
                'bank_id' => $req->bank_id,
                'branch' => $req->branch,
                'bank_sort_code' => $req->bank_sort_code,
                'bvn' => $req->bvn,
                'nhf_number' => $req->nhf_number,
                'rsa_code' => $req->rsa_code,
                'rsa_pin' => $req->rsa_pin,
                'status' => $req->status,
                'phone_number' => $req->phone_number,
                'coops_deposit' => $req->coops_deposit
            ]);
            return response()->json([
                'message' => 'Staff created successfully',
                'data' => new StaffResource($stf),
                'success' => true
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Sorry unable to  created staff',
                'error' => $e->getMessage(),
                'success' => false
            ], 400);
        }
    }

    /**
     * get all staff records
     * @return JsonResponse|AnonymousResourceCollection
     */
    public function  getAllStfAction(): JsonResponse|AnonymousResourceCollection
    {
        $staffs = $this->model->latest()->paginate(20);
        if (count($staffs) < 1) {
            return response()->json([
                'message' => 'Sorry no staff record found',
                'success' => false
            ], 404);
        }else {
            return StaffResource::collection($staffs)->additional([
                'message' => "All staffs",
                'success' => true
            ], 200);
        }
    }

    /**
     * get single staff record
     * @param $slug
     * @return StaffResource|JsonResponse
     */
    public function getStfAction($slug): StaffResource|JsonResponse
    {
        $data = $this->model->where('slug', '=', $slug)->exists();
        if ($data) {
            $stf = $this->model->where('slug', '=', $slug)->firstOrFail();;
            return (new StaffResource($stf))->additional( [
                'message' => "Staff record",
                'success' => true
            ], 200);
        }else {
            return response()->json([
                'message' => 'Sorry this data do not exist',
                'success' => false
            ], 404);
        }
    }

    /**
     * update staff record
     * @param $req
     * @param $id
     * @return JsonResponse
     */
    public function updateStfAction($req, $id): JsonResponse
    {
        $data = $this->model->where('id', '=', $id)->exists();
        if ($data) {
            $stf = $this->model->find($id);
            $stf->slug = null;
            try {
                $update = $stf->update([
                    'staff_id' =>  empty($req->staff_id) ? $stf->staff_id : $req->staff_id,
                    'surname' =>  empty($req->surname) ? $stf->surname : $req->surname,
                    'other_name' =>  empty($req->other_name) ? $stf->other_name : $req->other_name,
                    'department_id' =>  empty($req->department_id) ? $stf->department_id : $req->department_id,
                    'conpcass' =>  empty($req->conpcass) ? $stf->conpcass : $req->conpcass,
                    'step_id' =>  empty($req->step_id) ? $stf->step_id : $req->step_id,
                    'sex' =>  empty($req->sex) ? $stf->sex : $req->sex,
                    'union_id' =>  empty($req->union_id) ? $stf->union_id : $req->union_id,
                    'dob' =>  empty($req->dob) ? $stf->dob : $req->dob,
                    'appointment_date' =>  empty($req->appointment_date) ? $stf->appointment_date : $req->appointment_date,
                    'last_promotion_date' =>  empty($req->last_promotion_date) ? $stf->last_promotion_date : $req->last_promotion_date,
                    'month_of_increment' =>  empty($req->month_of_increment) ? $stf->month_of_increment : $req->month_of_increment,
                    'email' =>  empty($req->email) ? $stf->email : $req->email,
                    'level_id' =>  empty($req->level_id) ? $stf->level_id : $req->level_id,
                    'state_id' =>  empty($req->state_id) ? $stf->state_id : $req->state_id,
                    'lga_id' =>  empty($req->lga_id) ? $stf->lga_id : $req->lga_id,
                    'remark' =>  empty($req->remark) ? $stf->remark : $req->remark,
                    'bank_id' =>  empty($req->bank_id) ? $stf->bank_id : $req->bank_id,
                    'branch' =>  empty($req->branch) ? $stf->branch : $req->branch,
                    'bank_sort_code' =>  empty($req->bank_sort_code) ? $stf->bank_sort_code : $req->bank_sort_code,
                    'bvn' =>  empty($req->bvn) ? $stf->bvn : $req->bvn,
                    'nhf_number' =>  empty($req->nhf_number) ? $stf->nhf_number : $req->nhf_number,
                    'rsa_code' =>  empty($req->rsa_code) ? $stf->rsa_code : $req->rsa_code,
                    'rsa_pin' =>  empty($req->rsa_pin) ? $stf->rsa_pin : $req->rsa_pin,
                    'status' =>  empty($req->status) ? $stf->status : $req->status,
                    'phone_number' =>  empty($req->phone_number) ? $stf->phone_number : $req->phone_number,
                    'coops_deposit' =>  empty($req->coops_deposit) ? $stf->coops_deposit : $req->coops_deposit
                ]);
                return response()->json([
                    'message' => 'Staff record updated successfully',
                    'data' => new StaffResource($stf),
                    'success' => true
                ], 200);
            } catch (\Exception $e) {
                return response()->json([
                    'message' => 'Sorry unable to  updated staff record',
                    'error' => $e->getMessage(),
                    'success' => false
                ], 400);
            }
        }else {
            return response()->json([
                'message' => 'Sorry this data do not exist',
                'success' => false
            ], 404);
        }
    }

    /**
     * delete staff record
     * @param $id
     * @return JsonResponse
     */
    public function deleteStfAction($id): JsonResponse
    {
        $data = $this->model->where('id', '=', $id)->exists();
        if ($data) {
            $stf =  $this->model->find($id);
            try {
                $stf->delete();
                return response()->json([
                    'message' => 'Staff deleted successfully',
                    'data' => new StaffResource($stf),
                    'success' => true
                ], 200);
            }catch (\Exception $e) {
                return response()->json([
                    'message' => 'Sorry unable to delete staff',
                    'success' => false
                ], 400);
            }
        }else {
            return response()->json([
                'message' => 'Sorry this data do not exist',
                'success' => false
            ], 404);
        }
    }



}
