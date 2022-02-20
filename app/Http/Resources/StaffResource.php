<?php

namespace App\Http\Resources;

use App\Helpers\SystemHelper;
use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @property mixed $created_at
 * @property mixed $id
 * @property mixed $slug
 * @property mixed $updated_at
 * @property mixed $staff_id
 * @property mixed $surname
 * @property mixed $other_name
 * @property mixed $sex
 * @property mixed $conpcass
 * @property mixed $union_id
 * @property mixed $coops_deposit
 * @property mixed $appointment_date
 * @property mixed $last_promotion_date
 * @property mixed $month_of_increment
 * @property mixed $dob
 * @property mixed $email
 * @property mixed $remark
 * @property mixed $bank
 * @property mixed $branch
 * @property mixed $bank_sort_code
 * @property mixed $bvn
 * @property mixed $nhf_number
 * @property mixed $rsa_code
 * @property mixed $rsa_pin
 * @property mixed $status
 * @property mixed $phone_number
 */
class StaffResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $clean = new SystemHelper();
        return [
            'id' => $this->id,
            'staff_id' => $clean->cleanStringHelper($this->staff_id),
            'surname' => $clean->cleanStringHelper($this->surname),
            'other_name' => $clean->cleanStringHelper($this->other_name),
            'full_name' => $clean->cleanStringHelper($this->surname). " ". $clean->cleanStringHelper($this->other_name),
            'department'=> 'lode',
            'conpcass' => $clean->cleanStringHelper($this->conpcass),
            'step' => 'step load',
            'sex' => $clean->cleanStringHelper($this->sex),
            'union_id' => $this->union_id,
            'dob' => $this->dob,
            'appointment_date' => $this->appointment_date,
            'last_promotion_date' => $this->last_promotion_date,
            'month_of_increment' => $this->month_of_increment,
            'email' => $this->email,
            'level' => 'load level  id',
            'state' => 'load state',
            'lga' => 'load lga',
            'remark' => $clean->cleanStringHelper($this->remark),
            'bank' => $clean->cleanStringHelper($this->bank),
            'branch' => $clean->cleanStringHelper($this->branch),
            'bank_sort_code' => $clean->cleanStringHelper($this->bank_sort_code),
            'bvn' => $clean->cleanStringHelper($this->bvn),
            'nhf_number' => $clean->cleanStringHelper($this->nhf_number),
            'rsa_code' => $clean->cleanStringHelper($this->rsa_code),
            'rsa_pin' => $clean->cleanStringHelper($this->rsa_pin),
            'status' => $clean->cleanStringHelper($this->status),
            'phone_number' => $clean->cleanStringHelper($this->phone_number),
            'coops_deposit' => $clean->cleanStringHelper($this->coops_deposit),
            'slug' => $clean->cleanStringHelper($this->slug),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
