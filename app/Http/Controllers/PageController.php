<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;

class PageController extends Controller
{
    public function getAboutPage()
    {
        return 'test   '. Config::get('app.locale');
    }
}
