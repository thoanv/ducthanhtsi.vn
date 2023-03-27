<?php

namespace App\Http\Controllers\Admin;

use App\Models\Category;
use App\Models\Menu;
use App\Http\Requests\StoreMenuRequest;
use App\Http\Requests\UpdateMenuRequest;
use App\Http\Controllers\Controller;
use App\Repositories\MenuRepository as MenuRepo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Repositories\CategoryRepository as CategoryRepo;

class MenuController extends Controller
{
    protected $view = 'admin.menus';
    protected $menuRepo;
    protected $categoryRepo;

    public function __construct(MenuRepo $menuRepo, CategoryRepo $categoryRepo)
    {
        $this->menuRepo = $menuRepo;
        $this->categoryRepo = $categoryRepo;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Menu $menu)
    {
        $this->authorize('viewAny', $menu);
        $menus = $this->menuRepo->getMenus();
        return view($this->view.'.index', [
            'menus' => $menus,
            'view' => $this->view
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Menu $menu)
    {
        $this->authorize('create', $menu);
        return view($this->view.'.create', [
            'menu' => $menu,
            'view' => $this->view
        ]);
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function setup(Menu $menu)
    {
        $menuSetup = [];
        if($menu['data']){
            $menuSetup = unserialize($menu['data']);
        }
        $list_categories = [];
        if($menu['list_id_category']){
            $list_categories =  explode(',', $menu['list_id_category']);
        }
        $categories = $this->getCategories(true);
        return view($this->view.'.setup', [
            'menu' => $menu,
            'categories' => $categories,
            'menuSetup' => $menuSetup,
            'list_categories' => $list_categories,
            'view' => $this->view
        ]);
    }
    public function setupStore(Request $request, Menu $menu)
    {
        $data['list_id_category'] =  $request['list_id_cate_checked'];
        $data['created_by'] = Auth::id();
        $array_menus = [];
        foreach (json_decode($request['data']) as $dat){
            $array_menus[] = json_decode(json_encode($dat),true);
        }
        $data['data'] = serialize($array_menus);
        $this->menuRepo->update($data, $menu['id']);
        return back()->with('success',  'Cài đặt thành công');
    }

    private function getCategories($status)
    {
        $categories = $this->categoryRepo->getLists(    );
        $listCategory = [];
        Category::recursive($categories, $parents = 0, $level = 1, $listCategory);
        return $listCategory;
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreMenuRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreMenuRequest $request)
    {
        $data = $request->only('name', 'key');
        $data['status'] = isset($request['status']) ? 1 : 0;
        $data['created_by'] = Auth::id();
        $this->menuRepo->create($data);
        return redirect(route('menus.index'))->with('success',  'Thêm mới thành công');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Menu  $menu
     * @return \Illuminate\Http\Response
     */
    public function show(Menu $menu)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Menu  $menu
     * @return \Illuminate\Http\Response
     */
    public function edit(Menu $menu)
    {
        $this->authorize('update', $menu);
        return view($this->view.'.update', [
            'menu' => $menu,
            'view' => $this->view
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateMenuRequest  $request
     * @param  \App\Models\Menu  $menu
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateMenuRequest $request, Menu $menu)
    {
        $data = $request->only('name', 'key');
        $data['status'] = isset($request['status']) ? 1 : 0;
        $this->menuRepo->update($data, $menu['id']);
        return redirect(route('menus.index'))->with('success',  'Cập nhật thành công');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Menu  $menu
     * @return \Illuminate\Http\Response
     */
    public function destroy(Menu $menu)
    {
        //
    }
}
