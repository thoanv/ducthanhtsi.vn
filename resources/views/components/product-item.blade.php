@php
    $route = route('slug', ['category_slug' => $product->category->slug, 'slug' => $product['slug']]);
@endphp

    <!--Pro Item-->
    <div class="pro_item">
        <figure class="img_pro">
            <a href="{{$route}}" title="{{$product['name']}}">
                <img class="lazy" data-original="{{$product['avatar']}}" src="/images/pixel.gif" alt="{{$product['name']}}" itemprop="image">
            </a>
        </figure>
        <h2 class="pro_name">
            <a href="{{$route}}" title="{{$product['name']}}">
                {{$product['name']}}
            </a>
        </h2>
        @if($product['discount'])
            <div class="info_price">
                <span class="f_price"><del>{{$product->getPrice()}} đ</del></span>
                <span class="m_price cl_red">{{$product->getPriceDiscount()}} đ</span>
            </div>
            <span class="saleoff">-{{$product['discount']}}%</span>
        @else
            <div class="info_price">
{{--                <span class="f_price"><del></del></span>--}}
                <span class="m_price cl_red">{{$product->getPrice()}} đ</span>
            </div>
        @endif
    </div>
    <!--end Pro Item-->
