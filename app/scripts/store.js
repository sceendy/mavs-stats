Mavsapp.ApplicationAdapter = DS.FixtureAdapter.extend();

Mavsapp.Player = DS.Model.extend({
  name: DS.attr('string'),
  number: DS.attr('number'),
  position: DS.attr('string'),
  years: DS.attr('number'),
  comments: DS.hasMany('comment', {async : true})
});

Mavsapp.Comment = DS.Model.extend({
  name: DS.attr('string'),
  comment: DS.attr('string'),
  date: DS.attr('date'),
  player: DS.belongsTo('player')
});

Mavsapp.Player.FIXTURES = [
  {
    id: 1,
    name: 'Dirk Nowitzki',
    number: 41,
    position: 'Foward',
    years: 16
  },
  {
    id: 2,
    name: 'Tyson Chandler',
    number: 06,
    position: 'Center',
    years: 13
  },
  {
    id: 3,
    name: 'Chandler Parsons',
    number: 25,
    position: 'Foward',
    years: 3,
    comments: [100, 101]
  },
  {
    id: 4,
    name: 'Devin Harris',
    number: 20,
    position: 'Guard',
    years: 10
  },
  {
    id: 5,
    name: 'Monta Ellis',
    number: 11,
    position: 'Guard',
    years: 9
  },
  {
    id: 6,
    name: 'Rajon Rondo',
    number: 09,
    position: 'Guard',
    years: 8
  },
  {
    id: 7,
    name: 'Raymond Felton',
    number: 02,
    position: 'Guard',
    years: 8
  },
  {
    id: 8,
    name: 'Ricky Ledo',
    number: 01,
    position: 'Guard',
    years: 1
  },
  {
    id: 9,
    name: 'Jose Juan Barea',
    number: 05,
    position: 'Guard',
    years: 8
  },
  {
    id: 10,
    name: 'Greg Smith',
    number: 04,
    position: 'Center',
    years: 3
  },
  {
    id: 11,
    name: 'Richard Jefferson',
    number: 24,
    position: 'Foward',
    years: 12
  },
  {
    id: 12,
    name: 'Al-Farouq Aminu',
    number: 07,
    position: 'Forward',
    years: 4
  },
  {
    id: 13,
    name: 'Charlie Villanueva',
    number: 03,
    position: 'Forward',
    years: 9
  },
  {
    id: 14,
    name: 'Dwight Powell',
    number: 08,
    position: 'Foward',
    years: 1
  }
]

Mavsapp.Comment.FIXTURES = [
  { id: 100,
    player: 3,
    name: "Cindy",
    comment: "WOO!"
  },
  { id: 101,
    player: 3,
    name: "Nick",
    comment: "Woo"
  }
];
