@php
    $info_web = \App\Models\AboutU::find(1);
@endphp
<header id="header" class="header fixed-top sticked" data-scrollto-offset="0">
    <div class="container d-flex align-items-center position-relative d-header">
        <a href="{{route('home')}}" class="logo align-items-center scrollto me-auto me-lg-0 white">
            <img class="logo" src="{{$info_web['logo_white']}}" alt="logo" width="120px">
        </a>
        <a href="{{route('home')}}" class="logo align-items-center scrollto me-auto me-lg-0 violet">
            <img class="logo" src="{{$info_web['logo']}}" alt="logo" width="120px">
        </a>
        <nav class="navbar nav-menu navbar-expand-lg navbar-light ml-0">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        @foreach($menus as $menu)
                        @if(isset($menu['slug']))
                        <li class="nav-item">
                            <a class="nav-link text-uppercase" aria-current="page" href="{{route('slug',['category_slug' => $menu['slug']])}}">{{$menu['name']}}</a>
                        </li>
                        @else
                        <li class="nav-item">
                            <a class="nav-link text-uppercase" aria-current="page" target="_blank" href="{{$menu['url']}}">{{$menu['name']}}</a>
                        </li>
                        @endif
                        @endforeach
                    </ul>
                    <form class="d-flex" action="{{route('search')}}">
                        <div class="search position-relative">
                            <input class="form-control me-2" type="search" name="key" placeholder="Từ khóa ..." aria-label="Search">
                            <img src="/front-end/images/search.png" alt="search" width="20">
                        </div>
                    </form>
                </div>
            </div>
        </nav>
    </div>
</header>
<div id="menuNKTA_MOBILE">
    <div class="blockUnderMenuTopPage"></div>
    <div class="menuTopPage">
        <div class="container">
            <div class="row">
                <div class="logoPart">
                    <a class="imgPart" href="{{route('home')}}">
                        <img alt="logo" src="{{$info_web['logo']}}">
                    </a>
                </div>
                <div class="barsPart">
                    <a class="aTag aTagBars">
                        <img alt="danh_muc" class="barsPartImg" src="/front-end/images/bars_item.svg">
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="blockCateMobile">
        <div class="container">
            <div class="wrapCateParts">
                <div class="logoPart" style="border-bottom: 1px dashed #cdcdcd;padding-bottom: 15px;">
                    <a class="imgPart" href="{{route('home')}}">
                        <img alt="logo" src="{{$info_web['logo']}}" style="width: 135px;">
                    </a>
                </div>
                @foreach($menus as $menu)
                    @if(isset($menu['slug']))
                        <div class="catePart ">
                            <a class="link1 text-uppercase" href="{{route('slug',['category_slug' => $menu['slug']])}}">{{$menu['name']}}</a>
                        </div>
                    @else
                        <div class="catePart ">
                            <a class="link1 text-uppercase" target="_blank" href="{{$menu['url']}}">{{$menu['name']}}</a>
                        </div>
                    @endif
                @endforeach
                <div class="catePart d-block">
                    <form action="{{route('search')}}" style="margin: 10px 0">
                        <div class="search position-relative">
                            <input class="form-control me-2" type="search" name="key" placeholder="Từ khóa ..." aria-label="Search">
                            <img class="icon-search" src="/front-end/images/search.png" alt="search" style="width: 20px">
                        </div>
                        {{--                            <button class="btn btn-outline-success" type="submit">Search</button>--}}
                    </form>
                </div>

            </div>
            <div class="hideBlock">
                <i aria-hidden="true" class="fa fa-times xItem"></i>
            </div>
        </div>
    </div>
</div>
