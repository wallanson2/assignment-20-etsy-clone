

const $ = require('jquery')
const Backbone = require('Backbone')

var myKey = 'jgmsc2xzutgy76ydo5c93toj'

var DetailModel = Backbone.Model.extend({
	url: "",
	parse: function(rawJSONRes){
		// console.log('raw', rawJSONRes.results)
		if (typeof rawJSONRes.results != 'undefined'){
		   return rawJSONRes.results[0]

		 }else{
			 return rawJSONRes
		 }
	},
	initialize: function(listingsId, paramObj){

		let paramStr = ''
		for (var key in paramObj){paramStr += `&${key}=${paramObj[key]}`}
		// console.log(myKey + paramStr)
		// console.log(`https://openapi.etsy.com/v2/listings/${listingsId}.js?callback=?&api_key=${mykey}${paramStr}`)
		this.url = `https://openapi.etsy.com/v2/listings/${listingsId}.js?callback=?&api_key=${myKey}${paramStr}`

	}
})

var ListCollection = Backbone.Collection.extend({
	Model:DetailModel,
	parse: function(rawJSONRes){
		// console.log('rawww', rawJSONRes.results)
		return rawJSONRes.results
	},
	initialize: function(paramObj={}){
		let paramStr = ''
		for (var key in paramObj) {paramStr += `&${key}=${paramObj[key]}`}
		// console.log(myKey + paramStr)
		this.url = `https://openapi.etsy.com/v2/listings/active.js?limit=24&callback=?&api_key=` + myKey + paramStr
	}
})

var NavCollection = Backbone.Collection.extend({
	model:DetailModel,

	parse: function(rawJSONRes){
		// console.log('rawww', rawJSONRes.results)
		return rawJSONRes.results
	},
	initialize: function(paramObj={}){
		console.log('paramObj', paramObj)
		let paramStr = ''
		// console.log(myKey + paramStr)
		// console.log(`https://openapi.etsy.com/v2/listings/active.js?limit=24&keyword=${paramObj}&callback=?&api_key=` + myKey)
		this.url = `https://openapi.etsy.com/v2/listings/active.js?includes=Images,Shop&keywords=${paramObj}&limit=24&callback=?&api_key=` + myKey //+ paramStr
	}
})


module.exports = {DetailModel:DetailModel, ListCollection:ListCollection, NavCollection:NavCollection}
