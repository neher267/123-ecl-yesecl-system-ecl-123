<div class="inner-nav desktop-nav">
    <ul class="clearlist">
        <!-- Item With Sub-->
        <li><a href="{{url('/')}}" class="nav-style">Home</a></li>
        <li><a href="{{url('all-services')}}" class="mn-has-sub nav-style">Services</a>
            <ul class="mn-sub">
                @foreach($services as $service)
                <li style="color: #555; font-weight: bold;"><a href="{{route('frontend.services.show', $service)}}" style="text-transform: capitalize;">{{$service->name}}</a></li>
                @endforeach
            </ul>
        </li>
        <li><a href="{{url('all-products')}}" class="nav-style">Products</a></li>        
        <li><a href="{{route('fronend.successful-cases')}}" class="mn-has-sub nav-style">Successful Case</a>
            <ul class="mn-sub">
                @foreach($project_types as $type)
                <li><a href="{{route('fronend.successful-cases.show', $type)}}"  class="mn-has-sub nav-style">{{$type->name}}</a>
                    <ul class="mn-sub">
                        @foreach($type->projects()->get() as $project)
                        <li><a href="{{route('fronend.project-details',$project)}}">{{$project->title}}</a></li>
                        @endforeach
                    </ul>
                </li>
                @endforeach
            </ul>
        </li>

                 
        </li>

        <li><a href="#" class="mn-has-sub nav-style" style="color: red;">Training</a>
            <ul class="mn-sub">
                <li><a href="{{url('training')}}" class="mn-has-sub nav-style">About PLC</a>    
                <li><a href="{{url('courses')}}" class="mn-has-sub nav-style">Courses</a>    
                <li><a href="{{url('course-registration')}}" class="mn-has-sub nav-style">Courses Registration</a>             
                         
                <!-- <li><a href="http://student-protal.test" target="_blank" class="nav-style">Student Portal</a> </li>              -->
            </ul>
        </li>
        
        <li><a href="{{url('partners')}}" class="nav-style">Partners</a> </li>

        <li><a href="#" class="mn-has-sub nav-style">About us</a>
            <ul class="mn-sub" style="color: #555; font-weight: bold;">
                <li><a href="{{url('company-profile')}}">Company Profile</a></li>              
                <li><a href="{{url('management-profile')}}">Management Profile</a></li>             
            </ul>
        </li>
        <li><a href="{{url('contact')}}" class="nav-style">Contact Us</a></li>
        <li>
            <a href="{{route('checkout.index')}}" class="nav-style"><i class="fa fa-shopping-cart"></i> Your Cart
            <!-- <span id="neher" style="position: relative; top: -16px; right: 16px; color: red;">
                {{Cart::count()}}
            </span> -->
        </a>
        </li>
    </ul>    
</div>