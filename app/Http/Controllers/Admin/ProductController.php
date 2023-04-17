<?php

namespace App\Http\Controllers\Admin;

use App\Models\Category;
use App\Models\Product;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Http\Controllers\Controller;
use App\Repositories\ProductRepository as ProductRepo;
use App\Repositories\OriginRepository as OriginRepo;
use App\Repositories\TrademarkRepository as TrademarkRepo;
use App\Repositories\CategoryRepository as CategoryRepo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use phpDocumentor\Reflection\Types\Null_;

class ProductController extends Controller
{
    protected $view = 'admin.products';
    protected $route = 'products';
    protected $originRepo;
    protected $productRepo;
    protected $trademarkRepo;
    protected $categoryRepo;
    public function __construct(OriginRepo $originRepo, ProductRepo $productRepo, TrademarkRepo $trademarkRepo, CategoryRepo $categoryRepo)
    {
        $this->originRepo = $originRepo;
        $this->productRepo = $productRepo;
        $this->trademarkRepo = $trademarkRepo;
        $this->categoryRepo = $categoryRepo;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Product $product, Request $request)
    {
        $this->authorize('viewAny', $product);
        $products = $this->productRepo->getData($request);
        $categorires = $this->getCategories();
        return view($this->view.'.index',[
            'products' => $products,
            'request'  => $request,
            'categories' => $categorires
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Product $product)
    {
        $this->authorize('create', $product);
        $origins = $this->originRepo->getByStatus();
        $trademarks = $this->trademarkRepo->getByStatus();
        $categories = $this->getCategories();
        return view($this->view.'.create',[
            'product'       => $product,
            'origins'       => $origins,
            'categories'    => $categories,
            'view'          => $this->view,
            'trademarks'    => $trademarks,
        ]);
    }
    private function getCategories()
    {
        $categories = $this->categoryRepo->getCategoriesByType();
        $listCategory = [];
        Category::recursive($categories, $parents = 0, $level = 1, $listCategory);
        return $listCategory;
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreProductRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreProductRequest $request)
    {
        $data = $request->only('name', 'category_id', 'origin_id', 'trademark_id', 'SKU', 'bao_hanh', 'quantity', 'description', 'content', 'avatar', 'quantity', 'discount', 'specification');
        $data['status'] = isset($request['status']) ? 1 : 0;
        $data['price'] = str_replace(',', '', $request['price']);
        $data['employee_id'] = Auth::id();
        if(isset($request['extends']))
            $data['extends'] =  serialize($request['extends']);

        $result = $this->productRepo->create($data);
        $data = [];
        $data['slug'] = Str::slug($request->name.'-'.$result['id']);
        $data['code'] = $this->generateRandomNumber().$result['id'];
        $this->productRepo->update($data, $result['id']);
        return redirect(route($this->route.'.index'))->with('success',  'Thêm thành công');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        $this->authorize('update', $product);
        $origins = $this->originRepo->getByStatus();
        $trademarks = $this->trademarkRepo->getByStatus();
        $categories = $this->getCategories();
        dd($categories);
        return view($this->view.'.update',[
            'product'       => $product,
            'origins'       => $origins,
            'categories'    => $categories,
            'view'          => $this->view,
            'trademarks'    => $trademarks,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateProductRequest  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        $data = $request->only('name', 'category_id', 'origin_id', 'trademark_id', 'SKU', 'bao_hanh', 'quantity', 'description', 'content', 'avatar', 'quantity', 'discount', 'specification');
        $data['status'] = isset($request['status']) ? 1 : 0;
        $data['price'] = str_replace(',', '', $request['price']);
        $data['slug'] = Str::slug($request->name.'-'.$product['id']);
        $data['extends'] = Null;
        if(isset($request['extends'])){
            $data['extends'] =   serialize($request['extends']);
        }
        $this->productRepo->update($data, $product['id']);
        return redirect(route($this->route.'.index'))->with('success',  'Cập nhật thành công');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        $this->authorize('delete', $product);
        $product->delete();
        return redirect(route($this->route.'.index'))->with('success', 'Xóa thành công');
    }
    private function generateRandomNumber($length = 5) {
        $characters = '123456789';
        $charactersLength = strlen($characters);
        $random = '';
        for ($i = 0; $i < $length; $i++) {
            $random .= $characters[rand(0, $charactersLength - 1)];
        }
        return $random;
    }
}
