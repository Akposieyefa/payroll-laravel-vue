<?php

namespace App\Repositories;

use App\Http\Resources\StepResource;
use App\Models\Step;
use App\Repositories\Contracts\StepRepositoryInterface;
use App\Actions\StepAction;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\Validator;

/**
 * steps repository
 */
class StepRepository implements  StepRepositoryInterface
{
    /**
     * @var StepAction
     */
    private  StepAction $action;

    /**
     * @param StepAction $action
     */
    public function __construct(StepAction $action)
    {
        $this->action = $action;
    }

    /**
     * create new step
     * @param $request
     * @return JsonResponse
     */
    public function createStep($request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->messages()->first(),
                'success' => false
            ], 422);
        }else {
            return $this->action->createStpAction($request);
        }
    }

    /**
     * get all steps
     * @return JsonResponse|AnonymousResourceCollection
     */
    public function getAllSteps(): JsonResponse|AnonymousResourceCollection
    {
        return $this->action->getAllStpAction();
    }

    /**
     * get single step
     * @param $id
     * @return StepResource|JsonResponse
     */
    public function getSingleStep($id): StepResource|JsonResponse
    {
        return $this->action->getStpAction($id);
    }

    /**
     * update step
     * @param $request
     * @param $id
     * @return JsonResponse
     */
    public function updateStep($request, $id): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->messages()->first(),
                'success' => false
            ], 422);
        }else {
            return $this->action->updateStpAction($request, $id);
        }
    }

    /**
     * delete step
     * @param $id
     * @return JsonResponse
     */
    public function deleteStep($id): JsonResponse
    {
        return $this->action->deleteStpAction($id);
    }
}
