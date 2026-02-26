import fs from 'fs';

async function run() {
    const urls = [
        'https://commons.wikimedia.org/wiki/File:Ole_Miss_Rebels_basketball_logo.svg',
        'https://commons.wikimedia.org/wiki/File:Rutgers_Scarlet_Knights_logo.svg'
    ];

    for (let page of urls) {
        const res = await fetch(page, { headers: { 'User-Agent': 'Mozilla/5.0' } });
        const html = await res.text();
        const match = html.match(/<a href="([^"]+?\.svg)"/);
        if (match) {
            console.log("Resolved", page, "->", match[1]);
        } else {
            console.log("No match for", page);
        }
    }
}
run();
