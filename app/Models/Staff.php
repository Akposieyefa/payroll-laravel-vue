<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @method create(array $array)
 * @method where(string $string, string $string1, $id)
 * @method find($id)
 * @method latest()
 */
class Staff extends Model
{
    use HasFactory, Sluggable;

    protected $table = 'staffs';
    protected  $fillable = [
        'staff_id','surname', 'other_name', 'department_id', 'conpcass', 'step_id', 'sex', 'union_id', 'dob',
        'appointment_date', 'last_promotion_date', 'month_of_increment', 'email', 'level_id', 'state_id',
        'lga_id', 'remark', 'bank_id', 'branch', 'bank_sort_code', 'bvn', 'nhf_number', 'rsa_code', 'rsa_pin',
        'status', 'phone_number', 'coops_deposit', 'slug'
    ];

    public function union(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Union::class, 'union_id');
    }

    public function step(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Step::class, 'step_id');
    }

    public function level(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Level::class, 'level_id');
    }

    public function department(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Department::class ,'department_id');
    }

    public function state(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(State::class, 'state_id');
    }
    public function lga(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Lga::class, 'lga_id');
    }

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'surname'
            ]
        ];
    }
}
