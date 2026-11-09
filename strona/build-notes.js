// Uruchom: node build-notes.js  (po zmianie plików .md w folderze wyżej)
const fs = require('fs'), path = require('path');
const dir = path.join(__dirname, '..');
const files = { k1: 'do kolosa1.md', k2: 'do kolosa2.md', z1: 'zestaw 1.md', z2: 'zestaw 2.md', wz: 'karta wzorów.md' };
const out = {};
for (const [k, f] of Object.entries(files)) out[k] = fs.readFileSync(path.join(dir, f), 'utf8');
fs.writeFileSync(path.join(__dirname, 'notes.json'), JSON.stringify(out));
console.log('notes.json gotowy');
