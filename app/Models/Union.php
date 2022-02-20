<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @method static create(array $array)
 */
class Union extends Model
{
    use HasFactory, Sluggable;

    protected $fillable = [
        'union_name', 'slug'
    ];

    public function staffs(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Staff::class);
    }

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'union_name'
            ]
        ];
    }
}
