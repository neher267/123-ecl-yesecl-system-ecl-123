@extends('layouts.frontend.master')
@section('content')
@include('layouts.frontend.partials._page-header')

<section class="page-section">
    <div class="container">
        <div class="row">
            <div class="col-md-5 col-sm-6 mb-sm-50">
                <!-- section title-->
                <h1 class="title-section mt-0 mb-0"><span style="color: black;">VT200B OBDII tracker</span></h1>
                <!-- ! section title-->
                <div class="divider gray left mt-20 mb-25"></div>
                <p class="mb-20"><span style="color: black;">VT200B is a self-developed by our company, gathering vehicle ECU relevant data through OBD interface, integrated GPS, upload the data via the GSM network servers, provide vehicles health detect, vehicle historical route, exact trip report, fuel consumption analysis, driving behavior analysis and other functions or automobile device.</span></p>
                <!-- list-->
                <ul class="mb-25">
                    <li><span style="color: black;">Smart upload interval from 5~30 seconds</span></li>
                    <li><span style="color: black;">Only 8Ma low power consumption during sleep model</span></li>
                    <li><span style="color: black;">16M High memory FALSH storage, store over 14,000 pieces</span></li>
                    <li><span style="color: black;">Compatible 95% brand vehicles production year 2007 in the market</span></li>
                    <li><span style="color: black;">Plug in and remove out alarm support</span></li>
                </ul>
                <a href="Partner-Recruit.aspx" target="-blank" class="cws-button">Become a partner</a><a href="Open-API.aspx" target="-blank" class="cws-button">Review APP</a>
            </div>

            <div class="col-md-7 col-sm-6"><img src="http://eclsystem.test/pic/OBDii-VT200-car-tracker-VT200B.png" data-at2x="pic/OBDii-VT200-car-tracker-VT200B.png" alt="this is a obd2 tracker"></div>
        </div>
    </div>
    <!-- list-->
</section>
<!-- ! section parallax counter-->
<!-- section-->
<section class="page-section">
    <div class="container">
        <h2 class="title-section mb-0 mt-0 text-left"><span style="color: #28A6EC;">VT200B OBDII GPS tracker specifications</span></h2>
        <div style="line-height:18px; width:1200px">
            <p></p>
        </div>
        <div style="width:1200px; border:1px solid #28A6EC;"></div>

        <p class="text-left"><span style="color: black;">Please review below specification of VT200B, if you need more info, please click right side <a href="company-contactus.aspx" target="-blank"><span style="color: #28A6EC;">“Inquiry Now!”</span></a> get contact with us, send more document required to you.</span>
        </p>
        <div style="line-height:14px; width:1200px">
            <p></p>
        </div>
        <table border="1" width="1200" cellspacing="1" cellpadding="1" align="center" id="tab2">
            <tbody>
                <tr>
                    <td height="38px" style="padding: 2px 2px 2px 15px; font-size: 16px;background-color:#28A6EC;" colspan="2" align="center"><strong><span style="color: white;">GPS Specification</span></strong></td>
                    <td style="padding: 2px 2px 2px 15px; font-size: 16px;background-color:#28A6EC;" colspan="2" align="center"><strong><span style="color: white;">GSM Specification</span></strong></td>
                    <td style="padding: 2px 2px 2px 15px; font-size: 16px;background-color:#28A6EC;" colspan="2" align="center"><strong><span style="color: white;">General Specification</span></strong></td>
                </tr>
                <tr>
                    <td align="center" style="padding: 2px 2px 2px 15px; font-size: 14px;"><span style="color: black;">GPS Chipset</span></td>
                    <td align="center" style="padding: 2px 2px 2px 15px; font-size: 14px;"><span style="color: black;">SKG12BL</span></td>
                    <td align="center" style="padding: 2px 2px 2px 15px; font-size: 14px;"><span style="color: black;">GSM</span></td>
                    <td align="center" style="padding: 2px 2px 2px 15px; font-size: 14px;"><span style="color: black;">850/900/1800/1900MHz</p></span></td>
                    <td align="center" style="padding: 2px 2px 2px 15px; font-size: 14px;"><span style="color: black;">Dimension</span></td>
                    <td align="center" style="padding: 2px 2px 2px 15px; font-size: 14px;"><span style="color: black;">59*49*23mm</span></td>
                </tr>
                <tr>
                    <td align="center" style="padding: 2px 2px 2px 15px; font-size: 14px;"><span style="color: black;">MCU</span></td>
                    <td align="center" style="padding: 2px 2px 2px 15px; font-size: 14px;"><span style="color: black;">STM32F103RCT6</span></td>
                    <td align="center" style="padding: 2px 2px 2px 15px; font-size: 14px;"><span style="color: black;">Chipset</span></td>
                    <td align="center" style="padding: 2px 2px 2px 15px; font-size: 14px;"><span style="color: black;">SIM800C</span></td>
                    <td align="center" style="padding: 2px 2px 2px 15px; font-size: 14px;"><span style="color: black;">Weight</span></td>
                    <td align="center" style="padding: 2px 2px 2px 15px; font-size: 14px;"><span style="color: black;">45g</span></td>
                </tr>
                <tr>
                    <td align="center" style="padding: 2px 2px 2px 15px; font-size: 14px;"><span style="color: black;">Receive Frequency</span></td>
                    <td align="center" style="padding: 2px 2px 2px 15px; font-size: 14px;"><span style="color: black;">1575.42MHz</span></td>
                    <td align="center" style="padding: 2px 2px 2px 15px; font-size: 14px;"><span style="color: black;">ESD test</span></td>
                    <td align="center" style="padding: 2px 2px 2px 15px; font-size: 14px;"><span style="color: black;">contact 8KV</p></span></td>
                    <td align="center" style="padding: 2px 2px 2px 15px; font-size: 14px;"><span style="color: black;">Operation Temp
