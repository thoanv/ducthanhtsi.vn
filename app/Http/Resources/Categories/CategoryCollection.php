<?php

namespace App\Http\Resources\Categories;

use Illuminate\Http\Resources\Json\ResourceCollection;

class CategoryCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            "id_cate"       => $this->id,
            "name_cate"     => $this->name,
            "description_cate" => $this->description,
            "url_cate"      => route('slug', ['category_slug'=> $this->slug]),
        ];
    }
}
