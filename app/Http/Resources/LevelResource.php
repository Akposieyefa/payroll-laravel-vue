<?php

namespace App\Http\Resources;

use App\Helpers\SystemHelper;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @property mixed $name
 * @property mixed $slug
 * @property mixed $created_at
 * @property mixed $updated_at
 * @property mixed $id
 */
class LevelResource extends JsonResource
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
            'name' => $clean->cleanStringHelper($this->name),
            'slug' => $clean->cleanStringHelper($this->slug),
            'staffs' => $this->whenLoaded('staffs'),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
