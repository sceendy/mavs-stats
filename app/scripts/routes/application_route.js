Mavsapp.ApplicationRoute = Ember.Route.extend({

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
