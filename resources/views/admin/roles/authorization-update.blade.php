
@extends('admin.layouts.app')
@section('title', 'Cập nhật chức vụ')
@section('content')
    <div class="content-wrapper">
        <div class="page-header">
            <h3 class="page-title">Cập nhật chức vụ</h3>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="{{route('dashboard')}}">Dashboard</a>
                    </li>
                    <li class="breadcrumb-item">
                        <a href="{{route('permissions.index')}}">Danh sách</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Cập nhật</li>
                </ol>
            </nav>
        </div>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
            <form class="theme-form" method="POST" action="{{route('authorization-employee-role-update-post')}}" enctype="multipart/form-data">
                @csrf
                <input name="employee_id" type="hidden" value="{{$employee->id}}">
                <input name="role_id" type="hidden" value="{{$role->id}}">
                @include('admin.roles._form',['employee'=>$employee])
            </form>
        </div>
    </div>
@endsection
