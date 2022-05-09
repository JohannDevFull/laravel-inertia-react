<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\User;

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

	return Inertia::render('Home', [
		'test'	=> "Johann Ramirez",
	    'users' => User::all()->map(function ($user) {
	        return [
	            'id' 		=> $user->id,
	            'name' 		=> $user->name,
	            'email' 	=> $user->email,
	            'edit_url' 	=> URL::route('users.edit', $user),
	        ];
	    }),
	    'create_url' => URL::route('users.create'),
	]);

});

Route::get('/test', function () {

	return Inertia::render('Test', [
		'test'	=> "Johann Ramirez",
	    'users' => User::all()->map(function ($user) {
	        return [
	            'id' 		=> $user->id,
	            'name' 		=> $user->name,
	            'email' 	=> $user->email,
	            'edit_url' 	=> URL::route('users.edit', $user),
	        ];
	    }),
	    'create_url' => URL::route('users.create'),
	]);

});

Route::get('/test', function () {

	return Inertia::render('Test', [
		'test'	=> "Johann Ramirez",
	    'users' => User::all()->map(function ($user) {
	        return [
	            'id' 		=> $user->id,
	            'name' 		=> $user->name,
	            'email' 	=> $user->email,
	            'edit_url' 	=> URL::route('users.edit', $user),
	        ];
	    }),
	    'create_url' => URL::route('users.create'),
	]);

});

Route::get('/users',                      			[TictactocController::class, 'create'])->name('users.create');
Route::get('/users/{:id}',                      	[TictactocController::class, 'edit'])->name('users.edit');

