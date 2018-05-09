var VideoListEntryView = Backbone.View.extend({
  
  //el : '.video-list',
  initialize: function() {
    //this.model = model
    //console.log(this.$el, this.el)
  },
  
  events: {
    'click .video-list-entry-title' : 'handleClick'
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes)); // id, title
    //console.log(this.model);
    return this;
  },
  handleClick: function(){
    this.model.select();
  },
  template: templateURL('src/templates/videoListEntry.html')
});

// <div class="video-list-entry media">
//   <div class="media-left">
//     <img class="media-object" src="https://i.ytimg.com/vi/1w8Z0UOXVaY/default.jpg" />
//   </div>
//   <div class="media-body">
//     <div class="video-list-entry-title">Video Title</div>
//     <div class="video-list-entry-detail">Video Description</div>
//   </div>
// </div>