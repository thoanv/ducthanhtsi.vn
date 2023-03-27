<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Trademark extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'avatar',
        'slug',
        'status',
        'featured',
        'category_id'
    ];
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
