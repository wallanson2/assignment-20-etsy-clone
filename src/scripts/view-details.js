const Backbone = require('backbone')

const DetailView = Backbone.View.extend({
  el: '#app-container',

  _buildHTMLTemplate: function(collData){
    // console.log('this is collData', collData)
    var modl = collData.attributes
    // console.log('this is modl', modl)
    // console.log(modl.description)

          return ` <div id="detail-view">
                    <div class="arrow left-arrow" id="previous">&lt</div>
                    <div id="product-detail">
                      <div id="product-image"><img src="${collData.get('Images')[0].url_570xN} "></div>
                      <div class="description">  ${collData.get('description')} </div>
                      </div>
                      <div class="arrow right-arrow" id="next">&gt</div>
                      </div> `
  },
  render: function(collectionData){
    this.el.innerHTML = this._buildHTMLTemplate(collectionData)
  }
})


module.exports = DetailView
