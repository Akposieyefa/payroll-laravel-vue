<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @method static create(array $array)
 * @method latest()
 * @method where(string $string, string $string1, $id)
 * @method find($id)
 */
class Bank extends Model
{
    use HasFactory, Sluggable;

    protected  $fillable = [
        'bank_name', 'bank_code', 'slug'
    ];

    public function staffs(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Staff::class);
    }

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'bank_name'
            ]
        ];
    }
}
