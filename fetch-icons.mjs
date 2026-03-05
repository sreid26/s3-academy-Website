import fs from 'fs';
import path from 'path';

function findIconsInDir(dir, iconsSet) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            findIconsInDir(fullPath, iconsSet);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            const content = fs.readFileSync(fullPath, 'utf8');
            // match both icon="xyz" and icon={'xyz'}
            const regex = /<Icon\s+[^>]*icon=(?:\{['"]|['"])([^'"\}]+)(?:['"]|\})/g;
            let match;
            while ((match = regex.exec(content)) !== null) {
                iconsSet.add(match[1]);
            }

            // Also match dynamic objects if any hardcoded string is passed (simplified fallback)
            const rawRegex = /icon\s*[:=]\s*["']([^"']+)["']/g;
            while ((match = rawRegex.exec(content)) !== null) {
                iconsSet.add(match[1]);
            }
        }
    }
}

(async () => {
    let iconsSet = new Set();
    findIconsInDir('views', iconsSet);

    // Convert to array and filter out any dynamic variable names that might have slipped through
    const icons = Array.from(iconsSet).filter(i => i.includes(':'));
    console.log(`Found ${icons.length} unique icons to fetch.`);
    console.log(icons);

    let out = 'import { addCollection } from "@iconify/react";\n\n';
    try {
        for (let i of icons) {
            let [prefix, name] = i.split(':');
            process.stdout.write(`Fetching ${i}... `);
            let res = await fetch(`https://api.iconify.design/${prefix}.json?icons=${name}`);
            if (res.ok) {
                let json = await res.json();
                out += `addCollection(${JSON.stringify(json)});\n`;
                console.log('OK');
            } else {
                console.log('FAILED');
            }
        }
        fs.writeFileSync('views/icons-bundle.ts', out);
        console.log('Saved universal registry to views/icons-bundle.ts!');
    } catch (e) {
        console.error(e);
    }
})();
