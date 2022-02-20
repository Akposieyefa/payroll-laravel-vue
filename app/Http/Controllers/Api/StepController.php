<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\Contracts\StepRepositoryInterface;

class StepController extends Controller
{
    private StepRepositoryInterface $stepRepositoryInterface;

    public function __construct(StepRepositoryInterface $stepRepositoryInterface)
    {
        $this->stepRepositoryInterface = $stepRepositoryInterface;
    }

    public function index()
    {
        return $this->stepRepositoryInterface->getAllSteps();
    }

    public function store(Request $request)
    {
        return $this->stepRepositoryInterface->createStep($request);
    }

    public function show($id)
    {
        return $this->stepRepositoryInterface->getSingleStep($id);
    }

    public function update(Request $request, $id)
    {
        return $this->stepRepositoryInterface->updateStep($request, $id);
    }

    public function destroy($id)
    {
        return $this->stepRepositoryInterface->deleteStep($id);
    }
}
