import fs from 'fs';
async function fetchImages(query) {
    const url = `https://images.search.yahoo.com/search/images?p=${encodeURIComponent(query)}`;
    const response = await fetch(url, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
        }
    });
    const text = await response.text();
    const matches = [...text.matchAll(/src='(https:\/\/tse[0-9]\.mm\.bing\.net[^']+)'/g)];
    return matches.map(m => m[1]).slice(0, 2);
}
(async () => {
    console.log("Avery:", await fetchImages('Avery Wills basketball'));
    console.log("Penda:", await fetchImages('Penda Dieng basketball'));
    console.log("Jadah:", await fetchImages('Jadah White basketball Northwest Florida State'));
    console.log("Khoudia:", await fetchImages('Khoudia Diagne basketball Northwest Florida State'));
    console.log("Ole Miss logo:", await fetchImages('Ole Miss Rebels logo png'));
    console.log("Hofstra logo:", await fetchImages('Hofstra Pride logo png'));
    console.log("Triton logo:", await fetchImages('Triton College Athletics logo png'));
    console.log("Mount St. Marys logo:", await fetchImages('Mount St Marys Mountaineers logo png'));
    console.log("Rutgers logo:", await fetchImages('Rutgers Scarlet Knights logo png'));
    console.log("Tennessee State logo:", await fetchImages('Tennessee State Tigers logo png'));
})();
