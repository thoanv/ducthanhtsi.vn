<?php
namespace App\Repositories;

use App\Repositories\Support\AbstractRepository;
use App\Models\RoleEmployee;

class RoleUserRepository extends AbstractRepository
{
    public function model(){
        return RoleEmployee::class;
    }
    public function checkPermission($employee_id, $role_id)
    {
        $query = $this->model->where('employee_id', $employee_id)->where('role_id', $role_id)->first();
        return $query ? true : false;
    }
}
