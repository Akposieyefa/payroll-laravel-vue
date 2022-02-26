<?php
namespace App\Actions;

use App\Models\Bank;
use Illuminate\Http\JsonResponse;
use App\Http\Resources\BankResource;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

/**
 *
 */
class BankAction
{
    /**
     * @var Bank
     */
    Bankprivate $model;

    /**
     * @param Bank $model
     */
    public function __construct(Bank $model)
    {
        $this->model = $model;
    }

    /**
     * create bank
     * @param  $req
     * @return JsonResponse
     */
    public function createBnkAction($req): JsonResponse
    {
        try {
            $bnk = $this->model->create([
                'bank_name' => $req->name,
                'bank_code' => $req->code,
            ]);
            return response()->json([
                'message' => 'Bank created successfully',
                'data'    => new BankResource($bnk),
                'success' => true,
            ], 200);
        } catch (\Exception$e) {
            return response()->json([
                'message' => 'Sorry unable to  created bank',
                'error'   => $e->getMessage(),
                'success' => false,
            ], 400);
        }
    }

    /**
     * delete bank
     * @param  $id
     * @return JsonResponse
     */
    public function deleteBnkAction($id): JsonResponse
    {
        $data = $this->model->where('id', '=', $id)->exists();

        if ($data) {
            $bnk = $this->model->find($id);
            try {
                $bnk->delete();
                return response()->json([
                    'message' => 'Bank deleted successfully',
                    'data'    => new BankResource($bnk),
                    'success' => true,
                ], 200);
            } catch (\Exception$e) {
                return response()->json([
                    'message' => 'Sorry unable to delete bank record',
                    'success' => false,
                ], 400);
            }
        } else {
            return response()->json([
                'message' => 'Sorry this data do not exist',
                'success' => false,
            ], 404);
        }
    }

    /**
     * get all banks
     * @return JsonResponse|AnonymousResourceCollection
     */
    public function getAllBnkAction(): JsonResponse | AnonymousResourceCollection
    {
        $banks = $this->model->with(['staffs'])->latest()->paginate(20);

        if (count($banks) < 1) {
            return response()->json([
                'message' => 'Sorry no bank found',
                'success' => false,
            ], 404);
        } else {
            return BankResource::collection($banks)->additional([
                'message' => 'All bank list',
                'success' => true,
            ], 200);
        }
    }

    /**
     * get single bank
     * @param  $id
     * @return BankResource|JsonResponse
     */
    public function getBnkAction($id): JsonResponse | BankResource
    {
        $data = $this->model->with(['staffs'])->where('id', '=', $id)->exists();

        if ($data) {
            $bnk = $this->model->find($id);
            return (new BankResource($bnk))->additional([
                'message' => 'Bank details',
                'success' => true,
            ], 200);
        } else {
            return response()->json([
                'message' => 'Sorry this data do not exist',
                'success' => false,
            ], 404);
        }
    }

    /**
     * update bank
     * @param  $req
     * @param  $id
     * @return JsonResponse
     */
    public function updateBnkAction($req, $id): JsonResponse
    {
        $data = $this->model->where('id', '=', $id)->exists();

        if ($data) {
            $bnk       = $this->model->find($id);
            $bnk->slug = null;
            try {
                $update = $bnk->update([
                    'bank_name' => empty($req->name) ? $bnk->bank_name : $req->name,
                    'bank_code' => empty($req->code) ? $bnk->bank_code : $req->code,
                ]);
                return response()->json([
                    'message' => 'Bank updated successfully',
                    'data'    => new BankResource($bnk),
                    'success' => true,
                ], 200);
            } catch (\Exception$e) {
                return response()->json([
                    'message' => 'Sorry unable to  updated bank details',
                    'error'   => $e->getMessage(),
                    'success' => false,
                ], 400);
            }
        } else {
            return response()->json([
                'message' => 'Sorry this data do not exist',
                'success' => false,
            ], 404);
        }
    }
}
