<?php
namespace App\Repositories;

use App\Models\Category;
use App\Models\Destination;
use App\Models\Post;
use App\Models\PostHistory;
use App\Repositories\Support\AbstractRepository;
use Illuminate\Support\Facades\Auth;

class PostHistoryRepository extends AbstractRepository
{
    public function model()
    {
        return PostHistory::class;
    }
    public function getData()
    {
        return $this->model->orderBy('id', 'DESC')->get();
    }
}