</span></td>
                    <td align="center" style="padding: 2px 2px 2px 15px; font-size: 14px;"><span style="color: black;">-30℃~75℃
</span></td>
                </tr>
                <tr>
                    <td align="center" style="padding: 2px 2px 2px 15px; font-size: 14px;"><span style="color: black;">Acquisition Sensitivity</span></td>
                    <td align="center" style="padding: 2px 2px 2px 15px; font-size: 14px;"><span style="color: black;">-144dBm</span></td>
                    <td align="center" style="padding: 2px 2px 2px 15px; font-size: 14px;"><span style="color: black;">Air discharge</span></td>
                    <td align="center" style="padding: 2px 2px 2px 15px; font-size: 14px;"><span style="color: black;">10KV</span></td>
                    <td align="center" style="padding: 2px 2px 2px 15px; font-size: 14px;"><span style="color: black;">Battery</span></td>
                    <td align="center" style="padding: 2px 2px 2px 15px; font-size: 14px;"><span style="color: black;">140mAh</span>
                        <br><span style="color: red;">(Battery version)</span></td>
                </tr>
                <tr>
                    <td align="center" style="padding: 2px 2px 2px 15px; font-size: 14px;"><span style="color: black;">Tracking Sensitivity</span></td>
                    <td align="center" style="padding: 2px 2px 2px 15px; font-size: 14px;"><span style="color: black;">-159dBm</span></td>
                    <td align="center" style="padding: 2px 2px 2px 15px; font-size: 14px;"><span style="color: black;">Transmit Protocol</span></td>
                    <td align="center" style="padding: 2px 2px 2px 15px; font-size: 14px;"><span style="color: black;">TCP/UDP</span></td>
                    <td align="center" style="padding: 2px 2px 2px 15px; font-size: 14px;"><span style="color: black;">Flash memory</span></td>
                    <td align="center" style="padding: 2px 2px 2px 15px; font-size: 14px;"><span style="color: black;">16M bytes</span></td>
                </tr>
                <tr>
                    <td align="center" style="padding: 2px 2px 2px 15px; font-size: 14px;"><span style="color: black;">GPS location time</span></td>
                    <td align="center" style="padding: 2px 2px 2px 15px; font-size: 14px;"><span style="color: black;">Cold start: 30s ;  Hot start: 2s 
</span></td>
                    <td align="center" style="padding: 2px 2px 2px 15px; font-size: 14px;"><span style="color: black;">&nbsp;</span></td>
                    <td align="center" style="padding: 2px 2px 2px 15px; font-size: 14px;"><span style="color: black;">&nbsp;</span></td>
                    <td align="center" style="padding: 2px 2px 2px 15px; font-size: 14px;"><span style="color: black;">Working voltage</span></td>
                    <td align="center" style="padding: 2px 2px 2px 15px; font-size: 14px;"><span style="color: black;">DC 8V-28V</span></td>
                </tr>
            </tbody>
        </table>

    </div>

