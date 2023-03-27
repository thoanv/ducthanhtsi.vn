<link rel="stylesheet" href="{{asset('front-end/vendor/bootstrap/css/bootstrap.css')}}">
<link rel="stylesheet" href="{{asset('front-end/vendor/OwlCarousel/assets/owl.carousel.css')}}">
<link rel="stylesheet" href="{{asset('front-end/vendor/font-awesome/css/font-awesome.min.css')}}">
<link rel="stylesheet" href="{{asset('front-end/vendor/OwlCarousel/assets/owl.theme.default.css')}}">
<link rel="stylesheet" href="{{asset('assets/vendors/select2/select2.min.css')}}">
<link rel="stylesheet" href="{{asset('front-end/css/global.css')}}">
{{--<link rel="stylesheet" href="{{asset('front-end/css/style_g.css')}}">--}}
<style>
    .owl-theme .owl-nav [class*='owl-']{
        background: transparent;
    }
    .company{
        font-weight: bold;
        font-size: 20px;
    }
    .information-company .icons{
        width: 20px;
    }
    .information-company span{
        color: #000;
        margin-left: 10px;
        font-size: 15px;
    }
    .information-company p{
       margin-bottom: 15px;
    }
    .network ul, .comment ul {
        padding-left: 0;
        margin-bottom: 0;
    }
    .network ul li {
        float: left;
        background: #29cdbd!important;
        width: 40px;
        border-radius: 50%;
        height: 40px;
        text-align: center;
        line-height: 37px;
        margin-right: 20px;
    }
    .network ul li img{
        width: 25px;
    }
    .network ul li img.w-30{
        width: 30px;
    }
</style>
@stack('link-css')
