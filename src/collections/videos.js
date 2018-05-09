var Videos = Backbone.Collection.extend({

  url: 'https://www.googleapis.com/youtube/v3/search',
  model: Video,
  search: function(searchString){
    console.log(searchString);
    this.fetch({
      data : {
        q : searchString,
        maxResults: 5,
        key: window.YOUTUBE_API_KEY,
        part : 'snippet'
      },
      success : function(data){
        console.log('yay');
      }
    });
  },
  parse: function(response){
    console.log(response);
    return response.items;
  }
});

