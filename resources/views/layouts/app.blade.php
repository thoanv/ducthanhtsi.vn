@php
    $info_web = \App\Models\AboutU::find(1);
@endphp
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title')</title>
    <link rel="shortcut icon" href="{{$info_web['favicon']}}" />
    <meta name="description" content="{{$info_web['meta_description']}}">
    <meta name="keywords" content="{{$info_web['meta_keywords']}}">

    <meta name="robots" content="index, follow"/>
    <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
    <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
    <link rel="canonical" href="@yield('canonical', route('home'))"/>

    <meta property="og:locale" content="vi_VN"/>
    <meta property="og:type" content="website"/>
    <meta property="og:title" content="@yield('title')"/>
    <meta property="og:description" content="{{$info_web['meta_description']}}"/>
    <meta property="og:url" content="@yield('canonical', route('home'))"/>
    <meta property="og:site_name" content="{{$info_web['site_name']}}"/>
    <meta property="article:modified_time" content=""/>
    <meta property="og:image" content="@yield('image', $info_web['thumbnail'])"/>
    <meta property="og:image:width" content="1200"/>
    <meta property="og:image:height" content="630"/>

    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:description" content="{{$info_web['meta_description']}}"/>
    <meta name="twitter:title" content="@yield('title')"/>
    @include('layouts.css')
</head>
<body class="antialiased">
<div class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
    <div id="fb-root"></div>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v14.0&appId=993315024807075&autoLogAppEvents=1" nonce="zXBQ5DFB"></script>
    @include('layouts.header')
    @yield('content')
    @include('layouts.footer')
</div>
@include('layouts.js')
</body>
</html>
