<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Banner extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'key',
        'created_by',
        'status'
    ];
    public function createdBy()
    {
        return $this->belongsTo(Employee::class, 'created_by');
    }
    public function bannerDetails()
    {
        return $this->hasMany(BannerDetail::class);
    }
}
