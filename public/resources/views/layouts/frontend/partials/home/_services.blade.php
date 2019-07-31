<style type="text/css">

</style>


<section style="box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2)">
    <?php $i = 0; ?>
    
    <div class="service-section details-heading">OUR SERVICES <i class="fa fa-hands-helping"></i></div>
    
    <div class="service-container">
        @foreach($frontend_services as $chunk_services)
        <div class="row">
            @foreach($chunk_services as $service)
            <?php ++$i ?>
            <div class="col-md-3 col-sm-6 col-xs-12 color{{$i}} service">
                <a href="{{route('frontend.services.show', $service)}}">
                    <div class="service-title">{{$service->name}}</div>

                    <div class="divider"></div>

                    <p class="service-des">
                        <?php 
                            $text = $service->short_des;
                            if (str_word_count($text, 0) > 12) {
                                $words = str_word_count($text, 2);
                                $pos = array_keys($words);
                                $text = substr($text, 0, $pos[12]) . '..';
                            }
                            echo $text;
                        ?>
                    </p>
                </a> 
            </div>
            @endforeach
        </div>
        <div class="clearfix"></div>
    @endforeach
    </div>
</section>
