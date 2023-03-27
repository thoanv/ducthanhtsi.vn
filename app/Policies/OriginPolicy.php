<?php

namespace App\Policies;

use App\Models\Origin;
use App\Models\Employee;
use Illuminate\Auth\Access\HandlesAuthorization;

class OriginPolicy
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
        return $employee->hasPermission('origin-views');
    }

    /**
     * Determine whether the Employee can view the model.
     *
     * @param  \App\Models\Employee  $employee
     * @param  \App\Models\Origin  $origin
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(Employee $employee, Origin $origin)
    {
        return $employee->hasPermission('origin-show');
    }

    /**
     * Determine whether the Employee can create models.
     *
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(Employee $employee)
    {
        return $employee->hasPermission('origin-add');

    }

    /**
     * Determine whether the Employee can update the model.
     *
     * @param  \App\Models\Employee  $employee
     * @param  \App\Models\Origin  $origin
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(Employee $employee, Origin $origin)
    {
        return $employee->hasPermission('origin-edit');

    }

    /**
     * Determine whether the Employee can delete the model.
     *
     * @param  \App\Models\Employee  $employee
     * @param  \App\Models\Origin  $origin
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(Employee $employee, Origin $origin)
    {
        return $employee->hasPermission('origin-delete');

    }

    /**
     * Determine whether the Employee can restore the model.
     *
     * @param  \App\Models\Employee  $employee
     * @param  \App\Models\Origin  $origin
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(Employee $employee, Origin $origin)
    {
        //
    }

    /**
     * Determine whether the Employee can permanently delete the model.
     *
     * @param  \App\Models\Employee  $employee
     * @param  \App\Models\Origin  $origin
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(Employee $employee, Origin $origin)
    {
        //
    }
}
