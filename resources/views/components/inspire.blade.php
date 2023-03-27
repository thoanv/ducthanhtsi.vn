<div class="col-lg-3 col-md-4 post-detail-right">
    <div class="d-flex">
        <div class="txt-truyen-cam-hung">Truyền cảm hứng </div>
        <div class="border-horiz"></div>
    </div>
    <div class="list-categories">
        @foreach($categories as $cate)
        <a href="{{route('slug', ['category_slug' => $cate['slug']])}}">
            <div class="category-inner position-relative">
                <div class="position-absolute box-name-category">
                    <h4 class="text-center">{{$cate['name']}}</h4>
                </div>
                <img src="{{$cate['avatar']}}" alt="{{$cate['name']}}">
            </div>
        </a>
        @endforeach
    </div>
    <div class="box-banner">
        @foreach($banner->bannerDetails()->where('status', true)->get() as $ban)
            <div class="banner">
            <a href="{{$ban['url'] ? $ban['url'] : 'javascript:'}}" target="_blank">
                <img src="{{$ban['image']}}" alt="{{$ban['name']}}">
            </a>
            </div>
        @endforeach
    </div>
</div>
