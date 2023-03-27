<?php

namespace App\Http\Controllers\Admin;

use App\Models\Category;
use App\Models\Post;
use App\Models\PostHistory;
use Illuminate\Http\Request;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Http\Controllers\Controller;
use App\Repositories\PostRepository as PostRepo;
use App\Repositories\CategoryRepository as CategoryRepo;
use App\Repositories\DestinationRepository as DestinationRepo;
use App\Repositories\PostHistoryRepository as PostHistoryRepo;
use App\Repositories\CategoryPostRepository as CategoryPostRepo;
use App\Repositories\DestinationPostRepository as DestinationPostRepo;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class PostController extends Controller
{
    protected $view = 'admin.posts';
    protected $route = 'posts';
    protected $postRepo;
    protected $categoryRepo;

    public function __construct(PostHistoryRepo $postHistoryRepo, PostRepo $postRepo, CategoryRepo $categoryRepo)
    {
        $this->postRepo = $postRepo;
        $this->categoryRepo = $categoryRepo;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Post $post, Request $request)
    {
        $this->authorize('viewAny', $post);
        $posts = $this->postRepo->getData($request);
        $categories = $this->getCategories();
        return view($this->view.'.index', [
            'posts' => $posts,
            'view' => $this->view,
            'request' => $request,
            'categories' => $categories,
        ]);
    }
    private function getCategories()
    {
        $categories = $this->categoryRepo->getCategoriesByType('posts');
        $listCategory = [];
        Category::recursive($categories, $parents = 0, $level = 1, $listCategory);
        return $listCategory;
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Post $post)
    {
        $this->authorize('create', $post);
        $categories = $this->getCategories();
        return view($this->view.'.create', [
            'post' => $post,
            'view' => $this->view,
            'categories' => $categories,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function store(StorePostRequest $request)
    {
        $data = $request->only('name', 'category_id', 'description', 'content', 'avatar');
        $data['status'] = isset($request['status']) ? 1 : 0;
        $data['start'] = 5;
        $data['view'] = rand(50, 100);
        $data['created_by'] = Auth::id();
        $data['updated_by'] = Auth::id();
        $result = $this->postRepo->create($data);
        $data = [];
        $data['slug'] = Str::slug($request->name.'-'.$result['id']);
        $this->postRepo->update($data, $result['id']);
        return redirect(route($this->route.'.index'))->with('success',  'Thêm mới thành công');

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post, Request $request)
    {
        $type = $request->type;
        $this->authorize('view', $post);
        if(!$post) return abort(404);
        return view($this->view.'.show', [
            'post' => $post,
            'view' => $this->view,
            'type' => $type
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        $this->authorize('update', $post);
        $categories = $this->categoryRepo->getCategoriesStatus(true);
        return view($this->view.'.update', [
            'post' => $post,
            'view' => $this->view,
            'categories' => $categories,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatePostRequest  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePostRequest $request, Post $post)
    {
        $data = $request->only('name', 'category_id', 'description', 'content', 'avatar');
        $data['status'] = isset($request['status']) ? 1 : 0;
        $data['updated_by'] = Auth::id();
        $data['slug'] = Str::slug($request->name.'-'.$post['id']);
        $this->postRepo->update($data, $post['id']);
        return redirect(route($this->route.'.index'))->with('success',  'Cập nhật thành công');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        $this->authorize('delete', $post);
        $post->delete();
        return redirect(route($this->route.'.index'))->with('success',  'Xóa thành công');
    }

}
