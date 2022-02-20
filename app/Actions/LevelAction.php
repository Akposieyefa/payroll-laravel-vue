<?php

namespace App\Actions;

use App\Models\Level;
use App\Http\Resources\LevelResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

/**
 * level action
 */
class LevelAction
{
    /**
     * @var Level
     */
    private Level $model;

    /**
     * @param Level $model
     */
    public function __construct(Level $model)
    {
        $this->model = $model;
    }

    /**
     * create new level
     * @param $req
     * @return JsonResponse
     */
    public function createLevAction($req): JsonResponse
    {
        try {
            $lev = $this->model->create([
                'name' => $req->name
            ]);
            return response()->json([
                'message' => 'Department created successfully',
                'data' => new LevelResource($lev),
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
     * get all levels
     * @return JsonResponse|AnonymousResourceCollection
     */
    public function  getAllLevAction(): JsonResponse|AnonymousResourceCollection
    {
        $levels = $this->model->with(['staffs'])->latest()->paginate(20);
        if (count($levels) < 1) {
            return response()->json([
                'message' => 'Sorry no level found',
                'success' => false
            ], 404);
        }else {
            return LevelResource::collection($levels)->additional([
                'message' => "All levels",
                'success' => true
            ], 200);
        }
    }

    /**
     * get single level
     * @param $id
     * @return LevelResource|JsonResponse
     */
    public function getLevAction($id): LevelResource|JsonResponse
    {
        $data = $this->model->with(['staffs'])->where('id', '=', $id)->exists();
        if ($data) {
            $lev = $this->model->find($id);
            return (new LevelResource($lev))->additional( [
                'message' => "Level details",
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
    public function updateLevAction($req, $id): JsonResponse
    {
        $data = $this->model->where('id', '=', $id)->exists();
        if ($data) {
            $lev = $this->model->find($id);
            $lev->slug = null;
            try {
                $update = $lev->update([
                    'name' => empty($req->name) ? $lev->name : $req->name,
                ]);
                return response()->json([
                    'message' => 'Level updated successfully',
                    'data' => new LevelResource($lev),
                    'success' => true
                ], 200);
            } catch (\Exception $e) {
                return response()->json([
                    'message' => 'Sorry unable to  updated level details',
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
    public function deleteLevAction($id): JsonResponse
    {
        $data = $this->model->where('id', '=', $id)->exists();
        if ($data) {
            $lev =  $this->model->find($id);
            try {
                $lev->delete();
                return response()->json([
                    'message' => 'Level deleted successfully',
                    'data' => new LevelResource($lev),
                    'success' => true
                ], 200);
            }catch (\Exception $e) {
                return response()->json([
                    'message' => 'Sorry unable to delete level',
                    'success' => false
                ], 400);
            }
        }else {
            return response()->json([
                'message' => 'Sorry this level do not exist',
                'success' => false
            ], 404);
        }
    }

}
