<?php
namespace App\Repositories;

use App\Models\DestinationPost;
use App\Repositories\Support\AbstractRepository;
use Illuminate\Support\Facades\Auth;

class DestinationPostRepository extends AbstractRepository
{
    public function model()
    {
        return DestinationPost::class;
    }
    public function getDestinationByPostId($post_id)
    {
        return $this->model->where('post_id', $post_id)->pluck('destination_id')->toArray();
    }
    public function checkDestinationPostByPostId($post_id)
    {
        return $this->model->where('post_id', $post_id)->get();
    }
}
