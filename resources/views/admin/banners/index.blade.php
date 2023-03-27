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
                        <form class="forms-sample" action="{{route('banners.index')}}">
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
                                    <a href="{{route('banners.index')}}" class="btn btn-dark">Làm mới</a>
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
                                @can('create', \App\Models\Banner::class)
                                    <a href="{{route('banners.create')}}" class="btn btn-primary btn-fw float-end">Thêm mới</a>
                                @endcan
                            </h4>

                        </div>
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                <tr>
                                    <th scope="col">STT</th>
                                    <th scope="col">Tên</th>
                                    <th scope="col">key</th>
                                    <th scope="col">Số lượng</th>
                                    <th scope="col">Tảo bởi</th>
                                    <th scope="col">Liên kết</th>
                                    <th scope="col" class="text-center">Trạng thái</th>
                                    <th scope="col" class="text-center">Hành động</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($banners as $item)
                                    <tr role="row" >
                                        <td role="cell">{{$loop->iteration}}</td>
                                        <td role="cell">
                                            {{$item['name']}}
                                        </td>
                                        <td role="cell">
                                            {{$item['key']}}
                                        </td>
                                        <td>
                                            <div class="badge badge-outline-primary badge-pill">{{$item->bannerDetails()->count()}}</div>

                                        </td>
                                        <td role="cell">{{$item->createdBy->name}}</td>
                                        <td role="cell">
                                            <a href="{{route('banners_detail_list', $item)}}">
                                                <img style="width: 40px; height: 40px; border-radius: unset" src="/assets/images/gallery.png">
                                            </a>

                                        </td>
                                        <td role="cell" class="text-center">
                                            <div class="form-check form-switch" style="display: inline-block">
                                                <input name="my-checkbox" type="checkbox" class="form-check-input css-switch" data-id="{{$item['id']}}"
                                                       data-api="{{route('enable-column')}}" data-table="banners" data-column="status"
                                                    {{ $item['status'] ? 'checked="checked"' : '' }}>
                                            </div>
                                        </td>
                                        <td class="text-center">
                                            @can('update', $item)
                                                <a href="{{route('banners.edit', $item['id'])}}" class="btn btn-primary btn-icon-text"><i class="mdi mdi-file-check btn-icon-prepend icon-mr"></i> Sửa</a>
                                            @endcan
                                            @can('delete', $item)
                                                <form class="d-inline-block" action="{{ route('banners.destroy', $item['id']) }}" method="POST" >
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
                        @if(!count($banners))
                            @include('admin.components.data-empty')
                        @endif
                        <div class="text-center mt-3 float-end">
                            {{ $banners->links() }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
