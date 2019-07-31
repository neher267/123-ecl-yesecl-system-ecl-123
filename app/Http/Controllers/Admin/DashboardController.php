<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use App\Service;
use App\Inquiry;
use App\Product;
use App\Order;

class DashboardController extends Controller
{
    public function index() 
    {
    	$users = User::get()->count();
    	$service = Service::get()->count();
        $inquiryes = Inquiry::get()->count();
        $products = Product::get()->count();
    	//$orders = Order::get()->count();

    	return view('layouts.backend2.pages.dashboard', compact('users', 'service', 'inquiryes', 'products'));
    }

    public function successful_cases() 
    {
    	return view('layouts.backend2.pages.successful-case.index');
    }   
    
}
