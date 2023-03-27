<?php

namespace App\Http\Controllers\Admin;

use App\Models\BannerDetail;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreBannerDetailRequest;
use App\Http\Requests\UpdateBannerDetailRequest;
use App\Repositories\BannerDetailRepository as BannerDetailRepo;
use App\Repositories\BannerRepository as BannerRepo;
use Illuminate\Support\Facades\Auth;
use App\Models\Banner;
use Illuminate\Http\Request;

class BannerDetailController extends Controller
{
    protected $view = 'admin.banner-details';
    protected $bannerDetailRepo;
    public function __construct(BannerDetailRepo $bannerDetailRepo)
    {
        $this->bannerDetailRepo = $bannerDetailRepo;

    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, $banner)
    {
        $bannerDetails = $this->bannerDetailRepo->getData($banner);
        return view($this->view.'.index',[
            'bannerDetails' => $bannerDetails,
            'banner' => $banner
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Banner $banner)
    {
        if(!$banner) return abort(404);
        $bannerDetail = new BannerDetail();
        return view($this->view.'.create',[
            'banner'        => $banner,
            'bannerDetail'  => $bannerDetail,
            'view'          => $this->view,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreBannerDetailRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreBannerDetailRequest $request, Banner $banner)
    {
        $data = $request->only('name', 'image', 'url');
        $data['status'] = isset($request['status']) ? 1 : 0;
        $data['created_by'] = Auth::id();
        $data['banner_id'] = $banner['id'];
        $this->bannerDetailRepo->create($data);
        return redirect(route('banners_detail_list', $banner))->with('success',  'Thêm mới thành công');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\BannerDetail  $bannerDetail
     * @return \Illuminate\Http\Response
     */
    public function show(BannerDetail $bannerDetail)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\BannerDetail  $bannerDetail
     * @return \Illuminate\Http\Response
     */
    public function edit(BannerDetail $bannerDetail)
    {
        if(!$bannerDetail) return abort(404);
        return view($this->view.'.update',[
            'bannerDetail'  => $bannerDetail,
            'view'          => $this->view,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateBannerDetailRequest  $request
     * @param  \App\Models\BannerDetail  $bannerDetail
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $bannerDetail = $this->bannerDetailRepo->find($request->id);
        $data = $request->only('name', 'image', 'url');
        $data['status'] = isset($request['status']) ? 1 : 0;
        $this->bannerDetailRepo->update($data, $bannerDetail['id']);
        return redirect(route('banners_detail_list', $bannerDetail['banner_id']))->with('success',  'Cập nhật thành công');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\BannerDetail  $bannerDetail
     * @return \Illuminate\Http\Response
     */
    public function destroy(BannerDetail $bannerDetail)
    {
        $banner_id = $bannerDetail['banner_id'];
        $bannerDetail->delete();
        return redirect()->route('banners_detail_list', $banner_id)->with('success','Xóa thành công');
    }
}
