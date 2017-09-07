var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    //this.videos.add(exampleVideoData.map(movieData => new Video(movieData)));
    console.log(this.videos);
    this.videoPlayer = new VideoPlayerView();
    this.videoList = new VideoListView();
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
