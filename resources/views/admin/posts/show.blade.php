@extends('admin.layouts.app')
@section('title', $post->name)
@section('content')
    <div class="content-wrapper">
        <div class="page-header">
            <h3 class="page-title">{{$post['name']}}</h3>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="{{route('dashboard')}}">Dashboard</a>
                    </li>
                    <li class="breadcrumb-item">
                        <a href="{{route('posts.'.$type)}}">Danh sách</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Chi tiết</li>
                </ol>
            </nav>
        </div>
        <div class="container-fluid">
            <div class="col-lg-12">
                @if (session('success'))
                    <div class="alert alert-success notification-submit">
                        {{ session('success') }}
                    </div>
                @endif
            </div>
            <div class="row">
                <div class="col-md-7">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Thông tin chung</h5>
                            <hr>
                            <div class="form-group row mb-3">
                                <label for="name" class="col-sm-3 col-form-label">Tên bài viết</label>
                                <div class="col-sm-9">
                                    {{$post['name']}}
                                </div>
                            </div>
                            <div class="form-group row mb-3">
                                <label for="parent_id" class="col-sm-3 col-form-label">Danh mục</label>
                                <div class="col-sm-9">
                                    @foreach($post->categories as $category)
                                        <span class="badge badge-outline-primary badge-pill">{{$category['name']}}</span>
                                    @endforeach
                                </div>
                            </div>
                            <div class="form-group row mb-3">
                                <label for="parent_id" class="col-sm-3 col-form-label">Điểm đến</label>
                                <div class="col-sm-9">
                                    @foreach($post->destinations as $destination)
                                        <span class="badge badge-outline-success badge-pill">{{$destination['name']}}</span>
                                    @endforeach
                                </div>
                            </div>
                            <div class="form-group  row mb-3">
                                <label class="col-sm-3 col-form-label" for="description">Mô tả</label>
                                <div class="col-sm-9">
                                    <div style="font-size: 14px">{{$post['description']}}</div>
                                </div>
                            </div>
                            <div class="form-group  row mb-3">
                                <label class="col-sm-3 col-form-label" for="description">Avatar</label>
                                <div class="col-sm-9">
                                    <img class="img-dev-custom" style="width: 200px!important;" src="{{$post['avatar']}}" alt="">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mt-4">
                        <div class="card-body">
                            <h5 class="card-title">Nội dung</h5>
                            <hr>
                            <div class="form-group">
                                <div>
                                    {!! $post['content'] !!}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-5">
                    @if($post['published'] === \App\Models\Post::STATUS_PENDING)
                        <form name="frm" action="{{route('post.change.published')}}" method="POST">
                            @csrf
                            <input type="hidden" name="post_id" value="{{$post['id']}}">
                            <input type="hidden" name="type" value="{{$type}}">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Chức năng</h5>
                                    <hr>
                                    <div>
                                        <label class="col-form-label" for="note">Ghi chú <span style="font-size: 14px">(Giới hạn <span class="numberText">200</span> ký tự) </span></label>
                                        <textarea class="form-control" id="note" onkeyup="return displayWordCounter();"
                                                  name="note"></textarea>
                                    </div>
                                    <div class="text-center">

                                        <hr>
                                        <button type="submit" onclick="return confirm('Xuất bản ngay?')" class="btn btn-primary me-2" name="published" value="published">Xuất bản</button>
                                        <button type="submit" onclick="return confirm('Hủy xuất bản?')" class="btn btn-danger me-2" name="published" value="unpublished">Không xuất bản</button>
                                        <a href="{{route('posts.index')}}" class="btn btn-dark">Quay lại</a>
                                    </div>
                                </div>
                            </div>
                        </form>

                    @endif
                    <div class="card {{$post['published'] === \App\Models\Post::STATUS_PENDING ? 'mt-4' : ''}}">
                        <div class="card-body">
                            <h5 class="card-title">Lịch sử</h5>
                            <hr>
                            <div>
                                <table class="table">
                                    <thead>
                                    <tr>
                                        <th scope="col" >Thời gian</th>
                                        <th scope="col" class="text-center">Thao tác</th>
                                        <th scope="col" class="text-center">Trạng thái</th>
                                        <th scope="col" class="text-center">Ghi chú</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach($post->postHistories as $item)
                                        <tr role="row">
                                            <td>
                                                <div class="text-break">{{date('H:i d-m-Y', strtotime($item->created_at))}}</div>
                                            </td>
                                            <td>
                                                {{$item->createdBy->name}}
                                            </td>
                                            <td role="cell" class="text-center">
                                                @php
                                                    $status = $item->getPublisher();
                                                @endphp
                                                <span style="padding: 5px!important;" class="badge {{$status['color_status']}}">{{$status['name_status']}}</span>

                                            </td>
                                            <td class="text-center">
                                                {{$item['note']}}
                                            </td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="card mt-4">
                        <div class="card-body">
                            <h5 class="card-title">Bình luận</h5>
                            <div class="row">
                                <div class="col-md-4">Thông tin</div>
                                <div class="col-md-8">Nội dung</div>
                            </div>
                            <hr>
                            @foreach($post->comments as $comment)
                                <div class="row">
                                    <div class="col-md-4">
                                        <p class="txt-12"><i class="mdi mdi-account"></i> {{$comment['name']}}</p>
                                        <p class="txt-12"><i class="mdi mdi-email"></i> {{$comment['email']}}</p>
                                        <p class="txt-12"><i class="mdi mdi-cellphone-iphone"></i>  {{$comment['phone']}}</p>
                                        <p class="txt-12" title="Tham gia"><i class="mdi mdi-timer"></i>  {{date('H:i d/m/Y', strtotime($comment['created_at']))}}</p>
                                        <div class="form-check form-switch" style="display: inline-block;margin-top: 0;margin-bottom: 0; padding-left: 2.25rem!important; font-size: 0.6rem">
                                            <input name="my-checkbox" type="checkbox" class="form-check-input css-switch" data-id="{{$comment['id']}}"
                                                   data-api="{{route('enable-column-text')}}" data-table="comments" data-column="status"
                                                {{ $comment['status'] == 'YES' ? 'checked="checked"' : '' }}>
                                        </div>
                                    </div>
                                    <div class="col-md-8 txt-12">
                                        <div>{{$comment['content']}}</div>
                                    </div>
                                </div>
                                <hr>
                            @endforeach

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@push('scripts')
    <script type="text/javascript">
        /*=============  This is a count of total number to be displayed ==================*/
        var setTotalNumberOfWordCounter = "200";
        /*=============  This is a count of total number to be displayed ==================*/

        /*This function first get the value of textarea. And read length of that textarea
        charactor. then compare the value of set value.*/

        function displayWordCounter(){
            var getTextValue = document.frm.note.value;  // Get input textarea value
            var getTextLength = getTextValue.length;   // Get length of input textarea value
            if(getTextLength > setTotalNumberOfWordCounter){     //compare this length with total count
                getTextValue = getTextValue.substring(0,setTotalNumberOfWordCounter);
                document.frm.note.value =getTextValue;
                return false;
            }
            $('.numberText').text(setTotalNumberOfWordCounter-getTextLength);

        }
    </script>
@endpush
