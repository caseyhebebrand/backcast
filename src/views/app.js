var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.videos.add(exampleVideoData.map(movieData => new Video(movieData)));
    this.videoPlayer = new VideoPlayerView({ collection: this.videos});
    this.videoList = new VideoListView({collection: this.videos});
    this.listenTo(this.videos, 'select', function(d) {
      this.videoPlayer.model = d;
      this.render();
    });
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    this.$el.append(this.videoPlayer.render().el);
    this.$el.append(this.videoList.render().el);
    return this;
  },

  template: templateURL('src/templates/app.html')
});
