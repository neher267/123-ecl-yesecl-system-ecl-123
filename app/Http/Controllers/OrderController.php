<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Cart;
use App\Inquiry;
use App\Order;
use App\OrderDetail;

class OrderController extends Controller
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $inquiry = Inquiry::create($request->all());
        $order = new Order;
        $order->inquiry()->associate($inquiry)->save();
        foreach (Cart::content() as $content) {
            $orderDetails = new OrderDetail;
            $orderDetails->order()->associate($order);
            $orderDetails->product()->associate($content->id);
            $orderDetails->quantity = $content->qty;
            $orderDetails->save();
        }
        Cart::destroy();
        return redirect('/')->withSuccess('You order is placed successfully! We will contact soon. Thank you for your order.');      
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $order = Order::find($id);
        $inquiry = $order->inquiry()->first();
        $page_title = 'Order Details';

        return view('layouts.backend2.pages.orders.show', compact('order', 'inquiry', 'page_title'));
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
        $order = Order::findOrFail($id);
        $order->delete();
        return back()->withSuccess("Success!");
    }
}
