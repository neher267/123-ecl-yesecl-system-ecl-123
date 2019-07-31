<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Order;

class ManageOrderController extends Controller
{
    protected $path = 'layouts.backend2.pages.orders.';
    protected $route_name = "orders";

    public function index()
    {
        $page_title = "All Orders";
        $name = $this->route_name;
        $results = Order::latest()->orderBy('status', 'asc')->get();
        return view($this->path.'index', compact('name', 'page_title', 'results'));
    }    
}
