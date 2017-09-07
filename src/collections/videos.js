var Videos = Backbone.Collection.extend({
  defaults: {
    query: 'Sloths' 
  },

  model: Video,
  url: 'https://www.googleapis.com/youtube/v3/search/',

  initialize: function() {
    this.search('Sloths');
    //console.log(this);
  },

  search: function(query) {
    return this.fetch({
      data: {
        type: 'video',
        part: 'snippet',
        q: query,
        maxResults: 5,
        key: window.YOUTUBE_API_KEY,
        videoEmbeddable: true
      },
      success: function() {
      }
    });
    
   // console.log(answer);
  },
  
  parse: function(response) {
    console.log(response.items);
    return response.items;
  }

});
