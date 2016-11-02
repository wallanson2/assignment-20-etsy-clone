const Backbone = require('backbone')
document.querySelector('.search-bar')
const MultiView = Backbone.View.extend({
    el: '#app-container',
// console.log('Hi am I working?'),
    events: {
      "click .listing" : "detailSingle",
    },

    detailSingle: function(evt){
      // console.log('here is evt.currentTarget', evt)
      window.location.hash = 'details/' + evt.currentTarget.getAttribute('data-id')
    },
    // console.log('Hi am I working?'),
    _buildHTMLTemplate: function(collData){
      console.log('tis colldata', collData)
      let bigHTMLStr = '<div class="row" >'
          bigHTMLStr += collData.models.map(function(modl){
              console.log('tis modl', modl)
              console.log('this is colldata models', collData.models)
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
  console.log('Hi am I working?'),
module.exports = MultiView
