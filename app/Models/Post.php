<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    const STATUS_DRAFT = 'draft';
    const STATUS_PENDING = 'pending';
    const STATUS_PUBLISHED = 'published';
    const STATUS_UNPUBLISHED = 'unpublished';

    protected $fillable = [
        'name',
        'slug',
        'avatar',
        'description',
        'content',
        'view',
        'featured',
        'start',
        'status',
        'published',
        'time_published',
        'created_by',
        'updated_by',
        'category_id'
    ];
    public function owner()
    {
        return $this->belongsTo(Employee::class, 'created_by');
    }
    public function updatedBy()
    {
        return $this->belongsTo(Employee::class, 'updated_by');
    }
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
