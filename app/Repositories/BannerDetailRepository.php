<?php
namespace App\Repositories;

use App\Models\Banner;
use App\Models\BannerDetail;
use App\Repositories\Support\AbstractRepository;

class BannerDetailRepository extends AbstractRepository
{
    public function model(){
        return BannerDetail::class;
    }
    public function getData($banner_id)
    {
        return $this->model->where('banner_id', $banner_id)->orderBy('ID', 'DESC')->paginate();
    }
}
