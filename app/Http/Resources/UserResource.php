<?php

namespace App\Http\Resources;

use App\Helpers\SystemHelper;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @property mixed $name
 * @property mixed $id
 * @property mixed $email
 * @property mixed $created_at
 * @property mixed $updated_at
 * @property mixed $email_verified_at
 * @property mixed $deleted_at
 */
class UserResource extends JsonResource
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
            'id'    => $this->id,
            'name' => $clean->cleanStringHelper($this->name),
            'email'  => $clean->cleanStringHelper($this->email),
            'email_verified_at' => $this->email_verified_at,
            'created_at' => $this->created_at,
            'updated_at'  => $this->updated_at,
            'deleted_at' => $this->deleted_at
        ];
    }
}
