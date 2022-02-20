<?php

namespace App\Repositories;

use App\Actions\UsersAction;
use App\Http\Resources\UserResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;
use App\Repositories\Contracts\AuthRepositoryInterface;

/**
 * base authentication repository
 */
class AuthRepository implements AuthRepositoryInterface
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
     * @return JsonResponse|void
     */
    public function login($request)
    {
            $validator = Validator::make($request->all(), [
                'email' => 'required|email',
                'password' => 'required',
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'message' => $validator->messages()->first(),
                    'success' => false
                ], 422);
            }else {
                $cred = request(['email', 'password']);
                if (!auth()->attempt($cred)) {
                    return response()->json([
                        'message' => 'Invalid login details',
                        'success' => false
                    ], 422);
                }
                if (auth()->user()->email_verified_at == NULL) {
                    return response()->json([
                        'message' => 'Email must be verified',
                        'success' => false
                    ], 422);

                }else {
                    $token =  auth()->user()->createToken('apiToken')->plainTextToken;
                    if ($token) {
                        return response()->json([
                            'token' => $token,
                            'user' => new UserResource(auth()->user()),
                            'token_type' => 'bearer',
                            'success' => true
                        ], 200);
                    }
              }
            }
    }

    /**
     * @return JsonResponse
     */
    public function logout(): JsonResponse
    {
       auth()->user()->tokens()->delete();
        return response()->json([
            'message' => 'Logged out successfully',
            'success' => true
        ], 200);
    }

    /**
     * @return UserResource
     */
    public function userProfile(): UserResource
    {
        return $this->action->authUser();
    }

}
