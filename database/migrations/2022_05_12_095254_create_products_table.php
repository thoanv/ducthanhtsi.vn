<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique()->nullable();
            $table->string('avatar')->nullable();
            $table->string('code')->nullable();
            $table->text('description')->nullable();
            $table->text('content')->nullable();
            $table->text('specification')->nullable();//Thông số kỹ thuật
            $table->integer('star')->default(5);
            $table->tinyInteger('favourite')->default(0);
            $table->tinyInteger('status')->default(0);
            $table->tinyInteger('search')->default(0);
            $table->integer('price')->default(0);
            $table->integer('discount')->default(0);
            $table->integer('quantity')->default(0);

            $table->string('key_search')->nullable();
            $table->string('SKU')->nullable();
            $table->string('bao_hanh')->nullable();

            $table->text('extends')->nullable();

            $table->unsignedInteger('employee_id');
            $table->unsignedInteger('trademark_id')->nullable();
            $table->unsignedInteger('origin_id')->nullable();
            $table->unsignedInteger('category_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
