<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStaffsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('staffs', function (Blueprint $table) {
            $table->id();
            $table->string('staff_id');
            $table->string('surname');
            $table->string('other_name');
            $table->foreignId('department_id')->constrained()->onDelete('cascade');
            $table->string('conpcass');
            $table->foreignId('step_id')->constrained()->onDelete('cascade');
            $table->string('sex');
            $table->string('union_id');
            $table->date('dob');
            $table->date('appointment_date');
            $table->date('last_promotion_date');
            $table->date('month_of_increment');
            $table->string('email')->unique();
            $table->foreignId('level_id')->constrained()->onDelete('cascade');
            $table->foreignId('state_id')->constrained()->onDelete('cascade');
            $table->foreignId('lga_id')->constrained()->onDelete('cascade');
            $table->string('remark');
            $table->foreignId('bank_id')->constrained()->onDelete('cascade');
            $table->string('branch');
            $table->string('bank_sort_code');
            $table->string('bvn')->unique();
            $table->string('nhf_number');
            $table->string('rsa_code');
            $table->string('rsa_pin');
            $table->string('status');
            $table->string('phone_number')->unique();
            $table->string('coops_deposit');
            $table->string('slug')->unique();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('staff');
    }
}
