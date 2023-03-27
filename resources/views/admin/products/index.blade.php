@extends('admin.layouts.app')
@section('title', 'Danh sách sản phẩm')
@section('content')
    <div class="content-wrapper">
        <div class="page-header">
            <h3 class="page-title">Danh sách sản phẩm</h3>
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
                        <form class="forms-sample" action="{{route('products.index')}}">
                            <div class="row">
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label for="name">Từ khóa</label>
                                        <input type="text" class="form-control" name="name" value="{{isset($request->name) ? $request->name : ''}}" id="name" placeholder="Nhập từ khóa ....">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label for="publisher">Trạng thái</label>
                                        <select name="status" id="" class="form-control">
                                            <option value="">Tất cả</option>
                                            <option {{(isset($request->status) && $request->status == 0)  ? 'selected' : ''}} value="0">Không hoạt động</option>
                                            <option {{(isset($request->status) && $request->status == 1)  ? 'selected' : ''}} value="1">Hoạt động</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label for="category">Danh mục</label>
                                        <select name="category" id="category" class="form-control">
                                            <option value="">Tất cả</option>
                                            @foreach($categories as $key => $value)
                                                <option value="{{$value['id']}}">
                                                    @php
                                                        $str = '';
                                                        for($i = 0; $i< $value->level; $i++){
                                                            echo $str;
                                                            $str.='-- ';
                                                        }
                                                    @endphp
                                                    {{$value['name']}}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-3">
                                    <button type="submit" class="btn btn-primary me-2">Tìm kiếm</button>
                                    <a href="{{route('products.index')}}" class="btn btn-dark">Làm mới</a>
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
                                @can('create', \App\Models\Product::class)
                                <a href="{{route('products.create')}}" class="btn btn-primary btn-fw float-end">Thêm mới</a>
                                @endcan
                            </h4>

                        </div>
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                <tr>
                                    <th scope="col" class="text-center">STT</th>
                                    <th scope="col" >Thông tin</th>
                                    <th scope="col" class="text-center">Hình ảnh</th>
                                    <th scope="col" class="text-center">Danh mục</th>
                                    <th scope="col">Giá bán</th>
                                    <th scope="col" class="text-center">Tạo bởi</th>
                                    <th scope="col" class="text-center">Nổi bật</th>
                                    <th scope="col" class="text-center">Trạng thái</th>
                                    <th scope="col" class="text-center">Tìm kiếm nhanh</th>
                                    <th scope="col" class="text-center">Hành động</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($products as $item)
                                    <tr role="row">
                                        <td role="cell" class="text-center">{{$loop->iteration}}</td>
                                        <td>
                                            <h4> {{$item->name}}</h4>
                                            <div>
                                                <i class="mdi mdi-barcode"></i> <b>Mã:</b> {{$item['code']}}
                                            </div>
                                            <div>
                                                <i class="mdi mdi-file-send"></i> <b>Xuất sứ:</b> {{isset($item->origin) && $item->origin ? $item->origin->name: ''}}
                                            </div>
                                            <div>
                                                <i class="mdi mdi-transcribe"></i> <b>Nhãn hiệu:</b> {{isset($item->trademark) && $item->trademark ? $item->trademark->name: ''}}
                                            </div>
                                            <div>
                                                <i class="mdi mdi-truck-fast"></i> <b>Bảo hành:</b> {{$item['bao_hanh']}}
                                            </div>
                                        </td>
                                        <td class="text-center">
                                            <img class="img-dev-custom" src="{{$item['avatar'] ? $item['avatar'] : '/assets/images/no-image.png'}}" alt="{{$item->name}}">
                                        </td>
                                        <td class="text-center">
                                            <div class="badge badge-outline-success badge-pill">{{isset($item->category) && $item->category ? $item->category->name: ''}}</div>
                                        </td>
                                        <td>
                                            <div>
                                                <i class="mdi mdi-dropbox"></i> <b>Số lượng: </b> {{number_format($item['quantity'])}}
                                            </div>
                                            <div>
                                                <i class="mdi mdi-square-inc-cash"></i> <b>Giá gốc: </b> {{number_format($item['price'])}}
                                            </div>
                                            @if($item['discount'])
                                            <div>
                                                <i class="mdi mdi-trending-down"></i> <b>Giảm giá: </b> {{$item['discount'] ? $item['discount'].'%' : ''}}
                                            </div>
                                            <div>
                                                <i class="mdi mdi-square-inc-cash"></i> <b>Giảm bán: </b> {{$item->getPriceDiscount()}}
                                            </div>
                                            @endif
                                        </td>

                                        <td role="cell" class="text-center">
                                            <div>{{$item->employee->name}}</div>
                                            <div>{{date('H:i d/m/Y', strtotime($item->created_at))}}</div>
                                        </td>
                                        <td role="cell" class="text-center">
                                            <div class="form-check form-switch" style="display: inline-block">
                                                <input name="my-checkbox" type="checkbox" class="form-check-input css-switch" data-id="{{$item['id']}}"
                                                       data-api="{{route('enable-column')}}" data-table="products" data-column="favourite"
                                                        {{ $item['favourite'] ? 'checked="checked"' : '' }}>
                                            </div>
                                        </td>
                                        <td role="cell" class="text-center">
                                            <div class="form-check form-switch" style="display: inline-block">
                                                <input name="my-checkbox" type="checkbox" class="form-check-input css-switch" data-id="{{$item['id']}}"
                                                       data-api="{{route('enable-column')}}" data-table="products" data-column="status"
                                                        {{ $item['status'] ? 'checked="checked"' : '' }}>
                                            </div>
                                        </td>
                                        <td role="cell" class="text-center">
                                            <div class="form-check form-switch" style="display: inline-block">
                                                <input name="my-checkbox" type="checkbox" class="form-check-input css-switch" data-id="{{$item['id']}}"
                                                       data-api="{{route('enable-column')}}" data-table="products" data-column="search"
                                                        {{ $item['search'] ? 'checked="checked"' : '' }}>
                                            </div>
                                        </td>
                                        <td class="text-center">
                                                @can('update', $item)
                                                    <a href="{{route('products.edit', $item['id'])}}" class="btn btn-primary btn-icon-text btn-sm"><i class="mdi mdi-file-check btn-icon-prepend icon-mr"></i> Sửa</a>
                                                @endcan
                                                @can('delete', $item)
                                                    <form class="d-inline-block" action="{{ route('products.destroy', $item['id']) }}" method="POST" >
                                                    @csrf
                                                    @method('DELETE')
                                                    <button type="submit" class="btn btn-danger btn-sm" onclick="return confirm('Bạn có muốn xóa không?')"><i class="mdi mdi-delete btn-icon-prepend icon-mr"></i> Xóa</button>
                                                </form>
                                                @endcan
                                        </td>
                                    </tr>
                                @endforeach
                                </tbody>
                            </table>
                        </div>
                        @if(!count($products))
                            @include('admin.components.data-empty')
                        @endif
                        <div class="text-center mt-3 float-end">
                            {{ $products->links() }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
