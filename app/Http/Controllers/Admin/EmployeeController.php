<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Employee;
use App\Http\Requests\StoreEmployeeRequest;
use App\Http\Requests\UpdateEmployeeRequest;
use App\Repositories\EmployeeRepository as EmployeeRepo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class EmployeeController extends Controller
{
    protected $view = 'admin.employees';
    protected $employeeRepo;
    public function __construct(EmployeeRepo $employeeRepo)
    {
        $this->employeeRepo = $employeeRepo;

    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Employee $employee)
    {
        $this->authorize('viewAny', $employee);
        $employees = $this->employeeRepo->getData();
        return view($this->view.'.index',[
            'employees' => $employees,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Employee $employee)
    {
        $this->authorize('create', $employee);
        return view($this->view.'.create',[
            'view' => $this->view,
            'employee' => $employee
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreEmployeeRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreEmployeeRequest $request)
    {
        $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|max:255|unique:users',
            'username' => 'required|max:255|unique:users',
            'phone' => 'required|max:255',
        ]);
        $data = $request->only('name', 'email', 'username', 'phone', 'avatar');
        $data['is_admin'] = isset($request['is_admin']) ? 1 : 0;
        $data['created_by'] = Auth::id();
        $data['password'] = Hash::make(substr($data['phone'], 0, 7));
        $this->employeeRepo->create($data);
        return redirect(route('employees.index'))->with('success', 'Thêm mới thành công');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function show(Employee $employee)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function edit(Employee $employee)
    {
        $this->authorize('update', $employee);
        return view($this->view.'.update',[
            'view' => $this->view,
            'employee' => $employee
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateEmployeeRequest  $request
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateEmployeeRequest $request, Employee $employee)
    {
        $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|max:255|unique:users',
            'username' => 'required|max:255|unique:users',
            'phone' => 'required|max:255',
        ]);
        $data = $request->only('name', 'email', 'username', 'phone', 'avatar');
        $data['is_admin'] = isset($request['is_admin']) ? 1 : 0;
        $data['created_by'] = Auth::id();
        $this->employeeRepo->update($data, $employee['id']);
        return redirect(route('employees.index'))->with('success', 'Cập nhật thành công');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function destroy(Employee $employee)
    {
        $this->authorize('delete', $employee);
        $employee->delete();
        return redirect()->route('employees.index')->with('success','Xóa thành công');
    }
    public function resetPassword(Employee $employee)
    {
        $this->authorize('resetPassword', $employee);
        $pass = $this->generateRandomString(10);
        if($pass){
            $data['password'] = Hash::make($pass);
            $data['password_reset'] = $pass;
            $this->employeeRepo->update($data, $employee['id']);
        }
        return redirect()->route('employees.index')->with('success','Reset mật khẩu thành công');
    }
    private function generateRandomString($length = 10) {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }
}
