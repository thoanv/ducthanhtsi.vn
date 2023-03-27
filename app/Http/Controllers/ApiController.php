<?php

namespace App\Http\Controllers;

use App\Http\Resources\Categories\CategoryResource;
use App\Http\Resources\Posts\PostCollection;
use App\Http\Resources\Posts\PostResource;
use Illuminate\Http\Request;
use App\Repositories\CategoryRepository as CategoryRepo;
use App\Repositories\PostRepository as PostRepo;

class ApiController extends Controller
{
    protected $categoryRepo;
    protected $postRepo;
    public function __construct(CategoryRepo $categoryRepo, PostRepo $postRepo)
    {
        $this->categoryRepo = $categoryRepo;
        $this->postRepo = $postRepo;
    }
    public function slug($cate_slug)
    {
        $category = $this->categoryRepo->getCategoryBySlug($cate_slug);
        if(!$category){
            return response()->json([
                "success" => 404,
                "message" => "Not Found...",
                "data" => []
            ]);
        };
        $data['category'] = new CategoryResource($category);
        $posts = $this->postRepo->getListPostApi($category['id']);
        $data['posts'] = PostResource::collection($posts);
        return response()->json([
            "success" => 1,
            "message" => "success",
            "data" => $data
        ]);
    }
}
