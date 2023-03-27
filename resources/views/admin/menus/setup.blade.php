@extends('admin.layouts.app')
@section('title', 'Thiết lập menu')
@section('content')
    <div class="content-wrapper">
        <div class="page-header">
            <h3 class="page-title">Thiết lập Menu</h3>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="{{route('dashboard')}}">Dashboard</a>
                    </li>
                    <li class="breadcrumb-item">
                        <a href="{{route('menus.index')}}">Danh sách</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Thiết lập Menu</li>
                </ol>
            </nav>
        </div>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
            <form class="theme-form" method="POST" action="{{route('menus.setup-store', $menu)}}">
                @csrf
                <input type="hidden" name="list_id_cate_checked" class="list_id_cate_checked" value="{{$menu['list_id_category']}}">
                <div class="row">
                    <div class="col-lg-12">
                        @if (session('success'))
                            <div class="alert alert-success notification-submit">
                                {{ session('success') }}
                            </div>
                        @endif
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-9">
                        <div class="row">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Cài đặt Menu</h5>
                                    <hr>
                                    <div class="form-group row">
                                        <div class="col-sm-5 col-form-label">
                                            <div class="card">
                                                <div class="card-body">
                                                    @foreach($categories as $cate)
                                                        <div class="box-check-cate">
                                                            <div class="form-check form-check-flat form-check-primary">
                                                                <label class="form-check-label">
                                                                    <input type="checkbox" {{in_array($cate['id'], $list_categories) ? 'checked="checked" disabled' : ''}}
                                                                    class="form-check-input cate-{{$cate['id']}}" data-slug="{{$cate['slug']}}"  data-name="{{$cate['name']}}" data-id="{{$cate['id']}}" value="{{$cate['id']}}">
                                                                    @php
                                                                        $str = '';
                                                                        for($i = 0; $i< $cate->level; $i++){
                                                                            echo $str;
                                                                            $str.='-- ';
                                                                        }
                                                                    @endphp
                                                                    {{$cate['name']}}
                                                                    <i class="input-helper"></i></label>
                                                            </div>
                                                        </div>

                                                    @endforeach

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-2 col-form-label">
                                            <div class="card">
                                                <div class="card-body">
                                                    <div class="text-center">
                                                        <div>
                                                            <button type="button" class="btn btn-primary btn-icon-text" id="save_value">
                                                                <i class="mdi mdi-arrow-collapse-right btn-icon-prepend"></i> </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-5 col-form-label">
                                            <div class="card">
                                                <div class="card-body">
                                                    <div class="cf nestable-lists">
                                                        <div class="dd" id="nestable">
                                                            <ol class="dd-list">
                                                                @php $stt = 0; @endphp
                                                                @foreach($menuSetup as $set)
                                                                    <li class="dd-item" data-id="{{$set['id']}}"
                                                                        data-name="{{$set['name']}}"
                                                                        data-url="{{isset($set['url']) ? $set['url']: ''}}"
                                                                        data-slug="{{isset($set['slug']) ? $set['slug']: ''}}">
                                                                        <div class="dd-handle">{{$set['name']}}</div>
                                                                        <div class="remove-menu" title="Xóa menu" data-id="{{$set['id']}}"><i class="mdi mdi-window-close"></i></div>
                                                                        @if(isset($set['children']) && !empty($set['children']))
                                                                            <ol class="dd-list">
                                                                                @foreach($set['children'] as $set_child)
                                                                                    <li class="dd-item"
                                                                                        data-id="{{$set_child['id']}}"
                                                                                        data-name="{{$set_child['name']}}"
                                                                                        data-slug="{{isset($set['slug']) ? $set['slug']: ''}}
                                                                                            data-url="{{isset($set['url']) ? $set['url']: ''}}
                                                                                    >
                                                                                        <div class="dd-handle">{{$set_child['name']}}</div>
                                                                                        <div class="remove-menu" title="Xóa menu" data-id="{{$set_child['id']}}"><i class="mdi mdi-window-close"></i></div>
                                                                                        @if(isset($set_child['children']) && !empty($set_child['children']))
                                                                                            <ol class="dd-list">
                                                                                                @foreach($set_child['children'] as $grandchildren)
                                                                                                    <li class="dd-item" data-id="{{$grandchildren['id']}}"
                                                                                                        data-name="{{$grandchildren['name']}}"
                                                                                                        data-slug="{{isset($grandchildren['slug']) ? $grandchildren['slug'] : ''}}"
                                                                                                        data-url="{{isset($grandchildren['url']) ? $grandchildren['url'] : ''}}"
                                                                                                    >
                                                                                                        <div class="dd-handle">{{$grandchildren['name']}}</div>
                                                                                                        <div class="remove-menu" title="Xóa menu" data-id="{{$grandchildren['id']}}"><i class="mdi mdi-window-close"></i></div>

                                                                                                    </li>
                                                                                                @endforeach
                                                                                            </ol>
                                                                                        @endif
                                                                                    </li>
                                                                                @endforeach
                                                                            </ol>
                                                                        @endif
                                                                    </li>
                                                                @endforeach
                                                            </ol>
                                                            <input type="hidden" value="{{$menu['stt']}}" name="stt" class="stt">
                                                            <textarea style="display: none" id="nestable-output"
                                                                      name="data"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style="text-align: center; margin-bottom: 15px">
                                                    <button type="button" class="btn btn-primary me-2 btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="mdi mdi-plus" style="margin-right: 0"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Chức năng</h5>
                                <hr>
                                <div class="text-center">
                                    <button type="submit" class="btn btn-primary me-2">Lưu</button>
                                    <a href="{{route('menus.index')}}" class="btn btn-dark">Quay lại</a>
                                </div>
                            </div>
                        </div>
                        <div class="card mt-4">
                            <div class="card-body">
                                <h5 class="card-title">Thông tin chung</h5>
                                <hr>
                                <div class="form-group row">
                                    <label for="title" class="col-sm-3 col-form-label">Tên Menu</label>
                                    <div class="col-sm-9" style="padding-top: 5px">
                                        {{$menu['name']}}
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="title" class="col-sm-3 col-form-label">Key</label>
                                    <div class="col-sm-9" style="padding-top: 5px">
                                        {{$menu['key']}}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Thêm menu</h5>
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label for="name_menu">Tên Menu</label>
                        <input type="text" class="form-control" id="name_menu" placeholder="2stay">
                    </div>
                    <div class="form-group">
                        <label for="url_menu">Url Menu</label>
                        <input type="text" class="form-control" id="url_menu" placeholder="">
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary" id="addMenu">Thêm mới</button>
                </div>
            </div>
        </div>
    </div>
    <style>
        .dd {
            position: relative;
            display: block;
            margin: 0;
            padding: 0;
            max-width: 600px;
            list-style: none;
            font-size: 13px;
            line-height: 20px;
        }

        .dd-list {
            display: block;
            position: relative;
            margin: 0;
            padding: 0;
            list-style: none;
        }

        .dd-list .dd-list {
            padding-left: 30px;
        }

        .dd-collapsed .dd-list {
            display: none;
        }

        .dd-item,
        .dd-empty,
        .dd-placeholder {
            display: block;
            position: relative;
            margin: 0;
            padding: 0;
            min-height: 20px;
            font-size: 13px;
            line-height: 20px;
        }

        .dd-handle {
            display: block;
            height: 30px;
            margin: 0;
            padding: 15px 10px 30px 10px;
            color: #6c7293;
            text-decoration: none;
            font-weight: bold;
            border: 1px solid rgb(0 144 231 / 48%);
            background: #fafafa;
            background: -webkit-linear-gradient(top, #fafafa 0%, #eee 100%);
            background: -moz-linear-gradient(top, #fafafa 0%, #eee 100%);
            background: linear-gradient(top, #fafafa 0%, #eee 100%);
            -webkit-border-radius: 0px;
            border-radius: 0px;
            box-sizing: border-box;
            -moz-box-sizing: border-box;
            background: #191C24;
            margin-bottom: 15px;
        }

        .dd-handle:hover {
            color: #2ea8e5;
            background: #fff;
        }

        .dd-item > button {
            display: block;
            position: relative;
            cursor: pointer;
            float: left;
            width: 25px;
            height: 20px;
            margin: 15px 0;
            padding: 0;
            text-indent: 100%;
            white-space: nowrap;
            overflow: hidden;
            border: 0;
            background: transparent;
            font-size: 12px;
            line-height: 1;
            text-align: center;
            font-weight: bold;
            color: #FFF;
        }

        .dd-item > button:before {
            content: '+';
            display: block;
            position: absolute;
            width: 100%;
            text-align: center;
            text-indent: 0;
        }

        .dd-item > button[data-action="collapse"]:before {
            content: '-';
        }

        .dd-placeholder,
        .dd-empty {
            margin: 5px 0;
            padding: 0;
            min-height: 30px;
            background: #f2fbff;
            border: 1px dashed #b6bcbf;
            box-sizing: border-box;
            -moz-box-sizing: border-box;
        }

        .dd-empty {
            border: 1px dashed #bbb;
            min-height: 100px;
            background-color: #e5e5e5;
            background-image: -webkit-linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff),
            -webkit-linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff);
            background-image: -moz-linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff),
            -moz-linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff);
            background-image: linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff),
            linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff);
            background-size: 60px 60px;
            background-position: 0 0, 30px 30px;
        }

        .dd-dragel {
            position: absolute;
            pointer-events: none;
            z-index: 9999;
        }

        .dd-dragel > .dd-item .dd-handle {
            margin-top: 0;
        }

        .dd-dragel .dd-handle {
            -webkit-box-shadow: 2px 4px 6px 0 rgba(0, 0, 0, .1);
            box-shadow: 2px 4px 6px 0 rgba(0, 0, 0, .1);
        }

        /**
         * Nestable Extras
         */

        .nestable-lists {
            display: block;
            clear: both;
            width: 100%;
            border: 0;
        }

        #nestable-menu {
            padding: 0;
            margin: 20px 0;
        }

        #nestable-output,
        #nestable2-output {
            width: 100%;
            height: 7em;
            font-size: 0.75em;
            line-height: 1.333333em;
            font-family: Consolas, monospace;
            padding: 5px;
            box-sizing: border-box;
            -moz-box-sizing: border-box;
        }

        #nestable2 .dd-handle {
            color: #fff;
            border: 1px solid #999;
            background: #bbb;
            background: -webkit-linear-gradient(top, #bbb 0%, #999 100%);
            background: -moz-linear-gradient(top, #bbb 0%, #999 100%);
            background: linear-gradient(top, #bbb 0%, #999 100%);
        }

        #nestable2 .dd-handle:hover {
            background: #bbb;
        }

        #nestable2 .dd-item > button:before {
            color: #fff;
        }

        @media only screen and (min-width: 700px) {

            .dd {
                float: left;
                width: 100%;
            }

            .dd + .dd {
                margin-left: 2%;
            }

        }

        .dd-hover > .dd-handle {
            background: #2ea8e5 !important;
        }

        /**
         * Nestable Draggable Handles
         */

        .dd3-content {
            display: block;
            height: 30px;
            margin: 5px 0;
            padding: 5px 10px 5px 40px;
            color: #333;
            text-decoration: none;
            font-weight: bold;
            border: 1px solid #ccc;
            background: #fafafa;
            background: -webkit-linear-gradient(top, #fafafa 0%, #eee 100%);
            background: -moz-linear-gradient(top, #fafafa 0%, #eee 100%);
            background: linear-gradient(top, #fafafa 0%, #eee 100%);
            -webkit-border-radius: 3px;
            border-radius: 3px;
            box-sizing: border-box;
            -moz-box-sizing: border-box;
        }

        .dd3-content:hover {
            color: #2ea8e5;
            background: #fff;
        }

        .dd-dragel > .dd3-item > .dd3-content {
            margin: 0;
        }

        .dd3-item > button {
            margin-left: 30px;
        }

        .dd3-handle {
            position: absolute;
            margin: 0;
            left: 0;
            top: 0;
            cursor: pointer;
            width: 30px;
            text-indent: 100%;
            white-space: nowrap;
            overflow: hidden;
            border: 1px solid #aaa;
            background: #ddd;
            background: -webkit-linear-gradient(top, #ddd 0%, #bbb 100%);
            background: -moz-linear-gradient(top, #ddd 0%, #bbb 100%);
            background: linear-gradient(top, #ddd 0%, #bbb 100%);
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }

        .dd3-handle:before {
            content: '≡';
            display: block;
            position: absolute;
            left: 0;
            top: 3px;
            width: 100%;
            text-align: center;
            text-indent: 0;
            color: #fff;
            font-size: 20px;
            font-weight: normal;
        }

        .dd3-handle:hover {
            background: #ddd;
        }

        /**
         * Socialite
         */

        .socialite {
            display: block;
            float: left;
            height: 35px;
        }
        .remove-menu{
            position: absolute;
            top: 0px;
            right: -20px;
            cursor: pointer;
            background: rgb(0 144 231 / 48%);
            height: 19px;
            width: 19px;
            text-align: center;
        }
    </style>
    <!-- Container-fluid Ends-->
@endsection
@push('scripts')
    <script>
        $(function(){
            $('#save_value').click(function(){
                var arrMenus = JSON.parse($('#nestable-output').val());
                var txt = '';
                var list_id_cate = $('.list_id_cate_checked').val();
                $(':checkbox:checked').each(function(i){
                    let object = {};
                    let slug = $(this).data("slug");
                    object['slug'] = slug;
                    let name = $(this).data("name");
                    object['name'] = name;
                    let id = $(this).data("id");
                    object['id'] = id;
                    console.log($('.cate-'+id).attr('disabled'))
                    if($('.cate-'+id).attr('disabled') === undefined){
                        console.log(id)
                        $('.cate-'+id).prop('disabled', true);
                        let txt_ = `
                        <li class="dd-item"
                            data-id="${id}" data-name="${name}"
                            data-slug="${slug}">
                                <div class="dd-handle">${name}</div>
                                <div class="remove-menu" data-id="${id}" title="Xóa menu"><i class="mdi mdi-window-close"></i></div>
                        </li>
                    `;
                        txt = txt+txt_;
                        list_id_cate =list_id_cate+id+',';
                        arrMenus.push(object)
                    }
                });
                $('.dd-list').append(txt);
                $('.list_id_cate_checked').val(list_id_cate);
                $('#nestable-output').val(JSON.stringify(arrMenus));
            });
            $('#addMenu').click(function (){
                var arrMenus = JSON.parse($('#nestable-output').val());
                var name = $('#name_menu').val();
                var url = $('#url_menu').val();
                var check = true;
                var stt = $('.stt').val();
                if(name === '' && url === '') check = false;
                if(check){
                    stt++;
                    let object = {};
                    let id = 'c'+stt;
                    object['name'] = name;
                    object['id'] = id;
                    object['url'] = url;
                    let txt = `
                        <li class="dd-item"
                            data-id="${id}" data-name="${name}"
                            data-slug="" data-url="${url}">
                                <div class="dd-handle">${name}</div>
                                <div class="remove-menu" data-id="${id}" title="Xóa menu"><i class="mdi mdi-window-close"></i></div>
                        </li>`;
                    arrMenus.push(object);
                    $('.dd-list').append(txt);
                    $('#nestable-output').val(JSON.stringify(arrMenus));
                    $('#exampleModal').modal('hide');
                    $('#name_menu').val('');
                    $('#url_menu').val('');
                    $('.stt').val(stt);
                }else{
                    alert('Vui lòng nhập đầy đủ thông tin')
                }
            })
            $(document).on('click', '.remove-menu', function (e) {
                let r = confirm('Bạn có muốn xóa không')
                if(r){
                    var $this = $(this);
                    var id = $this.data('id');
                    var $parent = $this.parent('.dd-item');
                    $parent.remove();
                    var arrMenus = JSON.parse($('#nestable-output').val());
                    console.log(arrMenus)
                    arrMenus.forEach((val, index) => {
                        if(val['id'] === id){
                            arrMenus.splice(index, 1)
                        }
                    });
                    console.log(arrMenus)
                    $('#nestable-output').val(JSON.stringify(arrMenus));
                    if(Number.isInteger(id)){
                        let list_cate_id = $('.list_id_cate_checked').val();
                        const arrNew = list_cate_id.split(",");
                        arrNew.forEach((value, ind) => {
                            if(value && Number(value) == id){
                                arrNew.splice(ind, 1)
                            }
                        });
                        let list_id = '';
                        arrNew.forEach((value, ind) => {
                            if(value){
                                list_id = list_id+value+',';
                            }
                        });
                        $('.list_id_cate_checked').val(list_id);
                        $('.cate-'+id).removeAttr("disabled")
                        $('.cate-'+id).prop("checked", false);
                    }
                }
            });
        });

    </script>
@endpush
