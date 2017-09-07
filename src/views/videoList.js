var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('sync', function() {
      this.render();
    }, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.$el.children().append(this.collection.map(function(video) {
      return new VideoListEntryView({model: video}).render().el;
    }));
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
