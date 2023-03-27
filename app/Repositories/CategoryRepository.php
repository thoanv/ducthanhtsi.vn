<?php
namespace App\Repositories;

use App\Models\Category;
use App\Repositories\Support\AbstractRepository;
use Illuminate\Support\Facades\Auth;

class CategoryRepository extends AbstractRepository
{
    public function model()
    {
        return Category::class;
    }
    public function getCategories()
    {
        $data = [];
        $query =  $this->model->whereNull('parent_id')->orderBy('ID', 'DESC')->get();
        foreach ($query as $item):
            $data[] = $item;
            $que = $this->model->where('parent_id', $item['id'])->get();
            foreach ($que as $it):
                $data[] = $it;
            endforeach;
        endforeach;
        return $data;
    }
    public function getCategoriesStatus($status = false)
    {
        $query = $this->model;
        if($status)
            $query = $query->where('status', true);
        return $query->orderBy('ID', 'DESC')->get();
    }
    public function getCategoriesByType($type = 'product')
    {
        $query = $this->model;
        if($type)
            $query = $query->where('type', $type);
        return $query->orderBy('ID', 'DESC')->get();
    }
    public function getLists()
    {
        return $this->model->where('status', true)->get();
    }
    public function getCategoriesFeatured()
    {
        return $this->model->where([['status', true],['featured', true],['type', 'product']])->whereNull('parent_id')->orderBy('ID', 'DESC')->get();
    }
    public function getCategoryBySlug($slug)
    {
        return $this->model->where([['status', true], ['slug', $slug]])->first();
    }
    public function getCategoriesOtherCateId($cate_id)
    {
        return $this->model->where([['status', true],['id', '<>' , $cate_id]])->take(5)->get();
    }
    public function getCategoriesShowRight()
    {
        return $this->model->where([['status', true]])->take('5')->orderBy('ID', 'DESC')->get();
    }
    public function getListChildCategoriesById($category_id)
    {
        return $this->model->where([['status', true], ['parent_id', $category_id], ['featured', true]])->take('5')->orderBy('ID', 'DESC')->get();
    }
    public function getAllListChildCategoriesById($category_id)
    {
        return $this->model->where([['status', true], ['parent_id', $category_id]])->orderBy('ID', 'DESC')->get();
    }
    public function getAllCategories()
    {
        return $this->model->where([['status', true],['type', 'product']])->whereNull('parent_id')->orderBy('ID', 'DESC')->get();
    }
}
