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
                            <input type="text" class="form-control" id="name" placeholder="" name="name" value="{{old('name', $trademark['name'])}}">
                            @if ($errors->has('name'))
                                <div class="mt-1 notification-error">
                                    {{$errors->first('name')}}
                                </div>
                            @endif
                        </div>
                    </div>
                    <div class="form-group row mb-3">
                        <label for="category_id" class="col-sm-3 col-form-label">Danh mục</label>
                        <div class="col-sm-9">
                            <select name="category_id" id="category_id" class="form-control">
                                <option value="">--Root--</option>
                                @foreach($categories as $key => $value)
                                    <option value="{{$value['id']}}" {{$value['id'] == $trademark['parent_id'] ? 'selected': ''}}>
                                        @php
                                            $str = '';
                                            for($i = 0; $i< $value->level; $i++){
                                                echo $str;
                                                $str.='-- ';
                                            }
                                        @endphp
                                        {{$value['name']}}</option>
                                @endforeach
                            </select>
                        </div>
                    </div>
                    <div class="form-group row mb-3">
                        <label for="name" class="col-sm-3 col-form-label">Ảnh</label>
                        <div class="col-sm-9">
                            <div class="upload_image" data-name="avatar">
                                <input type="hidden" class="avatar" name="avatar" value="{{old('avatar', $trademark['avatar'])}}">
                                <img src="{{$trademark['avatar'] ? old('avatar', $trademark['avatar']) : (old('avatar') ? old('avatar') : '/assets/images/department.jpg')}}" width="180px" alt="" class="image-avatar">
                            </div>
                            @if ($errors->has('avatar'))
                                <div class="mt-1 notification-error">
                                    {{$errors->first('avatar')}}
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
                                   {{$trademark['status'] ? "checked" : ''}} value="{{$trademark['status']}}" name="status">
                            Trạng thái <i class="input-helper"></i></label>
                    </div>
                    <div class="form-check form-check-flat form-check-primary mb-4">
                        <label class="form-check-label">
                            <input type="checkbox" class="form-check-input"
                                   {{$trademark['featured'] ? "checked" : ''}} value="{{$trademark['featured']}}" name="featured">
                            Nổi bật <i class="input-helper"></i></label>
                    </div>
                    <div class="text-center">
                        <button type="submit" class="btn btn-primary me-2" value="save&amp;exit">Lưu</button>
                        <a href="{{route('trademarks.index')}}" class="btn btn-dark">Quay lại</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

