var AppView = Backbone.View.extend({
  el: '#app',
  //collection : this.collection,
  initialize: function() {
    //this.$el.html(this.render());
    
    this.collection = new Videos(exampleVideoData);
    this.collection.search();

    //this.collection.on('change',this.render, this);
  },


  render: function() {
    this.$el.html(this.template());
    var videoListView = new VideoListView({el: this.$('.list'), collection : this.collection});
    this.$el.append(videoListView.render());
    var videoPlayer = new VideoPlayerView({collection : this.collection, el: this.$('.player')});
    this.$el.append(videoPlayer.render());
    var searchView = new SearchView({el: this.$('.search'), collection : this.collection});
    this.$el.append(searchView.render());
    return this;
  },

  template: templateURL('src/templates/app.html')

});

// <div id="container">
//   <nav class="navbar">
//     <div class="col-md-6 col-md-offset-3">
//       <div class="search"><h5><em>search</em> view goes here</h5></div>
//     </div>
//   </nav>
//   <div class="row">
//     <div class="col-md-7">
//       <div class="player"><h5><em>videoPlayer</em> view goes here</h5></div>
//     </div>
//     <div class="col-md-5">
//       <div class="list"><h5><em>videoList</em> view goes here</h5></div>
//     </div>
//   <div>
// </div>