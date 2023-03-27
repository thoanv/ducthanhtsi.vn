<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\CategoryRepository as CategoryRepo;
use App\Repositories\CommentRepository as CommentRepo;
use App\Repositories\PostRepository as PostRepo;

class PostController extends Controller
{
    protected $categoryRepo;
    protected $commentRepo;
    protected $postRepo;

    public function __construct(CategoryRepo $categoryRepo, CommentRepo $commentRepo, PostRepo $postRepo)
    {
        $this->categoryRepo = $categoryRepo;
        $this->commentRepo = $commentRepo;
        $this->postRepo = $postRepo;
    }
    public function index()
    {
        return view('posts.list');
    }
    public function plusLike(Request $request)
    {
        $post_id = $request['post_id'];
        $post = $this->postRepo->find($post_id);
        $data['like'] = $post['like']+1;
        $this->postRepo->update($data, $post_id);
        return $this->sendResponse(true, 'successfully.');
    }
    public function ajaxComment(Request $request)
    {
        $data = $request->only('name', 'phone', 'email', 'content', 'post_id');
        $comment = $this->commentRepo->create($data);
        $result['comment'] = $comment;
        if($request['save']){
            unset($data['post_id']);
            unset($data['content']);
            setcookie('name_comment', serialize($data), time() + (30*24*60*60), "/");
            if(isset($_COOKIE['name_comment'])){
                $result['cookie'] = unserialize($_COOKIE['name_comment']);
            }
            $result['cookie'] = $data;
        }

        return $this->sendResponse($result, 'successfully.');
    }
    public function sendResponse($result, $message=null)
    {
        $response = [
            'success' => true,
            'data' => $result,
            'message' => $message
        ];

        return response()->json($response, 200);
    }
}
