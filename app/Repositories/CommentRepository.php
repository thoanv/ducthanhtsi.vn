<?php
namespace App\Repositories;

use App\Models\Comment;
use App\Repositories\Support\AbstractRepository;
use Illuminate\Support\Facades\Auth;

class CommentRepository extends AbstractRepository
{
    public function model(){
        return Comment::class;
    }
    public function getData()
    {
        return $this->model->orderBy('ID', 'DESC')->paginate();
    }
    public function getByStatus($status = true)
    {
        return $this->model->where('status', $status)->get();
    }
   
    public function getCommentByPostId($post_id)
    {
        return $this->model->where([['status', 'YES'], ['post_id', $post_id]])->orderBy('ID', 'DESC')->paginate(2);
    }

}
