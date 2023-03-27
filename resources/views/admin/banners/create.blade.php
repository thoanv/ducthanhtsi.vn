@extends('admin.layouts.app')
@section('title', 'Thêm mới')
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
                    <a href="{{route('banners.index')}}">Danh sách</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Thêm mới</li>
            </ol>
        </nav>
    </div>
        <!-- Container-fluid starts-->
    <div class="container-fluid">
        <form class="theme-form" method="POST" action="{{route('banners.store')}}">
            @csrf
            @include($view.'._form')
        </form>
    </div>
    </div>
        <!-- Container-fluid Ends-->
@endsection
