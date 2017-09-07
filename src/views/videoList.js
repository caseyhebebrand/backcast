var VideoListView = Backbone.View.extend({

  initialize: function(collection) {
    //this.entries = collection.map(entry => new VideoListEntry(entry));
  },

  render: function() {
    this.$el.children().detach();
    //this.entries.forEach(entry => entry.render());
    this.$el.html(this.template());
    return this;
  },

  /*
  
  for each rendered listEntry
    this.$el.addChild(currentEntry)
  */

  template: templateURL('src/templates/videoList.html')

});
