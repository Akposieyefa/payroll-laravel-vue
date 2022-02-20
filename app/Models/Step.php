<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;

/**
 * @method latest()
 * @method create(array $array)
 * @method where(string $string, string $string1, $id)
 * @method find($id)
 */
class Step extends Model
{
    use HasFactory, Sluggable;

    protected  $fillable = [
        'name', 'slug'
    ];

    public function staffs(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Staff::class);
    }

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }
}
