
//=======================================================
const Backbone = require('Backbone')
const $ = require('jquery')
// NavModel,
const {DetailModel, ListCollection} = require('./user-model.js')
// location.hash = 'home'
 // api key jgmsc2xzutgy76ydo5c93toj
var searchEl = document.querySelector('#search')  //Node
// var myKey = 'jgmsc2xzutgy76ydo5c93toj'

// set up for the nav bar
var navBar = function(){
	var navBarHtml = ''
      navBarHtml += '<div id="header">'
      navBarHtml +=   '<a href="#home"><h2>Etsy</h2></a>'
      navBarHtml +=   '<div class="header-links">'
      navBarHtml +=       '<ul>'
      navBarHtml +=         '<a href="#home"><li>Home</li></a>'
      navBarHtml +=         '<li>Favorites</li>'
      navBarHtml +=         '<li>You</li>'
      navBarHtml +=         '<li>Cart</li>'
      navBarHtml +=       '</ul>'
      navBarHtml +=   '</div>'
      navBarHtml += '</div>'
      navBarHtml += '<div id="nav-bar">'
    	navBarHtml += 	'<div id="menu">'
    	navBarHtml +=		  '<a href="#search/clothing & accesories"><span>Clothing & Accesories</span></a>'
      navBarHtml +=		  '<a href="#search/jewelry"><span>Jewelry</span></a>'
      navBarHtml +=		  '<a href="#search/craft supplies & tools"><span>Crafts Supplies & Tools</span></a>'
      navBarHtml +=		  '<a href="#search/weddings"><span>Weddings</span></a>'
      navBarHtml +=		  '<a href="#search/entertainment"><span>Entertainment</span></a>'
    	navBarHtml +=		  '<a href="#search/home & living"><span>Home & Living</span></a>'
      navBarHtml +=		  '<a href="#search/kids & baby"><span>Kids & Baby</span></a>'
    	navBarHtml +=		  '<a href="#search/vintage"><span>Vintage</span></a>'
      navBarHtml += 	  '<input id="search" placeholder="What are you searching for?"></input>'
    	navBarHtml += 	'</div>'
    	navBarHtml += '</div>'
    	return navBarHtml
}

// set up homepage listing view
var ListView = Backbone.View.extend({
	el: document.querySelector('#app-container'),
// set up event listeners
	events: {
		'keydown input': '_inputSearch',
		'click .listing': '_listDetail'
	},
// event handler for input search
	_inputSearch: function(eventObj){
		if(eventObj.keyCode === 13){
			location.hash = 'search/' + eventObj.target.value
		}
	},


	initialize: function(collection){
		this.coll = collection
		var thisView = this
		var bindRender = this._render.bind(thisView)
		this.coll.on('sync', bindRender)
	},


})




// set up router
var EtsyRouter = Backbone.Router.extend({

	// set up routes
	routes:{

		'search/:query': 'showSearchResults',
		'details/:id': 'showDetails',
    '*path': 'showHomePage'
	},

	// set up homepage
	showHomePage: function(){
		// create an instance of listCollection
		var activeCollInstance = new ListCollection()
		// fetch the active collections
		console.log('active Coll', activeCollInstance)
		activeCollInstance.fetch({
			dataType: 'jsonp',
			data: {
				api_key: activeCollInstance._apikey,
				includes: 'Images,Shop'
			}
		})
		// create new list view
		new ListView(activeCollInstance)
	},


})

var app = new EtsyRouter()
