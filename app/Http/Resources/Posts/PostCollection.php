<?php

namespace App\Http\Resources\Posts;

use Illuminate\Http\Resources\Json\ResourceCollection;

class PostCollection extends ResourceCollection
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
            "id_post"       => $this->id,
            "name_post"     => $this->name,
            "slug_post"     => $this->slug,
            "avatar_post"   => $this->avatar ? env('APP_URL').$this->avatar : '',
            "description_post"   => $this->description,
            "view_post"          => $this->view,
            'created_at'        => $this->created_at
        ];
    }
}
