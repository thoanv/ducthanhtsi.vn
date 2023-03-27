<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BannerDetail extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'image',
        'url',
        'status',
        'created_by',
        'status',
        'banner_id',
    ];
    public function createdBy()
    {
        return $this->belongsTo(Employee::class, 'created_by');
    }
}
