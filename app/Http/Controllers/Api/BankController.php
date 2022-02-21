<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\Contracts\BankRepositoryInterface;

class BankController extends Controller
{
    private BankRepositoryInterface $bankRepositoryInterface;

    public function __construct(BankRepositoryInterface $bankRepositoryInterface)
    {
        $this->bankRepositoryInterface = $bankRepositoryInterface;
    }
    public function index()
    {
        return $this->bankRepositoryInterface->getAllBanks();
    }

    public function store(Request $request)
    {
        return $this->bankRepositoryInterface->createBank($request);
    }

    public function show($id)
    {
        return $this->bankRepositoryInterface->getSingleBank($id);
    }

    public function update(Request $request, $id)
    {
        return $this->bankRepositoryInterface->updateBank($request, $id);
    }

    public function destroy($id)
    {
        return $this->bankRepositoryInterface->deleteBank($id);
    }
}
