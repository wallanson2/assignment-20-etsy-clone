const Backbone = require('backbone')
const NavView = Backbone.View.extend({
    el: '#nav-header',




    _buildHTMLTemplate: function(collData){

          return `<div id="header">
            <a href="#home"><h2>Etsy</h2></a>
            <div class="header-links">
              <ul>
                <a href="#home"><li>Home</li></a>
                <li>Favorites</li>
                <li>You</li>
                <li>Cart</li>
              </ul>
            </div>
          </div>
          <div id="nav-bar">
            <div id="menu">
              <a href="#search/clothing & accesories"><span>Clothing & Accesories</span></a>
              <a href="#search/weddings"><span>Weddings</span></a>
              <a href="#search/entertainment"><span>Entertainment</span></a>
              <a href="#search/home & living"><span>Home & Living</span></a>
              <a href="#search/kids & baby"><span>Kids & Baby</span></a>
              <a href="#search/vintage"><span>Vintage</span></a>
              <form class="navbar-form navbar-left search-form">
                  <input type="text" class="form-control search-bar" id="search" placeholder="Search Etsy...">
              </form>
            </div>
          </div>`
//              //  <div class="form-group">                 //  </div>


    },
    render: function(){
      this.el.innerHTML = this._buildHTMLTemplate()
    }


})

module.exports = NavView
