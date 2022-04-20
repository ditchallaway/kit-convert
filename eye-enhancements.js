const axios = require('axios');
const page = ({ title, data }) => `
<!DOCTYPE HTML>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover" />
<title>Eye Enhancements ${locations.address.business_name} | ${locations.address.administrative_district_level_1} Idaho</title>
<link rel="stylesheet" type="text/css" href="styles/bootstrap.css">
<link rel="stylesheet" type="text/css" href="styles/style.css">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="fonts/css/fontawesome-all.min.css">    
<link rel="manifest" href="_manifest.json" data-pwa-version="2.0">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=2.0">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=2.0">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=2.0">
<link rel="manifest" href="/site.webmanifest?v=2.0">
<link rel="mask-icon" href="/safari-pinned-tab.svg?v=2.0" color="#ff9c57">
<link rel="shortcut icon" href="/favicon.ico?v=2.0">
<meta name="apple-mobile-web-app-title" content="${JSON.stringify(data.location.name).replace(/\"/g, "")}">
<meta name="application-name" content="${JSON.stringify(data.location.name).replace(/\"/g, "")}">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="theme-color" content="#edeefb">
</head>
    
<body class="theme-light">
    
<div id="preloader"><div class="spinner-border color-highlight" role="status"></div></div>
    
<div id="page" class="pattern-grid-xl color-highlight">
    
    <div class="header header-fixed header-logo-center">
        <a href="/" class="header-title">${JSON.stringify(data.location.name).replace(/\"/g, "")}</a>
        <a href="#" data-back-button class="header-icon header-icon-1"><i class="fas fa-chevron-left"></i></a>
        <a href="#" data-menu="menu-main" class="header-icon header-icon-4"><i class="fas fa-bars"></i></a>
        <a href="#" data-toggle-theme class="header-icon header-icon-3 show-on-theme-dark"><i class="fas fa-sun"></i></a>
        <a href="#" data-toggle-theme class="header-icon header-icon-3 show-on-theme-light"><i class="fas fa-moon"></i></a>
    </div>

    <div id="footer-bar" class="footer-bar-6">
        <a href="services.html" ><i class="fa fa-heart"></i><span>Services</span></a>
        <a href="#" data-menu="menu-maps"><i class="fa fa-map"></i><span>Directions</span></a>
        <a href="/" class="circle-nav active-nav"><i class="fa fa-hashtag font-25"></i><span>Welcome</span></a>
        <a href="#" data-menu="menu-contact"><i class="fa fa-user"></i><span>Contact</span></a>
        <a href="#" data-menu="menu-main"><i class="fa fa-bars"></i><span>Menu</span></a>
    </div>
    
        
    <div class="page-content header-clear-medium">

            <!--#red Hero-->
            <div class="card card-style mb-4 bg-highlight bg-35" data-card-height="300" style="height: 300px;"> 
                <div class="card-bottom text-center"> 
                    <h1 class="font-30 color-theme">Eyes</h1> 
                    <h2 class="font-18 mb-2 color-highlight mt-n2">${JSON.stringify(data.location.name).replace(/\"/g, "")}</h2> 
                    <p class="boxed-text-xl font-15 color-theme opacity-50 mb-4"> Enhance your unique facial features. </p> 
                </div>                     
                <div class="card-overlay bg-gradient-fade-small"></div>  
            </div>
            <!--# End-Hero-->


            <!--cta | start-->
            <a href="https://square.site/book/${JSON.stringify(data.location.id).replace(/\"/g, "")}" class="card card-style external-link mb-4 btn btn-lg btn-full font-23 font-600 gradient-highlight rounded-m">Book Online</a> 
            <!--cta | end-->


            <!--wax menu | start-->
            <div class=" card-style bg-highlight p-4 mb-4 bg-theme">
                <p class="font-600 color-highlight mt-3 mb-n1">Brows & Lashes</p>
                <h1 class="font-800 font-28 mb-4">${objects[4]category+data.name}</h1>
                

                <table class="table p-4">
                    <tbody id="eye1" class="bg-theme p-4"></tbody>
                </table>

                <p class="font-600 color-highlight mt-3 mb-n1">Lashes</p>
                <h1 class="font-800 font-28 mb-4">${objects[5]category+data.name}</h1>
                
                <table class="table p-4">
                    <tbody id="eye2" class="bg-theme p-4"></tbody>
                </table>
            <div class="row dual-cta-row">
                <div class="col-6 pb-2 pt-2 px-2 duel-cta-col"><a href="services.html" class="btn btn-full rounded-s shadow-xl border-highlight color-highlight back-button ">&#11164; Back</a>
                    </div>
                <div class="col-6 pb-2 pt-2 px-2 duel-cta-col"><a href="https://square.site/book/${JSON.stringify(data.location.id).replace(/\"/g, "")}" class="btn btn-full btn-border rounded-s shadow-1 gradient-highlight">Book Now</a>
                    </div>
                </div>
            </div>

            <!--wax menu | end-->




        <!--#yellow google-->
        <div class="card card-style mb-4 bg-theme">

            <div id="elf" class="elfsight-app-5a1b80e1-1c4f-402d-9abd-beac50cc064e"></div>
            <div class="divider divider-margins mt-3 mb-2"></div>
            <!--yelp-->
            <div class="elfsight-app-7223ce04-cec3-4fb4-b669-0c1b2a1defcc"></div>
        </div>
            <!--#-->
    
<!-- Page content ends here-->
</div>>

<!-- Main Menu--> 
<div id="menu-main" class="menu menu-box-left rounded-0" data-menu-load="menu-main.html" data-menu-width="280" data-menu-active="nav-index"></div>

     <!-- Share Menu-->
     <div id="menu-contact" class="menu menu-box-modal ps-3 pe-3 rounded-m" data-menu-load="menu-contact.html" data-menu-height="550"></div>  
 
<!-- Colors Menu-->
<div id="menu-colors" class="menu menu-box-bottom rounded-m" data-menu-load="menu-colors.html" data-menu-height="480"></div> 

<!--#green map-->
<div id="menu-maps" class="menu m-auto menu-box-bottom rounded-m pb-4" data-menu-height="425" >
    <div class='responsive-iframe max-iframe'><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10619.323537744858!2d-116.5655856!3d48.2868693!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd859e872c1f9a599!2sWax%20and%20Skin%20Care!5e0!3m2!1sen!2sus!4v1605313586258!5m2!1sen!2sus"
            width="850" height="180" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></div>
    <div class="menu-title">
        <p class="color-highlight">${JSON.stringify(data.location.name).replace(/\"/g, "")}</p>
        <h1 class="not-gruppo">${locations.address.address_line_1}, ${locations.address.locallity}${llocations.address.administrative_district_level_1} ${locations.address.postal_code}</h1>
    </div>
    <div class="content mt-n2">
        <p><i class="fa fa-map-marker color-red-dark mr-2"></i> ${locations.address.address_line_1}, ${locations.address.locality}, ${locations.address.administrative_district_level_1} ${locations.address.postal_code}
        </p>
        <div class="row">
            <div class="col-6">
                <a href="#" class="btn close-menu btn-full btn-m bg-red-dark font-600 rounded-s">MAYBE LATER</a>
            </div>
            <div class="col-6">
                <a href="https://g.page/" class="btn btn-full btn-m bg-green-dark font-600 rounded-s">LETS GO!</a>
            </div>
        </div>
    </div>
</div>
<!--# End-Map-->

</div>
<script type="text/javascript" src="plugins/elf/platform.js"></script>
<script type="text/javascript" src="plugins/fetch/fetch.js"></script>
<script type="text/javascript" src="scripts/bootstrap.min.js"></script>
<script type="text/javascript" src="scripts/custom.js"></script>
</body>
</html>
      `;

      module.exports = {
        title: 'Welcome',
        page,
        data: async ({ dev }) => ({
          location: await axios.get('https://opensheet.elk.sh/1vkEHHOS4LG7K8jQpYBxA2sJJYfuP07nuku0tvdh-B10/5').then((res) => data = res.data[0])
          .catch(err => console.error(err))
        
        }),
      };
    