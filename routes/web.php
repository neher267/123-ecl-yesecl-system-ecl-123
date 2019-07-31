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
Route::group(['prefix'=>'dashboard', 'namespace'=>'Admin', 'middleware'=>['auth']], function() {
	Route::get('/', 'DashboardController@index');
	Route::get('users', 'UserManagementController@index')->name('users');
	Route::get('users/{user}/edit', 'UserManagementController@edit_role')->name('users.edit.role');
	Route::get('users/{user}', 'UserManagementController@show')->name('users.show');
	Route::get('profile', 'ProfileController@show')->name('user.profile');
	Route::get('profile/edit', 'ProfileController@edit')->name('profile.edit');
	Route::get('profile/settings', 'ProfileController@settings')->name('profile.settings');
	Route::POST('profile/settings/change-password', 'ProfileController@changePassword')->name('profile.settings.pass.change');
	Route::PUT('profile/{user}/update', 'ProfileController@update')->name('profile.update');
	Route::PUT('users/{user}', 'UserManagementController@update_role')->name('users.update.role');
	Route::DELETE('users/{user}', 'UserManagementController@destroy')->name('users.destroy');	
	Route::resource('pages','PageController');
	Route::resource('services','ServiceController');
	Route::resource('products','ProductController');
	Route::resource('images','ImageController');
	Route::resource('brands','BrandsController');
	//Route::resource('students','StudentController');
	Route::resource('project-types','ProjectTypeController');
	Route::get('services/{service}/create-success-case','ProjectTypeController@create_success_case')->name('create-success-case');
	// project type project
	Route::get('project-types/{project_type}/projects','ProjectTypeController@projects')->name('project-types.projects');
	Route::get('project-types/{project_type}/projects/create','ProjectController@create')->name('project-type.projects.create');
	Route::post('project-types/{project_type}/projects','ProjectController@store')->name('project-type.projects.store');
	Route::get('project-types/{project_type}/projects/{project}/edit','ProjectController@edit')->name('project-type.projects.edit');	
	Route::PUT('project-types/{project_type}/projects/{project}','ProjectController@update')->name('project-type.projects.update');	
	Route::get('successful-cases', 'DashboardController@successful_cases');
	//training
	Route::resource('categories','CategoryController');
	Route::resource('courses','CourseController');
	Route::resource('student-infos','StudentInfosController');
	Route::get('student-infos/{student_info}/registration','StudentRegistrationController@create_student')->name('create.student');
	Route::resource('students','StudentRegistrationController');
	Route::get('students/{user}/courses','StudentCourseController@index')->name('student.courses.index');
	Route::get('students/{user}/courses/create','StudentCourseController@create')->name('student.courses.create');
	Route::get('students/{user}/courses/{corse}/edit','StudentCourseController@edit')->name('student.courses.edit');
	Route::post('students/{user}/courses','StudentCourseController@store')->name('student.courses.store');
	Route::post('students/deactive-a-course','StudentCourseController@detach')->name('deactive.course');
	Route::get('edit-course-fee','StudentCourseFeeController@edit')->name('edit.course.fee');
	Route::put('edit-course-fee','StudentCourseFeeController@update')->name('update.course.fee');

	
	//end training
	//training
	Route::resource('manage-orders','ManageOrderController');
	Route::resource('courses','CourseController');
	//end training
	//billing
	Route::get('students/{user}/account', 'StudentAccountController@index')->name('student.account');
	Route::get('students/{user}/account/transaction', 'TransactionController@create')->name('student.account.transaction');
	Route::POST('students/{user}/account/transaction', 'TransactionController@store')->name('student.account.transaction.store');
	Route::get('students/{user}/account/transactions', 'TransactionController@index')->name('student.account.transaction.index');

	Route::get('invoice/{student_transaction}', 'InvoiceController@show')->name('invoice');

	//end billing
	Route::resource('inquiryes', 'InquiryController');
	Route::get('product-inquiryes', 'InquiryController@productInquries');
});

/*frontend*/
Route::get('/', 'PublicController@index');
Route::get('about-us', 'PublicController@about_us');
Route::get('partners', 'PublicController@partners');
Route::get('all-products', 'PublicController@products');
Route::get('view-products', 'PublicController@view_products');
Route::get('products/{product}/inquiry', 'ProductInquiryController@create')->name('product.inquiry');	
Route::post('products/{product}/inquiry', 'ProductInquiryController@store')->name('product.inquiry.store');	
Route::get('product-details/{product}', 'PublicController@product_details')->name('product.details');
Route::get('project-details/{project}', 'PublicController@project_details')->name('fronend.project-details');
Route::post('checkout', 'PublicController@checkout');
Route::get('gallery', 'PublicController@gallery');
Route::get('contact', 'PublicController@contact');
Route::get('about-us', 'PublicController@about_us');
Route::get('management-profile', 'PublicController@management_profile');
Route::get('home/{page}', 'PublicController@page');
Route::get('all-services', 'PublicController@services');
Route::get('services/{service}', 'PublicController@service')->name('frontend.services.show');
Route::get('products/{name}', 'ProductController@show');
Route::get('successful-cases', 'SuccessfulProjectsController@index')->name('fronend.successful-cases');
Route::get('successful-cases/{projectType}', 'SuccessfulProjectsController@show')->name('fronend.successful-cases.show');
Route::resource('product', 'ProductController')->middleware('auth');
Route::post('inquiry', 'Admin\InquiryController@store');
// course 
Route::get('training','PublicController@about_training');
Route::get('courses','PublicController@courses');
Route::get('courses/{course}','PublicController@course')->name('course.show');
Route::get('courses-details/{course}','PublicController@course_details');
Route::get('course-registration', 'PublicController@course_registration');
Route::post('course-registration', 'StudentCouseRegistrationController@store');
//end course
// cart 
Route::post('cart/{product}/add', 'CartController@add')->name('cart.add');
Route::post('cart-update', 'CartController@cart_update');
Route::post('remove-item', 'CartController@remove_item');
Route::resource('checkout','CheckoutController');
Route::resource('orders','OrderController');
//end cart
/*end frontend*/
Auth::routes();
Route::get('eclsystem', 'EclController@index');
