<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //auth repository binding
        $this->app->bind(
            \App\Repositories\Contracts\AuthRepositoryInterface::class,
            \App\Repositories\AuthRepository::class
        );
        //department repository binding
        $this->app->bind(
            \App\Repositories\Contracts\DepartmentRepositoryInterface::class,
            \App\Repositories\DepartmentRepository::class
        );
        //level repository binding
        $this->app->bind(
            \App\Repositories\Contracts\LevelRepositoryInterface::class,
            \App\Repositories\LevelRepository::class
        );
        //step repository binding
        $this->app->bind(
            \App\Repositories\Contracts\StepRepositoryInterface::class,
            \App\Repositories\StepRepository::class
        );
        //staff repository binding
        $this->app->bind(
            \App\Repositories\Contracts\StaffRepositoryInterface::class,
            \App\Repositories\StaffRepository::class
        );
        //bank repository binding
        $this->app->bind(
            \App\Repositories\Contracts\BankRepositoryInterface::class,
            \App\Repositories\BankRepository::class
        );
    }


    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
