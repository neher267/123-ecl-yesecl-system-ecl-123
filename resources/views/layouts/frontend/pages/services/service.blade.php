@extends('layouts.frontend.master') @section('content')

<style type="text/css">
    .site-content {
        background: #fff;
        font-family: "Lato", Helvetica, sans-serif !important;
    }
    
    .content-left-wrap {
        padding-top: 60px;
    }
    
    article.hentry {
        float: left;
        width: 100%;
        margin-bottom: 30px;
        padding-bottom: 30px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    }
    
    .hentry {
        margin: 0 0 1.5em;
    }
    
    article {
        text-align: left;
        display: block;
    }
    
    .header {
        display: block;
    }
    
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: Montserrat, Arial, sans-serif;
        color: #303030;
        font-weight: 500;
        margin-top: 0px;
    }
    
    h1 {
        font-family: "Montserrat", Helvetica, sans-serif;
        font-weight: 700;
        display: block;
        clear: both;
        margin: 0;
        margin-bottom: 10px;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
        outline: 0;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }
    
    .entry-title {
        margin-top: 0;
        padding-top: 0;
        font-size: 20px;
        color: #404040;
        line-height: 22px;
        position: relative;
    }
    
    .entry-title:after {
        position: absolute;
        z-index: 1;
        bottom: -9px;
        left: 0;
        width: 10%;
        height: 2px;
        margin: auto;
        background: #e96656;
        content: "";
    }
    
    .aligncenter {
        display: block;
        clear: both;
        margin: 0 auto;
    }
    
    a img {
        border: 0;
    }
    
    img {
        max-width: 100%;
        height: auto;
        vertical-align: middle;
    }
    
    .entry-content {
        margin: 1.5em 0 0;
        line-height: 22px;
        font-family: "Lato", Helvetica, sans-serif !important;
        text-align: justify;
        font-weight: 500;
        font-size: 100%;
    }
    
    .sidebar-wrap.content-left-wrap {
        margin-top: 60px;
        padding-top: 0;
    }
    
    .sidebar-wrap {
        border-left: 1px solid rgba(0, 0, 0, 0.05);
    }
    
    .widget-title {
        margin: 0 0 30px 0;
    }
    
    .widget .widget-title {
        float: none;
        position: relative;
        margin-top: 30px;
        margin-bottom: 30px;
        padding-bottom: 5px;
        color: #404040;
        font-size: 17px;
        font-weight: bold;
        text-align: left;
        text-transform: uppercase;
    }
    
    .widget .widget-title:before {
        position: absolute;
        z-index: 1;
        bottom: -9px;
        left: 0;
        width: 35%;
        height: 2px;
        margin: auto;
        background: #e96656;
        content: "";
    }
    
    .service-image {
        width: 100%;
        height: 200px;
        border-radius: 2px;
        margin-bottom: 5px;
    }
</style>

<div id="content" class="site-content">

    <div class="container" style="min-height: 1px;">

        <div class="content-left-wrap col-md-9">
            <div id="primary" class="content-area">

                <main itemscope="" itemtype="http://schema.org/WebPageElement" itemprop="mainContentOfPage" id="main" class="site-main">

                    <article id="post-126" class="post-126 page type-page status-publish hentry">

                        <header class="entry-header">

                            <h1 class="entry-title" itemprop="headline">{{$service->name}}</h1>

                        </header>
                        <!-- .entry-header -->

                        <div class="entry-content body">

                            <img class="service-image" src="{{asset('public/'.$service->image)}}">

                            <p>
                                <?php echo html_entity_decode($service->description);?>
                            </p>
                        </div>
                        <!-- .entry-content -->

                    </article>
                    <!-- #post-## -->

                </main>
                <!-- #main -->

            </div>
            <!-- #primary -->

        </div>
        <div class="sidebar-wrap col-md-3 content-left-wrap">

            <div id="secondary" class="widget-area" role="complementary">

                <aside id="top-posts-2" class="widget widget_top-posts">
                    <h2 class="widget-title">Related Links</h2>
                    <ul style="font-weight: 400">
                        @foreach($services as $service)
                        <li style="text-transform: capitalize;"><a href="{{route('frontend.services.show', $service)}}">{{strtolower($service->name)}}</a></li>
                        @endforeach
                    </ul>
                </aside>

            </div>

            <!-- #secondary -->
            <a href="{{url('contact')}}" target="blank" class="cws-button">Contact Us</a>
        </div>
        <!-- .sidebar-wrap -->

    </div>
    <!-- .container -->
</div>
@endsection