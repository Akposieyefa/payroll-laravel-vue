<?php

namespace App\Repositories\Contracts;

interface StepRepositoryInterface
{
    public function createStep($request);

    public function getAllSteps();

    public function getSingleStep($id);

    public function updateStep($request, $id);

    public function deleteStep($id);
}

