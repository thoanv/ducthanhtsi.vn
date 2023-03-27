@extends('layouts.app')
@section('title', )
@section('content')
    <div class="container">
        @include('layouts.top_main')
        <div class="cf"></div><!--Main-->
        <div id="main">
            <div class="breadcrumb">
                <a href="{{route('home')}}">Trang chủ</a> »
                <a href="{{route('slug', ['category_slug' => $category['slug']])}}">{{$category['name']}}</a> »
                <a href="javascript:;">{{$product['name']}}</a>
            </div>
            <!--Detail Products-->
            <div class="detail_page">
                <div class="l_col_dtp cf">
                    <div class="pro_left seven columns">
                        <!--Image Product-->
                        {{--                        <div class="padd10" id="img_dtp" style="position: relative;">--}}
                        {{--                            <a class="imagezoom main_img fancybox_pro"--}}
                        {{--                               href="{{$product['avatar']}}"--}}
                        {{--                               và="" 1="" 2"="" toptul="" gcai150r"=""><img itemprop="image"--}}
                        {{--                                                                            src="{{$product['avatar']}}"--}}
                        {{--                                                                            alt="{{$product['name']}}" và=""--}}
                        {{--                                                                            1="" 2"="" toptul="" gcai150r"="" title="{{$product['name']}}" id="image"--}}
                        {{--                            data-zoom-image="{{$product['avatar']}}"--}}
                        {{--                            class="product-image-zoom img-responsive" width="350" height="350"></a>--}}
                        {{--                            <div id="image-additional-carousel">--}}

                        {{--                            </div>--}}
                        {{--                            <div class="water_mark_bhch"></div>--}}
                        {{--                        </div>--}}
                        <div class="padd10" id="img_dtp" style="position: relative;">
                            <a class="imagezoom main_img fancybox_pro"
                               href="{{$product['avatar']}}"><img
                                        itemprop="image"
                                        src="{{$product['avatar']}}"
                                        alt="{{$product['name']}}"
                                        title="{{$product['name']}}" id="image"
                                        data-zoom-image="{{$product['avatar']}}"
                                        class="product-image-zoom img-responsive" width="350" height="350"></a>
                            <div id="image-additional-carousel">
                                <div class="slide_thumbs owl-theme">
                                    <div class="item">
                                        <div class="thumb"><a
                                                    href="{{$product['avatar']}}"
                                                    title="Máy khoan động lực dùng pin 18V Makita DHP486RTE"
                                                    class="imagezoom" rel="group"
                                                    data-zoom-image="{{$product['avatar']}}"
                                                    data-image="{{$product['avatar']}}">
                                                <img src="{{$product['avatar']}}"
                                                     title="Máy khoan động lực dùng pin 18V Makita DHP486RTE"
                                                     alt="Máy khoan động lực dùng pin 18V Makita DHP486RTE"
                                                     data-zoom-image="{{$product['avatar']}}"
                                                     class="product-image-zoom img-responsive"> </a></div>
                                    </div>

                                </div>
                            </div>
                            @if($product['is_bao_hanh_chinh_hang'])
                                <div class="water_mark_bhch"></div>
                            @endif
                        </div>
                        <!--end Image Product-->
                    </div>
                    <style>
                        #image-additional-carousel .owl-theme .owl-controls .owl-nav .owl-prev {
                            display: none !important;
                        }
                    </style>
                    <!--end: #dp-thumb-->
                    <div id="dtp_info" class="nine columns">
                        <h1 class="heading_page">{{$product['name']}}</h1>
                        <div class="dtp_status cf" data-rank="0.00" id="star" title="Not rated yet!">
                            <img width="14"
                                 height="13"
                                 src="/images/star-off.png"
                                 title="Not rated yet!">&nbsp;<img
                                    width="14" height="13" src="/images/star-off.png" title="Not rated yet!">&nbsp;<img
                                    width="14" height="13" src="/images/star-off.png" title="Not rated yet!">&nbsp;<img
                                    width="14" height="13" src="/images/star-off.png" title="Not rated yet!">&nbsp;<img
                                    width="14" height="13" src="/images/star-off.png" title="Not rated yet!"><input
                                    name="score" type="hidden" readonly=""></div>
                        <div class="dtp_status cf price_dtp">
                            <div class="dtp_m_price cl_red">Giá: <b>{{$product->getPriceDiscount()}}</b></div>
                            @if($product['discount'])
                                <div class="dtp_f_price">
                                    <del>{{number_format($product['price'])}}</del>
                                </div>
                                <div class="prod_saving"><b>{{$product['discount']}}%</b></div>
                            @endif
                            @if($product['price'])
                                <span class="note">
                                                            (Giá trên chưa bao gồm thuế <span
                                            class="highlight">VAT</span>)
                                                    </span>
                            @endif
                            <div itemprop="offers" itemscope="" itemtype="http://schema.org/Offer">
                                <meta itemprop="priceCurrency" content="VND">
                                <meta itemprop="price" content="6844800">
                                <link itemprop="availability" href="http://schema.org/InStock">
                            </div>
                        </div>
                        <div class="dtp_status cf"><b><span class="left_title">Thương hiệu:</span> <a
                                        href="https://www.ketnoitieudung.vn/thuong-hieu/toptul.html" class="cl_blue">TOPTUL</a></b>
                        </div>
                        @if($product['SKU'])
                            <div class="dtp_status cf"><b><span class="left_title">SKU:</span> <span
                                            class="cl_green">{{$product['SKU']}}</span></b>
                            </div>
                        @endif
                        <div class="dtp_status cf"><b><span class="left_title">Model:</span> <span class="cl_green">GCAI150R</span></b>
                        </div>
                        @if($product->origin)
                            <div class="dtp_status cf"><b><span class="left_title">Xuất xứ:</span> <span
                                            class="cl_green">{{$product->origin->name}}</span></b>
                            </div>
                        @endif
                        @if($product['bao_hanh'])
                            <div class="dtp_status cf"><b><span class="left_title">Bảo hành:</span> <span
                                            class="cl_green">{{$product['bao_hanh']}}</span></b>
                            </div>
                        @endif
                        @if($product['extends'] && is_array(unserialize($product['extends'])))
                            @foreach(unserialize($product['extends']) as $ext)
                                @if($ext['name'] && $ext['value'])
                                    <div class="dtp_status cf"><b><span class="left_title">{{$ext['name']}}:</span>
                                            <span class="cl_green">{{$ext['value']}}</span></b>
                                    </div>
                                @endif
                            @endforeach
                        @endif
                        <div class="dtp_status short_des_dtp cf">{!! $product['description'] !!}
                        </div>
                        <div id="pn-promotion-for-product"
                             style="padding: 10px 0px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; margin-bottom: 10px; display: none;"
                             data-id="9485" data-brand="180" data-category="2249,1598"></div>

                        <div class="dtp_status button_dtp cf" id="btn-shopping-cart">
                            <a id="addToCartButton" title="Mua ngay" href="javascript: void(0);"
                               onclick="addCart('9485','add-to-cart');" class="btn_web btn_detail btn_addtocart_dtp">Thêm
                                vào giỏ hàng</a> HOẶC <a href="javascript: void(0);"
                                                         onclick="addCart('9485','add-to-cart',false,true);"
                                                         class="btn_web btn_detail btn_quick_quotes">Mua ngay</a></div>
                        {{--                        <div class="dtp_status cf align_center">--}}
                        {{--                            Giao hàng tại Tp.HCM trong 1-2 giờ làm việc (trừ chủ nhật và ngày lễ)--}}
                        {{--                        </div>--}}
                    </div>
                    {{--                    <div class="r_col_dtp">--}}
                    {{--                        <div class="our_commit"--}}
                    {{--                             style="background: url(https://www.ketnoitieudung.vn/data/bqc/bt9/12-nam-trong-nganh-kntd-1662957863.png) no-repeat !important;"></div>--}}
                    {{--                        <div class="delivery_time cf">--}}
                    {{--                            <div class="right-center-phone">--}}
                    {{--                                <div class="right-center-phone__title">Tồng đài hỗ trợ (8:00 - 17:00)</div>--}}
                    {{--                                Mua hàng: 028.3975.6686<br>--}}
                    {{--                                Mua hàng: 0933.075.786<br>--}}
                    {{--                                <!--Mua hàng: 0984.582.224<br/>-->--}}
                    {{--                                Mua hàng: 0855.959.699<br>--}}
                    {{--                                Bảo hành - Đổi trả: 0938.465.113--}}
                    {{--                            </div>--}}
                    {{--                        </div>--}}
                    {{--                    </div>--}}
                </div>
                <div class="cf" style="height: 20px"></div>
                <!--List Products-->
            {{--                <div class="box bor_box pros_home">--}}
            {{--                    <div class="tab_cate_main">--}}
            {{--                        <h2 class="link_Tab">Sản phẩm cùng mức giá với Bộ dụng cụ 150 chi tiết đầu 1/4" và 1/2" Toptul--}}
            {{--                            GCAI150R</h2>--}}
            {{--                    </div>--}}
            {{--                    <div class="slide_pros owl-carousel owl-theme owl-loaded">--}}

            {{--                        <div class="owl-stage-outer">--}}
            {{--                            <div class="owl-stage"--}}
            {{--                                 style="transform: translate3d(0px, 0px, 0px); transition: all 0s ease 0s; width: 236.6px;">--}}
            {{--                                <div class="owl-item active" style="width: 221.6px; margin-right: 15px;">--}}
            {{--                                    <div class="item">--}}
            {{--                                        <!--Pro Item-->--}}
            {{--                                        <div class="pro_item">--}}
            {{--                                            <figure class="img_pro"><a--}}
            {{--                                                        href="https://www.ketnoitieudung.vn/bo-dung-cu-49-chi-tiet-proskit-1pk-1700nb_45106.html"--}}
            {{--                                                        title="Bộ dụng cụ 49 chi tiết Pro'skit 1PK-1700NB">--}}
            {{--                                                    <img src="https://www.ketnoitieudung.vn/data/bt10/bo-dung-cu-49-chi-tiet-proskit-1pk-1700nb-1669440225.jpg"--}}
            {{--                                                         alt="Bộ dụng cụ 49 chi tiết Pro'skit 1PK-1700NB" width="172"--}}
            {{--                                                         height="172">--}}
            {{--                                                </a></figure>--}}

            {{--                                            <h3 class="pro_name"><a--}}
            {{--                                                        href="https://www.ketnoitieudung.vn/bo-dung-cu-49-chi-tiet-proskit-1pk-1700nb_45106.html"--}}
            {{--                                                        title="Bộ dụng cụ 49 chi tiết Pro'skit 1PK-1700NB">Bộ dụng cụ 49--}}
            {{--                                                    chi tiết Pro'skit 1PK-1700NB</a></h3>--}}
            {{--                                            <div class="info_price">--}}
            {{--                                                <span class="m_price cl_red">4.999.000 đ</span>--}}
            {{--                                            </div>--}}
            {{--                                            <span class="saleoff">-4%</span></div>--}}
            {{--                                        <!--end Pro Item-->--}}
            {{--                                    </div>--}}
            {{--                                </div>--}}
            {{--                            </div>--}}
            {{--                        </div>--}}
            {{--                        <div class="owl-controls">--}}
            {{--                            <div class="owl-nav">--}}
            {{--                                <div class="owl-prev" style="">prev</div>--}}
            {{--                                <div class="owl-next" style="">next</div>--}}
            {{--                            </div>--}}
            {{--                            <div class="owl-dots" style="display: none;"></div>--}}
            {{--                        </div>--}}
            {{--                    </div>--}}
            {{--                </div>--}}
            <!--end List Products-->
                <!--Tab Products Home-->
                <div class="box" id="tab_detail_product">
                    <div id="tab_menu_detail">
                        <div id="checkdiv"></div>
                        <nav id="nav_Tab" style="width: 1170px;">
                            <ul>
                                <li><a href="#productDetails" class="active">Chi tiết sản phẩm</a></li>
                                {{--                                <li><a href="#productInfoTechnical">Thông số kỹ thuật</a></li>--}}
                                {{--                                <li><a href="#productReviews">Nhận xét</a></li>--}}
                            </ul>
                        </nav>
                    </div>
                    <div class="bor_box" id="TabsContent">
                        <div id="productDetails" data-anchor="productDetails">
                            <h3 class="text_tab">Chi tiết sản phẩm</h3>
                            <div class="box_ct info_g">
                                {!! $product['content'] !!}
                            </div>
                        </div>

                        <div>
                            <!-- <fb:comments href="https://www.ketnoitieudung.vn/bo-dung-cu-150-chi-tiet-dau-1-4-va-1-2-toptul-gcai150r_9485.html" width="100%"></fb:comments> -->
                        </div>
                    </div>
                </div>
                <!--End Tab Products Home-->
                <!--List Products-->
                <div class="box bor_box pros_home">
                    <div class="tab_cate_main">
                        <h2 class="link_Tab">Sản phẩm cùng danh mục</h2>
                    </div>
                    <div class="slide_pros owl-carousel owl-theme owl-loaded">
                        @foreach($relates as $pro)
                            <div class="item">
                                <!--Pro Item-->
                            @include('components.product-item', ['product' => $pro])
                            <!--end Pro Item-->
                            </div>
                        @endforeach

                    </div>
                </div>
                <!--end List Products-->
            </div>
            <!--end Detail Product-->
        </div>
        <!--End Main-->

    </div>
@endsection