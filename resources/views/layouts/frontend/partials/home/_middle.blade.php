<div class="sep-border-shadow"></div>
<section>   

    <div class="row" style="padding: 0px 5px;">
        @foreach($middle as $value)
        <div class="col-md-6 sol-sm-6 col-xs-12 boxn">
            <a href="{{url('home/'.$value->slug)}}">
                <div class="l-half">
                    <div class="circle">
                        <i class="far fa-lightbulb boxn-icon"></i>
                    </div>
                </div>
                <div class="r-half">
                    <div class="boxn-content">
                        <h1 class="title">{{$value->name}}</h1>
                        <p class="details-fonts body" style="text-align: left;">
                            <?php 
                                $text = $value->s_description;
                                if (str_word_count($text, 0) > 14) {
                                    $words = str_word_count($text, 2);
                                    $pos = array_keys($words);
                                    $text = substr($text, 0, $pos[15]) . '..';
                                }
                                echo $text;
                            ?>                            
                        </p>
                    </div>
                </div> 
            </a>          
        </div>
        @endforeach

    </div>
</section>
