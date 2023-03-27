<?php

namespace App\Policies;

use App\Models\Category;
use App\Models\Employee;
use Illuminate\Auth\Access\HandlesAuthorization;

class CategoryPolicy
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
        return $employee->hasPermission('category-views');
    }

    /**
     * Determine whether the Employee can view the model.
     *
     * @param  \App\Models\Employee  $employee
     * @param  \App\Models\Category  $categories
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(Employee $employee, Category $categories)
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
        return $employee->hasPermission('category-add');
    }

    /**
     * Determine whether the Employee can update the model.
     *
     * @param  \App\Models\Employee  $employee
     * @param  \App\Models\Category  $categories
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(Employee $employee, Category $categories)
    {
        return $employee->hasPermission('category-edit');
    }

    /**
     * Determine whether the Employee can delete the model.
     *
     * @param  \App\Models\Employee  $employee
     * @param  \App\Models\Category  $categories
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(Employee $employee, Category $categories)
    {
        return $employee->hasPermission('category-delete');
    }

    /**
     * Determine whether the Employee can restore the model.
     *
     * @param  \App\Models\Employee  $employee
     * @param  \App\Models\Category  $categories
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(Employee $employee, Category $categories)
    {
        //
    }

    /**
     * Determine whether the Employee can permanently delete the model.
     *
     * @param  \App\Models\Employee  $employee
     * @param  \App\Models\Category  $categories
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(Employee $employee, Category $categories)
    {
        //
    }
}
