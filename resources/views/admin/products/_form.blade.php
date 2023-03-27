<div class="row">
    <div class="col-md-8">
        <div class="card">
            <div class="card-body form-update">
                <h5 class="card-title">Thông tin chung</h5>
                <hr>
                <div class="form-group row mb-3">
                    <label for="name" class="col-sm-3 col-form-label">Tên sản phẩm <span class="color_red">*</span></label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" id="name" placeholder="" name="name"
                               value="{{old('name', $product['name'])}}">
                        @if ($errors->has('name'))
                            <div class="mt-1 notification-error">
                                {{$errors->first('name')}}
                            </div>
                        @endif
                    </div>
                </div>
                <div class="form-group row mb-3">
                    <label for="parent_id" class="col-sm-3 col-form-label">Danh mục <span class="color_red">*</span></label>
                    <div class="col-sm-9">
                        <select name="category_id" id="category_id" class="form-control">
                            <option value="">--Chọn--</option>
                            @foreach($categories as $key => $value)
                                <option value="{{$value['id']}}" {{$value['id'] == old('category_id', $product['category_id']) ? 'selected': ''}}>
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
                        @if ($errors->has('category_id'))
                            <div class="mt-1 notification-error">
                                {{$errors->first('category_id')}}
                            </div>
                        @endif
                    </div>
                </div>

                <div class="form-group row mb-3">
                    <label for="origin_id" class="col-sm-3 col-form-label">Xuất xứ</label>
                    <div class="col-sm-9">
                        <select name="origin_id" id="origin_id" class="form-control">
                            <option value="">--Chọn--</option>
                            @foreach($origins as $origin)
                                <option {{$origin['id'] == old('origin_id', $product['origin_id']) ? 'selected': ''}} value="{{$origin['id']}}">{{$origin['name']}}</option>
                            @endforeach
                        </select>
                    </div>
                </div>
                <div class="form-group row mb-3">
                    <label for="parent_id" class="col-sm-3 col-form-label">Nhãn hiệu</label>
                    <div class="col-sm-9">
                        <select name="trademark_id" id="trademark_id" class="form-control">
                            <option value="">--Chọn--</option>
                            @foreach($trademarks as $trade)
                                <option {{($trade['id'] == old('trademark_id', $product['trademark_id'])) ? 'selected': ''}} value="{{$trade['id']}}">{{$trade['name']}}</option>
                            @endforeach
                        </select>
                    </div>
                </div>
                <div class="form-group row mb-3">
                    <label for="SKU" class="col-sm-3 col-form-label">SKU</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" id="SKU" placeholder="" name="SKU"
                               value="{{old('SKU', $product['SKU'])}}">
                    </div>
                </div>
                <div class="form-group row mb-3">
                    <label for="bao_hanh" class="col-sm-3 col-form-label">Bảo hành</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" id="bao_hanh" placeholder="eg. 6 Tháng" name="bao_hanh"
                               value="{{old('bao_hanh', $product['bao_hanh'])}}">
                    </div>
                </div>
                <div class="form-group  row mb-3">
                    <label class="col-sm-3 col-form-label" for="description">Mô tả</label>
                    <div class="col-sm-9">
                    <textarea rows="5" cols="70" id="description" class="form-control"
                              name="description">{!! old('description', $product['description']) !!}</textarea>
                        @if ($errors->has('description'))
                            <div class="mt-1 notification-error">
                                {{$errors->first('description')}}
                            </div>
                        @endif
                    </div>
                </div>
                <div class="form-group row mb-3">
                    <label for="quantity" class="col-sm-3 col-form-label">Số lượng</label>
                    <div class="col-sm-9">
                        <input type="number" class="form-control" id="quantity" placeholder="eg. 100" name="quantity"
                               value="{{old('quantity', $product['quantity'])}}">
                    </div>
                </div>
                <div class="form-group row mb-3">
                    <label for="price" class="col-sm-3 col-form-label">Giá bán</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" id="price" placeholder="eg. 1.200.000" name="price"
                               data-type="currency"
                               value="{{old('price', number_format($product['price']))}}">
                    </div>
                </div>
                <div class="form-group row mb-3">
                    <label for="discount" class="col-sm-3 col-form-label">% giảm giá</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" id="discount" placeholder="eg. 30" name="discount"
                               value="{{old('discount', $product['discount'])}}">
                    </div>
                </div>
                <div class="form-group row mb-3">
                    <label for="key_search" class="col-sm-3 col-form-label">Key search</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" id="key_search" placeholder="eg.Bia Hà Nội"
                               name="key_search"
                               value="{{old('key_search', $product['key_search'])}}">
                    </div>
                </div>
            </div>
        </div>
        <div class="card mt-4">
            <div class="card-body">
                <h5 class="card-title">Mở rộng thuộc tính</h5>
                <hr>
                <div class="row mb-2">
                    <div class="col-lg-4">Tên</div>
                    <div class="col-lg-7">Giá trị</div>
                </div>
                <div class="list-extents">
                    <input type="hidden" class="number_key" value="{{$product['extends'] ? count(unserialize($product['extends'])) : 1}}">
                    @if($product['extends'])
                    @foreach(unserialize($product['extends']) as $key => $extend)
                    <div class="row mt-2 item-extend">
                        <div class="col-lg-4">
                            <input type="text" class="form-control" name="extends[{{$key}}][name]" value="{{$extend['name']}}">
                        </div>
                        <div class="col-lg-7">
                            <input type="text" class="form-control" name="extends[{{$key}}][value]" value="{{$extend['value']}}">
                        </div>
                        <div class="col-lg-1 text-center" style="padding-top: 8px">
                            <a class="btn btn-danger btn-sm a">Xóa</a>
                        </div>
                    </div>
                    @endforeach
                    @endif
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <hr>
                        <div class="text-center">
                            <a class="btn btn-success btn-sm" onclick="addRowExtend()">Thêm</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="card mt-4">
            <div class="card-body">
                <h5 class="card-title">Chi tiết sản phầm</h5>
                <hr>
                <div class="form-group">
                    <textarea rows="5" cols="70" id="content" class="form-control content"
                              name="content">{!! old('content', $product['content']) !!}</textarea>
                    @if ($errors->has('content'))
                        <div class="mt-1 notification-error">
                            {{$errors->first('content')}}
                        </div>
                    @endif
                </div>
            </div>
        </div>

        <div class="card mt-4">
            <div class="card-body">
                <h5 class="card-title">Thông số kỹ thuật</h5>
                <hr>
                <div class="form-group">
                    <textarea rows="5" cols="70" id="specification" class="form-control content"
                              name="specification">{!! old('specification', $product['specification']) !!}</textarea>
                    @if ($errors->has('specification'))
                        <div class="mt-1 notification-error">
                            {{$errors->first('specification')}}
                        </div>
                    @endif
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Chức năng</h5>
                <hr>
                <div class="form-check form-check-flat form-check-primary mb-4">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input"
                               {{$product['status'] ? "checked" : ''}} value="{{$product['status']}}" name="status">
                        Trạng thái <i class="input-helper"></i></label>
                </div>
                <div class="form-check form-check-flat form-check-primary mb-4">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input"
                               {{$product['favourite'] ? "checked" : ''}} value="{{$product['favourite']}}"
                               name="favourite">
                        Nổi bật <i class="input-helper"></i></label>
                </div>
                <div class="form-check form-check-flat form-check-primary mb-4">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input"
                               {{$product['search'] ? "checked" : ''}} value="{{$product['search']}}" name="search">
                        Tìm kiếm nhanh <i class="input-helper"></i></label>
                </div>
                <div class="text-center">
                    <button type="submit" class="btn btn-primary me-2" name="type_submit">Lưu</button>
                    <a href="{{route('products.index')}}" class="btn btn-dark">Quay lại</a>
                </div>
            </div>
        </div>
        <div class="card mt-3">
            <div class="card-body">
                <h5 class="card-title">Ảnh đại diện <span class="color_red">*</span></h5>
                <hr>
                <div class="form-group">
                    <div class="upload_image" data-name="avatar">
                        <input type="hidden" class="avatar" name="avatar" value="{{old('avatar', $product['avatar'])}}">
                        <img src="{{$product['avatar'] ? old('avatar', $product['avatar']) : (old('avatar') ? old('avatar') : '/assets/images/department.jpg')}}"
                             width="180px" alt="" class="image-avatar">
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
@push('scripts')
    <script>
        $("input[data-type='currency']").on({
            keyup: function () {
                formatCurrency($(this));
            },
            blur: function () {
                formatCurrency($(this), "blur");
            }
        });


        function formatNumber(n) {
            // format number 1000000 to 1,234,567
            return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }


        function formatCurrency(input, blur) {
            // appends $ to value, validates decimal side
            // and puts cursor back in right position.

            // get input value
            var input_val = input.val();

            // don't validate empty input
            if (input_val === "") {
                return;
            }

            // original length
            var original_len = input_val.length;

            // initial caret position
            var caret_pos = input.prop("selectionStart");

            // check for decimal
            if (input_val.indexOf(".") >= 0) {

                // get position of first decimal
                // this prevents multiple decimals from
                // being entered
                var decimal_pos = input_val.indexOf(".");

                // split number by decimal point
                var left_side = input_val.substring(0, decimal_pos);
                var right_side = input_val.substring(decimal_pos);

                // add commas to left side of number
                left_side = formatNumber(left_side);

                // validate right side
                right_side = formatNumber(right_side);

                // On blur make sure 2 numbers after decimal
                if (blur === "blur") {
                    right_side += "00";
                }

                // Limit decimal to only 2 digits
                right_side = right_side.substring(0, 2);

                // join number by .
                input_val = left_side + "." + right_side;

            } else {
                // no decimal entered
                // add commas to number
                // remove all non-digits
                input_val = formatNumber(input_val);
                input_val = input_val;

                // final formatting
                if (blur === "blur") {
                    input_val;
                }
            }

            // send updated string to input
            input.val(input_val);

            // put caret back in the right position
            var updated_len = input_val.length;
            caret_pos = updated_len - original_len + caret_pos;
            input[0].setSelectionRange(caret_pos, caret_pos);
        }
        function addRowExtend(){
            let number = $('.number_key').val();
            let html = `<div class="row mt-2 item-extend">
                        <div class="col-lg-4">
                            <input type="text" class="form-control" name="extends[${number}][name]">
                        </div>
                        <div class="col-lg-7">
                            <input type="text" class="form-control" name="extends[${number}][value]">
                        </div>
                        <div class="col-lg-1 text-center" style="padding-top: 8px">
                            <a class="btn btn-danger btn-sm a">Xóa</a>
                        </div>
                    </div>`;
            $('.list-extents').append(html);
            $('.number_key').val(Number(number)+1);
        }
        $("body").on("click", ".a", function(){
            event.preventDefault();
            $(this).parents('.item-extend').remove();
        });
    </script>
@endpush