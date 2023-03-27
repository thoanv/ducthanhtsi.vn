<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'key',
        'list_id_category',
        'data',
        'status',
        'created_by'
    ];
    public function createdBy()
    {
        return $this->belongsTo(Employee::class, 'created_by', 'id');
    }
}
