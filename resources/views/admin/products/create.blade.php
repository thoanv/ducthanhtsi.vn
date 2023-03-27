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
                    <a href="{{route('products.index')}}">Danh sách</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Thêm mới</li>
            </ol>
        </nav>
    </div>
    <div class="container-fluid">
        <div class="col-lg-12">
            @if (session('success'))
                <div class="alert alert-success notification-submit">
                    {{ session('success') }}
                </div>
            @endif
        </div>
        <form class="theme-form" method="POST" action="{{route('products.store')}}">
            @csrf
            @include($view.'._form',['product'=> $product])
        </form>
    </div>
    </div>
@endsection
