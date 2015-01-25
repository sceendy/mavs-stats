Mavsapp.Router.map(function () {
  this.resource('roster'); /* show full roster */
  this.resource('player', {path: '/:player_id'}); /* use player number from roster to create path */
});
