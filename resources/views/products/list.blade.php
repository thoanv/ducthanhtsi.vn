@extends('layouts.app')
@section('title', $category['name'])
@section('content')
    <div class="container">
        @include('layouts.top_main')
        <div class="cf"></div><!--Main-->
        <div id="main">
            <div class="breadcrumb">
                <a href="{{route('home')}}">Trang chủ</a> »
                <a href="javascript:;">{{$category['name']}}</a>
            </div>
            <!--Main Col-->
            <div class="thirteen columns fr" id="main_content">
                <div class="inner_col">
                    <div class="page_des page_des_top">
                        {!! $category['description'] !!}
                    </div>
                    <div class="sub_categories_page">
                        <ul>
                            @foreach($list_child_categories as $value)
                            <li class="columns">
                                <div class="subcate_item">
                                    <div class="subcate_img">
                                        <a href="{{route('slug', ['category_slug' => $value['slug']])}}" title="{{$value['name']}}">
                                            <img src="{{$value['avatar']}}" alt="{{$value['name']}}" border="0">
                                        </a>
                                    </div>
                                    <h4 class="lnk_title">
                                        <a href="{{route('slug', ['category_slug' => $value['slug']])}}" title="{{$value['name']}}">{{$value['name']}}</a>
                                    </h4>
                                </div>
                            </li>
                            @endforeach
                        </ul>
                        <div class="clearfix"></div>
                    </div>
                    <!--List Products-->
                    <div class="box">
                        <div class="tab_cate_main">
                            <h1 class="link_Tab">{{$category['name']}}</h1>
                            <div class="sort_area">
                                @if(is_array($category['trademarks']) && count($category['trademarks']))
                                <div class="dropdown_list fl">
                                    <select name="sortby" id="sortby" id="brand_category" class="brand_category">
                                        <option selected="" value="0">Thương hiệu</option>
                                        @foreach($category['trademarks'] as $trademark)
                                            @php
                                                $query = \App\Models\Trademark::where('id', $trademark)->first();
                                                if(!$query) $query = new \App\Models\Trademark();
                                            @endphp
                                            <li><a href="" title="{{$query['name']}}">{{$query['name']}}</a></li>
                                            <option value="{{$query['id']}}">{{$query['name']}}</option>
                                        @endforeach

                                    </select>

                                </div>
                                @endif
                                <div class="dropdown_list fl">
                                    <select name="sortby" id="sortby">
                                        <option selected="selected" value="0">Sản phẩm chọn lọc</option>
                                        <option value="1">Tên: A-Z</option>
                                        <option value="2">Tên: Z-A</option>
                                        <option value="3">Giá: Cao đến thấp</option>
                                        <option value="4">Giá: Thấp đến cao</option>
                                        <option value="5">Mức giảm giá: Cao đến thấp</option>
                                        <option value="6">Mức giảm giá: Thấp đến cao</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="box_ct list_items">
                            <ul>
                                @foreach($products as $product)
                                    <li class="four columns">
                                @include('components.product-item', ['product' => $product])
                                    </li>
                                @endforeach
                            </ul>
                            <div class="cf"></div>
                            <div class="pagination-css">
                                {{$products->links()}}
                            </div>
                        </div>
                    </div>
                    <style>
                        .pagination-css {
                            background: #f5f5f5;
                            margin-top: 20px;
                            font-size: .9em;
                            text-align: center;
                            padding: 5px;
                        }
                        .pagination-css .pagination{
                            display: inline-flex;
                        }
                        .pagination-css .page-item:not(:first-child) .page-link {
                            margin-left: 5px;
                        }
                        .pagination-css .page-link {
                            padding: 0.375rem 0.75rem!important;
                        }
                        .pagination-css .page-item:first-child .page-link {
                             border-top-left-radius: unset;
                             border-bottom-left-radius: unset;
                        }
                        .pagination-css .page-item:last-child .page-link{
                            border-top-right-radius: unset;
                            border-bottom-right-radius: unset;
                        }
                        .pagination-css .page-item.active .page-link{
                            background: #e00000;
                            border-color: #e00000;
                        }
                    </style>
                    <!--end List Products-->
                    <div class="cf"></div>
                    <div class="page_des">

                    </div>
                </div>
            </div>
            <!--end Main Col-->
            <!--Sidebar-->
            <div class="three columns" id="sidebar">
                <div class="box_Tab">BỘ LỌC SẢN PHẨM</div>
                <!--Vertical Menu-->
                <div class="box">
                    <div class="most-viewed" id="cate_left"> <span class="title_filter">Danh Mục</span>
                        <ul class="list_field">
                            <li>
                                @foreach($categories as $cate)
                                <h3>
                                    <a href="{{route('slug', ['category_slug' => $cate['slug']])}}">{{$cate['name']}}</a>
                                </h3>
                                @if($cate['id'] === $categoryParent['id'])
                                <ul>
                                    @foreach($child_categories as $val)
                                    <li class="{{$val['id'] == $category['id'] ? 'active' : ''}}">
                                        <h4><a href="{{route('slug', ['category_slug' => $val['slug']])}}">{{$val['name']}}</a></h4>
                                    </li>
                                    @endforeach
                                </ul>
                                @endif
                                @endforeach
                            </li>
                        </ul>
                        @if(is_array($category['trademarks']) && count($category['trademarks']))
                        <span class="title_filter">THƯƠNG HIỆU</span>
                        <ul class="list_field">
                            @foreach($category['trademarks'] as $trademark)
                                @php
                                    $query = \App\Models\Trademark::where('id', $trademark)->first();
                                    if(!$query) $query = new \App\Models\Trademark();
                                @endphp
                                <li><a href="{{url("/thuong-hieu/".$cate['slug']."/".$query['slug'])}}">{{$query['name']}}</a></li>
                            @endforeach

                        </ul>
                        @endif
                    </div>
                </div>
                <!--end Vertical Menu-->
            </div>
            <!--end Sidebar-->
        </div>
        <!--End Main-->

    </div>
@endsection