import puppeteer from 'puppeteer';
import fs from 'fs';

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    console.log("Extracting from Instagram...");
    await page.goto('https://www.instagram.com/vannah.theh00per/', { waitUntil: 'domcontentloaded', timeout: 60000 }).catch(e => console.error(e));

    // Try to get the profile picture or og:image
    const igImages = await page.evaluate(() => {
        const ogImg = document.querySelector('meta[property="og:image"]')?.content;
        const imgs = Array.from(document.querySelectorAll('img')).map(img => img.src);
        return { ogImg, imgs: imgs.slice(0, 5) };
    });

    console.log("Navigating to DuckDuckGo for Girls Team...");
    await page.goto('https://html.duckduckgo.com/html/?q="Shining+Stars+Sports+Academy"+girls+lady+panthers+basketball+team+Virginia', { waitUntil: 'load', timeout: 60000 }).catch(e => console.error(e));

    const girlsTeamImages = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('img.search__url__image, img.result__image, img'))
            .map(img => img.src)
            .filter(src => src.includes('external-content'));
    });

    fs.writeFileSync('precise_images.json', JSON.stringify({ igImages, girlsTeamImages }, null, 2));
    console.log("Saved precise_images.json");
    await browser.close();
})();
