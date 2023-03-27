<?php
namespace App\Repositories;

use App\Models\Menu;
use App\Repositories\Support\AbstractRepository;
use Illuminate\Support\Facades\Auth;
use App\Models\TypePermission;

class MenuRepository extends AbstractRepository
{
    public function model(){
        return Menu::class;
    }
    public function getMenus()
    {
        return $this->model->orderBy('ID', 'DESC')->get();
    }
    public function getMenuByStatus($status)
    {
        return $this->model->where('status', $status)->get();

    }
    public function getMenuBykey($key)
    {
        $menus = [];
        $model = $this->model->where([['key', $key],['status', true]])->first();
        if($model && $model['data']){
            $data = unserialize($model['data']);
            if($data && !empty($data)){
                $menus = $data;
            }
        }
        return $menus;
    }
}
