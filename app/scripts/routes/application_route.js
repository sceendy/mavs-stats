Mavsapp.ApplicationRoute = Ember.Route.extend({
  model: function () {
    return ['Roster'];
  }
});

Mavsapp.RosterRoute = Ember.Route.extend({
  model: function () {
    return Mavsapp.Roster;
  }
});
