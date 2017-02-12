'use strict';

const {
  client,
  index,
  type
} = require('../data/esClient');
const ds = require('../data/pokedex_test.json');

client.ping() // wait for connection
  .then(() => {
    ds.map((e, i) => ({
      index,
      type,
      id : parseInt(e.id),
      body : Object.assign(e, {
        id : parseInt(e.id),
        totalStats : parseInt(e.totalStats),
        HP : parseInt(e.HP),
        attack : parseInt(e.attack),
        defense : parseInt(e.defense),
        spAtk : parseInt(e.spAtk),
        spDef : parseInt(e.spDef),
        speed : parseInt(e.speed)
      })
    }))
    .forEach(doc => client.create(doc)
      .then(console.log)
    );
  })
  .catch((e) => {
    console.error(e)
  });
