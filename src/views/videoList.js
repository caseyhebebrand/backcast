var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('sync', function() {
      this.render();
    }, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.$el.append(this.collection.map(function(video) {
      return new VideoListEntryView({model: video}).render().el;
    }));
    return this;
  },


  /*
  
  for each rendered listEntry
    this.$el.addChild(currentEntry)
  */

  template: templateURL('src/templates/videoList.html')

});
