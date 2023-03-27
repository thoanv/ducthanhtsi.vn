<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class DashboardController extends Controller
{
    public function index()
    {
        return view('admin.dashboard');
    }
    public function showChangePasswordGet() {
        return view('admin.auths.change-password');
    }
    public function logoutAdmin(Request $request) {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect(route('admin.login'));
    }
    public function changePasswordPost(Request $request)
    {
        $user = Auth::user();

        $userPassword = $user->password;
        $request->validate([
            'current_password' => 'required',
            'password' => 'required|same:confirm_password',
            'confirm_password' => 'required',
        ]);
        if (!Hash::check($request->current_password, $userPassword)) {
            return back()->with('error','Mật khẩu hiện tại không đúng');
        }

        $user->password = Hash::make($request->password);

        if($user->password_reset){
            $user->password_reset = NULL;
        }
        $user->save();

        return redirect()->back()->with('success','Đổi mật khẩu thánh công');
    }
}
