<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Ecl;

use Illuminate\Http\Request;

class EclController extends Controller
{
    use Ecl;

    public function index()
    {
    	$this->ecl(request()->q);
    }
}
