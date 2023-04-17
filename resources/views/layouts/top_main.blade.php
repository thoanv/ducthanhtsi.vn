@php
use App\Helpers\FunctionHelpers;
@endphp
<div id="top_main">
    <div class="all_categories three columns">
        <div class="show_menu">
            <div class="tab_cate"><i class="ico ico_menu"></i>TẤT CẢ DANH MỤC</div>
            <div id="main_cate_menu">
                <ul class="nav_menu">
                    @foreach(FunctionHelpers::getCategoryProducts() as $cate)
                    <li class="m_li">
                        <h3>
                            <a title="{{$cate['name']}}" href="{{route('slug', ['category_slug' => $cate['slug']])}}" class="t_menu">
                                {{$cate['name']}}
                            </a>
                        </h3>
                        <ul class="list_categories" style="width: 952px; min-height: 260px;">
                            @if(count($cate['features']))

                            <li class="pc_menu has-sub">
                                <div class="tt_cate">Nổi bật</div>
                                <ul>
                                    @foreach($cate['features'] as $cate_fea)
                                    <li>
                                        <a href="{{route('slug', ['category_slug' => $cate_fea['slug']])}}">{{$cate_fea['name']}}</a>
                                    </li>
                                    @endforeach
                                </ul>
                            </li>
                            @endif
                            @if(count($cate['child_categories']))
                            <li class="pc_menu has-sub">
                                <div class="tt_cate">Danh mục</div>
                                <ul>
                                    @foreach($cate['child_categories'] as $child_cate)
                                    <li><a href="{{route('slug', ['category_slug' => $child_cate['slug']])}}">{{$child_cate['name']}}</a>
                                    </li>
                                    @endforeach
                                </ul>
                            </li>
                            @endif
                            @if(is_array($cate['trademarks']) && count($cate['trademarks']))
                                <li class="pc_menu has-sub">
                                    <div class="tt_cate">Thương Hiệu Nổi Bật</div>
                                    <ul>
                                        @foreach($cate['trademarks'] as $trademark)
                                            @php
                                                $query = \App\Models\Trademark::where('id', $trademark)->first();
                                                if(!$query) $query = new \App\Models\Trademark();
                                            @endphp
                                            <li><a href="{{url("/thuong-hieu/".$cate['slug']."/".$query['slug'])}}">{{$query['name']}}</a></li>
                                        @endforeach
                                    </ul>
                                </li>
                            @endif
                        </ul>
                    </li>
                    @endforeach
                </ul>
                <div class="others_menu">
                    <ul>
                        <li><a href="{{route('home')}}" title="Trang chủ">Trang chủ</a></li>
                        <li><a href="ket-noi-tu-van/99-gioi-thieu-chung-ve-ket-noi-tieu-dung.html"
                               title="Giới thiệu">Giới thiệu</a></li>
                        <li><a href="ket-noi-tu-van.html" title="Tư vấn kết nối">Tư vấn kết nối</a></h3> </li>
                        <li><a href="lien-he.html" title="Liên hệ">Liên hệ</a></h3> </li>
                    </ul>
                </div>
            </div>
            <div class="others_icon_menu">
                <ul>
                    <li class="others_icon_menu__promotion"><a href="tin-khuyen-mai.html"
                                                               title="Tin khuyến mãi"><i></i> Tin khuyến mãi</a>
                    </li>
                    <li class="others_icon_menu__combo"><a href="combo-tiet-kiem.html"
                                                           title="Combo tiết kiệm"><i></i> Combo tiết kiệm</a></li>
                    <li class="others_icon_menu__youtube"><a
                                href="https://www.youtube.com/channel/UCHwxcUZLYWagLEtijQ9aJSQ" rel="nofollow"
                                target="_blank" title="Video Review Sản Phẩm"><i></i> Video Review</a></h3> </li>
                </ul>
            </div>
        </div>
    </div>
    <div id="right_top_main" class="thirteen columns"> <!-- Main Menu-->
        <nav>
            <div id='main_menu'>
                <ul class="fl">
                    <li class="active">
                        <h3>
                            <a href="{{route('home')}}" title="Trang chủ">Trang chủ</a>
                        </h3>
                    </li>
                    @foreach(\App\Helpers\FunctionHelpers::getMenuByKey('menu_header') as $menu)
                    @if(isset($menu['slug']))
                    <li>
                        <h3>
                            <a href="{{route('slug',['category_slug' => $menu['slug']])}}"
                               title="{{$menu['name']}}"> {{$menu['name']}}
                            </a>
                        </h3>
                    </li>
                    @else
                        <li>
                            <h3>
                                <a href="{{$menu['url']}}" target="_blank"
                                   title="{{$menu['name']}}"> {{$menu['name']}}
                                </a>
                            </h3>
                        </li>
                    @endif
                    @endforeach
                </ul>
            </div>
        </nav>
    </div>
</div>