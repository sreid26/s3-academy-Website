import fs from 'fs';

async function fetchImages(query) {
    const url = `https://images.search.yahoo.com/search/images?p=${encodeURIComponent(query)}`;
    const response = await fetch(url, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
        }
    });
    const text = await response.text();

    // Find all `<img src='...'>` where src starts with http
    const matches = [...text.matchAll(/<img[^>]+src='([^']+)'/g)];
    return matches.map(m => m[1]).filter(src => src.startsWith('http'));
}

(async () => {
    const dawsonImages = await fetchImages('Syvannah Dawson basketball player');
    const teamImages = await fetchImages('Shining Stars Sports Academy basketball team');

    fs.writeFileSync('images.json', JSON.stringify({ dawsonImages, teamImages }, null, 2));
    console.log("Saved to images.json");
})();
