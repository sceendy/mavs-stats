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

Mavsapp.PlayerRoute = Ember.Route.extend({
  model: function (params) {
    return Mavsapp.Roster.findBy('number', params.number);
  }
});
