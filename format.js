const fs = require('fs');
const raw = fs.readFileSync('./spells.json');
const spells = JSON.parse(raw);

function render(desc) {
    return desc
        .replace(new RegExp('<p>', 'g'), '')
        .replace(new RegExp('</p>', 'g'), '\n\n');
}

Object.keys(spells).forEach((key) => {
    spells[key].desc = render(spells[key].desc);
});

const string = JSON.stringify({banana: 'hi\nthere'});
string.replace('\n', '\\n');
console.log(string+'\n'+string);

fs.writeFileSync('./out.json', JSON.stringify(spells, null, '  '))

