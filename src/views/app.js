var AppView = Backbone.View.extend({
  el: '#app',

  initialize: function() {
    //this.$el.html(this.render());
    this.videos = new Videos();
  },


  render: function() {
    this.$el.html(this.template());
    var videoListView = new VideoListView();
    this.$el.append(videoListView.render());
    console.log(this.$el);
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