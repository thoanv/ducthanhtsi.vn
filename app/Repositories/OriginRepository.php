<?php
namespace App\Repositories;

use App\Models\Banner;
use App\Models\Origin;
use App\Repositories\Support\AbstractRepository;

class OriginRepository extends AbstractRepository
{
    public function model(){
        return Origin::class;
    }
    public function getData()
    {
        return $this->model->orderBy('id', 'DESC')->paginate();
    }
    public function getByStatus($status = true)
    {
        return $this->model->where('status', $status)->get();
    }
}
