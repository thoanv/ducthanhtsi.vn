@extends('admin.layouts.app')
@section('title', 'Nhân viên')
@section('content')
    <div class="content-wrapper">
        <div class="page-header">
            <h3 class="page-title">Nhân viên</h3>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{route('dashboard')}}">Dashboard</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Nhân viên</li>
                </ol>
            </nav>
        </div>
        <div class="row">
            <div class="col-lg-12">
                @if (session('success'))
                    <div class="alert alert-success notification-submit">
                        {{ session('success') }}
                    </div>
                @endif
            </div>
            <div class="col-lg-12 grid-margin stretch-card">
                <div class="card">
                    <div class="card-body">
                        <div>
                            <h4 class="card-title">
                                Danh sách
                                @can('create', \App\Models\Employee::class)
                                <a href="{{route('employees.create')}}" class="btn btn-primary btn-fw float-end">Thêm mới</a>
                                @endcan
                            </h4>

                        </div>
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                <tr>
                                    <th scope="col">STT</th>
                                    <th scope="col" >Thông tin</th>
                                    <th scope="col" class="text-center">Hình ảnh</th>
                                    <th scope="col" class="text-center">Quyền</th>
                                    <th scope="col" class="text-center">Trạng thái</th>
                                    <th scope="col" class="text-center">Hành động</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($employees as $item)
                                    <tr role="row" >
                                        <td role="cell">{{$loop->iteration}}</td>
                                        <td role="cell">
                                            <p><i class="mdi mdi-account"></i> {{$item->name}}</p>
                                            <p><i class="mdi mdi-email"></i> {{$item->email}}</p>
                                            @if($item->phone)
                                            <p><i class="mdi mdi-cellphone-iphone"></i>  {{$item->phone}}</p>
                                            @endif
                                            <p><i class="mdi mdi-login"></i>  {{$item->username}}</p>
                                            @if($item->address)
                                            <p><i class="mdi mdi-map-marker-radius"></i>  {{$item->address}}</p>
                                            @endif
                                            <p title="Tham gia"><i class="mdi mdi-timer"></i>  {{date('H:i d/m/Y', strtotime($item['created_at']))}}</p>
                                            @if($item->password_reset)
                                                <p title="mật khẩu reset"><i class="mdi mdi-key"></i>  {{$item->password_reset}}</p>
                                            @endif
                                        </td>
                                        <td role="cell" class="text-center">
                                            <img class="img-sm rounded-circle me-3" style="width: 100px; height: unset; border-radius: unset!important;" src="{{$item['avatar'] ? $item['avatar'] : '/assets/images/faces/man.png'}}" alt="avatar">
                                        </td>
                                        <td role="cell" class="text-center">
                                            @if($item['is_admin'])
                                                <div class="badge badge-outline-danger badge-pill">Quyền Admin</div>
                                            @else
                                                <div class="badge badge-outline-success badge-pill">{{isset($item->role) ? $item->role->name : '..........'}}</div>
                                            @endif
                                        </td>
                                        <td role="cell" class="text-center">
                                            <div class="form-check form-switch" style="display: inline-block">
                                                <input name="my-checkbox" type="checkbox" class="form-check-input css-switch" data-id="{{$item['id']}}"
                                                       data-api="{{route('enable-column')}}" data-table="employees" data-column="status"
                                                    {{ $item['status'] ? 'checked="checked"' : '' }}>
                                            </div>
                                        </td>
                                        <td class="text-center">
                                            @if(!$item->isSuperAdmin())
                                            <div class="mb-2">
                                                @if(!count($item->roles))
                                                    <a href="{{route('authorization-employee',['employee_id'=> $item['id']])}}"
                                                       class="btn btn-primary btn-sm">
                                                        <i class="mdi mdi-key-plus icon-mr" aria-hidden="true"></i> Cấp quyền
                                                    </a>
                                                @else
                                                    @if(count($item->roles) && !empty($item->roles))
                                                        <a href="{{route('authorization-employee-role',['employee_id'=> $item['id'], 'role_id' => $item->roles[0]->id])}}"
                                                           class="btn btn-success btn-sm">
                                                            <i class="fa fa-balance-scale" aria-hidden="true"></i> Cập
                                                            nhật quyền
                                                        </a>
                                                        @can('delete', $item)
                                                        <form class="d-inline-block" action="{{ route('employees.destroy', $item['id']) }}" method="POST" >
                                                            @csrf
                                                            @method('DELETE')
                                                            <button type="submit" class="btn btn-danger" onclick="return confirm('Bạn có muốn xóa không?')">
                                                                <i class="fa fa-trash-o"></i> Xóa quyền</button>
                                                        </form>
                                                        @endcan

                                                    @endif
                                                @endif
                                            </div>
                                            @endif
                                            @can('update', $item)
                                            <a href="{{route('employees.edit', $item['id'])}}" class="btn btn-primary btn-icon-text"><i class="mdi mdi-file-check btn-icon-prepend icon-mr"></i> Sửa</a>
                                            @endcan
                                            @can('resetPassword', $item)
                                            <form class="d-inline-block" action="{{route('employee.reset-pass', $item['id'])}}" method="POST" >
                                                @csrf
                                                <button type="submit" class="btn btn-info" onclick="return confirm('Bạn có muốn reset lại mật khẩu không?')">
                                                    <i class="fa fa-trash-o"></i> Reset mật khẩu</button>
                                            </form>
                                            @endcan
                                        </td>
                                    </tr>
                                @endforeach
                                </tbody>
                            </table>
                        </div>
                        @if(!count($employees))
                            @include('admin.components.data-empty')
                        @endif

                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
