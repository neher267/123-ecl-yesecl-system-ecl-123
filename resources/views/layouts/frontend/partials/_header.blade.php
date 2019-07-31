<header>
    <!-- Navigation panel-->
    <nav class="main-nav js-stick">
        <div class="full-wrapper relative clearfix container">
            <!-- Logo-->

            <div class="nav-logo-wrap local-scroll">
                <a href="{{url('/')}}" class="logo" style="height: 65px">
                    <img src="{{asset('public/img/logo.png')}}" data-at2x="{{asset('img/logo.png')}}" alt>                   
                </a>
            </div>
            <!-- end Logo-->
            <!-- Main Menu-->
            @include('layouts.frontend.partials._nav') 
            <!-- End Main Menu-->
        </div>
    </nav>    
    <!-- End Navigation panel-->
    @if(Request::is('/') != '/' && Request::segment(1) != 'services') 
        @include('layouts.frontend.partials._page-header', $pages)
    @endif
</header>