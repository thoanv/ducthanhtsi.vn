<div class="row">
    <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-7">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Thông tin chung</h5>
                    <hr>
                    <div class="form-group row mb-3">
                        <label for="name" class="col-sm-3 col-form-label">Tên</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" id="name" placeholder="" name="name" value="{{old('name', $bannerDetail['name'])}}">
                            @if ($errors->has('name'))
                                <div class="mt-1 notification-error">
                                    {{$errors->first('name')}}
                                </div>
                            @endif
                        </div>
                    </div>
                    <div class="form-group row mb-3">
                        <label for="url" class="col-sm-3 col-form-label">Đường dẫn</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" id="url" placeholder="" name="url" value="{{old('url', $bannerDetail['url'])}}">
                        </div>
                    </div>
                    <div class="form-group row mb-3">
                        <label for="url" class="col-sm-3 col-form-label">Hình ảnh</label>
                        <div class="col-sm-9">
                            <div class="upload_image" data-name="image">
                                <input type="hidden" class="image" name="image" value="{{old('image', $bannerDetail['image'])}}">
                                <img src="{{$bannerDetail['image'] ? old('image', $bannerDetail['image']) : (old('image') ? old('image') : '/assets/images/department.jpg')}}" width="180px" alt="" class="image-image">
                            </div>
                            @if ($errors->has('image'))
                                <div class="mt-1 notification-error">
                                    {{$errors->first('image')}}
                                </div>
                            @endif
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="col-md-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Chức năng</h5>
                    <hr>
                    <div class="form-check form-check-flat form-check-primary mb-4">
                        <label class="form-check-label">
                            <input type="checkbox" class="form-check-input"
                                   {{$bannerDetail['status'] ? "checked" : ''}} value="{{$bannerDetail['status']}}" name="status">
                            Trạng thái <i class="input-helper"></i></label>
                    </div>
                    <div class="text-center">
                        <button type="submit" class="btn btn-primary me-2" value="save&amp;exit">Lưu</button>
                        <a href="{{route('banners_detail_list', $bannerDetail['banner_id'] ? $bannerDetail['banner_id'] : $banner['id'])}}" class="btn btn-dark">Quay lại</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

