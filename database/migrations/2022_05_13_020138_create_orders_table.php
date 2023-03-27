<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('full_name')->nullable();
            $table->string('phone')->nullable();
            $table->string('email')->nullable();
            $table->string('code')->nullable()->unique();
            $table->string('address')->nullable();
            $table->unsignedInteger('ward_id')->nullable();
            $table->unsignedInteger('district_id')->nullable();
            $table->unsignedInteger('province_id')->nullable();
            $table->string('note')->nullable();

            $table->decimal('total', 12, 2)->nullable();
            $table->unsignedInteger('employee_id')->nullable();
            $table->tinyInteger('status')->default(1);
            $table->tinyInteger('status_pay')->default(0);
            $table->unsignedInteger('user_id')->nullable();
            
            $table->dateTime('completed_at')->nullable();

            $table->string('vat_code')->nullable();
            $table->string('vat_company')->nullable();
            $table->string('vat_company_address')->nullable();
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
        Schema::dropIfExists('orders');
    }
}
