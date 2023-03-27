<?php

namespace App\Policies;

use App\Models\AboutU;
use App\Models\Employee;
use Illuminate\Auth\Access\HandlesAuthorization;

class AboutUPolicy
{
    use HandlesAuthorization;
    public function before($employee, $ability)
    {
        if ($employee->isSuperAdmin()) {
            return true;
        }
    }
    /**
     * Determine whether the Employee can view any models.
     *
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function viewAny(Employee $employee)
    {
        return $employee->hasPermission('aboutUs-views');
    }

    /**
     * Determine whether the Employee can view the model.
     *
     * @param  \App\Models\Employee  $employee
     * @param  \App\Models\AboutU  $aboutU
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(Employee $employee, AboutU $aboutU)
    {
        //
    }

    /**
     * Determine whether the Employee can create models.
     *
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(Employee $employee)
    {

    }

    /**
     * Determine whether the Employee can update the model.
     *
     * @param  \App\Models\Employee  $employee
     * @param  \App\Models\AboutU  $aboutU
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(Employee $employee, AboutU $aboutU)
    {
        return $employee->hasPermission('aboutUs-edit');
    }

    /**
     * Determine whether the Employee can delete the model.
     *
     * @param  \App\Models\Employee  $employee
     * @param  \App\Models\AboutU  $aboutU
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(Employee $employee, AboutU $aboutU)
    {
        //
    }

    /**
     * Determine whether the Employee can restore the model.
     *
     * @param  \App\Models\Employee  $employee
     * @param  \App\Models\AboutU  $aboutU
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(Employee $employee, AboutU $aboutU)
    {
        //
    }

    /**
     * Determine whether the Employee can permanently delete the model.
     *
     * @param  \App\Models\Employee  $employee
     * @param  \App\Models\AboutU  $aboutU
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(Employee $employee, AboutU $aboutU)
    {
        //
    }
}
