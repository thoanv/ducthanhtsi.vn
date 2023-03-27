<div class="box-post">
    <div class="post-avatar">
        <img src="{{$relate['avatar']}}" alt="{{$relate['name']}}">
    </div>
    <div class="post-detail">
        <div class="post-title"
                title="{{$relate['name']}}">
            <h2>{{$relate['name']}}</h2>
        </div>
        <div class="post-extend">
            <span class="post-view">{{$relate['view']}} Lượt xem</span>
            <span>|</span>
            <span class="post-date">{{date('d/m/Y', strtotime($relate['created_at']))}}</span>
        </div>
        <div class="post-button text-center">
            @if(isset($destination))
                <a href="{{route('destination', ['destination_slug' => $category_slug, 'slug' => $relate['slug']])}}" class="btn raise">Xem thêm</a>
            @else
                <a href="{{route('slug', ['category_slug' => $category_slug, 'slug' => $relate['slug']])}}" class="btn raise">Xem thêm</a>
            @endif
        </div>
    </div>
</div>
