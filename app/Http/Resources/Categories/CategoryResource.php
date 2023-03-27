<?php

namespace App\Http\Resources\Categories;

use App\Http\Resources\Images\ImageResource;
use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            "id_cate"            => $this->id,
            "name_cate"     => $this->name,
            "description_cate" => $this->description,
            "url_cate"      => route('slug', ['category_slug'=> $this->slug]),
        ];
    }
}
