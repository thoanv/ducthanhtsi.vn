@php
    $info_web = \App\Models\AboutU::find(1);
@endphp
<footer>
    <div class="container"> <!--Footer Columns-->
        <div id="footer_menu">
            <ul> <!--Column Footer-->
                <li class="eight columns">
                    <h4 class="mb-4 text-uppercase company">{{$info_web['company']}}</h4>
                    <div class="information-company">
                        <p>
                            <img class="icons" src="/front-end/icons/location.png" alt="location">
                            <span>{{$info_web['address']}}</span>
                        </p>
                        <p>
                            <img class="icons" src="/front-end/icons/telephone-call.png" alt="telephone">
                            <span>Hotline:<a href="tel:{{$info_web['phone']}}" class="hotline"> {{$info_web['phone']}}</a></span>
                        </p>
                        <p>
                            <img class="icons" src="/front-end/icons/email.png" alt="email">
                            <span><a href="mailto:{{$info_web['email']}}">{{$info_web['email']}}</a></span>
                        </p>
                    </div>
                    <div class="network">
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/2StayVN" target="_blank" title="Facebook">
                                    <img class="w-30" src="/front-end/icons/facebook.png" alt="facebook">
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/" target="_blank" title="Youtube">
                                    <img src="/front-end/icons/instagram.png" alt="instagram">
                                </a>
                            </li>
                            <li>
                                <a href="https://www.tiktok.com/@2stay_vn?is_from_webapp=1&amp;sender_device=pc" target="_blank" title="Tiktok">
                                    <img src="/front-end/icons/tik-tok.png" alt="tiktok">
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/?lang=vi" target="_blank" title="Twitter">
                                    <img class="w-30" src="/front-end/icons/youtube.png" alt="youtube">
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="clear-both"></div>
                </li> <!--end Column Footer--> <!--Column Footer-->
                <li class="four columns">
                    <div class="col_F_ct"><h3>CHĂM SÓC KHÁCH HÀNG</h3>
                        <ul class="list_menu_footer">
                            @foreach(\App\Helpers\FunctionHelpers::getMenuByKey('menu-guide') as $menu)
                            @if(isset($menu['slug']))
                                <li><h4><a class="link_foo" href="{{route('slug', ['category_slug' => $menu['slug']])}}">{{$menu['name']}}</a></h4></li>
                            @else
                                <li><h4><a class="link_foo" href="{{$menu['url']}}" target="_blank">{{$menu['name']}}</a></h4></li>
                            @endif
                            @endforeach
                        </ul>
                    </div>
                </li> <!--end Column Footer--> <!--Column Footer-->
                <li class="four columns">
                    <div class="col_F_ct"><h3>CHÍNH SÁCH BÁN HÀNG</h3>
                        <ul class="list_menu_footer">
                            @foreach(\App\Helpers\FunctionHelpers::getMenuByKey('menu-policy') as $menu)
                                @if(isset($menu['slug']))
                                    <li><h4><a class="link_foo" href="{{route('slug', ['category_slug' => $menu['slug']])}}">{{$menu['name']}}</a></h4></li>
                                @else
                                    <li><h4><a class="link_foo" href="{{$menu['url']}}" target="_blank">{{$menu['name']}}</a></h4></li>
                                @endif
                            @endforeach
                        </ul>
                    </div>
                </li> <!--end Column Footer--> <!--Column Footer-->
                <!--<li class="three columns"> <div class="col_F_ct"> <h3>TÀI KHOẢN</h3> <ul class="list_menu_footer"> <li><h4><a class="link_foo" href="">Thông tin cá nhân</a></h4></li> <li><h4><a class="link_foo" href="">Thay đổi e-mail</a></h4></li> <li><h4><a class="link_foo" href="">Thay đổi mật khẩu</a></h4></li> <li><h4><a class="link_foo" href="">Lịch sử mua hàng</a></h4></li> <li><a href="">Thoát</a></li> </ul> </div> </li>-->
                <!--end Column Footer--> </ul>
        </div> <!--end Footer Columns-->
        <div class="cf"></div>
        <div class="category_footer"><p class="title_cat"> Danh mục và nhãn hàng được yêu thích</p>
            <div class="list_cate_foo">
                @foreach(\App\Helpers\FunctionHelpers::categoryFeatured() as $cate)
                <h3 class="footer_link">
                    <a class="footer_item_link"  href="{{route('slug', ['category_slug' => $cate['slug']])}}"
                       title="{{$cate['name']}}"> {{$cate['name']}}
                    </a>
                </h3>
                @endforeach
            </div>
        </div>
    </div>
</footer><!-- End of footer-->
