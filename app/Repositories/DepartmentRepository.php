<?php

namespace App\Repositories;

use App\Http\Resources\DepartmentResource;
use App\Repositories\Contracts\DepartmentRepositoryInterface;
use App\Actions\DepartmentAction;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\Validator;

/**
 * department repository
 */
class DepartmentRepository implements DepartmentRepositoryInterface
{
    /**
     * @var DepartmentAction
     */
    private DepartmentAction $action;

    /**
     * @param DepartmentAction $action
     */
    public function __construct(DepartmentAction $action)
    {
        $this->action = $action;
    }

    /**
     * create new department
     * @param $request
     * @return JsonResponse
     */
    public function createDepartment($request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'description' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->messages()->first(),
                'success' => false
            ], 422);
        }else {
          return $this->action->createDptAction($request);
        }
    }

    /**
     * get all departments
     * @return JsonResponse|AnonymousResourceCollection
     */
    public function getAllDepartments(): JsonResponse|AnonymousResourceCollection
    {
        return $this->action->getAllDptAction();
    }

    /**
     * get single department
     * @param $id
     * @return DepartmentResource|JsonResponse
     */
    public function getSingleDepartment($id): DepartmentResource|JsonResponse
    {
        return $this->action->getDptAction($id);
    }

    /**
     * update department
     * @param $request
     * @param $id
     * @return JsonResponse
     */
    public function updateDepartment($request, $id): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'name' => 'sometimes',
            'description' => 'sometimes',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->messages()->first(),
                'success' => false
            ], 422);
        }else {
            return $this->action->updateDptAction($request, $id);
        }
    }

    /**
     * delete department
     * @param $id
     * @return JsonResponse
     */
    public function deleteDepartment($id): JsonResponse
    {
        return $this->action->deleteDptAction($id);
    }

}
