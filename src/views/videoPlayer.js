var VideoPlayerView = Backbone.View.extend({
  initialize: function() {
    this.model = this.model || this.collection.models[0];
    this.listenTo(this.collection, 'change', function() {
      this.model = this.collection.models[0];
      console.log(this.model);
      this.render();
    });
  },

  render: function() {
    this.$el.html('<div class="loading">Please wait...</div>');
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
