<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
use Cart;

class CartController extends Controller
{
    protected $count;
    protected $subtotal;

    public function __construct()
    {
        $this->count = Cart::count();
        $this->subtotal = Cart::subtotal();
    }
	
    public function add(Product $product)
    {

    	//dd($product);
    	Cart::add($product, 1, ['image'=>$product->image, 'model' => $product->model_no, 'brand'=> $product->brand,]);
    	//Cart::destroy();
    	//dd(Cart::content());
    	//dd($product);
    	//return back();
       return redirect('view-products')->withSuccess('One Item Added');
    }

    public function cart_update(Request $request)
    {
        $rowId = $request->rowId;     
        $qty = (int) Cart::get($rowId)->qty + (int)$request->qty;   
        $price = (int) Cart::get($rowId)->price * $qty; 
        Cart::update($rowId, $qty);
        return back()->withSuccess("Cart Updated.");
    }

    

    

    public function remove_item(Request $request)
    {
        Cart::remove($request->rowid);
        return ['count'=>$this->count, 'subtotal'=>$this->subtotal];
    }    

}
