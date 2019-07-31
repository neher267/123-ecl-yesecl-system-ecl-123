@extends('layouts.frontend.master') 

@section('content')
<div class="ff-section-fullwidth">
    <div class="ff-section-boxed">
        <div class="container">
            <p>Since our inception, our alliances have played a critical role in our drive for ecosystem-based innovation. Our service offerings and solutions across industry verticals are strengthened by alliances with global technology vendors, customers, and niche solution providers.
                <br/> And ECL helps its alliance partners</p>
            <ul>
                <li>Generate incremental revenue growth through differentiated solutions and service offerings,</li>
                <li>Extend market and geographic reach, and</li>
                <li>Enhance their product and service offerings.</li>
            </ul>

            <div class="col-sm-12>
                <div class="container" style="padding: 25px 0 30px 0;">
                    <div class="row">
                        <div class="col-md-2">
                            <div>
                                <img src="{{asset('img/logos/partners/avinetworks.png')}}">
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div>
                                <img src="{{asset('img/logos/partners/axis.jpg')}}">
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div>
                                <img src="{{asset('img/logos/partners/fortinet.png')}}">
                            </div>
                        </div>

                        <div class="col-md-2">
                            <div>
                                <img src="{{asset('img/logos/partners/paladion.png')}}">
                            </div>
                        </div>

                        <div class="col-md-2">
                            <div>
                                <img src="{{asset('img/logos/partners/procera.png')}}">
                            </div>
                        </div>

                        <div class="col-md-2">
                            <div>
                                <img src="{{asset('img/logos/partners/sap.png')}}">
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="ff-section-fullwidth">
    <div class="ff-section-boxed">
        <div class="container">
            <p>Knowing partners and their technology inside-out, we can rapidly tailor solutions to meet clients’ specific needs</p>
            <p>We share best practices and collaborate on development with technology providers to help clients innovate and enhance performance</p>
            <p>Paladion: Paladion is an established global cyber security provider that actively manages information risks for over 700 customers who trust Paladion’s team of specialized researchers, ethical hackers and security experts to improve their overall security posture. By integrating business context intelligence, threat data and cyber insights from its team of specialized analysts, Paladion provides a complete spectrum of information risk management comprising of security assurance, governance, vulnerability management, monitoring, and security analytics to large and medium-sized organizations. For more information visit <a href="https://paladion.net/" target="_blank">paladion.net</a></p>

            <p>Procera: Procera was incorporated in 2002 in California. The company was initially created to deliver intelligent Ethernet network switches. Procera offers Network Intelligence solutions based on their version of deep packet inspection (DPI) called the Datastream Recognition Definition Language (DRDL). DRDL uses properties of applications for identification purposes, and this allows operators to manage subscriber traffic based on the application, similar to many DPI products. Procera offers over 100 use cases in Analytics, Traffic Management, Policy Enforcement, and Service Provider Compliance.
                <a href="https://www.proceranetworks.com" target="_blank">proceranetworks.com</a></p>

            <p>SAP Business One: SAP Business One is business management software (ERP) designed for small and medium-sized enterprises, sold by the German company SAP SE. As an ERP solution, it aims to automate key business functions in financials, operations, and human resources. <a href="http://www.sap.com/businessone" target="_blank">http://www.sap.com/businessone</a></p>

            <p>SOPHOS: Sophos Group plc is a security software and hardware company. Sophos develops products for communication endpoint, encryption, network security, email security, mobile security and unified threat management. Sophos is primarily focused on providing security software to the mid market and pragmatic enterprise from 100 to 5000 Seat organizations.<a href="https://www.sophos.com" target="_blank">https://www.sophos.com</a></p>

            <p>FORTINET: Fortinet is an American multinational corporation headquartered in Sunnyvale, California. It develops and markets cybersecurity software, appliances and services, such as firewalls, anti-virus, intrusion prevention and endpoint security, among others. It is the fourth-largest network security company by revenue.<a href="https://www.fortinet.com/" target="_blank">www.fortinet.com</a></p>

            <p>Qlik: Qlik was founded in Lund, Sweden in 1993 as a software company focused on developing software for cloud computing, analytics and business intelligence. Qlik delivers intuitive platform solutions for self-service data visualization, guided analytics applications, embedded analytics and reporting to approximately 40,000 customers worldwide.
                <a href="http://www.qlik.com" target="_blank">http://www.qlik.com</a>
            </p>
            <p>Axis Communications
                <br/> Axis is the market leader in network video. We invented the world’s first network camera back in 1996 and we’ve been innovators in video surveillance ever since, increasing the security of millions of people worldwide and helping to meet the growing need for a smarter, safer world.
                <br/> With the help of 90,000 partners, spanning 179 countries, we’ve delivered a series of groundbreaking products and many industry firsts. And, we look forward to pioneering many more.
                <a href="https://www.axis.com" target="_blank">https://www.axis.com</a>
            </p>

            <a href="{{url('contact')}}" class="cws-button" style="margin: 50px 0px;">Contact Us</a>
        </div>
    </div>
</div>
@endsection