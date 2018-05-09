var VideoListView = Backbone.View.extend({
  
  //el: '.list',
  //collection: this.collection,
  initialize: function() {
    this.collection.on('sync',this.render, this);
    // console.log(this.collection);
    // console.log(this.el, this.$el)
  },
  
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.each(this.renderVideo, this);
    
    // this.$el.append(this.collection.map(function(video){
    //   var videoListEntryView = new VideoListEntryView({model: video});
    //   return videoListEntryView.render();
    //   //console.log(this.$el)
    // }));
  },
  
  renderVideo: function(video){
    this.$('.video-list').append(
      new VideoListEntryView({model: video}).render().el
    );
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