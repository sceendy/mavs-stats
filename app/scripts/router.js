Mavsapp.Router.map(function () {
  this.resource('roster'); /* show full roster */
  this.resource('player', {path: '/roster/:number'}); /* use player name from roster to create path */
});
