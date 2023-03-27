@extends('admin.layouts.app')
@section('title', 'Danh sách')
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
                <div class="card mb-2">
                    <div class="card-body">
                        <div>
                            <h4 class="card-title">
                                Tìm kiếm
                            </h4>
                            <hr>
                        </div>
                        <form class="forms-sample" action="{{route('slides.index')}}">
                            <div class="row">
                                   <div class="col-md-3">
                                       <div class="form-group">
                                           <label for="name">Từ khóa</label>
                                           <input type="text" class="form-control" name="name" value="{{isset($request->name) ? $request->name : ''}}" id="name" placeholder="Nhập từ khóa ....">
                                       </div>
                                   </div>
                                   <div class="col-md-3">
                                       <div class="form-group">
                                           <label for="status">Trạng thái</label>
                                           <select name="status" id="" class="form-control">
                                               <option value="">Tất cả</option>
                                               <option {{(isset($request->status) && $request->status == 1)  ? 'selected' : ''}} value="1">Hoạt động</option>
                                               <option {{(isset($request->status) && $request->status == 0)  ? 'selected' : ''}}  value="0">Không hoạt động</option>
                                           </select>
                                       </div>
                                   </div>

                            </div>
                            <div class="row mt-2">
                                <div class="col-md-3">
                                    <button type="submit" class="btn btn-primary me-2">Tìm kiếm</button>
                                    <a href="{{route('slides.index')}}" class="btn btn-dark">Làm mới</a>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-lg-12 grid-margin stretch-card">
                <div class="card">
                    <div class="card-body">
                        <div>
                            <h4 class="card-title">
                                Danh sách
                                @can('create', \App\Models\Slide::class)
                                    <a href="{{route('slides.create')}}" class="btn btn-primary btn-fw float-end">Thêm mới</a>
                                @endcan
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
                                @foreach($slides as $item)
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
                                                       data-api="{{route('enable-column')}}" data-table="slides" data-column="status"
                                                    {{ $item['status'] ? 'checked="checked"' : '' }}>
                                            </div>
                                        </td>
                                        <td class="text-center">
                                            @can('update', $item)
                                                <a href="{{route('slides.edit', $item['id'])}}" class="btn btn-primary btn-icon-text"><i class="mdi mdi-file-check btn-icon-prepend icon-mr"></i> Sửa</a>
                                            @endcan
                                            @can('delete', $item)
                                                <form class="d-inline-block" action="{{ route('slides.destroy', $item['id']) }}" method="POST" >
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
                        @if(!count($slides))
                            @include('admin.components.data-empty')
                        @endif
                        <div class="text-center mt-3 float-end">
                            {{ $slides->links() }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
