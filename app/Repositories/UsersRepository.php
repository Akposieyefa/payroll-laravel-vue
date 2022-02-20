<?php

namespace App\Repositories;

use App\Actions\UsersAction;
use App\Repositories\Contracts\UsersRepositoryInterface;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;

/**
 * base user's repository class
 */
class UsersRepository implements  UsersRepositoryInterface
{

    /**
     * @var UsersAction
     */
    private UsersAction $action;

    /**
     * @param UsersAction $action
     */
    public function __construct(UsersAction $action)
    {
        $this->action = $action;
    }

    /**
     * @param $request
     * @return JsonResponse
     */
    public function createAccount($request): JsonResponse
    {
        $validator =  Validator::make($request->all(), [
            'email' => 'required|email|unique:users',
            'name' => 'required',
            'password' => 'required|confirmed'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->messages()->first(),
                'success' => false
            ], 422);
        }else {
            return  $this->action->createAccountAction($request);
        }
    }

    /**
     * @param $request
     * @param $id
     * @return JsonResponse
     */
    public function changePassword($request, $id): JsonResponse
    {
        $validator =  Validator::make($request->all(),[
            'old_password' => 'required',
            'password' => 'required|confirmed'
        ]);
        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->messages()->first(),
                'success' => false
            ], 422);
        }else {
            return $this->action->changeAccountPasswordAction($request, $id);
        }
    }

    /**
     * @param $id
     * @return JsonResponse
     */
    public function deleteAccount($id): JsonResponse
    {
        return $this->action->deleteAccountAction($id);
    }

}
