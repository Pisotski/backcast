var SearchView = Backbone.View.extend({

  events:{
    'click button': 'handleClick',
    'keypress': 'checkKeycode'
  },
  
  checkKeycode : function(e){
    var code = e.keyCode;
    if (code === 13) {
      this.handleClick();
    }
  },
  handleClick: function(){
    this.collection.search($('.form-control').val());
    $('.form-control').val('');
  },
  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
