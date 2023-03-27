<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use App\Repositories\CategoryRepository as CategoryRepo;
use App\Repositories\ImageRepository as ImageRepo;
use App\Repositories\TrademarkRepository as TrademarkRepo;
class CategoryController extends Controller
{
    protected $view = 'admin.categories';
    protected $categoryRepo;
    protected $imageRepo;
    protected $trademarkRepo;

    public function __construct(CategoryRepo $categoryRepo, ImageRepo $imageRepo, TrademarkRepo $trademarkRepo)
    {
        $this->categoryRepo = $categoryRepo;
        $this->imageRepo = $imageRepo;
        $this->trademarkRepo = $trademarkRepo;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Category $category)
    {
        $this->authorize('viewAny', $category);
        $categories = $this->getCategories(false);
        $listCategory = [];
        Category::recursive($categories, $parents = 0, $level = 1, $listCategory);
        return view($this->view.'.index', [
            'categories' => $categories,
            'view' => $this->view
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Category $category)
    {
        $this->authorize('create', $category);
        $category = new Category();
        $categories = $this->getCategories(true);
        $trademarks = $this->trademarkRepo->getByStatus(true);
        return view($this->view.'.create', [
            'category' => $category,
            'categories' => $categories,
            'trademarks' => $trademarks,
            'view' => $this->view
        ]);
    }
    private function getCategories($status)
    {
        $categories = $this->categoryRepo->getCategoriesStatus($status);
        $listCategory = [];
        Category::recursive($categories, $parents = 0, $level = 1, $listCategory);
        return $listCategory;
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreCategoryRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCategoryRequest $request)
    {
        $data = $request->only('name', 'parent_id', 'type', 'avatar', 'description','trademarks');
        $data['slug'] = Str::slug($request->get('name'), '-');
        $data['status'] = isset($request['status']) ? 1 : 0;
        $data['featured'] = isset($request['featured']) ? 1 : 0;
        $data['created_by'] = Auth::id();
        $this->categoryRepo->create($data);
        return redirect(route('categories.index'))->with('success',  'Cập nhật thành công');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $categories
     * @return \Illuminate\Http\Response
     */
    public function show(Category $categories)
    {
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category)
    {
        $this->authorize('update', $category);
        if(!$category) return abort(404);
        $categories = $this->getCategories(true);
        $trademarks = $this->trademarkRepo->getByStatus(true);
        return view($this->view.'.update', [
            'category' => $category,
            'categories' => $categories,
            'trademarks' => $trademarks,
            'view' => $this->view
        ]);


    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCategoryRequest  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCategoryRequest $request, Category $category)
    {
        $data = $request->only('name', 'parent_id', 'type', 'avatar', 'description','trademarks');
        $data['slug'] = Str::slug($request->get('name'), '-');
        $data['status'] = isset($request['status']) ? 1 : 0;
        $data['featured'] = isset($request['featured']) ? 1 : 0;
        $this->categoryRepo->update($data, $category['id']);
        return redirect(route('categories.index'))->with('success',  'Cập nhật thành công');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        $this->authorize('delete', $category);
        $category->delete();
        return redirect()->route('categories.index')->with('success','Xóa thành công');
    }
}
