<?php

namespace App\Policies;

use App\Models\Slide;
use App\Models\Employee;
use Illuminate\Auth\Access\HandlesAuthorization;

class SlidePolicy
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
     * @param  \App\Models\Employee $employee
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function viewAny(Employee $employee)
    {
        return $employee->hasPermission('slide-views');
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\Employee $employee
     * @param  \App\Models\Slide  $slide
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(Employee $employee, Slide $slide)
    {

    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\Employee $employee
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(Employee $employee)
    {
        return $employee->hasPermission('slide-add');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\Employee $employee
     * @param  \App\Models\Slide  $slide
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(Employee $employee, Slide $slide)
    {
        return $employee->hasPermission('slide-edit');

    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\Employee $employee
     * @param  \App\Models\Slide  $slide
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(Employee $employee, Slide $slide)
    {
        return $employee->hasPermission('slide-delete');
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\Employee $employee
     * @param  \App\Models\Slide  $slide
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(Employee $employee, Slide $slide)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\Employee  $employee
     * @param  \App\Models\Slide  $slide
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(Employee $employee, Slide $slide)
    {
        //
    }
}
