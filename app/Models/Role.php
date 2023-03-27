<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'create_by',
        'owner_id'
    ];

    public function permissions()
    {
        return $this->belongsToMany(Permission::class, 'permission_role');
    }
    public function employees()
    {
        return $this->belongsToMany(Employee::class, 'role_employees');
    }
}
