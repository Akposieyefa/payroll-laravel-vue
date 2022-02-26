<?php

use App\Http\Controllers\Api\BankController;
use App\Http\Controllers\Api\UsersController;
use App\Http\Controllers\Api\StaffController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ForgetPasswordController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\DepartmentsController;
use App\Http\Controllers\Api\LevelController;
use App\Http\Controllers\Api\StepController;
use App\Http\Controllers\Api\HelperController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



Route::group(['middleware' => 'api', 'prefix' => 'v1'], function ($router) {

    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/verify-account', [App\Http\Controllers\Api\EmailVerificationController::class, 'verify']);

    Route::controller(ForgetPasswordController::class)->group(function () {
        Route::post('/forgot-password-link', 'send')->name('password.email');
        Route::post('/reset-password', 'reset')->name('password.update');
    });

    Route::group(['middleware' => ['auth:sanctum']], function () {

        Route::controller(AuthController::class)->group(function () {
            Route::post('/logout',  'logout');
            Route::post('/refresh', 'refresh');
            Route::get('/user-profile',  'userProfile');
        });

        Route::controller(DepartmentsController::class)->group(function () {
            Route::post('/departments',  'store');
            Route::get('/departments', 'index');
            Route::get('/departments/{id}',  'show');
            Route::patch('/departments/{id}',  'update');
            Route::delete('/departments/{id}',  'destroy');
        });

        Route::controller(LevelController::class)->group(function () {
            Route::post('/levels',  'store');
            Route::get('/levels', 'index');
            Route::get('/levels/{id}',  'show');
            Route::patch('/levels/{id}',  'update');
            Route::delete('/levels/{id}',  'destroy');
        });

        Route::controller(StepController::class)->group(function () {
            Route::post('/steps',  'store');
            Route::get('/steps', 'index');
            Route::get('/steps/{id}',  'show');
            Route::patch('/steps/{id}',  'update');
            Route::delete('/steps/{id}',  'destroy');
        });

        Route::controller(StaffController::class)->group(function () {
            Route::post('/staffs',  'store');
            Route::get('/staffs', 'index');
            Route::get('/staffs/{slug}',  'show');
            Route::patch('/staffs/{id}',  'update');
            Route::delete('/staffs/{id}',  'destroy');
        });

        Route::controller(BankController::class)->group(function () {
            Route::post('/banks',  'store');
            Route::get('/banks', 'index');
            Route::get('/banks/{id}',  'show');
            Route::patch('/banks/{id}',  'update');
            Route::delete('/banks/{id}',  'destroy');
        });

        Route::controller(UsersController::class)->group(function () {
            Route::patch('/change-password/{id}', 'changePassword');
            Route::post('/profile-image/{id}',  'uploadAccountImage');
        });

        Route::controller(HelperController::class)->group(function () {
            Route::get('/create-helpers', 'createHelper');
            Route::get('/dashboard-helpers', 'dashboardHelper');
            Route::get('/lga-helper/{id}', 'getLga');
        });



    });


});
