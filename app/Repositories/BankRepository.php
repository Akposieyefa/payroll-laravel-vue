<?php

namespace App\Repositories;

use App\Http\Resources\BankResource;
use App\Repositories\Contracts\BankRepositoryInterface;
use App\Actions\BankAction;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\Validator;

/**
 * create bank repository
 */
class BankRepository implements BankRepositoryInterface
{
    /**
     * @var BankAction
     */
    private BankAction $action;

    /**
     * @param BankAction $action
     */
    public function __construct(BankAction $action)
    {
        $this->action = $action;
    }

    /**
     * create
     * @param $request
     * @return JsonResponse
     */
    public function createBank($request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'code' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->messages()->first(),
                'success' => false
            ], 422);
        }else {
            return $this->action->createBnkAction($request);
        }
    }

    /**
     * get all banks
     * @return JsonResponse|AnonymousResourceCollection
     */
    public function getAllBanks(): JsonResponse|AnonymousResourceCollection
    {
        return $this->action->getAllBnkAction();
    }

    /**
     * get single bank details
     * @param $id
     * @return BankResource|JsonResponse
     */
    public function getSingleBank($id): JsonResponse|BankResource
    {
        return $this->action->getBnkAction($id);
    }

    /**
     * update bank
     * @param $request
     * @param $id
     * @return JsonResponse
     */
    public function updateBank($request, $id): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'code' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->messages()->first(),
                'success' => false
            ], 422);
        }else {
            return $this->action->updateBnkAction($request, $id);
        }
    }

    /**
     * delete bank
     * @param $id
     * @return JsonResponse
     */
    public function deleteBank($id): JsonResponse
    {
        return $this->action->deleteBnkAction($id);
    }

}
