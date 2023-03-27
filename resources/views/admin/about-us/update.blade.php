@extends('admin.layouts.app')
@section('title', 'Thông tin chung')
@section('content')
    <div class="content-wrapper">
        <div class="page-header">
            <h3 class="page-title">Cập nhật</h3>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="{{route('dashboard')}}">Dashboard</a>
                    </li>
                    <li class="breadcrumb-item">
                        <a href="{{route('aboutUs.index')}}">Danh sách</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Cập nhật</li>
                </ol>
            </nav>
        </div>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
            <form class="theme-form" method="POST" action="{{route('aboutUs.update', $aboutU['id'])}}">
                @csrf
                @method('PATCH')
                @include($view.'._form',['aboutUs'=> $aboutU])
            </form>
        </div>
    </div>
    <!-- Container-fluid Ends-->
@endsection
