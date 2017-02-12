const ds = require('../data/pokedex');
const fs = require('fs');

const newData = ds.map((e, i) => ({
    id : i.toString(),
    name : e.name,
    totalStats : e.totalStats,
    HP : e.HP,
    attack : e.attack,
    defense : e.defense,
    spAtk : e.spAtk,
    spDef : e.spDef,
    speed : e.speed,
    types : e.types,
}))
console.log(JSON.stringify(newData))

fs.writeFile("./test.json", JSON.stringify(newData), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});