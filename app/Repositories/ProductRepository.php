<?php
namespace App\Repositories;

use App\Models\Banner;
use App\Models\Origin;
use App\Models\Product;
use App\Repositories\Support\AbstractRepository;

class ProductRepository extends AbstractRepository
{
    public function model(){
        return Product::class;
    }
    public function getData($request)
    {
        $query = $this->model;
        if($request->name){
            $query = $query->where('name', 'like', '%' . $request->name . '%')->orWhere('code', $request->name);
        }

        if($request->status == 0 && $request->status !=''){
            $query = $query->where('status', false);
        }
        if($request->status == 1){
            $query = $query->where('status', true);
        }
        if($request->category){
            $query = $query->where('category_id', $request->category);
        }
        return $query->orderBy('id', 'DESC')->paginate();
    }
    public function getByStatus($status = true)
    {
        return $this->model->where('status', $status)->get();
    }
    public function getProductByCategoryId($category_id)
    {
        return $this->model->where([['status', true], ['category_id', $category_id]])->get();
    }
    public function getProductBySlug($slug)
    {
        return $this->model->with('origin')->where([['status', true], ['slug', $slug]])->first();
    }
}
