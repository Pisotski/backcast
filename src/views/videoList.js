var VideoListView = Backbone.View.extend({
  
  el: '.list',
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    console.log('hello');
    this.$('.video-list').append(new VideoListEntryView().render());
    return this;
  },
  template: templateURL('src/templates/videoList.html')

});


// <div class="video-list">
//   <div><h5><em>videoListEntry</em> view goes here</h5></div>
//   <div><h5><em>videoListEntry</em> view goes here</h5></div>
//   <div><h5><em>videoListEntry</em> view goes here</h5></div>
//   <div><h5><em>videoListEntry</em> view goes here</h5></div>
//   <div><h5><em>videoListEntry</em> view goes here</h5></div>
// </div>