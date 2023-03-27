@extends('admin.layouts.app')
@section('title', 'Cập nhập')
@section('content')
    <div class="content-wrapper">
        <div class="page-header">
            <h3 class="page-title">Thêm mới</h3>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="{{route('dashboard')}}">Dashboard</a>
                    </li>
                    <li class="breadcrumb-item">
                        <a href="{{route('employees.index')}}">Danh sách</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Cập nhật</li>
                </ol>
            </nav>
        </div>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
            <form class="theme-form" method="POST" action="{{route('employees.update', $employee['id'])}}">
                @csrf
                @method('PATCH')
                @include($view.'._form',['employee'=> $employee])
            </form>
        </div>
    </div>
    <!-- Container-fluid Ends-->
@endsection
