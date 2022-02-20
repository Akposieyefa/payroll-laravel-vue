<?php

namespace App\Repositories;

use App\Repositories\Contracts\EmailVerificationRepositoryInterface;
use Illuminate\Support\Facades\Validator;
use App\Models\User;

class EmailVerificationRepository implements EmailVerificationRepositoryInterface
{
    private  User $model;

    public  function  __construct(User $model)
    {
        $this->model = $model;
    }

    //verify
    public function verifyEmailAddress($request)
    {
        $validator =  Validator::make($request->all(),[
            "token"  =>  'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->messages()->first(),
                'success' => false
            ], 422);
        }else {
            $token = VerificationToken::where('token', '=', $request->token)->first();
            if ($token) {
                $verify = $this->model->where('email', '=', $token->email)->first();
                $verify->update([
                    'email_verified_at' => now()
                ]);
                return response()->json([
                    'message' => 'Email have  been  verified',
                    'success' => true
                ], 200);
            }else {
                return response()->json([
                    'message' => 'Token not found',
                    'success' => false
                ], 404);
            }
        }
    }
}
