<?php

namespace App\Http\Controllers\Admin;

use App\Models\Slide;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSlideRequest;
use App\Http\Requests\UpdateSlideRequest;
use App\Repositories\SlideRepository as SlideRepo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SlideController extends Controller
{
    protected $view = 'admin.slides';
    protected $slideRepo;
    public function __construct(SlideRepo $slideRepo)
    {
        $this->slideRepo = $slideRepo;

    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Slide $slide, Request $request)
    {
        $this->authorize('viewAny', $slide);
        $slides = $this->slideRepo->getData($request);
        return view($this->view.'.index',[
            'slides' => $slides,
            'request' =>$request
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Slide $slide)
    {
        $this->authorize('create', $slide);
        return view($this->view.'.create',[
            'slide' => $slide,
            'view' => $this->view,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreSlideRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreSlideRequest $request)
    {
        $data = $request->only('name', 'image', 'url');
        $data['status'] = isset($request['status']) ? 1 : 0;
        $data['created_by'] = Auth::id();
        $this->slideRepo->create($data);
        return redirect(route('slides.index'))->with('success',  'Thêm mới thành công');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Slide  $slide
     * @return \Illuminate\Http\Response
     */
    public function show(Slide $slide)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Slide  $slide
     * @return \Illuminate\Http\Response
     */
    public function edit(Slide $slide)
    {
        $this->authorize('update', $slide);
        return view($this->view.'.update',[
            'slide' => $slide,
            'view' => $this->view,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateSlideRequest  $request
     * @param  \App\Models\Slide  $slide
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateSlideRequest $request, Slide $slide)
    {
        $data = $request->only('name', 'image', 'url');
        $data['status'] = isset($request['status']) ? 1 : 0;
        $this->slideRepo->update($data, $slide['id']);
        return redirect(route('slides.index'))->with('success',  'Cập nhật thành công');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Slide  $slide
     * @return \Illuminate\Http\Response
     */
    public function destroy(Slide $slide)
    {
        $this->authorize('delete', $slide);
        $slide->delete();
        return redirect()->route('slides.index')->with('success','Xóa thành công');
    }
}
