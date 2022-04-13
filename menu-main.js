      const axios = require('axios');

      const page = ({ title, data }) => `

      <div class="card rounded-0 bg-7" data-card-height="150">
      <div class="card-top">
          <a href="#" class="close-menu float-end me-2 text-center mt-3 icon-40 notch-clear"><i class="fa fa-times-circle color-red-dark font-25"></i></a>
      </div>
      <div class="card-bottom">
          <h1 class="color-white ps-3 mb-n1 font-28">${JSON.stringify(data.location.name).replace(/\"/g, "")}</h1>
          <p class="mb-2 ps-3 font-12 color-white opacity-50"><i class="fa fa-map-marker mr-2 color-red-dark"></i>1217 ${JSON.stringify(data.location.name).replace(/\"/g, "")} Mountain Rd 201a, ${locations.address.administrative_district_level_1}, Idaho ${locations.address.postal_code}</p>
      </div>
      <div class="card-overlay bg-gradient"></div>
  </div>
  <div class="mt-4"></div>
  <h6 class="menu-divider">Welcome</h6>
  <div class="list-group list-custom-small list-menu">
      <a id="nav-index" href="/">
          <i class="fa fa-home gradient-highlight color-white"></i>
          <span>Home</span>
          <i class="fa fa-angle-right"></i>
      </a>
      <a href="https://square.site/book/${JSON.stringify(data.location.id).replace(/\"/g, "")}" >
          <i class="fa fa-heart gradient-highlight color-white"></i>
          <span>Book Online</span>
          <i class="fa fa-angle-right"></i>
      </a>
      <a href="#" data-menu="menu-maps">
          <i class="fa fa-map gradient-highlight color-white"></i> 
          <span>Directions</span>
          <i class="fa fa-angle-right"></i>
      </a>
      <a href="#" data-menu="menu-reviews.html">
          <i class="fa fa-envelope gradient-highlight color-white"></i>
          <span>Leave a Review</span>
          <i class="fa fa-angle-right"></i>
      </a>
  </div>
  <h6 id="nav-services" class="menu-divider mt-4">Services</h6>
  <div class="list-group list-custom-small list-menu">
      <a id="nav-bodywax" href="bodywaxing.html">
          <i class="fa fa-cog gradient-highlight color-white"></i>
          <span>Body Waxing</span>
          <i class="fa fa-angle-right"></i>
      </a>
      <a id="nav-eye-enhancements" href="eye-enhancements.html">
          <i class="fa fa-file gradient-highlight color-white"></i>
          <span>Eye Enhancements</span>
          <i class="fa fa-angle-right"></i>
      </a>
      <a id="nav-facials" href="facials.html">
          <i class="fa fa-camera gradient-highlight color-white"></i>
          <span>Facials</span>
          <i class="fa fa-angle-right"></i>
      </a>
  </div>
  <h6 class="menu-divider mt-4">settings</h6>
  <div class="list-group list-custom-small list-menu">
      <a href="#" data-menu="menu-colors">
          <i class="fa fa-brush gradient-highlight color-white"></i>
          <span>Highlights</span>
          <i class="fa fa-angle-right"></i>
      </a>
      <a href="#" data-toggle-theme="" data-trigger-switch="switch-dark-mode">
          <i class="fa fa-moon gradient-dark color-white"></i>
          <span>Dark Mode</span>
          <div class="custom-control small-switch ios-switch">
              <input data-toggle-theme type="checkbox" class="ios-input" id="toggle-dark-menu">
              <label class="custom-control-label" for="toggle-dark-menu"></label>
          </div>
      </a>
  </div>
  <h6 class="menu-divider mt-4">Contact</h6>
  <div class="list-group list-custom-small list-menu">
      <a href="#">
          <img src="images/avatars/8xs.png">
          <span>${JSON.stringify(data.location.name).replace(/\"/g, "")} Casey</span>
          <i class="fa fa-angle-right"></i>
      </a>
  </div>
  <h6 class="menu-divider font-10 mt-4">Made with <span class="font-15">🤘🏼</span><span> for Independent Beauty</span></h6>
  


      `;

      module.exports = {
        title: 'Welcome',
        page,
        data: async ({ dev }) => ({
          location: await axios.get('https://opensheet.elk.sh/1vkEHHOS4LG7K8jQpYBxA2sJJYfuP07nuku0tvdh-B10/5').then((res) => data = res.data[0])
          .catch(err => console.error(err))
        
        }),
      };
    