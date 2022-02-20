<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class State extends Model
{
    use HasFactory, Sluggable;

    protected $fillable = [
        'state_name'
    ];

    public function locals(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Lga::class);
    }

    public function staffs(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Staff::class);
    }

}
