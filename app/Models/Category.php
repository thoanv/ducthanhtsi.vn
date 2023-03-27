<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'cover',
        'description',
        'parent_id',
        'serial',
        'type',
        'status',
        'featured',
        'trademarks',
        'created_by'
    ];
    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'trademarks' => 'array',
    ];
    public function parent()
    {
        return $this->belongsTo(Category::class, 'parent_id', 'id');
    }
    public function images()
    {
        return $this->hasMany(Image::class);
    }
    public static function recursive($categories, $parents = 0, $level = 1, &$listCategory)
    {
        if(count($categories) > 0){
            foreach ($categories as $key => $value){
                if($value->parent_id == $parents){
                    $value->level = $level;

                    $listCategory[] = $value;

                    unset($categories[$key]);

                    $parent = $value->id;
                    self::recursive($categories, $parent, $level + 1, $listCategory);
                }
            }
        }
    }
    public function createdBy()
    {
        return $this->belongsTo(Employee::class, 'created_by', 'id');
    }
    public function posts()
    {
        return $this->belongsToMany(Post::class, 'category_post');
    }
    public function getType()
    {
        $data = [];
        switch ($this->type) {
            case 'product':
                $data['css'] = 'badge-outline-primary';
                $data['title'] = 'Sản phẩm';
            break;
            case 'posts':
                $data['css'] = 'badge-outline-success';
                $data['title'] = 'Tin tức';
            break;
            case 'policy':
                $data['css'] = 'badge-outline-danger';
                $data['title'] = 'Chính sách';
            break;
            case 'contact':
                $data['css'] = 'badge-outline-warning';
                $data['title'] = 'Liên hệ';
            break;
            case 'tutorial':
                $data['css'] = 'badge-outline-info';
                $data['title'] = 'Hướng dẫn';
            break;
            default:
                $data['css'] = 'badge-outline-success';
                $data['title'] = 'Giới thiệu';
        }
        return $data;
    }
    public function subproducts()
    {
        return $this->hasManyThrough(Product::class, self::class, 'parent_id', 'category_id');
    }
    public function products()
    {
        return $this->hasMany(Product::class);
    }
}
