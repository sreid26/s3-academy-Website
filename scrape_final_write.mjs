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
    return matches.map(m => m[1]).slice(0, 1);
}
(async () => {
    const res = {};
    res.Avery = await fetchImages('Avery Wills basketball');
    res.Penda = await fetchImages('Penda Dieng basketball');
    res.Jadah = await fetchImages('Jadah White basketball Northwest Florida State');
    res.Khoudia = await fetchImages('Khoudia Diagne basketball Northwest Florida State');
    res.OleMiss = await fetchImages('Ole Miss Rebels logo png');
    res.Hofstra = await fetchImages('Hofstra Pride logo png');
    res.Triton = await fetchImages('Triton College Athletics logo png');
    res.MountStMarys = await fetchImages('Mount St Marys Mountaineers logo png');
    res.Rutgers = await fetchImages('Rutgers Scarlet Knights logo png');
    res.TennesseeState = await fetchImages('Tennessee State Tigers logo png');
    fs.writeFileSync('missing_urls.json', JSON.stringify(res, null, 2));
})();
