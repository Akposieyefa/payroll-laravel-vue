<?php

namespace App\Repositories;

use App\Http\Resources\LevelResource;
use App\Repositories\Contracts\LevelRepositoryInterface;
use App\Actions\LevelAction;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\Validator;

/**
 * level repository interface
 */
class LevelRepository implements LevelRepositoryInterface
{
    /**
     * @var LevelAction
     */
    private LevelAction $action;

    /**
     * @param LevelAction $action
     */
    public function __construct(LevelAction $action)
    {
        $this->action = $action;
    }

    /**
     * create new level
     * @param $request
     * @return JsonResponse
     */
    public function createLevel($request): JsonResponse
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
            return $this->action->createLevAction($request);
        }
    }

    /**
     * get all levels
     * @return JsonResponse|AnonymousResourceCollection
     */
    public function getAllLevels(): JsonResponse|AnonymousResourceCollection
    {
        return $this->action->getAllLevAction();
    }

    /**
     * get single level
     * @param $id
     * @return LevelResource|JsonResponse
     */
    public function getSingleLevel($id): LevelResource|JsonResponse
    {
        return $this->action->getLevAction($id);
    }

    /**
     * update level
     * @param $request
     * @param $id
     * @return JsonResponse
     */
    public function updateLevel($request, $id): JsonResponse
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
            return $this->action->updateLevAction($request, $id);
        }
    }

    /**
     * delete level
     * @param $id
     * @return JsonResponse
     */
    public function deleteLevel($id): JsonResponse
    {
        return $this->action->deleteLevAction($id);
    }
}
