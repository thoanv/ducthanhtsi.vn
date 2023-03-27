<?php
namespace App\Repositories;

use App\Models\Category;
use App\Models\Destination;
use App\Repositories\Support\AbstractRepository;
use Illuminate\Support\Facades\Auth;

class DestinationRepository extends AbstractRepository
{
    public function model()
    {
        return Destination::class;
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
    public function getDestinationByStatus($status = false)
    {
        $query = $this->model;
        if($status)
            $query = $query->where('status', true);

        return $query->orderBy('ID', 'DESC')->get();
    }
    public function getDestinationFeatured()
    {
        return $this->model->where([['status', true],['featured', true]])->orderBy('ID', 'DESC')->get();
    }
    public function getDestinationBySlug($slug)
    {
        return $this->model->where([['status', true], ['slug', $slug]])->first();
    }
}
