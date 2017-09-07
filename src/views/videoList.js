var VideoListView = Backbone.View.extend({

  initialize: function(collection) {
    this.entries = this.collection.map(entry => new VideoListEntryView(entry));
    console.log(this.entries);
    this.renderedEntries = this.entries.map(entry => entry.render());
  },

  render: function() {
    this.$el.children().detach();
    // this.entries.forEach(entry => entry.render());
    this.$el.html(this.template());
    return this;
  },

  /*
  
  for each rendered listEntry
    this.$el.addChild(currentEntry)
  */

  template: templateURL('src/templates/videoList.html')

});
