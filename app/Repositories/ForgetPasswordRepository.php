<?php

namespace App\Repositories;

use App\Models\User;
use App\Repositories\Contracts\ForgetPasswordRepositoryInterface;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

/**
 * base repository for forget-password
 */
class ForgetPasswordRepository implements ForgetPasswordRepositoryInterface
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
     * @return JsonResponse|void
     */
    public function sendPasswordResetLink($request)
    {
        $validator =  Validator::make($request->all(),[
            'email' => 'required|email'
        ]);
        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->messages()->first(),
                'success' => false
            ], 422);

        }else {

            $email_check = $this->model->where('email', '=', $request->email)->first();
            if ($email_check) {
                $status = Password::sendResetLink(
                    $request->only('email')
                );
                if ($status) {
                    return response()->json([
                        'message' => 'Email link sent successfully',
                        'success' => true
                    ], 200);
                }
            }else {
                return response()->json([
                    'message' => 'Sorry this email do not exist in our system',
                    'success' => false
                ], 404);
            }

        }
    }

    /**
     * @param $request
     * @return JsonResponse|void
     */
    public function resetPassword($request)
    {
        $validator =  Validator::make($request->all(),[
            'token' => 'required',
            'password' => 'required|min:8|confirmed',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->messages()->first(),
                'success' => false
            ], 422);

        }else {
            $status = Password::reset(
                $request->only('password', 'password_confirmation', 'token'),
                function ($user, $password) {
                    $user->forceFill([
                        'password' => bcrypt($password)
                    ])->setRememberToken(Str::random(60));

                    $user->save();

                    event(new PasswordReset($user));
                }
            );
            if ($status) {
                return response()->json([
                    'message' => 'Password reset successfully',
                    'success' => true
                ], 200);
            }
        }
    }

}
