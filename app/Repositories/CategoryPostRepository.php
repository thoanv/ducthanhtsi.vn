<?php
namespace App\Repositories;

use App\Models\Category;
use App\Models\CategoryPost;
use App\Repositories\Support\AbstractRepository;
use Illuminate\Support\Facades\Auth;

class CategoryPostRepository extends AbstractRepository
{
    public function model()
    {
        return CategoryPost::class;
    }
    public function getCategoryByPostId($post_id)
    {
        return $this->model->where('post_id', $post_id)->pluck('category_id')->toArray();
    }
    public function checkCategoryPostByPostId($post_id)
    {
        return $this->model->where('post_id', $post_id)->get();
    }
}
