<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductInquiryStoreRequest;
use App\Product;
use App\Inquiry;

class ProductInquiryController extends Controller
{
    public function create(Product $product)
    {
    	return view('layouts.backend.pages.inquiry-form', compact('product'));
    }

    public function store(ProductInquiryStoreRequest $request, Product $product)
    {
    	$data = $request->all();
    	$data['product_id'] = $product->id;
        Inquiry::create($data);
        return redirect('view-products')->withSuccess("Thank You for your Inquiry. We will call you letter.");

    }
}