</section>
<!-- ! page section about-->
<!-- section parallax counter-->

<div class="container">
    <div class="row cws-multi-col">
        <div class="col-md-3 col-xs-6 mb-md-50">
            <!-- counter block-->
            <div class="counter-block border-none white-t"><i class="counter-icon"><img src="http://eclsystem.test/pic/obd-use-step-1.png" alt="obd app download" height="120" width="120" /></i>
                <div class="subtitle">Step 1</div>
                <div class="count-divider"></div>
                <div class="sub-name"><span style="color: black;">Download the APP</span></div>
            </div>
            <!-- ! counter block-->
        </div>
        <div class="col-md-3 col-xs-6 mb-md-50">
            <!-- counter block-->
            <div class="counter-block border-none white-t"><i class="counter-icon"><img src="http://eclsystem.test/pic/obd-use-step-2.png" alt="how to install obd ii" height="120" width="120" /></i>
                <div class="subtitle">Step 2</div>
                <div class="count-divider"></div>
                <div class="sub-name"><span style="color: black;">Install to the car</span></div>
            </div>
            <!-- counter block-->
        </div>
        <div class="col-md-3 col-xs-6">
            <!-- counter block-->
            <div class="counter-block border-none white-t"><i class="counter-icon"><img src="http://eclsystem.test/pic/obd-use-step-3.png" alt="how to use obd" height="120" width="120" /></i>
                <div class="subtitle">Step 3</div>
                <div class="count-divider"></div>
                <div class="sub-name"><span style="color: black;">Drive and data collection</span></div>
            </div>
            <!-- ! counter block-->
        </div>
        <div class="col-md-3 col-xs-6">
            <!-- counter block-->
            <div class="counter-block border-none white-t"><i class="counter-icon"><img src="http://eclsystem.test/pic/obd-use-step-4.png" alt="driving behavior analysis" height="120" width="120" /></i>
                <div class="subtitle">Step 4</div>
                <div class="count-divider"></div>
                <div class="sub-name"><span style="color: black;">Receive and analysis the report</span></div>
            </div>
            <!-- ! counter block-->
        </div>
    </div>
</div>
</section>

<br>

<div class="container-fluid">
    <div class="row flex-box">
        <div style="background:#f3faff" class="col-md-6 pt-60 pb-60 pt-md-80 pb-md-80 bg-section">

            <div class="row">
                <div class="col-md-12 left pl-55">
                    <!-- section title-->
                    <h2 class="title-section mt-0 mb-0 text-black"><span style="color: black;">GPS location </span></h2>
                    <!-- ! section title-->
                    <div class="divider left mt-20 mb-25 black"></div>
                    <p class="mb-40 text-black"><span style="color: black;">There are Wifi OBD ii tracker, bluetooth OBD2, GPS OBD Ⅱ and diagnosis OBD tool in the market, our OBD II VT200B is SIM card GPS OBD2 tracker, support real time GPS tracking, Geo-fence base on GPS remotely, all GPS data transmit to sever backend via GSM network, fleet management company, driver and car owner can monitor the car’s location.</span></p>
                </div>
            </div>
        </div>
        <div style="background-image: url('/pic/Real-time-gps-wholesale-obd2-supplier-geofence-2.png'); background-color:#f3faff" class="col-md-6 pt-140 pb-140 pt-md-80 pb-md-80 bg-section">
            <div class="row">
                <div class="col-md-8 half-section pl-55">
                </div>
            </div>
        </div>
    </div>
</div>

