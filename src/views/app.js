var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.videos.search('Sloths');
    this.listenTo(this.videos, 'sync', function() {
      this.videoPlayer = new VideoPlayerView({ collection: this.videos, model: this.videos.models[0]});
      this.videoList = new VideoListView({collection: this.videos});
      this.searchView = new SearchView({collection: this.videos});
      this.render();
    });
    this.listenTo(this.videos, 'select', function(d) {
      this.videoPlayer.model = d;
      this.render();
    });
  },

  render: function() {
    this.$el.html(this.template());
    this.$el.append(this.searchView.render().el);
    this.$el.append(this.videoPlayer.render().el);
    this.$el.append(this.videoList.render().el);
  
    return this;
  },

  template: templateURL('src/templates/app.html')
});
