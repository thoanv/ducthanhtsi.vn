@php
    use App\Models\Product;
    $info_web = \App\Models\AboutU::find(1);
    $searchProducts = Product::where([['status', true], ['search', true]])->take(4)->get();
@endphp
<header>
    <div class="container">
        <h1 class="four columns" id="logo">
            <a href='{{route('home')}}' title="Đức Thành TSI">
                <img src="{{$info_web['logo']}}" alt='Đức Thành TSI' title='Đức Thành TSI'/>
            </a>
        </h1><!--Search Tool-->
        <div class="search_form mtt columns">
            <div class="search_box form_submit">
                <div class="input_bar"><input class="inputSearch" placeholder="Nhập tên sản phẩm" name="keyword"
                                              type="text" id="keyword" value="" autocomplete="off"
                                              onKeyUp="searchSuggestion();" onFocus="searchSuggestion();"/></div>
                <div id="pn_result_auto_complete">
                    <div id="pn_result_auto_complete_frame"></div>
                </div>
            </div>
            <div class="search_icon_wrapper">
                <button type="button" id="lnk-search" name="search-button" class="submitSearch">Tìm kiếm</button>
            </div>
            <div class="information-cart-login">
                <div class="search_icon_wrapper mar-mb">
                    {{--                <div class="work-time"> Thời gian làm việc<br/> 8H - 17H | Thứ 2 - Thứ 7<br/> Nghỉ trưa 12h - 13h</div>--}}
                    {{--                <a href="{{route('slug', ['category_slug' => 'huong-dan-thanh-toan'])}}" class="submitSearch lnk-guide-payment">Hướng dẫn<br/>thanh toán</a>--}}
                    <a href="javascript: void(0);" onclick="showCart();" class="quick_quotes cl_white"><span
                                id="sp_total_product_in_cart_header">0</span></a>
                    <div class="cf"></div>
                </div>
                <div class="header_r columns" style="position: relative;"><a href="javascript: void(0);"
                                                                             class="user-link fr"></a>
                    <div id="panel-user-login">
                        <div style="position: relative">
                            <div style="padding: 0px 10px 10px 10px;">
                                <a href="#login_form" class="lnk-action link_login_popup">Đăng nhập</a>
                                <a href="#register_form" class="lnk-action link_register_popup">Tạo tài khoản</a> <a
                                        href="javascript: void(0);"
                                        onClick="callPopupLogin('https://www.facebook.com/v3.2/dialog/oauth?client_id=1382090098782187&amp;state=8ea1a19e095f3267f7d7177e10108c95&amp;response_type=code&amp;sdk=php-sdk-5.7.0&amp;redirect_uri=https%3A%2F%2Fwww.ketnoitieudung.vn%2Ffacebook%2Flogin_js.php&amp;scope=email%2Cpublic_profile')"
                                        class="lnk-login-social"><img src="images/user/login_facebook.png"/></a> <a
                                        href="javascript: void(0);" onClick="callPopupLogin('google/index.html')"
                                        class="lnk-login-social"><img src="images/user/login_google.png"/></a></div>
                            <i class="arrow-top"></i></div>
                    </div>
                </div>
            </div>

            <div class="cf"></div>
            <div class="header-search-link cl_white">
                <div class="title_search">Tìm nhanh:</div>
                <ul>
                    @foreach($searchProducts as $pSearch)
                    @if($pSearch->category && isset($pSearch->category->slug))
                        <li>
                            <a href="{{route('slug', ['category_slug' => $pSearch->category->slug, 'slug' => $pSearch['slug']])}}" target="_blank">{{$pSearch['key_search'] ? $pSearch['key_search'] : $pSearch['name']}}</a>
                        </li>
                    @endif
                    @endforeach
                </ul>
            </div>
        </div> <!--end Search Tool-->
    </div>
</header><!--#end Header-->
