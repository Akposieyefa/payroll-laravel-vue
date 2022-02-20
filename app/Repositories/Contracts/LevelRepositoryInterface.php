<?php

namespace App\Repositories\Contracts;

interface LevelRepositoryInterface
{
    public function createLevel($request);

    public function getAllLevels();

    public function getSingleLevel($id);

    public function updateLevel($request, $id);

    public function deleteLevel($id);
}
