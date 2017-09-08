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
    this.collection.models[0].select();
  },

  enterSearch: function(event) {
    if (event.keyCode === 13) {
      var text = $('.form-control').val();
      this.collection.search(text);
      this.colection.models[0].select();
    }
  },

  template: templateURL('src/templates/search.html')

});
