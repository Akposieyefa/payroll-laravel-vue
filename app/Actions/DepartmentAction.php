<?php

namespace App\Actions;

use App\Models\Department;
use App\Http\Resources\DepartmentResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

/**
 * department action
 */
class DepartmentAction
{
    /**
     * @var Department
     */
    private Department $model;

    /**
     * @param Department $model
     */
    public function __construct(Department $model)
    {
        $this->model = $model;
    }

    /**
     * create a new department
     * @param $req
     * @return JsonResponse
     */
    public function createDptAction($req): JsonResponse
    {
        try {
            $dpt = $this->model->create([
                'name' => $req->name,
                'description' => $req->description
            ]);
            return response()->json([
                'message' => 'Department created successfully',
                'data' => new DepartmentResource($dpt),
                'success' => true
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Sorry unable to  created department',
                'error' => $e->getMessage(),
                'success' => false
            ], 400);
        }
    }

    /**
     * get all department created
     * @return JsonResponse|AnonymousResourceCollection
     */
    public function  getAllDptAction(): JsonResponse|AnonymousResourceCollection
    {
        $departments = $this->model->with(['staffs'])->latest()->paginate(20);
        if (count($departments) < 1) {
            return response()->json([
                'message' => 'Sorry no department found',
                'success' => false
            ], 404);
        }else {
            return DepartmentResource::collection($departments)->additional([
                'message' => "All departments",
                'success' => true
            ], 200);
        }
    }

    /**
     * get single department
     * @param $id
     * @return DepartmentResource|JsonResponse
     */
    public function getDptAction($id): DepartmentResource|JsonResponse
    {
        $data = $this->model->with(['staffs'])->where('id', '=', $id)->exists();
        if ($data) {
            $dpt = $this->model->find($id);
            return (new DepartmentResource($dpt))->additional( [
                'message' => "Department details",
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
     * update department details
     * @param $req
     * @param $id
     * @return JsonResponse
     */
    public function updateDptAction($req, $id): JsonResponse
    {
        $data = $this->model->where('id', '=', $id)->exists();
        if ($data) {
            $dpt = $this->model->find($id);
            $dpt->slug = null;
            try {
                $update = $dpt->update([
                    'name' => empty($req->name) ? $dpt->name : $req->name,
                    'description' =>   empty($req->description) ? $dpt->description : $req->description
                ]);
                return response()->json([
                    'message' => 'Department updated successfully',
                    'data' => new DepartmentResource($dpt),
                    'success' => true
                ], 200);
            } catch (\Exception $e) {
                return response()->json([
                    'message' => 'Sorry unable to  updated department details',
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
     * delete department
     * @param $id
     * @return JsonResponse
     */
    public function deleteDptAction($id): JsonResponse
    {
        $data = $this->model->where('id', '=', $id)->exists();
        if ($data) {
            $dpt =  $this->model->find($id);
            try {
                $dpt->delete();
                return response()->json([
                    'message' => 'Department deleted successfully',
                    'data' => new DepartmentResource($dpt),
                    'success' => true
                ], 200);
            }catch (\Exception $e) {
                return response()->json([
                    'message' => 'Sorry unable to delete department',
                    'success' => false
                ], 400);
            }
        }else {
            return response()->json([
                'message' => 'Sorry this department do not exist',
                'success' => false
            ], 404);
        }
    }

}
