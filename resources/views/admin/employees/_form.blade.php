<div class="row">
    <div class="col-md-1"></div>
    <div class="col-md-7 grid-margin">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Thông tin cá nhân</h4>
                <hr>
                <div>
                    <div class="form-group row">
                        <label for="name" class="col-sm-3 col-form-label">Họ tên</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" name="name" id="name" placeholder="vd: Hải Phát Land" value="{{old('name', $employee['name'])}}">
                            @if ($errors->has('name'))
                                <div class="mt-1 notification-error">
                                    {{$errors->first('name')}}
                                </div>
                            @endif
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="username" class="col-sm-3 col-form-label">Tên đăng nhập</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" name="username" id="username" placeholder="vd: hpl2022" value="{{old('username', $employee['username'])}}">
                            @if ($errors->has('username'))
                                <div class="mt-1 notification-error">
                                    {{$errors->first('username')}}
                                </div>
                            @endif
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="email" class="col-sm-3 col-form-label">Email</label>
                        <div class="col-sm-9">
                            <input type="email" class="form-control" name="email" id="email" placeholder="vd: hpl2022@haiphatland.com.vn" value="{{old('email', $employee['email'])}}">
                            @if ($errors->has('email'))
                                <div class="mt-1 notification-error">
                                    {{$errors->first('email')}}
                                </div>
                            @endif
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="phone" class="col-sm-3 col-form-label">Số điện thoại</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" name="phone" id="phone" placeholder="vd: 0989 888 999" value="{{old('phone', $employee['phone'])}}">
                            @if ($errors->has('phone'))
                                <div class="mt-1 notification-error">
                                    {{$errors->first('phone')}}
                                </div>
                            @endif
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="exampleInputConfirmPassword2" class="col-sm-3 pt-2 col-form-label">Quyền Admin</label>
                        <div class="col-sm-9">
                            <div class="form-check" style="margin-top: 5px;">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="" name="is_admin" {{(isset($employee['is_admin']) && $employee['is_admin'])  ? "checked" : ''}}>
                                    <i class="input-helper"></i>
                                </label>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="text-center">
                        <button type="submit" class="btn btn-primary me-2">Lưu</button>
                        <a href="{{route('employees.index')}}" class="btn btn-dark">Quay lại</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-3 grid-margin">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Hình ảnh</h4>
                <hr>
                <div class="upload_image" data-name="avatar">
                    <input type="hidden" class="avatar" name="avatar" value="{{old('avatar', $employee['avatar'])}}">
                    <img src="{{$employee['avatar'] ? old('avatar', $employee['avatar']) : (old('avatar') ? old('avatar') : '/assets/images/department.jpg')}}" width="180px" alt="" class="image-avatar">
                </div>
            </div>
        </div>
    </div>

</div>

