@extends('admin.layouts.app')
@section('title', 'Danh mục')
@section('content')
    <div class="content-wrapper">
        <div class="page-header">
            <h3 class="page-title">Danh mục</h3>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{route('dashboard')}}">Dashboard</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Danh sách</li>
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
                                @can('create', \App\Models\Category::class)
                                <a href="{{route('categories.create')}}" class="btn btn-primary btn-fw float-end">Thêm mới</a>
                                @endcan
                            </h4>

                        </div>
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                <tr>
                                    <th scope="col">STT</th>
                                    <th scope="col">Tên</th>
                                    <th scope="col">Hình ảnh</th>
                                    <th scope="col">Thể loại</th>
                                    <th scope="col">Tạo bởi</th>
                                    <th scope="col" class="text-center">Nổi bật</th>
                                    <th scope="col" class="text-center">Trạng thái</th>
                                    <th scope="col" class="text-center">Hành động</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($categories as $category)
                                    <tr role="row" >
                                        <td role="cell">{{$loop->iteration}}</td>
                                        <td role="cell">
                                            @php
                                                $str = '';
                                                for($i = 0; $i< $category->level; $i++){
                                                    echo $str;
                                                    $str.='-- ';
                                                }
                                            @endphp
                                            {{$category->name}}
                                        </td>
                                        <td role="cell"><img style="width: 50px; height: unset; border-radius: unset!important;" src="{{$category['avatar'] ? $category['avatar'] : '/assets/images/no-image.png'}}" alt="{{$category->name}}"></td>
                                        <td>
                                            @php
                                            $type = $category->getType();
                                            @endphp
                                            <div class="badge {{$type['css']}} badge-pill">{{$type['title']}}</div>
                                        </td>
                                        <td role="cell">{{$category->createdBy->name}}</td>
                                        <td role="cell" class="text-center">
                                            <div class="form-check form-switch" style="display: inline-block">
                                                <input name="my-checkbox" type="checkbox" class="form-check-input css-switch" data-id="{{$category['id']}}"
                                                       data-api="{{route('enable-column')}}" data-table="categories" data-column="featured"
                                                    {{ $category['featured'] ? 'checked="checked"' : '' }}>
                                            </div>
                                        </td>
                                        <td role="cell" class="text-center">
                                            <div class="form-check form-switch" style="display: inline-block">
                                                <input name="my-checkbox" type="checkbox" class="form-check-input css-switch" data-id="{{$category['id']}}"
                                                       data-api="{{route('enable-column')}}" data-table="categories" data-column="status"
                                                    {{ $category['status'] ? 'checked="checked"' : '' }}>
                                            </div>
                                        </td>
                                        <td class="text-center">
                                            @can('update', $category)
                                            <a href="{{route('categories.edit', $category['id'])}}" class="btn btn-primary btn-icon-text"><i class="mdi mdi-file-check btn-icon-prepend icon-mr"></i> Sửa</a>
                                            @endcan
                                            @can('delete', $category)
                                            <form class="d-inline-block" action="{{ route('categories.destroy', $category['id']) }}" method="POST" >
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="btn btn-danger" onclick="return confirm('Bạn có muốn xóa không?')"><i class="mdi mdi-delete btn-icon-prepend icon-mr"></i> Xóa</button>
                                            </form>
                                            @endcan
                                        </td>
                                    </tr>
                                @endforeach
                                </tbody>
                            </table>
                        </div>
                        @if(!count($categories))
                            @include('admin.components.data-empty')
                        @endif

                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
