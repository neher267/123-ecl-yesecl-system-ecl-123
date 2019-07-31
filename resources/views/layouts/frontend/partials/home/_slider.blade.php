<div class="tp-banner-container">
    <div class="tp-banner-slider">
        <ul>
            @foreach($sliderImages as $image)
            <li data-masterspeed="700" data-slotamount="0">
                <img src="{{asset('rs-plugin/assets/loader.gif')}}" data-lazyload="{{asset('public/'.$image->src)}}" data-bgposition="center 50%" alt="{{$image->name}}" data-bgparallax="0">
            </li>
            @endforeach
        </ul>
    </div>
</div>
