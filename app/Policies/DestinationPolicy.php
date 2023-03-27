<?php

namespace App\Policies;

use App\Models\Destination;
use App\Models\Employee;
use Illuminate\Auth\Access\HandlesAuthorization;

class DestinationPolicy
{
    use HandlesAuthorization;

    public function before($employee, $ability)
    {
        if ($employee->isSuperAdmin()) {
            return true;
        }
    }
    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function viewAny(Employee  $employee)
    {
        return $employee->hasPermission('destination-views');
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\Employee  $employee
     * @param  \App\Models\Destination  $destination
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(Employee  $employee, Destination $destination)
    {
        //
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(Employee  $employee)
    {
        return $employee->hasPermission('destination-add');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\Employee  $employee
     * @param  \App\Models\Destination  $destination
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(Employee  $employee, Destination $destination)
    {
        return $employee->hasPermission('destination-edit');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\Employee  $employee
     * @param  \App\Models\Destination  $destination
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(Employee  $employee, Destination $destination)
    {
        return $employee->hasPermission('destination-delete');
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\Employee  $employee
     * @param  \App\Models\Destination  $destination
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(Employee  $employee, Destination $destination)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\Employee  $employee
     * @param  \App\Models\Destination  $destination
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(Employee  $employee, Destination $destination)
    {
        //
    }
}
