<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CheckoutController extends Controller
{
    public function index()
    {
    	$pages = array();
        $pages["Checkout"] = "checkout";
    	return view('layouts.frontend.pages.checkout', compact('pages'));
    }
}
