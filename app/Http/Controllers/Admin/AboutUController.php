<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\AboutU;
use App\Http\Requests\StoreAboutURequest;
use App\Http\Requests\UpdateAboutURequest;
use App\Repositories\AboutURepository as AboutURepo;


class AboutUController extends Controller
{
    protected $view = 'admin.about-us';
    protected $boutURepo;
    public function __construct(AboutURepo $aboutURepo)
    {
        $this->aboutURepo = $aboutURepo;

    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(AboutU $aboutU)
    {
        $this->authorize('viewAny', $aboutU);
        $aboutUs = $this->aboutURepo->getData();
        return view($this->view.'.index',[
            'aboutUs' => $aboutUs
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreAboutURequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreAboutURequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\AboutU  $aboutU
     * @return \Illuminate\Http\Response
     */
    public function show(AboutU $aboutU)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\AboutU  $aboutU
     * @return \Illuminate\Http\Response
     */
    public function edit(AboutU $aboutU)
    {
        $this->authorize('update', $aboutU);
        if(!$aboutU) return abort(404);
        return view($this->view.'.update',[
            'aboutU'    => $aboutU,
            'view'      => $this->view,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateAboutURequest  $request
     * @param  \App\Models\AboutU  $aboutU
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateAboutURequest $request, AboutU $aboutU)
    {
        $data = $request->only(
            'company',
            'logo_admin',
            'logo',
            'logo_white',
            'favicon',
            'thumbnail',
            'email',
            'address',
            'phone',
            'fax',
            'meta_header',
            'meta_keywords',
            'meta_description',
            'video_intro',
            'facebook',
            'twitter',
            'description',
            'youtube',
            'tiktok',
            'instagram'
        );
        $this->aboutURepo->update($data, $aboutU['id']);
        return redirect(route('aboutUs.edit', 1))->with('success',  'Cập nhật thành công');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\AboutU  $aboutU
     * @return \Illuminate\Http\Response
     */
    public function destroy(AboutU $aboutU)
    {
        //
    }
}
