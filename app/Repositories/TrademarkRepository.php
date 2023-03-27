<?php
namespace App\Repositories;

use App\Models\Banner;
use App\Models\Origin;
use App\Models\Trademark;
use App\Repositories\Support\AbstractRepository;

class TrademarkRepository extends AbstractRepository
{
    public function model(){
        return Trademark::class;
    }
    public function getData()
    {
        return $this->model->orderBy('id', 'DESC')->paginate();
    }
    public function getByStatus($status = true)
    {
        return $this->model->where('status', $status)->get();
    }
    public function getTrademarkBySlug($slug)
    {
        return $this->model->where([['status', true], ['slug', $slug]])->first();
    }
}
