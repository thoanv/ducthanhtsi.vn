@extends('layouts.app')
@section('title', 'Trang chủ')
@section('content')
    <div class="container">
        @include('layouts.top_main_home')
        <div class="cf"></div>
        <div class="slide_index" id="homebanners">
            <div id="slide_banner">
                @foreach($slides as $slide)
                <div class='item'>
                    <a title="{{$slide['name']}}"  {{$slide['url'] ? 'target="_blank"' : ':'}} href="{{$slide['url'] ? $slide['url'] : 'javascript:'}}">
                        <img src="{{$slide['image']}}" alt="{{$slide['name']}}"/>
                    </a>
                </div>
                @endforeach
            </div>
        </div>
        <div id="ads_right_top_main" class="fr">
            <div class="ads_item">
                <a title="11 Năm Trong Ngành - KNTD 2021">
                    <img width="100%"
                                                                                 src="data/bqc/bt10/11-nam-trong-nganh-kntd-2021-1609990794.png"
                                                                                 alt="11 Năm Trong Ngành - KNTD 2021"></a>
            </div>
        </div>


        <script> var html_slide_brands = new Array();
            html_slide_brands[1606] = '';
            html_slide_brands[31] = '';
            html_slide_brands[1774] = '';
            html_slide_brands[1772] = '';
            html_slide_brands[1669] = '';
            html_slide_brands[1670] = '';
            html_slide_brands[1671] = '';
            var _owlCarousel = new Array();
            _owlCarousel['all'] = '';
            _owlCarousel[1606] = '';
            _owlCarousel[31] = '';
            _owlCarousel[1774] = '';
            _owlCarousel[1772] = '';
            _owlCarousel[1669] = '';
            _owlCarousel[1670] = '';
            _owlCarousel[1671] = '';

            function showBradCategoryTab(tab) {
                $(".slide_brands").hide();
                if (tab > 0) {
                    $(".tab-brand-category a").addClass("un_active");
                    $("#tab_brand_category_" + tab).removeClass("un_active");
                    $('#slide_brands_' + tab).show();
                    if (typeof _owlCarousel[tab] == 'object') {
                        _owlCarousel[tab].trigger('destroy.owl.carousel');
                        _owlCarousel[tab].html(_owlCarousel[tab].find('.owl-stage-outer').html()).removeClass('owl-loaded');
                        _owlCarousel[tab].owlCarousel({
                            autoplay: true,
                            autoplayTimeout: 3000,
                            autoplayHoverPause: true,
                            nav: false,
                            navSpeed: 500,
                            dots: false,
                            margin: 55,
                            smartSpeed: 1000,
                            loop: true,
                            items: 4,
                            responsive: {
                                0: {items: 2},
                                320: {items: 2},
                                480: {items: 2},
                                640: {items: 2},
                                768: {items: 4},
                                980: {items: 4},
                                1200: {items: 4}
                            }
                        });
                    } else if ($("#slide_brands_" + tab).find("div").length > 1) {
                        _owlCarousel[tab] = $("#slide_brands_" + tab).owlCarousel({
                            autoplay: true,
                            autoplayTimeout: 3000,
                            autoplayHoverPause: true,
                            nav: false,
                            navSpeed: 500,
                            dots: false,
                            margin: 55,
                            smartSpeed: 1000,
                            loop: true,
                            items: 4,
                            responsive: {
                                0: {items: 2},
                                320: {items: 2},
                                480: {items: 2},
                                640: {items: 2},
                                768: {items: 4},
                                980: {items: 4},
                                1200: {items: 4}
                            }
                        });
                    }
                } else {
                    $(".tab-brand-category a").addClass("un_active");
                    $("#tab_brand_category_all").removeClass("un_active");
                    $("#slide_brands_all").show();
                    if (typeof _owlCarousel["all"] == 'object') {
                        _owlCarousel["all"].trigger('destroy.owl.carousel');
                        _owlCarousel["all"].html(_owlCarousel["all"].find('.owl-stage-outer').html()).removeClass('owl-loaded');
                        _owlCarousel["all"].owlCarousel({
                            autoplay: true,
                            autoplayTimeout: 3000,
                            autoplayHoverPause: true,
                            nav: false,
                            navSpeed: 500,
                            dots: false,
                            margin: 55,
                            smartSpeed: 1000,
                            loop: true,
                            items: 4,
                            responsive: {
                                0: {items: 2},
                                320: {items: 2},
                                480: {items: 2},
                                640: {items: 2},
                                768: {items: 4},
                                980: {items: 4},
                                1200: {items: 4}
                            }
                        });
                    }
                }
            } </script> <!--List Products-->
        @foreach($categories as $category)
            <div class="box bor_box pros_home">
                <h3 class="main_Tab">
                    <a href="{{route('slug', ['category_slug' => $category['slug']])}}" style="color: #d42f22">{{$category['name']}}</a>
                </h3>
                <div class="subcate">
                    @foreach($category['child_categories'] as $child)
                        <h4>
                            <a href="{{route('slug', ['category_slug' => $child['slug']])}}" title=" {{$child['name']}}">
                                {{$child['name']}}
                            </a>
                        </h4>
                    @endforeach
                    <a href="{{route('slug', ['category_slug' => $category['slug']])}}" class="view_all cl_red">
                        <b>Tất cả {{$category['name']}}
                        </b>
                    </a>
                </div>
                <div class="slide_pros">
                    @foreach($category['all_products'] as $product)
                        @php
                            $route = route('slug', ['category_slug' => $product->category->slug, 'slug' => $product['slug']]);
                        @endphp
                        <div class="item">
                            <div class="pro_item">
                                <figure class="img_pro">
                                    <a href="{{$route}}" title="{{$product['name']}}">
                                        <img src="{{$product['avatar']}}"
                                             alt="{{$product['name']}}"/>
                                    </a>
                                </figure>
                                <h2 class="pro_name">
                                    <a href="{{$route}}" title="{{$product['name']}}">
                                        {{$product['name']}}
                                    </a>
                                </h2>
                                @if($product['discount'])
                                    <div class="info_price">

                                        <span class="f_price">
                                            <del>{{$product->getPrice()}}</del>
                                        </span>
                                        <span class="m_price cl_red">{{$product->getPriceDiscount()}}</span>
                                    </div>
                                    <span class="saleoff">-{{$product['discount']}}%</span>
                                @else
                                <div class="info_price">
{{--                                    <span class="f_price"></span>--}}
                                    <span class="m_price cl_red">{{$product->getPrice()}}</span>
                                </div>
                            @endif
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        @endforeach
{{--        Giới thiệu--}}
        <div class="box info_SEO pn_homepage_content">
            <div style="text-align: justify;">
                {!! $about['description'] !!}
            </div>
        </div>
    </div><!--end Container--><!-- Begin of footer-->
@endsection
