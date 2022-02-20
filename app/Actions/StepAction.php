<?php

namespace App\Actions;

use App\Models\Step;
use App\Http\Resources\StepResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

/**
 * step actions
 */
class StepAction
{

    /**
     * @var Step
     */
    private  Step $model;

    /**
     * @param Step $model
     */
    public function  __construct(Step $model)
    {
        $this->model = $model;
    }

    /**
     * create step
     * @param $req
     * @return JsonResponse
     */
    public function createStpAction($req): JsonResponse
    {
        try {
            $stp = $this->model->create([
                'name' => $req->name
            ]);
            return response()->json([
                'message' => 'Step created successfully',
                'data' => new StepResource($stp),
                'success' => true
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Sorry unable to  created step',
                'error' => $e->getMessage(),
                'success' => false
            ], 400);
        }
    }

    /**
     * get all steps
     * @return JsonResponse|AnonymousResourceCollection
     */
    public function  getAllStpAction(): JsonResponse|AnonymousResourceCollection
    {
        $levels = $this->model->with(['staffs'])->latest()->paginate(20);
        if (count($levels) < 1) {
            return response()->json([
                'message' => 'Sorry no step found',
                'success' => false
            ], 404);
        }else {
            return StepResource::collection($levels)->additional([
                'message' => "All steps",
                'success' => true
            ], 200);
        }
    }

    /**
     * get single ste[
     * @param $id
     * @return StepResource|JsonResponse
     */
    public function getStpAction($id): StepResource|JsonResponse
    {
        $data = $this->model->with(['staffs'])->where('id', '=', $id)->exists();
        if ($data) {
            $stp = $this->model->find($id);
            return (new StepResource($stp))->additional( [
                'message' => "Step details",
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
     * update level
     * @param $req
     * @param $id
     * @return JsonResponse
     */
    public function updateStpAction($req, $id): JsonResponse
    {
        $data = $this->model->where('id', '=', $id)->exists();
        if ($data) {
            $stp = $this->model->find($id);
            $stp->slug = null;
            try {
                $stp->update([
                    'name' => empty($req->name) ? $stp->name : $req->name,
                ]);
                return response()->json([
                    'message' => 'Step updated successfully',
                    'data' => new StepResource($stp),
                    'success' => true
                ], 200);
            } catch (\Exception $e) {
                return response()->json([
                    'message' => 'Sorry unable to  updated step details',
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
     * delete level
     * @param $id
     * @return JsonResponse
     */
    public function deleteStpAction($id): JsonResponse
    {
        $data = $this->model->where('id', '=', $id)->exists();
        if ($data) {
            $stp =  $this->model->find($id);
            try {
                $stp->delete();
                return response()->json([
                    'message' => 'Step deleted successfully',
                    'data' => new StepResource($stp),
                    'success' => true
                ], 200);
            }catch (\Exception $e) {
                return response()->json([
                    'message' => 'Sorry unable to delete step',
                    'success' => false
                ], 400);
            }
        }else {
            return response()->json([
                'message' => 'Sorry this step do not exist',
                'success' => false
            ], 404);
        }
    }
}
