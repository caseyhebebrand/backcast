var SearchView = Backbone.View.extend({
  
  events: {
    'click .btn': 'clickSearch',
    'keypress .form-control': 'enterSearch'
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },
  
  clickSearch: function() {
    var text = $('.form-control').val();
    this.collection.search(text);
  },

  enterSearch: function(event) {
    if (event.keyCode === 13) {
      var text = $('.form-control').val();
      this.collection.search(text);
    }
  },

  template: templateURL('src/templates/search.html')

});
