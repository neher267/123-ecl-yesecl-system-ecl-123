<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Inquiry;

class InquiryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $page_title = "Inquiryes";
        $inquiryes = Inquiry::where('product_id', null)->latest()->get();
        return view('layouts.backend2.pages.inquiry.index', compact('inquiryes', 'page_title'));
    }

    public function productInquries()
    {
        $page_title = "Inquiryes";
        $inquiryes = Inquiry::where('product_id', '!=', null)->latest()->get();
        return view('layouts.backend2.pages.product-inquiry.index', compact('inquiryes', 'page_title'));
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Inquiry::create($request->all());

        return back()->withSuccess("Thank You for your Inquiry. We will call you letter");
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
    	$inquiry = Inquiry::find($id);
    	$page_title = "Details";
        return view('layouts.backend2.pages.inquiry.view', compact('inquiry', 'page_title'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $inquiry = Inquiry::findOrFail($id);
        $inquiry->delete();
        return back()->withSuccess('Delete Success!');
    }
}
