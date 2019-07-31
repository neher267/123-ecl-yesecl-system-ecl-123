<div class="sep-border-shadow"></div>
<section>   
    
    <div class="row" style="padding: 0px 5px;">
        @if(sizeof($middle) == 3)
        <div class="col-md-6 sol-sm-6 col-xs-12 boxn">
            <a href="{{url('home/'.$middle[0]->slug)}}">
                <div class="l-half">
                    <div class="circle">
                        <i class="far fa-lightbulb boxn-icon"></i>
                    </div>
                </div>
                <div class="r-half">
                    <div class="boxn-content">
                        <p class="details-heading">{{$middle[0]->name}}</p>
                        <p class="details-fonts">
                            <?php 
                                $text = $middle[0]->s_description;
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

        <div class="col-md-6 sol-sm-6 col-xs-12 boxn">
            <a href="{{url('home/'.$middle[1]->slug)}}">
                <div class="l-half">
                    <div class="circle">
                        <i class="fas fa-file-alt boxn-icon"></i>
                    </div>
                </div>
                <div class="r-half">
                    <div class="boxn-content">
                        <p class="details-heading">{{$middle[1]->name}}</p>
                        <p class="details-fonts">
                            <?php 
                                $text = $middle[1]->s_description;
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

        

        <div class="col-md-6 sol-sm-6 col-xs-12 boxn">
            <a href="{{url('home/'.$middle[2]->slug)}}">
                <div class="r-half">
                    <div class="circle">
                        <i class="fas fa-bullseye boxn-icon"></i>
                    </div>
                </div>
                <div class="l-half">
                    <div class="boxn-content">
                        <p class="details-heading">{{$middle[2]->name}}</p>
                        <p class="details-fonts">
                            <?php 
                                $text = $middle[2]->s_description;
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
        @endif 
        <div class="col-md-6 sol-sm-6 col-xs-12 boxn">
            <a href="{{url('company-profile')}}">
                <div class="r-half">
                    <div class="circle">
                        <i class="fa fa-briefcase boxn-icon"></i>
                    </div>
                </div>
                <div class="l-half">
                    <div class="boxn-content">
                        <p class="details-heading">ABOUT US</p>
                        <p class="details-fonts">Get to know how we got here and where we plan to go</p>
                    </div>
                </div> 
                </a>          
        </div>

    </div>
</section>
