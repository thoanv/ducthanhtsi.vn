<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Product;
use App\Repositories\CategoryRepository as CategoryRepo;
use App\Repositories\PostRepository as PostRepo;
use App\Repositories\SlideRepository as SlideRepo;
use Illuminate\Http\Request;
use App\Repositories\ProductRepository as ProductRepo;
use App\Repositories\AboutURepository as AboutURepo;
use App\Repositories\TrademarkRepository as TrademarkRepo;
use App\Models\Category;

class HomeController extends Controller
{
    protected $slideRepo;
    protected $categoryRepo;
    protected $postRepo;
    protected $productRepo;
    protected $aboutURepo;
    protected $trademarkRepo;

    public function __construct(TrademarkRepo $trademarkRepo, AboutURepo $aboutURepo,ProductRepo $productRepo, SlideRepo $slideRepo, CategoryRepo $categoryRepo, PostRepo $postRepo)
    {
        $this->slideRepo = $slideRepo;
        $this->categoryRepo = $categoryRepo;
        $this->postRepo = $postRepo;
        $this->productRepo = $productRepo;
        $this->aboutURepo = $aboutURepo;
        $this->trademarkRepo = $trademarkRepo;
    }
    public function index()
    {
        $slides = $this->slideRepo->getByStatus(true);
        $categories = $this->categoryRepo->getCategoriesFeatured();
        $about = $this->aboutURepo->find(1);
        foreach ($categories as $key =>  $category){
            $child_categories = $this->categoryRepo->getListChildCategoriesById($category['id']);
            $categories[$key]['child_categories'] = $child_categories;
            $categories[$key]['all_products'] = $category->products->merge($category->subproducts);
        }
        return view('home',[
            'slides' => $slides,
            'categories' => $categories,
            'about'  => $about
        ]);
    }
    public function slug(Request $request,$category_slug, $slug = '')
    {
        $category = $this->categoryRepo->getCategoryBySlug($category_slug);
        if(!$category) return abort(404);
        if($category['parent_id']){
            $categoryParent = $this->categoryRepo->find($category['parent_id']);
        }else{
            $categoryParent = $category;
        }
        $categories = $this->categoryRepo->getAllCategories();
        $child_categories = $this->categoryRepo->getAllListChildCategoriesById($categoryParent['id']);
        $list_child_categories = $this->categoryRepo->getAllListChildCategoriesById($category['id']);
        if(!$slug){
            if($category['type'] == 'product'){
                $view = 'products.list';
                $categoryIds = Category::where('parent_id', $parentId = Category::where('type', 'product')->where('id', $category['id'])
                    ->value('id'))
                    ->pluck('id')
                    ->push($parentId)
                    ->all();

                $products = Product::whereIn('category_id', $categoryIds)->paginate();
                return view($view, [
                    'categories' => $categories,
                    'category' => $category,
                    'products' => $products,
                    'child_categories' => $child_categories,
                    'list_child_categories' => $list_child_categories,
                    'categoryParent' => $categoryParent
                ]);
            }else if($category['type'] == 'introduce'){
                return view('introduce', [
                        'category' => $category,
                ]);
            }

        }else{
            if($category['type'] == 'product'){
                $view = 'products.detail';
                $product = $this->productRepo->getProductBySlug($slug);
                if(!$product) return abort(404);
                $relates = Product::where([['id', '<>', $product['id']], ['category_id', $category['id']]])->take(10)->get();
                return view($view, [
                    'category' => $category,
                    'product'  => $product,
                    'relates'  => $relates
                ]);
            }
            $post = $this->postRepo->getPostBySlug($slug);
            if(!$post) return abort(404);
            $data['view'] = $post['view']+1;
            $this->postRepo->update($data, $post['id']);
            if(isset($request['page']) && $request['page']){
                return $this->sendResponse($comments, 'successfully.');
            }
            $cate_id = $category['id'];
            $relates = Post::whereHas('categories',function($query) use ($cate_id){
                $query->where('id', $cate_id);
            })->where([['status', 'YES'], ['id', '<>', $post['id']],['published', 'published']])->take(8)->get();
            if(isset($_COOKIE['name_comment']) && $_COOKIE['name_comment']){
                $cookie = unserialize($_COOKIE['name_comment']);
            }
        }
    }
    function thuongHieu(Request $request, $category_slug, $slug)
    {
        $trademark = $this->trademarkRepo->getTrademarkBySlug($slug);
        if(!$trademark) return abort(404);
        $category = $this->categoryRepo->getCategoryBySlug($category_slug);
        if(!$category) return abort(404);
        if($category['parent_id']){
            $categoryParent = $this->categoryRepo->find($category['parent_id']);
        }else{
            $categoryParent = $category;
        }
        $categories = $this->categoryRepo->getAllCategories();
        $child_categories = $this->categoryRepo->getAllListChildCategoriesById($categoryParent['id']);
        $list_child_categories = $this->categoryRepo->getAllListChildCategoriesById($category['id']);
        $view = 'trademarks.list';
        $categoryIds = Category::where('parent_id', $parentId = Category::where('type', 'product')->where('id', $category['id'])
            ->value('id'))
            ->pluck('id')
            ->push($parentId)
            ->all();

        $products = Product::whereIn('category_id', $categoryIds)->where('trademark_id', $trademark['id'])->paginate();
        return view($view, [
            'categories' => $categories,
            'category' => $category,
            'products' => $products,
            'child_categories' => $child_categories,
            'list_child_categories' => $list_child_categories,
            'categoryParent' => $categoryParent,
            'trademark' => $trademark
        ]);
    }
}
