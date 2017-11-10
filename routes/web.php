<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    //todo remove it and start working with frontend
    return view('welcome');
});


Route::get(trans('routes.about'), ['as' => 'about', 'uses' => 'PageController@getAboutPage']);
Auth::routes();

// Роутінг адмінки обробляє vue.js
Route::group(['prefix' => 'adm', 'middleware' => ['auth', 'admin']], function()
{
    Route::any('/', function() {
        return view('admin.admin');
    });

    Route::any('{all}', function() {
        return view('admin.admin');
    })->where(['all' => '.*']);
});
