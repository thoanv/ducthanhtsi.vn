<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostHistory extends Model
{
    use HasFactory;
    const STATUS_DRAFT = 'draft';
    const STATUS_PENDING = 'pending';
    const STATUS_PUBLISHED = 'published';
    const STATUS_UNPUBLISHED = 'unpublished';
    const STATUS_NODISPLAY = 'nodisplay';
    protected $fillable = [
        'published',
        'created_by',
        'post_id',
        'note'
    ];
    public function getPublisher()
    {
        if($this['published'] === PostHistory::STATUS_DRAFT){
            $name_status = 'Bản Nháp';
            $color_status = 'badge-dark';
        }elseif($this['published'] === PostHistory::STATUS_PENDING){
            $name_status = 'Chờ Xuất Bản';
            $color_status = 'badge-warning';
        }elseif($this['published'] === PostHistory::STATUS_PUBLISHED){
            $name_status = 'Đã Xuất Bản';
            $color_status = 'badge-success';
        }elseif($this['published'] === PostHistory::STATUS_NODISPLAY){
            $name_status = 'Không hiển thị';
            $color_status = 'badge-info';
        }else{
            $name_status = 'Không Xuất Bản';
            $color_status = 'badge-danger';
        }
        $data['name_status'] = $name_status;
        $data['color_status'] = $color_status;
        return $data;
    }
    public function createdBy()
    {
        return $this->belongsTo(Employee::class, 'created_by');
    }
}
