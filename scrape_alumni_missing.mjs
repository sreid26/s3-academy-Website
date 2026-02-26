import puppeteer from 'puppeteer';
import fs from 'fs';

const missingQueries = {
    avery_wills: 'Avery Wills Hofstra basketball',
    penda_dieng: 'Penda Dieng basketball',
    khoudia_diagne: 'Khoudia Diagne basketball',
    jadah_white: 'Jadah White basketball',
    logo_ole_miss: 'Ole Miss Athletics logo hd',
    logo_hofstra: 'Hofstra Pride Athletics logo hd',
    logo_triton: 'Triton College Trojans Athletics logo hd',
    logo_msmary: 'Mount St. Mary\'s Mountaineers Athletics logo hd',
    logo_rutgers: 'Rutgers Scarlet Knights Athletics logo hd',
    logo_tnstate: 'Tennessee State Tigers Athletics logo hd',
};

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const results = {};

    for (const [key, q] of Object.entries(missingQueries)) {
        await page.goto(`https://html.duckduckgo.com/html/?q=${encodeURIComponent(q)}`, { waitUntil: 'load', timeout: 60000 }).catch(e => console.error(e));
        const images = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('img.search__url__image, img.result__image, img'))
                .map(img => img.src)
                .filter(src => src.includes('external-content'));
        });
        results[key] = images.slice(0, 5);
        console.log(`Fetched ${key}`);
    }

    fs.writeFileSync('alumni_missing.json', JSON.stringify(results, null, 2));
    console.log("Saved to alumni_missing.json");
    await browser.close();
})();
