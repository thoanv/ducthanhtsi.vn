<?php
namespace App\Repositories;

use App\Models\Category;
use App\Models\Destination;
use App\Models\Post;
use App\Repositories\Support\AbstractRepository;
use Illuminate\Support\Facades\Auth;

class PostRepository extends AbstractRepository
{
    public function model()
    {
        return Post::class;
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
        if($request->category){
            $query = $query->where('category_id', $request->category);
        }
        return $query->orderBy('id', 'DESC')->paginate();

    }
    public function getPostByPublisher($publisher = 'pending')
    {
        $query = $this->model;
        if($publisher)
            $query = $query->where('published', $publisher);

        return $query->orderBy('ID', 'DESC')->paginate();
    }
    public function getPostReadALots()
    {
        return $this->model->where([['status', 'YES'], ['featured', 'YES'],['published', 'published']])->orderBy('view', 'DESC')->take(3)->get();
    }
    public function getPostBySlug($slug)
    {
        return $this->model->where([['status', 'YES'], ['slug', $slug],['published', 'published']])->first();
    }
    public function searchPosts($key, $request)
    {
        $query = $this->model->where([['status', 'YES'],['published', 'published']]);
        if($key){
            $query = $query->where('name', 'like', '%' . $key . '%');
        }
        return $query->orderBy('id', 'DESC')->paginate(7);
    }
    public function getListPostApi($cate_id)
    {
        $query = $this->model->where([['status', 'YES'],['published', 'published']]);
        $query = $query->WhereHas('categories',  function ($query) use ($cate_id) {
            $query->where('id', $cate_id);
        });
        return $query->orderBy('id', 'DESC')->limit(9)->get();
    }
}
