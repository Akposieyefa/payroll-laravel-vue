<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\Contracts\LevelRepositoryInterface;

class LevelController extends Controller
{
    private LevelRepositoryInterface $levelRepositoryInterface;

    public function __construct(LevelRepositoryInterface $levelRepositoryInterface)
    {
        return $this->levelRepositoryInterface = $levelRepositoryInterface;
    }

    public function index()
    {
         return $this->levelRepositoryInterface->getAllLevels();
    }


    public function store(Request $request)
    {
        return $this->levelRepositoryInterface->createLevel($request);
    }

    public function show($id)
    {
        return $this->levelRepositoryInterface->getSingleLevel($id);
    }

    public function update(Request $request, $id)
    {
        return $this->levelRepositoryInterface->updateLevel($request, $id);
    }

    public function destroy($id)
    {
        return $this->levelRepositoryInterface->deleteLevel($id);
    }
}
