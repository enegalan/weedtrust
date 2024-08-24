<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller {
    public function checkSession () {
        return response()->json(Auth::check());
    }
    public function register (Request $request) {
        $request->validate([
            'email' => 'unique|required',
            'username' => 'unique|required',
            'password' => 'min:8|required',
            'fullname' => 'min:4|required',
        ]);
        User::create($request->all());
        return response()->json('User successfully registered');
    }
}