<div class="container-fluid">
    <div class="row flex-box">
        <div style="background-image: url('/pic/4G-LTE-OBD-II-Tracker-OBD2-with-WIFI-hotspot.png');" class="col-md-6 pt-140 pb-140 pt-md-80 pb-md-80 bg-section">
            <div class="row">
                <div class="col-md-8 left">
                </div>
            </div>
        </div>
        <div style="background: #fff;" class="col-md-6 pt-40 pb-60 pt-md-80 pb-md-80 bg-section">
            <div class="row">
                <div class="col-md-12 left pl-55">
                    <!-- section title-->
                    <h2 class="title-section mt-0 mb-0 text-black"><span style="color: black;">Mileage analysis and report </span></h2>
                    <!-- ! section title-->
                    <div class="divider left mt-20 mb-25 black"></div>
                    <p class="mb-40 text-black"><span style="color: black;">Total mileage, over-speed mileage, high speed mileage, middle speed mileage, low speed mileage all showing as a diagram reporting on our vehicle tracking Apps AmberOBD and platform www.amber360.com, corresponding time and percentage easily to understand. More important, all those are original data reads from ECU, accuracy reach 99.9%. </span></p>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="container-fluid">
    <div class="row flex-box">
        <div style="background:#f3faff" class="col-md-6 pt-60 pb-60 pt-md-80 pb-md-80 bg-section">
            <div class="row">
                <div class="col-md-12 left pl-55">
                    <!-- section title-->
                    <h2 class="title-section mt-0 mb-0 text-black"><span style="color: black;">Fuel consumption monitor analysis</span></h2>
                    <!-- ! section title-->
                    <div class="divider left mt-20 mb-25 black"></div>
                    <p class="mb-40 text-black"><span style="color: black;">Why end user buy VT200B OBD2 tracker?  As a OBD GPS tracker manufacturer, we know saving money is vital factor beside life and asset safety, our OBD2 VT200B can monitor total fuel consumption, over-speed fuel consumption, high speed fuel consumption, middle speed fuel consumption, low speed fuel consumption, idle fuel consumption, each part of corresponding percentage, accuracy can be reach 99.5%.</span></p>
                </div>
            </div>
        </div>
        <div style="background-image: url('/pic/OBD2-Reader-Fuel-consumption-monitor-analysis-report-1.png'); background-color:#f3faff" class="col-md-6 pt-140 pb-140 pt-md-80 pb-md-80 bg-section">
            <div class="row">
                <div class="col-md-8 half-section pl-55">
                </div>
            </div>
        </div>
    </div>
</div>

<div class="container-fluid">
    <div class="row flex-box">
        <div style="background-image: url('/pic/OBD2-GPS-tracker-driving-behavior-monitor-support.png');" class="col-md-6 pt-140 pb-140 pt-md-80 pb-md-80 bg-section">
            <div class="row">
                <div class="col-md-8 left">
                </div>
            </div>
        </div>
        <div style="background: #fff;" class="col-md-6 pt-40 pb-60 pt-md-80 pb-md-80 bg-section">
            <div class="row">
                <div class="col-md-12 left pl-55">
                    <!-- section title-->
                    <h2 class="title-section mt-0 mb-0 text-black"><span style="color: black;">Driving behavior analysis</span></h2>
                    <!-- ! section title-->
                    <div class="divider left mt-20 mb-25 black"></div>
                    <p class="mb-40 text-black"><span style="color: black;">Dangerous driving behavior identification based on accurate detect, over speed driving, hard acceleration, hard deceleration, hard breaking, sharp turn, urgent lanes change, hard refuel, fatigue driving all kind of bad driving behavior should not happen any time for teenager or adult. Scoring after every trip ending, store in database as a reference judge condition for Usage Base Insurance (UBI), it is possible for parents to correct their kid’s driving behavior base on big data. </span></p>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="container-fluid">
    <div class="row flex-box">
        <div style="background:#f3faff" class="col-md-6 pt-60 pb-60 pt-md-80 pb-md-80 bg-section">
            <div class="row">
                <div class="col-md-12 left pl-55">
                    <!-- section title-->
                    <h2 class="title-section mt-0 mb-0 text-black"><span style="color: black;">Vehicle health detect</span></h2>
                    <!-- ! section title-->
                    <div class="divider left mt-20 mb-25 black"></div>
                    <p class="mb-40 text-black"><span style="color: black;">Since first generation OBD release, vehicle’s health is as OBDs’ main function, as a powerful OBD diagnostic tool, VT200B OBDII support engine system detect, emission system detect, cooling system detect, power charging system detect, throttle system detect and idle system detect, error code read and error code clean, over 300 kinds of parts and systems detection, comprehensive and complete detect save maintenance money.</span></p>
                </div>
            </div>
        </div>
        <div style="background-image: url('/pic/Vehicle-health-detect-error-code-read-failure-code-clear-1.png'); background-color:#f3faff" class="col-md-6 pt-140 pb-140 pt-md-80 pb-md-80 bg-section">
            <div class="row">
                <div class="col-md-8 half-section pl-55">
                </div>
            </div>
        </div>
    </div>
