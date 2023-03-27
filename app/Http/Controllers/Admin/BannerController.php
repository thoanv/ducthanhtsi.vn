<?php

namespace App\Http\Controllers\Admin;

use App\Models\Banner;
use App\Http\Requests\StoreBannerRequest;
use App\Http\Requests\UpdateBannerRequest;
use App\Http\Controllers\Controller;
use App\Repositories\BannerRepository as BannerRepo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BannerController extends Controller
{
    protected $view = 'admin.banners';
    protected $bannerRepo;
    public function __construct(BannerRepo $bannerRepo)
    {
        $this->bannerRepo = $bannerRepo;

    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Banner $banner, Request $request)
    {
        $this->authorize('viewAny', $banner);
        $banners = $this->bannerRepo->getData($request);
        return view($this->view.'.index',[
            'banners' => $banners,
            'request' =>$request
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Banner $banner)
    {
        $this->authorize('create', $banner);
        return view($this->view.'.create',[
            'banner' => $banner,
            'view' => $this->view,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreBannerRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreBannerRequest $request)
    {
        $data = $request->only('name', 'key');
        $data['status'] = isset($request['status']) ? 1 : 0;
        $data['created_by'] = Auth::id();
        $this->bannerRepo->create($data);
        return redirect(route('banners.index'))->with('success',  'Thêm mới thành công');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Banner  $banner
     * @return \Illuminate\Http\Response
     */
    public function show(Banner $banner)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Banner  $banner
     * @return \Illuminate\Http\Response
     */
    public function edit(Banner $banner)
    {
        $this->authorize('update', $banner);
        return view($this->view.'.update',[
            'banner' => $banner,
            'view' => $this->view,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateBannerRequest  $request
     * @param  \App\Models\Banner  $banner
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateBannerRequest $request, Banner $banner)
    {
        $data = $request->only('name', 'key');
        $data['status'] = isset($request['status']) ? 1 : 0;
        $this->bannerRepo->update($data, $banner['id']);
        return redirect(route('banners.index'))->with('success',  'Cập nhật thành công');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Banner  $banner
     * @return \Illuminate\Http\Response
     */
    public function destroy(Banner $banner)
    {
        $this->authorize('delete', $banner);
        $banner->delete();
        return redirect()->route('banners.index')->with('success','Xóa thành công');
    }
}
