import fs from 'fs';

const icons = [
    'solar:diploma-verified-bold-duotone',
    'solar:basketball-bold-duotone',
    'solar:map-arrow-up-bold-duotone',
    'solar:play-circle-bold',
    'solar:play-bold',
    'solar:link-circle-linear'
];

(async () => {
    let out = 'import { addCollection } from "@iconify/react";\n\n';
    try {
        for (let i of icons) {
            let [prefix, name] = i.split(':');
            console.log(`Fetching ${i}...`);
            let res = await fetch(`https://api.iconify.design/${prefix}.json?icons=${name}`);
            let json = await res.json();
            out += `addCollection(${JSON.stringify(json)});\n`;
        }
        fs.writeFileSync('views/icons-bundle.ts', out);
        console.log('Saved to views/icons-bundle.ts!');
    } catch (e) {
        console.error(e);
    }
})();
