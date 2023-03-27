<?php

namespace App\Http\Controllers\Admin;

use App\Models\Origin;
use App\Http\Requests\StoreOriginRequest;
use App\Http\Requests\UpdateOriginRequest;
use App\Http\Controllers\Controller;
use App\Repositories\OriginRepository as OriginRepo;
use Illuminate\Support\Str;

class OriginController extends Controller
{
    protected $view = 'admin.origins';
    protected $route = 'origins';
    protected $originRepo;
    public function __construct(OriginRepo $originRepo)
    {
        $this->originRepo = $originRepo;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Origin $origin)
    {
        $this->authorize('viewAny', $origin);
        $origins = $this->originRepo->getData();
        return view($this->view.'.index',[
            'origins' => $origins,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Origin $origin)
    {
        $this->authorize('create', $origin);
        return view($this->view.'.create',[
            'origin' => $origin,
            'view' => $this->view,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreOriginRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreOriginRequest $request)
    {
        $data = $request->only('name');
        $data['status'] = isset($request['status']) ? 1 : 0;
        $data['slug'] = Str::slug($request->name);
        $this->originRepo->create($data);
        return redirect(route($this->route.'.index'))->with('success',  'Thêm thành công');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Origin  $origin
     * @return \Illuminate\Http\Response
     */
    public function show(Origin $origin)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Origin  $origin
     * @return \Illuminate\Http\Response
     */
    public function edit(Origin $origin)
    {
        $this->authorize('update', $origin);
        return view($this->view.'.update',[
            'origin' => $origin,
            'view' => $this->view,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateOriginRequest  $request
     * @param  \App\Models\Origin  $origin
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateOriginRequest $request, Origin $origin)
    {
        $data = $request->only('name');
        $data['status'] = isset($request['status']) ? 1 : 0;
        $data['slug'] = Str::slug($request->name);
        $this->originRepo->update($data, $origin['id']);
        return redirect(route($this->route.'.index'))->with('success',  'Cập nhật thành công');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Origin  $origin
     * @return \Illuminate\Http\Response
     */
    public function destroy(Origin $origin)
    {
        $this->authorize('delete', $origin);
        $origin->delete();
        return redirect(route($this->route.'.index'))->with('success', 'Xóa thành công');
    }
}
