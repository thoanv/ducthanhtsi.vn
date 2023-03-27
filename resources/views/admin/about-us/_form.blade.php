<div class="row">
    <div class="col-md-8 form-update">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Thông tin chung</h5>
                <hr>
                <div class="form-group row mb-3">
                    <label for="company" class="col-sm-3 col-form-label">Tiêu đề</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" id="company" placeholder="" name="company"
                               value="{{old('company', $aboutU['company'])}}">
                        @if ($errors->has('company'))
                            <div class="mt-1 notification-error">
                                {{$errors->first('company')}}
                            </div>
                        @endif
                    </div>
                </div>
            </div>
        </div>
        <div class="card mt-4">
            <div class="card-body">
                <h5 class="card-title">Thông tin liên hệ</h5>
                <hr>
                <div class="form-group row mb-3">
                    <label for="email" class="col-sm-3 col-form-label">Địa chỉ Email</label>
                    <div class="col-sm-9">
                        <input type="email" class="form-control" id="email" placeholder="" name="email"
                               value="{{$aboutU['email']}}">
                    </div>
                </div>
                <div class="form-group row mb-3">
                    <label for="phone" class="col-sm-3 col-form-label">Số điện thoại</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" id="phone" placeholder="" name="phone"
                               value="{{$aboutU['phone']}}">
                    </div>
                </div>
                <div class="form-group row mb-3">
                    <label for="fax" class="col-sm-3 col-form-label">Fax</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" id="fax" placeholder="" name="fax"
                               value="{{$aboutU['fax']}}">
                    </div>
                </div>
                <div class="form-group row mb-3">
                    <label for="address" class="col-sm-3 col-form-label">Địa chỉ</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" id="address" placeholder="" name="address"
                               value="{{$aboutU['address']}}">
                    </div>
                </div>
                <div class="form-group row mb-3">
                    <label for="bo_cong_thuong" class="col-sm-3 col-form-label">Link Bộ Công Thương</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" id="bo_cong_thuong" placeholder="" name="bo_cong_thuong"
                               value="{{$aboutU['bo_cong_thuong']}}">
                    </div>
                </div>
            </div>
        </div>
        <div class="card mt-4">
            <div class="card-body">
                <h5 class="card-title">Mô tả</h5>
                <hr>
                <div class="form-group">
                    <textarea  rows="9" cols="70" id="content" class="form-control content"
                               name="description">{!! $aboutU['description'] !!}</textarea>
                    @if ($errors->has('description'))
                        <div class="mt-1 notification-error">
                            {{$errors->first('description')}}
                        </div>
                    @endif
                </div>
            </div>
        </div>
        <div class="card mt-4">
            <div class="card mt-4">
                <div class="card-body">
                    <h5 class="card-title">Mạng xã hội</h5>
                    <hr>

                    <div class="form-group row mb-3">
                        <label for="facebook" class="col-sm-3 col-form-label">Facebook</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" id="facebook" placeholder="" name="facebook"
                                   value="{{$aboutU['facebook']}}">
                        </div>
                    </div>
                    <div class="form-group row mb-3">
                        <label for="twitter" class="col-sm-3 col-form-label">Twitter</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" id="twitter" placeholder="" name="twitter"
                                   value="{{$aboutU['twitter']}}">
                        </div>
                    </div>
                    <div class="form-group row mb-3">
                        <label for="youtube" class="col-sm-3 col-form-label">Youtube</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" id="youtube" placeholder="" name="youtube"
                                   value="{{$aboutU['youtube']}}">
                        </div>
                    </div>
                    <div class="form-group row mb-3">
                        <label for="tiktok" class="col-sm-3 col-form-label">TikTok</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" id="tiktok" placeholder="" name="tiktok"
                                   value="{{$aboutU['tiktok']}}">
                        </div>
                    </div>
                    <div class="form-group row mb-3">
                        <label for="instagram" class="col-sm-3 col-form-label">Instagram</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" id="instagram" placeholder="" name="instagram"
                                   value="{{$aboutU['instagram']}}">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card mt-4">
            <div class="card mt-4">
                <div class="card-body">
                    <h5 class="card-title">SEO</h5>
                    <hr>

                    <div class="form-group row mb-3">
                        <label for="meta_header" class="col-sm-3 col-form-label">Tiêu đề</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" id="meta_header" placeholder="" name="meta_header"
                                   value="{{$aboutU['meta_header']}}">
                        </div>
                    </div>
                    <div class="form-group row mb-3">
                        <label for="meta_keywords" class="col-sm-3 col-form-label">keywords</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" id="meta_keywords" placeholder="" name="meta_keywords"
                                   value="{{$aboutU['meta_keywords']}}">
                        </div>
                    </div>
                    <div class="form-group row mb-3">
                        <label for="youtube" class="col-sm-3 col-form-label">Mô tả</label>
                        <div class="col-sm-9">
                            <textarea  rows="9" cols="70" id="meta_description" class="form-control"
                                       name="meta_description">{!! $aboutU['meta_description'] !!}</textarea>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Chức năng</h5>
                <hr>

                <div class="text-center">
                    <button type="submit" class="btn btn-primary me-2" value="save&exit">Lưu</button>
                    <a href="{{route('aboutUs.index')}}" class="btn btn-dark">Quay lại</a>
                </div>
            </div>
        </div>
        <div class="card mt-3">
            <div class="card-body">
                <h5 class="card-title">Media</h5>
                <hr>
                <div class="form-group">
                    <label for="">Logo</label>
                    <div class="upload_image" data-name="logo">
                        <input type="hidden" class="logo" name="logo" value="{{old('logo', $aboutU['logo'])}}">
                        <img src="{{$aboutU['logo'] ? $aboutU['logo'] : '/assets/images/department.jpg'}}" width="180px" alt="logo" class="image-avatar image-logo">
                    </div>
                </div>
                <div class="form-group">
                    <label for="">Favicon</label>
                    <div class="upload_image" data-name="favicon">
                        <input type="hidden" class="favicon" name="favicon" value="{{old('favicon', $aboutU['favicon'])}}">
                        <img src="{{$aboutU['favicon'] ? $aboutU['favicon'] : '/assets/images/department.jpg'}}" width="180px" alt="favicon" class="image-avatar image-favicon">
                    </div>
                </div>
                <div class="form-group">
                    <label for="">Thumbnail</label>
                    <div class="upload_image" data-name="thumbnail">
                        <input type="hidden" class="thumbnail" name="thumbnail" value="{{old('thumbnail', $aboutU['thumbnail'])}}">
                        <img src="{{$aboutU['thumbnail'] ? $aboutU['thumbnail'] : '/assets/images/department.jpg'}}" width="180px" alt="thumbnail" class="image-avatar image-thumbnail">
                    </div>
                </div>
                <div class="form-group">
                    <label for="video_intro">Link video</label>
                    <textarea  rows="9" cols="70" id="video_intro" class="form-control"
                               name="video_intro">{!! $aboutU['video_intro'] !!}</textarea>
                </div>

            </div>
        </div>
    </div>
</div>
