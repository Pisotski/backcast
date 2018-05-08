var VideoListEntryView = Backbone.View.extend({
  
  el : 'em',
  render: function() {
    this.$el.html(this.template(/*this.model.attributes*/));
    return this;
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