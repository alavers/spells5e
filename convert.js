var fs = require('fs');

const data = fs.readFileSync('spellData.json');
const json = JSON.parse(data);
const spells = {};
json.forEach((spell) => {
    console.log(spell);
    spells[spell.name] = spell;
});

// fs.writeFileSync('out.json', JSON.stringify(spells, null, 2));
