<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Helpers\SystemHelper;

class HelperController extends Controller
{
    private SystemHelper $helper;

    public function __construct(SystemHelper $helper)
    {
        $this->helper = $helper;
    }

    public function createHelper(): \Illuminate\Http\JsonResponse
    {
        return  $this->helper->createStaffHelper();
    }

    public function dashboardHelper(): \Illuminate\Http\JsonResponse
    {
        return $this->helper->dashBoardCountHelper();
    }

    public function getLga($id): \Illuminate\Http\JsonResponse
    {
        return $this->helper->getLgaHelper($id);
    }

}
