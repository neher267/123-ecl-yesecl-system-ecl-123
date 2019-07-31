<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ProjectType;
use App\Project;
use App\Service;
use App\Image;
use App\Product;
use App\Models\Training\Course;
use App\Models\Training\Category;
use App\Page;

class PublicController extends Controller
{
    public function index()
    {
        $frontend_services = Service::where('status', 1)
                            ->where('is_trining',0)
                            ->orderBy('priority', 'asc')
                            ->limit(8)->get()->chunk(4);
        $sliderImages = Image::where('type', '1')->where('status', true)->orderBy('priority', 'asc')->get();

        $middle = Page::where('priority', '!=', null)->orderBy('priority')->limit(4)->get();
        
        return view('layouts.frontend.pages.index', compact('frontend_services','sliderImages','middle'));

    }

    public function products()
    {
        $pages = array();
        $pages["Products"] = "products";
        return view('layouts.frontend.pages.products', compact('pages'));
    }    

    public function view_products()
    {
        $products = Product::where('status', 1)->orderBy('order')->get()->chunk(4);
        //dd($products);
        return view('layouts.backend.pages.products', compact('products'));
    }

    public function product_details(Product $product)
    {
        return view('layouts.backend.pages.details', compact('pages', 'product'));
    }  

    public function project_details(Project $project)
    {
        $pages = array();
        $pages['Successful Case'] = "#";
        $pages[$project->projec_type()->first()->name] = "#";
        $pages[$project->title] = "#";
        return view('layouts.frontend.pages.success-case.project-details', compact('pages', 'project'));
    }

    
    public function checkout(Request $request)
    {
        return view('layouts.backend.pages.checkout', compact('pages'));
    } 

    public function partners()
    {
        $pages = array();
        $pages["Partners"] = "partners";
    	$page = \App\Page::where('slug', 'partners')->first();
        return view('layouts.frontend.pages.company-profile', compact('pages', 'page'));
    }

    public function gallery()
    {
    	return view('layouts.frontend.pages.gallery', compact('pages'));
    }

    public function contact()
    {
        $pages = array();
        $pages["Contact Us"] = "contact";
    	return view('layouts.frontend.pages.contact', compact('pages'));
    }

    public function about_us()
    {
        $pages = array();
        $pages["About Us"] = "about-us";
        $page = \App\Page::where('slug', 'about-us')->first();
        return view('layouts.frontend.pages.company-profile', compact('pages', 'page'));
    }

    public function management_profile()
    {
        $pages = array();
        $pages["About Us"] = "#";
        $pages["Management Profile"] = "management-profile";
        $page = \App\Page::where('slug', 'management-profile')->first();
        return view('layouts.frontend.pages.company-profile', compact('pages', 'page'));
    }  

    public function page(Page $page)
    {
        $pages = array();
        $pages[$page->name] = $page->slug;
        return view('layouts.frontend.pages.company-profile', compact('pages', 'page'));
    }    

    public function about_training()
    {
        $images = Image::where('type', 3)->where('status', 1)->orderBy('priority')->get();

        $page = Page::where('slug','training')->firstOrFail();
        $pages = array();
        $pages[$page->name] = $page->slug;
        return view('layouts.frontend.pages.training.about', compact('pages', 'page', 'images'));
    }
    
    public function services()
    {
        $pages = array();
        $pages["Services"] = "all-services";
        $servicesImage = Image::where('type', '2')->where('status', true)->first();
        return view('layouts.frontend.pages.services.index', compact('pages', 'servicesImage'));
    }

    public function service(Service $service)
    {
        $pages = array();
        $pages["Services"] = "all-services";
        $pages["managed security services"] = "services/$service->slug";
        return view('layouts.frontend.pages.services.service', compact('pages', 'service'));
    }

    public function courses()
    {
        $pages = array();
        $pages["Courses"] = "courses";
        $categories = Category::with('courses')->orderBy('order')->get();

        // dd($categories);
        return view('layouts.frontend.pages.courses.index', compact('pages','categories'));
    }

    public function course(Course $course)
    {
        $pages = array();
        $pages["Courses"] = "courses";
        $pages[$course->name] = "courses/$course->slug";
        return view('layouts.frontend.pages.courses.show', compact('pages', 'course'));
    }

    public function course_details(Course $course)
    {
        $pages["Courses"] = "courses";
        $pages[$course->name] = "courses/$course->slug";
        return view('layouts.frontend.pages.courses.course-details', compact('pages', 'course'));
    } 

    public function course_registration()
    {
        $courses = Course::orderBy('name', 'asc')->get();
        $pages = array();
        $pages["Course Registration"] = "course-registration";
        return view('layouts.frontend.pages.courses.course-registration', compact('pages', 'courses'));
    }
}
