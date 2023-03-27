<?php

namespace App\Http\Controllers\Admin;

use App\Models\HistoryQuantity;
use App\Http\Requests\StoreHistoryQuantitiesRequest;
use App\Http\Requests\UpdateHistoryQuantitiesRequest;
use App\Http\Controllers\Controller;

class HistoryQuantitiesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreHistoryQuantitiesRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreHistoryQuantitiesRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\HistoryQuantity  $historyQuantities
     * @return \Illuminate\Http\Response
     */
    public function show(HistoryQuantity $historyQuantities)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\HistoryQuantity  $historyQuantities
     * @return \Illuminate\Http\Response
     */
    public function edit(HistoryQuantity $historyQuantities)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateHistoryQuantitiesRequest  $request
     * @param  \App\Models\HistoryQuantity  $historyQuantities
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateHistoryQuantitiesRequest $request, HistoryQuantity $historyQuantities)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\HistoryQuantity  $historyQuantities
     * @return \Illuminate\Http\Response
     */
    public function destroy(HistoryQuantity $historyQuantities)
    {
        //
    }
}
