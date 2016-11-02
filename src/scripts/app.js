
//=======================================================
const Backbone = require('backbone')
const $ = require('jquery')
const MultiView = require('./view-multi.js')
const NavView = require('./nav-bar.js')
const {DetailModel, ListCollection, NavCollection} = require('./user-model.js')
const DetailView = require('./view-details.js')
const SearchView = require('./view-search.js')
// const navBar = require('./nav-bar.js')
// console.log (ListCollection)
// console.log(DetailModel)
 // api key jgmsc2xzutgy76ydo5c93toj
// var searchEl = document.querySelector('#search')  //Node
// var myKey = 'jgmsc2xzutgy76ydo5c93toj'
var appContainer = document.querySelector('#app-container')
// set up for the nav bar
// var navBarHtml = function(){
// 	    navBarHtml = ''
//       navBarHtml += '<div id="header">'
//       navBarHtml +=   '<a href="#home"><h2>Etsy</h2></a>'
//       navBarHtml +=   '<div class="header-links">'
//       navBarHtml +=       '<ul>'
//       navBarHtml +=         '<a href="#home"><li>Home</li></a>'
//       navBarHtml +=         '<li>Favorites</li>'
//       navBarHtml +=         '<li>You</li>'
//       navBarHtml +=         '<li>Cart</li>'
//       navBarHtml +=       '</ul>'
//       navBarHtml +=   '</div>'
//       navBarHtml += '</div>'
//       navBarHtml += '<div id="nav-bar">'
//     	navBarHtml += 	'<div id="menu">'
//     	navBarHtml +=		  '<a href="#search/clothing & accesories"><span>Clothing & Accesories</span></a>'
//       navBarHtml +=		  '<a href="#search/jewelry"><span>Jewelry</span></a>'
//       navBarHtml +=		  '<a href="#search/craft supplies & tools"><span>Crafts Supplies & Tools</span></a>'
//       navBarHtml +=		  '<a href="#search/weddings"><span>Weddings</span></a>'
//       navBarHtml +=		  '<a href="#search/entertainment"><span>Entertainment</span></a>'
//     	navBarHtml +=		  '<a href="#search/home & living"><span>Home & Living</span></a>'
//       navBarHtml +=		  '<a href="#search/kids & baby"><span>Kids & Baby</span></a>'
//     	navBarHtml +=		  '<a href="#search/vintage"><span>Vintage</span></a>'
//       navBarHtml += 	  '<input id="search" placeholder="What are you searching for?"></input>'
//     	navBarHtml += 	'</div>'
//     	navBarHtml += '</div>'
//     	return navBarHtml
//
// }



// set up router
var EtsyRouter = Backbone.Router.extend({

	// set up routes
	routes:{

		'search/:keywords': 'showSearchResults',
		'details/:id': 'showDetails',
    '*path': 'showHomePage'
	},

	showSearchResults: function(keywords){

	let self = this
	var navCollection = new NavCollection(keywords)
	navCollection.fetch().then(function(){
		let searchViewInstance = new SearchView()
		searchViewInstance.render(navCollection)
	})
	//create new view for the collection
	new MultiView(navCollection)
	},

	showDetails: function(id){
		let self = this
		let detailInstance = new DetailModel(id, {includes: 'Images,description'})

		detailInstance.fetch().then((serverRes)=>{
			let detailViewInstance = new DetailView()
			detailViewInstance.render(detailInstance)
		})
	},

	// set up homepage
	showHomePage: function(){
		let self = this
		let activeCollInstance = new ListCollection({includes: 'Images,Shop'})


		activeCollInstance.fetch().then((serverRes)=>{
			let multiViewInstance = new MultiView()
			multiViewInstance.render(activeCollInstance)


		})

	},

	initialize: function() {
		var navView = new NavView()
		navView.render()
		Backbone.history.start()
	}

})

var app = new EtsyRouter()
