var VideoPlayerView = Backbone.View.extend({
  initialize: function() {
    console.log(this.collection.models[0]);
    this.model = this.collection.models[0];
  },

  //model: this.collection.models[0],

  render: function() {
    this.$el.html('<div class="loading">Please wait...</div>');
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
