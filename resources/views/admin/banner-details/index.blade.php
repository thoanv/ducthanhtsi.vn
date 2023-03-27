@extends('admin.layouts.app')
@section('title', 'Danh sách banner')
@section('content')
    <div class="content-wrapper">
        <div class="page-header">
            <h3 class="page-title">Danh sách banner</h3>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{route('dashboard')}}">Dashboard</a></li>
                    <li class="breadcrumb-item"><a href="{{route('banners.index')}}">Danh sách thông tin banner</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Hình ảnh</li>
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
                                    <a href="{{route('banners_detail_create',$banner)}}" class="btn btn-primary btn-fw float-end">Thêm mới</a>
                            </h4>

                        </div>
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                <tr>
                                    <th scope="col">STT</th>
                                    <th scope="col">Tên</th>
                                    <th scope="col">Hình ảnh</th>
                                    <th scope="col">Tảo bởi</th>
                                    <th scope="col">Đường dẫn</th>
                                    <th scope="col" class="text-center">Trạng thái</th>
                                    <th scope="col" class="text-center">Hành động</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($bannerDetails as $item)
                                    <tr role="row" >
                                        <td role="cell">{{$loop->iteration}}</td>
                                        <td role="cell">
                                            {{$item['name']}}
                                        </td>
                                        <td><img style="width: 100px; height: unset; border-radius: unset!important;" src="{{$item['image']}}" /></td>
                                        <td role="cell">{{$item->createdBy->name}}</td>
                                        <td role="cell">{{$item->url}}</td>
                                        <td role="cell" class="text-center">
                                            <div class="form-check form-switch" style="display: inline-block">
                                                <input name="my-checkbox" type="checkbox" class="form-check-input css-switch" data-id="{{$item['id']}}"
                                                       data-api="{{route('enable-column')}}" data-table="banner_details" data-column="status"
                                                    {{ $item['status'] ? 'checked="checked"' : '' }}>
                                            </div>
                                        </td>
                                        <td class="text-center">
                                            <a href="{{route('banners_detail_edit', $item['id'])}}" class="btn btn-primary btn-icon-text"><i class="mdi mdi-file-check btn-icon-prepend icon-mr"></i> Sửa</a>

                                            <form class="d-inline-block" action="{{ route('banners_detail_destroy', $item['id']) }}" method="POST" >
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="btn btn-danger" onclick="return confirm('Bạn có muốn xóa không?')"><i class="mdi mdi-delete btn-icon-prepend icon-mr"></i> Xóa</button>
                                            </form>
                                        </td>
                                    </tr>
                                @endforeach
                                </tbody>
                            </table>
                        </div>
                        @if(!count($bannerDetails))
                            @include('admin.components.data-empty')
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
