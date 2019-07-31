@extends('layouts.backend.master')

@section('content')
<div class="privacy about">
    <h3>Chec<span>kout</span></h3>

    <div class="checkout-right">
        <h4>Your shopping cart contains: <span>3 Products</span></h4>
        <table class="timetable_sub">
            <thead>
                <tr>
                    <th>SL No.</th>
                    <th>Product</th>
                    <th>Quality</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                <tr class="rem1">
                    <td class="invert">1</td>
                    <td class="invert-image">
                        <a href="single.html"><img style="width: 80px" src="{{asset('images/products/OBDii-VT200-car-tracker-VT200B.png')}}" alt=" " class="img-responsive"></a>
                    </td>
                    <td class="invert">
                        <div class="quantity">
                            <div class="quantity-select">
                                <div class="entry value-minus">&nbsp;</div>
                                <div class="entry value"><span>1</span></div>
                                <div class="entry value-plus active">&nbsp;</div>
                            </div>
                        </div>
                    </td>
                    <td class="invert">OBDii-VT200-car-tracker-VT200B</td>

                    <td class="invert">1000.00</td>
                    <td class="invert">
                        <div class="rem">
                            <div class="close1"> </div>
                        </div>
                    </td>
                </tr>
                <tr class="rem2">
                    <td class="invert">2</td>
                    <td class="invert-image">
                        <a href="single.html"><img style="width: 80px" src="{{asset('images/products/VT200-OBDII-GPS-tracker.jpg')}}" alt=" " class="img-responsive"></a>
                    </td>
                    <td class="invert">
                        <div class="quantity">
                            <div class="quantity-select">
                                <div class="entry value-minus">&nbsp;</div>
                                <div class="entry value"><span>1</span></div>
                                <div class="entry value-plus active">&nbsp;</div>
                            </div>
                        </div>
                    </td>
                    <td class="invert">VT200-OBDII-GPS-tracker</td>

                    <td class="invert">1200.00</td>
                    <td class="invert">
                        <div class="rem">
                            <div class="close2"> </div>
                        </div>
                    </td>
                </tr>
                <tr class="rem3">
                    <td class="invert">3</td>
                    <td class="invert-image">
                        <a href="single.html"><img style="width: 80px" src="{{asset('images/products/VT400-4G-LTE-OBD-Car-tracker.png')}}" alt=" " class="img-responsive"></a>
                    </td>
                    <td class="invert">
                        <div class="quantity">
                            <div class="quantity-select">
                                <div class="entry value-minus">&nbsp;</div>
                                <div class="entry value"><span>1</span></div>
                                <div class="entry value-plus active">&nbsp;</div>
                            </div>
                        </div>
                    </td>
                    <td class="invert">VT400-4G-LTE-OBD-Car-tracker</td>

                    <td class="invert">1500.00</td>
                    <td class="invert">
                        <div class="rem">
                            <div class="close3"></div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="checkout-left">
        <div class="col-md-4 checkout-left-basket">
            <h4>Continue to basket</h4>
            <ul>
                <li>Product1 <i>-</i> <span>1000.00 </span></li>
                <li>Product2 <i>-</i> <span>1200.00 </span></li>
                <li>Product3 <i>-</i> <span>1500.00 </span></li>
                <li>Total Service Charges <i>-</i> <span>100.00</span></li>
                <li>Total <i>-</i> <span>2800.00 BDT</span></li>
            </ul>
        </div>
        <div class="col-md-8 address_form_agile">
            <h4>Add a new Details</h4>
            <form action="#" method="post" class="creditly-card-form agileinfo_form">
                <section class="creditly-wrapper wthree, w3_agileits_wrapper">
                    <div class="information-wrapper">
                        <div class="first-row form-group">
                            <div class="controls">
                                <label class="control-label">Full name: </label>
                                <input class="billing-address-name form-control" type="text" name="name" placeholder="Full name">
                            </div>

                            <div class="w3_agileits_card_number_grids">
                                <div class="w3_agileits_card_number_grid_left">
                                    <div class="controls">
                                        <label class="control-label">Mobile number:</label>
                                        <input class="form-control" type="text" placeholder="Mobile number">
                                    </div>
                                </div>
                                <div class="w3_agileits_card_number_grid_right">
                                    <div class="controls">
                                        <label class="control-label">Landmark: </label>
                                        <input class="form-control" type="text" placeholder="Landmark">
                                    </div>
                                </div>
                                <div class="clear"> </div>
                            </div>

                            <div class="controls">
                                <label class="control-label">Town/City: </label>
                                <input class="form-control" type="text" placeholder="Town/City">
                            </div>
                            <div class="controls">
                                <label class="control-label">Address type: </label>
                                <select class="form-control option-w3ls">
                                    <option>Office</option>
                                    <option>Home</option>
                                    <option>Commercial</option>
                                </select>
                            </div>
                        </div>
                        <button class="submit check_out">Place Order</button>
                    </div>
                </section>
            </form>
        </div>
        <div class="clearfix"> </div>
    </div>
</div>
<!-- //about -->
</div>
<div class="clearfix"></div>
</div>
<!-- //banner -->

    <script>
        $(document).ready(function(c) {
            $('.close1').on('click', function(c) {
                $('.rem1').fadeOut('slow', function(c) {
                    $('.rem1').remove();
                });
            });
        });
    </script>

    <script>
        $(document).ready(function(c) {
            $('.close2').on('click', function(c) {
                $('.rem2').fadeOut('slow', function(c) {
                    $('.rem2').remove();
                });
            });
        });
    </script>

    <script>
        $(document).ready(function(c) {
            $('.close3').on('click', function(c) {
                $('.rem3').fadeOut('slow', function(c) {
                    $('.rem3').remove();
                });
            });
        });
    </script>
@endsection