</div>

<div class="container-fluid">
    <div class="row flex-box">
        <div style="background-image: url('/pic/OBD2-GPS-tracker-manufacture-China-obd2-OTA-code-solution.png');" class="col-md-6 pt-140 pb-140 pt-md-80 pb-md-80 bg-section">
            <div class="row">
                <div class="col-md-8 left">
                </div>
            </div>
        </div>
        <div style="background: #fff;" class="col-md-6 pt-40 pb-60 pt-md-80 pb-md-80 bg-section">
            <div class="row">
                <div class="col-md-12 left pl-55">
                    <!-- section title-->
                    <h2 class="title-section mt-0 mb-0 text-black"><span style="color: black;">OTA upgrade support</span></h2>
                    <!-- ! section title-->
                    <div class="divider left mt-20 mb-25 black"></div>
                    <p class="mb-40 text-black"><span style="color: black;">It is unrealistic required every car own removes out and takes the device to 4S shop for new functions firmware upgrading, needless to say still difficult for our OBD small dealer, for big clients like telecom operator, insurance company or fleet management companies is a big trouble, we wholesale obd tracker for them, OTA firmware support is a best solution in case of need to upgrade firmware, client’s interest is our OBD ii supplier’s responsibility. </span></p>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="container-fluid">
    <div class="row flex-box">
        <div style="background:#f3faff" class="col-md-6 pt-60 pb-60 pt-md-80 pb-md-80 bg-section">
            <div class="row">
                <div class="col-md-12 left pl-55">
                    <!-- section title-->
                    <h2 class="title-section mt-0 mb-0 text-black"><span style="color: black;">Trip report</span></h2>
                    <!-- ! section title-->
                    <div class="divider left mt-20 mb-25 black"></div>
                    <p class="mb-40 text-black"><span style="color: black;">Daily, Weekly and Monthly mileage, total fuel consumption, average fuel consumption, driving behavior report, a summary report is valuable data from the perspective of cost savings and economic efficiency.  OBD2 VT200B car GPS tracking device can achieve this goal, for UBI business, fleet management profit, it is the best option OBD tracker.</span></p>
                </div>
            </div>
        </div>
        <div style="background-image: url('/pic/fleet-tracking-solutions-base-on-OBD2-trip-report-1.png?V=6'); background-color:#f3faff" class="col-md-6 pt-140 pb-140 pt-md-80 pb-md-80 bg-section">
            <div class="row">
                <div class="col-md-8 half-section pl-55">
                </div>
            </div>
        </div>
    </div>
</div>

<div class="container-fluid">
    <div class="row flex-box">
        <div style="background-image: url('/pic/Low-power-consumption-obdii-gps-tracking-device-1.png');" class="col-md-6 pt-140 pb-140 pt-md-80 pb-md-80 bg-section">
            <div class="row">
                <div class="col-md-8 left">
                </div>
            </div>
        </div>
        <div style="background: #fff;" class="col-md-6 pt-40 pb-60 pt-md-80 pb-md-80 bg-section">
            <div class="row">
                <div class="col-md-12 left pl-55">
                    <!-- section title-->
                    <h2 class="title-section mt-0 mb-0 text-black"><span style="color: black;">Power saving and SIM data saving</span></h2>
                    <!-- ! section title-->
                    <div class="divider left mt-20 mb-25 black"></div>
                    <p class="mb-40 text-black"><span style="color: black;">Smart upload interval algorithm let our VT200B OBDII tracker take a great advantage from other competitors, not fixed upload interval from 2~30 seconds, 60~80 bytes small data package making the history route perfectly smooth even in camber turn every 2 seconds; saving SIM data while straight road drive every 30 seconds. On the other hands, understand sleep model the electric current only 8mA; RTC wake up every 6 hours, can be parking over 15 days long. </span></p>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="container-fluid">
    <div class="row flex-box">
        <div style="background:#f3faff" class="col-md-6 pt-60 pb-60 pt-md-80 pb-md-80 bg-section">
            <div class="row">
                <div class="col-md-12 left pl-55">
                    <!-- section title-->
                    <h2 class="title-section mt-0 mb-0 text-black"><span style="color: black;">All kinds of Alarms</span></h2>
                    <!-- ! section title-->
                    <div class="divider left mt-20 mb-25 black"></div>
                    <p class="mb-40 text-black"><span style="color: black;">Car not only a transportation tool but also an asset for a family, bad driving behavior alarm, remove out alarm, vibration alarm, engine failure alarm, long time idling alarm, towing alarm, Charging circuit abnormal alarm all kind of alarm will generate on web platform and Apps, people can keep an eyes on their asset even far away from.</span></p>
                </div>
            </div>
        </div>
        <div style="background-image: url('/pic/wholesale-obd-diagnostic-tools-all-kinds-of-alarms-1.png'); background-color:#f3faff" class="col-md-6 pt-140 pb-140 pt-md-80 pb-md-80 bg-section">
            <div class="row">
                <div class="col-md-8 half-section pl-55">
                </div>
            </div>
        </div>
    </div>
