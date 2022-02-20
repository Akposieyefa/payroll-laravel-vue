<?php

namespace App\Actions;

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Hash;

/**
 * base users action
 */
class UsersAction
{
    /**
     * @var User
     */
    private  User $model;

    /**
     * @param User $model
     */
    public function __construct(User $model)
    {
        $this->model = $model;
    }

    /**
     * @param $request
     * @return JsonResponse
     */
    public function  createAccountAction($request): JsonResponse
    {
        try {
            return $this->model->create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => bcrypt($request->password),
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Sorry unable to crate account',
                'error' => $e->getMessage(),
                'success' => false
            ], 400);
        }
    }

    /**
     * @return UserResource
     */
    public function authUser(): UserResource
    {
        return new UserResource(auth()->user());
    }

    /**
     * @param $request
     * @param $id
     * @return JsonResponse
     */
    public function changeAccountPasswordAction($request, $id): JsonResponse
    {
        $data = $this->model->where('id', '=', $id)->exists();
        if ($data) {

            $user = $this->model->find($id);
            $hashedPassword = $user->password;

            if (Hash::check($request->old_password , $hashedPassword)) {

                if (!Hash::check($request->password , $hashedPassword)) {

                    try {
                        $user->update([
                            'password' => empty($request->password) ? $user->password : bcrypt($request->password),
                        ]);
                        return response()->json([
                            'message' => 'User password changed successful',
                            'data' => $user,
                            'success' => true
                        ], 200);
                    }catch (\Exception $e) {
                        return response()->json([
                            'message' => 'Sorry the password changing process failed',
                            'error' => $e->getMessage(),
                            'success' => false
                        ], 400);
                    }
                }else {
                    return response()->json([
                        'message' => 'Sorry new password can not be the old password!',
                        'success' => false
                    ], 401);
                }
            }else {
                return response()->json([
                    'message' => 'Sorry old password doesnt matched',
                    'success' => false
                ], 402);
            }
        }else {
            return response()->json([
                'message' => 'Sorry this user do not exist',
                'success' => false
            ], 404);
        }
    }

    /**
     * @param $id
     * @return JsonResponse
     */
    public function deleteAccountAction($id): JsonResponse
    {
        $data = $this->model->where('id', '=', $id)->exists();
        if ($data) {
            try {
                $user =  $this->model->find($id);
                $user->delete();
                return response()->json([
                    'message' => 'User deleted successfully',
                    'data' => $user,
                    'success' => true
                ], 200);
            } catch (\Exception $e) {
                return response()->json([
                    'message' => 'Sorry unable to delete user',
                    'error' => $e->getMessage(),
                    'success' => false
                ], 400);
            }
        }else {
            return response()->json([
                'message' => 'Sorry this user do not exist',
                'success' => false
            ], 404);
        }
    }

}
