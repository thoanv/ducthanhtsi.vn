<?php
namespace App\Repositories;

use App\Models\Banner;
use App\Repositories\Support\AbstractRepository;

class BannerRepository extends AbstractRepository
{
    public function model(){
        return Banner::class;
    }
    public function getData($request)
    {
        $query = $this->model;
        if($request->name){
            $query = $query->where('name', 'like', '%' . $request->name . '%');
        }

        if($request->status == 0 && $request->status !=''){
            $query = $query->where('status', false);
        }
        if($request->status == 1){
            $query = $query->where('status', true);
        }

        return $query->orderBy('id', 'DESC')->paginate();
    }
    public function getByStatus($status = true)
    {
        return $this->model->where('status', $status)->get();
    }
    public function getBannerByKey($key)
    {
        return $this->model->where([['status', true],['key', $key]])->first();
    }

}
