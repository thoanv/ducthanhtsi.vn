<?php

namespace App\Repositories;

use App\Models\Employee;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Repositories\Support\AbstractRepository;

class EmployeeRepository extends AbstractRepository
{
    /**
     * @return mixed|string
     */
    public function model()
    {
        return Employee::class;
    }
    public function getData()
    {
        return $this->model->paginate();
    }
}
