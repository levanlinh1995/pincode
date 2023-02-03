<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PinInputController extends Controller
{
    public function index()
    {
        return view('pin-input');
    }
}
