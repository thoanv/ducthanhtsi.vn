@extends('layouts.app')
@section('title', $post['name'])
@section('image', $post['avatar'])
@section('canonical', route('slug',['category_slug' => $category['slug'], 'slug' => $post['slug']]))
@section('content')
    @include('layouts.header-white')
    <section class="avatar hero-animated align-items-center specialBlock_1">
        <div class="wrapBox">
            <div class="imgBanner">
                <img alt="{{$post['name']}}" loading="lazy" src="{{$post['avatar']}}">
            </div>
        </div>
    </section>
    <section class="post-detail box-post-detail">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb" style="padding-top: 0; margin-bottom: 0">
                        <ul>
                            <li class="link"><a href="{{route('home')}}" alt="Homepage">Trang Chủ</a></li>
                            <li class="link"><a href="{{route('slug', ['category_slug' => $category['slug']])}}">{{$category['name']}}</a></li>
                            <li class="current">{{$post['name']}}</li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-9 col-md-8">
                    <div class="post-inner">
                        <h1 class="name-post">{{$post['name']}}</h1>
                        <div class="row mt-3">
                            <div class="col-xs-6 col-lg-6">
                                <div class="category belong-categories">
                                    @foreach(($post->categories()->where('status', true)->get()) as $key => $cate)
                                        <a class="a-category" href="{{ $cate['id'] == $category['id'] ? 'javascript:' : route('slug', ['category_slug' => $cate['slug']])}}">
                                                    <span class="{{$key%2==0 ? 'violet' : 'yellow'}}">
                                                        {{$cate['name']}}
                                                    </span>
                                        </a>
                                    @endforeach
                                </div>
                                <div class="post-extend">
                                    <span class="post-view">{{$post['view']}} Lượt xem</span>
                                    <span>|</span>
                                    <span class="post-date">{{date('d/m/Y', strtotime($post['created_at']))}}</span>
                                </div>
                            </div>
                            <div class="col-xs-6 col-lg-6">
                                <div class="action">
                                    <div class="networkComment d-flex">
                                        <div class="network">
                                            <ul>
                                                <li class="copy-link">
                                                    <input value="{{route('slug',['category_slug' => $category['slug'], 'slug' => $post['slug']])}}" id="copy-to-clipboard-input" type="hidden">
                                                    <!-- The button used to copy the text -->
                                                    <div class="tooltip">
                                                        <button class="btn" id="copy-to-clipboard-button">
                                                            <span class="tooltiptext" id="myTooltip">Copy link</span>
                                                            <img src="/front-end/icons/icon-copy.png" alt="copy">
                                                        </button>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u={{route('slug',['category_slug' => $category['slug'], 'slug' => $post['slug']])}}&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">
                                                        <img src="/front-end/icons/facebook_blur.png" alt="facebook_blur">
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="">
                                                        <img src="/front-end/icons/zalo.png" alt="zalo">
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="comment">
                                            <ul>
                                                <li>
                                                    <input type="hidden" class="number_like" value="{{$post['like']}}">
                                                    <span class="like" tooltip="{{$post['like']}} Thích" flow="down" onclick="like({{$post['id']}})">
                                                        <img src="/front-end/icons/icon-like.png" alt="like">
                                                    </span>
                                                </li>
                                                <li>
                                                    <a href="#listComment">
                                                        <span tooltip="{{$comments->count()}} Bình luận" flow="down">
                                                            <img src="/front-end/icons/icon-comment.png" alt="comment">
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="content-post">
                                    {!!$post['content'] !!}
                                </div>
                                <div class="border-horizontal"></div>
                                <div class="form-comment" id="listComment">
                                    <form method="POST" onsubmit="comment(event)">
                                        <div class="row">
                                            <div class="col-lg-4">
                                                <div class="d-flex txt-comment">
                                                    <img src="/front-end/icons/icon-comment.png" alt="comment">
                                                    <p class="txt-bl">Bình luận (<span class="total_comment">{{$comments->total()}}</span>)</p>
                                                </div>
                                            </div>
                                            <div class="col-lg-8">
                                                <div class="float-end d-flex list-input">
                                                    <input type="text" class="form-control name_user" placeholder="Họ & tên*" required value="{{(isset($cookie['name']) && $cookie['name']) ? $cookie['name'] : ''}}">
                                                    <input type="email" class="form-control email_user" placeholder="Email*" required value="{{(isset($cookie['email']) && $cookie['email']) ? $cookie['email'] : ''}}">
                                                    <input type="text" class="form-control phone_user" placeholder="Số điện thoại*" required value="{{(isset($cookie['phone']) && $cookie['phone']) ? $cookie['phone'] : ''}}">
                                                </div>

                                            </div>
                                        </div>
                                        <div  class="row mt-2">
                                            <div class="col-lg-12">
                                                <textarea class="comment_user" id="w3review" rows="3" cols="10" style="width: 100%;; border-radius: 7px; border: 1px solid #D4145A; padding: 10px" required placeholder="Nội dung* "></textarea>
                                                <div class="d-flex mt-2">
                                                    <label class="container-input">Lưu tên, email và số điện thoại cho các lần bình luận sau
                                                        <input type="checkbox" name="checkUserComment">
                                                        <span class="checkmark"></span>
                                                    </label>
                                                    <div class="btn-comment">
                                                        <button class="btn raise send-comment" onsubmit="comment()">Bình luận</button>
                                                        <div class="text-center loading-box">
                                                            <div class="loader text-center">
                                                                <p class="text-center load-3" style="display: inline-block">
                                                                    <i class="line-load"></i>
                                                                    <i class="line-load"></i>
                                                                    <i class="line-load"></i>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="list-comments">
                                                @if($comments->total())
                                                    @foreach($comments as $comment)
                                                    <div class="box-content-comment d-flex">
                                                        <div class="avatar-user-comment">
                                                            <img src="/front-end/icons/icon_avatar.png" alt="{{$comment['name']}}">
                                                        </div>
                                                        <div class="comment-detail">
                                                            <h5 class="name-user-comment">{{$comment['name']}}</h5>
                                                            <p class="c-content">{{$comment['content']}}</p>
                                                        </div>
                                                    </div>
                                                    @endforeach
                                                @endif
                                                </div>
                                                @if($comments->total() > 2)
                                                    <input type="hidden" class="page" value="2">
                                                    <div class="text-center mt-1">
                                                        <button type="button" class="btn btn-more-comment raise" onclick="getcomment()">Xem thêm</button>
                                                        <div class="text-center loading-comment">
                                                            <div class="loader text-center">
                                                                <p class="text-center load-3" style="display: inline-block">
                                                                    <i class="line-load"></i>
                                                                    <i class="line-load"></i>
                                                                    <i class="line-load"></i>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                @endif
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        @if(count($relates))
                        <div class="row">
                            <div class="col-lg-12">
                            <div class="border-horizontal" style="height: 1px;background: #662D91;margin: 15px 0 0px;"></div>
                                <div class="list-post-relate owl-carousel owl-theme">
                                    @foreach($relates as $relate)
                                    <div class="item">
                                        @include('components.post_relate_item', ['relate' => $relate, 'category_slug' => $category['slug']])
                                    </div>
                                    @endforeach
                                </div>
                            </div>
                        </div>
                        @endif
                    </div>
                </div>
                @include('components.inspire',['categories' => $categories, 'banner' => $banner])
            </div>
        </div>
    </section>
