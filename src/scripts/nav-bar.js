const Backbone = require('backbone')
const NavView = Backbone.View.extend({
    el: '#nav-header',

    events: {
      "keydown .search-bar" : "searchDetail"
    },

    searchDetail: function(evtObj){
      console.log('i am working')

      console.log(evtObj.target.value)
      if(evtObj.keyCode === 13){
        evtObj.preventDefault()
        window.location.hash = 'search/' + evtObj.currentTarget.value
      }
    },

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
              <a href="#search/clothing & accesories"><span class="firstLink">Clothing & Accesories</span></a>
              <a href="#search/weddings"><span>Weddings</span></a>
              <a href="#search/entertainment"><span>Entertainment</span></a>
              <a href="#search/home & living"><span>Home & Living</span></a>
              <a href="#search/kids & baby"><span>Kids & Baby</span></a>
              <a href="#search/vintage"><span>Vintage</span></a>
              <input type="text" class="form-control search-bar" id="search" placeholder="Search Etsy...">

            </div>
          </div>`
          // <form class="navbar-form navbar search-form">
// </form>
    },
    render: function(){
      this.el.innerHTML = this._buildHTMLTemplate()
    }
})

module.exports = NavView
