<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\LoginController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\TypePermissionController;
use App\Http\Controllers\Admin\PermissionController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\AboutUController;
use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\RoleController;
use App\Http\Controllers\Ajax\AjaxController;
use App\Http\Controllers\Admin\EmployeeController;
use App\Http\Controllers\Admin\PostController;
use App\Http\Controllers\Admin\SlideController;
use App\Http\Controllers\Admin\BannerController;
use App\Http\Controllers\Admin\BannerDetailController;
use App\Http\Controllers\Admin\MenuController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\OriginController;
use App\Http\Controllers\Admin\TrademarkController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::match(['get', 'post'], '/login', [LoginController::class, 'login'])->name('admin.login');

Route::middleware('auth:admin')->group(function (){
    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/thay-doi-mat-khau',[DashboardController::class, 'showChangePasswordGet'])->name('changePasswordGet');
    Route::post('/changePassword',[DashboardController::class, 'changePasswordPost'])->name('changePasswordPost');
    Route::get('/posts/pending',[PostController::class, 'pending'])->name('posts.pending');
    Route::get('/posts/unpublished',[PostController::class, 'unpublished'])->name('posts.unpublished');
    Route::get('/posts/published',[PostController::class, 'published'])->name('posts.published');
    Route::post('/reset-password/{employee}', [EmployeeController::class , 'resetPassword'])->name('employee.reset-pass');
    Route::get('menus/{menu}/setup', [MenuController::class, 'setup'])->name('menus.setup');
    Route::post('menus/{menu}/setup', [MenuController::class, 'setupStore'])->name('menus.setup-store');
    Route::resources([
        'type-permissions'  => TypePermissionController::class,
        'permissions'       => PermissionController::class,
        'categories'        => CategoryController::class,
        'aboutUs'           => AboutUController::class,
        'contacts'          => ContactController::class,
        'employees'         => EmployeeController::class,
        'posts'             => PostController::class,
        'slides'            => SlideController::class,
        'banners'           => BannerController::class,
        'menus'             => MenuController::class,
        'products'          => ProductController::class,
        'origins'           => OriginController::class,
        'trademarks'        => TrademarkController::class,
    ]);
    Route::get('/posts/{post}/{type}',[PostController::class, 'show'])->name('posts.showDetail');
    Route::post('/post/change/published',[PostController::class, 'changePublished'])->name('post.change.published');
    //Phân quyền cho nhân viên
    Route::get('/role/authorization/{employee_id}', [RoleController::class, 'authorization'])->name('authorization-employee');
    Route::post('/role/authorization-post', [RoleController::class, 'authorizationPost'])->name('authorization-employee-post');
    Route::get('/role/authorization-update/{employee_id}/{role_id}', [RoleController::class, 'authorizationUpdate'])->name('authorization-employee-role');
    Route::post('/role/authorization-update-post', [RoleController::class, 'authorizationUpdatePost'])->name('authorization-employee-role-update-post');
    //Ajax
    Route::post('enable-column', [AjaxController::class, 'enableColumn'])->name('enable-column');
    Route::post('enable-column-text', [AjaxController::class, 'enableColumnText'])->name('enable-column-text');

    //Banner Detail
    Route::get('/banners-detail/{banner}', [BannerDetailController::class, 'index'])->name('banners_detail_list');
    Route::get('/banners-detail/create/{banner}', [BannerDetailController::class, 'create'])->name('banners_detail_create');
    Route::post('/banners-detail/store/{banner}', [BannerDetailController::class, 'store'])->name('banners_detail_store');
    Route::get('/banners-detail/edit/{bannerDetail}', [BannerDetailController::class, 'edit'])->name('banners_detail_edit');
    Route::post('/banners-detail/update', [BannerDetailController::class, 'update'])->name('banners_detail_update');
    Route::delete('/banners-detail/destroy/{bannerDetail}', [BannerDetailController::class, 'destroy'])->name('banners_detail_destroy');
//    Route::any('/ckfinder/connector', 'CKSource\CKFinderBridge\Controller\CKFinderController@requestAction') ->name('ckfinder_connector');
//    Route::any('/ckfinder/browser', 'CKSource\CKFinderBridge\Controller\CKFinderController@browserAction') ->name('ckfinder_browser');
    Route::post('/logout-admin',[DashboardController::class, 'logoutAdmin'])->name('logout.admin');
    Route::group(['prefix' => 'laravel-filemanager', 'middleware' => ['web', 'auth']], function () {
        \UniSharp\LaravelFilemanager\Lfm::routes();
    });
});

