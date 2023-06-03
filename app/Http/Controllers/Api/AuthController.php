<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\BaseController;
use Illuminate\Http\Request;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;

class AuthController extends BaseController
{
    use AuthenticatesUsers;

    function username()
    {
        return 'username';
    }

    public function login(Request $request)
    {
        if (!(Auth::attempt(['username' => $request->username, 'password' => $request->password]))) {
            return $this->sendError('Unauthorized.', ['error' => 'Unauthorized'], 401);
        }

        $user = Auth::user();

        $data = [
            'token' => $user->createToken(config('app.name'))->plainTextToken,
            'user' => $user
        ];

        return $this->sendResponse($data, 'User login successfully.');
    }
}
