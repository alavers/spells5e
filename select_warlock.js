var fs = require('fs');

const data = fs.readFileSync('spells.json');
const json = JSON.parse(data);
const warlockSpells = {};
Object.keys(json).forEach((key) => {
    const spell = json[key];
    if (spell.class.includes('Warlock')) {
        warlockSpells[key] = spell;
    }
});

fs.writeFileSync('./spells_warlock.json', JSON.stringify(warlockSpells, null, '  '));
