var VideoListEntryView = Backbone.View.extend({

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  events: {
    'click .video-list-entry-title': 'clickTitle'
  },

  clickTitle: function() {
    this.model.select();
  },

  template: templateURL('src/templates/videoListEntry.html')

});
