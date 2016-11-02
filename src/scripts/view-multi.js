const Backbone = require('backbone')
// const navBar = require('./nav-bar.js')
const MultiView = Backbone.View.extend({
    el: '#app-container',
// console.log('Hi am I working?'),
    events: {
      "click .listing" : "detailSingle",
      "keydown .search-bar" : "searchDetail"
    },
  //

    searchDetail: function(evtObj){
      console.log('i am working')

      console.log(evtObj.target.value)
      if(evtObj.keyCode === 13){
        window.location.hash = 'search/' + evtObj.currentTarget.value
      }
    },

    detailSingle: function(evt){
      // console.log('here is evt.currentTarget', evt.currentTarget)
      window.location.hash = 'details/' + evt.currentTarget.getAttribute('data-id')
    },
    // console.log('Hi am I working?'),
    _buildHTMLTemplate: function(collData){
      let bigHTMLStr = '<div class="row" >'
          bigHTMLStr += collData.models.map(function(modl){
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
