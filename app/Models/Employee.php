<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use App\Traits\HasPermissions;

class Employee extends Authenticatable
{
    use HasFactory, Notifiable, HasPermissions;

    protected $table = 'employees';

    protected $guarded = 'admin';

    protected $fillable = [
        'name', 'username', 'phone', 'address', 'avatar', 'is_admin', 'status', 'email', 'password', 'password_reset'
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    public function isSuperAdmin()
    {
        return $this->is_admin ? true : false;
    }
    public function roles()
    {
        return $this->belongsToMany(Role::class, 'role_employees');
    }
    public function role()
    {
        return $this->hasOne(Role::class, 'owner_id', 'id');
    }
}
