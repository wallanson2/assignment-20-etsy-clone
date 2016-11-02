
//=======================================================
const Backbone = require('backbone')
const $ = require('jquery')
const MultiView = require('./view-multi.js')
const NavView = require('./nav-bar.js')
const {DetailModel, ListCollection, NavCollection} = require('./user-model.js')
const DetailView = require('./view-details.js')
const SearchView = require('./view-search.js')

var appContainer = document.querySelector('#app-container')

var EtsyRouter = Backbone.Router.extend({

	routes:{

		'search/:keywords': 'showSearchResults',
		'details/:id': 'showDetails',
    '*path': 'showHomePage'
	},

	showSearchResults: function(keywords){
		console.log('this', keywords)
	let self = this
	var navCollectionInstance = new NavCollection(keywords)
		navCollectionInstance.fetch().then((serverRes)=>{
			let searchViewInstance = new SearchView()
			searchViewInstance.render(navCollectionInstance)
		})

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