@endsection
@push('scripts')
<script>
    function comment(e){
        e.preventDefault();
        const total_comment =  $('.total_comment').text();
        $('.send-comment').css('display', 'none');
        $('.loading-box').css('display', 'block');
        const name = $('.name_user').val();
        const email = $('.email_user').val();
        const phone = $('.phone_user').val();
        const comment = $('.comment_user').val();
        const save = $('input[name=checkUserComment]:checked').length   ;
        if(name !== '' && email !== '' && phone !== '' && comment !== ''){
            $.ajax({
                type: 'post',
                url: '{{route('ajax-comment')}}',
                data: {
                    name: name,
                    email: email,
                    phone: phone,
                    content: comment,
                    post_id: {{$post['id']}},
                    save : save,
                    _token: $('meta[name="csrf-token"]').attr('content')
                },
                success: function (res) {
                    if (res.success) {
                        const comment = res.data.comment;
                        const cookie = res.data.cookie;
                        let html_comment = `<div class="box-content-comment d-flex">
                            <div class="avatar-user-comment">
                                <img src="/front-end/icons/icon_avatar.png" alt="${comment['name']}">
                            </div>
                            <div class="comment-detail">
                                <h5 class="name-user-comment">${comment['name']}</h5>
                                <p style="margin-bottom: 0">${comment['content']}</p>
                            </div>
                        </div>`;
                        $('.list-comments').prepend(html_comment);
                        $('.total_comment').text(Number(total_comment)+1)
                        $('.comment_user').val('');
                        if(cookie === 'undefined'){
                            $('.name_user').val('');
                            $('.email_user').val('');
                            $('.phone_user').val('');
                        }else{
                            $('.name_user').val(cookie['name']);
                            $('.email_user').val(cookie['email']);
                            $('.phone_user').val(cookie['phone']);
                        }
                    }
                }
            });
        }
        $('.send-comment').css('display', 'block');
        $('.loading-box').css('display', 'none');
    }
    function getcomment(){
        $('.btn-more-comment').css('display', 'none');
        $('.loading-comment').css('display', 'block');
        let page = $('.page').val();
        console.log(page);
        $.ajax({
            url: '{{route('slug',['category_slug' => $category['slug'],'slug' => $post['slug']])}}?page='+page,
            success: function (res) {
                if (res.success) {
                    let comments = res.data.data;
                    let html = '';
                    if(comments !== 'undefined'){
                        if(comments.length >0){
                            comments.forEach((val, index) =>  {
                                const txt = `<div class="box-content-comment d-flex">
                                <div class="avatar-user-comment">
                                    <img src="/front-end/icons/icon_avatar.png" alt="${val['name']}">
                                </div>
                                <div class="comment-detail">
                                    <h5 class="name-user-comment">${val['name']}</h5>
                                    <p class="c-content">${val['content']}</p>
                                </div>
                            </div>`;
                                html+=txt;
                            });
                            $('.list-comments').append(html);
                            $('.btn-more-comment').css('display', 'inline-block');
                        }
                    }

                }
            }
        });

        $('.loading-comment').css('display', 'none');
        $('.page').val(Number(page) +1);
    }
    function like(post_id){
        let number_like = $('.number_like').val();
        let number = Number(number_like)+1;
        $('.like').attr('tooltip', number+' Thích')
        $('.number_like').val(number);
        $.ajax({
            url: '{{route('plus-like')}}',
            type: 'POST',
            data: {
                post_id: post_id,
                _token: $('meta[name="csrf-token"]').attr('content')
            },
            success: function (res) {
                if (res.success) {
                    console.log(true);
                }
            }
        });
    }
</script>
@endpush