</div>

<div class="container-fluid">
    <div class="row flex-box">
        <div style="background-image: url('/pic/Tracking-system-support-software-for-car-diagnostic-tool.png');" class="col-md-6 pt-140 pb-140 pt-md-80 pb-md-80 bg-section">
            <div class="row">
                <div class="col-md-8 left">
                </div>
            </div>
        </div>
        <div style="background: #fff;" class="col-md-6 pt-40 pb-60 pt-md-80 pb-md-80 bg-section">
            <div class="row">
                <div class="col-md-12 left pl-55">
                    <!-- section title-->
                    <h2 class="title-section mt-0 mb-0 text-black"><span style="color: black;">Software support service</span></h2>
                    <!-- ! section title-->
                    <div class="divider left mt-20 mb-25 black"></div>
                    <p class="mb-40 text-black"><span style="color: black;">IoV is the future of next decade, useful web tracking platform, iOS application, Android application even obd api we can provide, 80+ engineers team, 7*24 hours operation and maintenance team makes us is the unique in obd China suppliers, you don’t need to worry ant technical issue, server, database, gateway, API, web tracking platform, iOS and Android Apps (AmberOBD) available, please send email get a demo. </span></p>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- our partners-->
<section class="page-section bg-gray bt-gray">
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <br>
                <h2 class="title-section mb0 mt-0 text-center"><span style="color: black;">Our Clients</span></h2>
                <div class="divider mb-20 mt-25"></div>
                <p class="text-center mb-0"><span style="color: black;">ThinkRace have partners from all over the world. We provide OEM/ODM/JDM services to our clients/partners, we share the same vision with our partner to provide safety & fitness solution for the people all over the world. If you like to become one of them, please contact us.</span></p>
            </div>
        </div>
        <div class="row mt-50">
            <!-- partner item-->
            <div class="col-md-2 col-xs-4 partner-item"><img src="http://eclsystem.test/img/logos/Allianz-ThinkRace.png" alt class="filter-grayscale"></div>
            <!-- ! partner item-->
            <div class="col-md-2 col-xs-4 partner-item mb-md-10"><img src="http://eclsystem.test/img/logos/vodafone-ThinkRace.jpg" alt class="filter-grayscale"></div>
            <!-- ! partner item-->

            <!-- partner item-->
            <div class="col-md-2 col-xs-4 partner-item mb-md-10"><img src="http://eclsystem.test/img/logos/Wipro-ThinkRace.jpg" alt class="filter-grayscale"></div>
            <!-- ! partner item-->
            <!-- partner item-->
            <div class="col-md-2 col-xs-4 partner-item mb-md-10"><img src="http://eclsystem.test/img/logos/Telenor-ThinkRace.jpg" alt class="filter-grayscale"></div>
            <!-- ! partner item-->

            <!-- partner item-->
            <div class="col-md-2 col-xs-4 partner-item"><img src="http://eclsystem.test/img/logos/G4S-ThinkRace.png" alt class="filter-grayscale"></div>
            <!-- ! partner item-->
            <!-- partner item-->
            <div class="col-md-2 col-xs-4 partner-item"><img src="http://eclsystem.test/img/logos/STC-ThinkRace.png" alt class="filter-grayscale"></div>
            <!-- ! partner item-->
            <!-- partner item-->
        </div>
    </div>
</section>
@endsection
