<?php
namespace App\Helpers;

use App\Models\Category;
use App\Models\General;
use App\Models\Menu;
use App\Models\Notification;
use App\Models\Trademark;

class FunctionHelpers
{
    public static function getCategoryProducts()
    {
        $categories = Category::where([['status', true], ['featured', true], ['type', 'product']])->whereNull('parent_id')->get();
        foreach ($categories as $key =>  $category){
            $category['features'] = Category::where([['parent_id', $category['id']], ['featured', true], ['type', 'product'],['status', true]])->get();
            $category['child_categories'] = Category::where([['parent_id', $category['id']], ['featured', false], ['type', 'product'],['status', true]])->get();
        }
//        dd($categories);
        return $categories;
    }
    public static function getMenuByKey($key)
    {
        $menus = [];
        $model = Menu::where([['key', $key],['status', true]])->first();
        if($model && $model['data']){
            $data = unserialize($model['data']);
            if($data && !empty($data)){
                $menus = $data;
            }
        }
        return $menus;
    }
    public static function categoryFeatured()
    {
        return Category::where([['status', true], ['featured', true],['type', 'product']])->get();
    }
}
