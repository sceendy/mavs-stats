Mavsapp.RosterRoute = Ember.Route.extend({
  model: function () {
    return this.store.findAll('player');
  }
});
