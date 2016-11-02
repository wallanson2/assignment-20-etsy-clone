const Backbone = require('backbone')
document.querySelector('.navbar')
const SearchView = Backbone.View.extend({

    el: '#app-container',

    _buildHTMLTemplate: function(collData){
      console.log('coll data models length', collData.models.length)
      console.log('coll data', collData)
      let bigHTMLStr = '<div class="row" >'
          bigHTMLStr += collData.models.map(function(modl){
            console.log('tis modl', modl)
            return  ` <div id="list-holder" class="col-sm-3">
                        <div class="listing" data-id=" ${modl.get('listing_id')}">
                          <img src=" ${modl.get('Images')[0].url_170x135}">
                          <div class="title"> ${modl.get('title')} </div>
                          <div class="info">
                            <div class="shop-name"> ${modl.get('Shop').shop_name} </div>
                            <div class="price">$ ${modl.get('price')} </div>
                          </div>
                        </div>
                      </div> `

          }).join('')
          return bigHTMLStr
    },
    render: function(collectionData){
      this.el.innerHTML = this._buildHTMLTemplate(collectionData)
    }
})

module.exports = SearchView
