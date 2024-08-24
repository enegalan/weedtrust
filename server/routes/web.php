<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::group(['prefix' => 'api'], function() {
    Route::post('/check/session', [AuthController::class, 'checkSession'])->name('check.session');
    Route::post('/register', [AuthController::class, 'register'])->name('register');
});