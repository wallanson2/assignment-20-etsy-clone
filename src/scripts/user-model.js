

const $ = require('jquery')
const Backbone = require('backbone')

var myKey = 'jgmsc2xzutgy76ydo5c93toj'

var DetailModel = Backbone.Model.extend({
	url: 'https://openapi.etsy.com/v2/listings/',
	_apikey: myKey,
	parse: function(rawJSONRes){
		// console.log('raw', rawJSONRes)
		return rawJSONRes.results
	}
})


var ListCollection = Backbone.Collection.extend({
	Model:DetailModel,
	url: 'https://openapi.etsy.com/v2/listings/active.js',
	_apikey: myKey,
	parse: function(rawJSONRes){
		// console.log('rawww', rawJSONRes)
		return rawJSONRes.results
	}
})

module.exports = {DetailModel:DetailModel, ListCollection:ListCollection}
