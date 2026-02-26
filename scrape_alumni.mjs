import fs from 'fs';

async function fetchImages(query) {
    const url = `https://images.search.yahoo.com/search/images?p=${encodeURIComponent(query)}`;
    const response = await fetch(url, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
        }
    });
    const text = await response.text();
    const matches = [...text.matchAll(/<img[^>]+src='([^']+)'/g)];
    return matches.map(m => m[1]).filter(src => src.startsWith('http')).slice(0, 5);
}

(async () => {
    const results = {};

    // Players
    results['avery_wills'] = await fetchImages('Avery Wills Hofstra basketball roster');
    results['die_diop'] = await fetchImages('Die Diop Mount St. Mary\'s women\'s basketball');
    results['penda_dieng'] = await fetchImages('Penda Dieng Xavier women\'s basketball');
    results['yacine_ndiaye'] = await fetchImages('Yacine Ndiaye Rutgers women\'s basketball');
    results['khoudia_diagne'] = await fetchImages('Khoudia Diagne Northwest Florida State college women\'s basketball');
    results['dream_muhammad'] = await fetchImages('Dream Muhammad Tennessee State women\'s basketball');
    results['jadah_white'] = await fetchImages('Jadah White Northwest Florida State women\'s basketball');
    results['francisco_mattei'] = await fetchImages('Francisco Mattei Monroe College basketball');

    // Logos
    results['logo_ole_miss'] = await fetchImages('Ole Miss Athletics logo png');
    results['logo_auburn'] = await fetchImages('Auburn Tigers Athletics logo png');
    results['logo_hofstra'] = await fetchImages('Hofstra Pride Athletics logo png');
    results['logo_stony_brook'] = await fetchImages('Stony Brook Seawolves Athletics logo png');
    results['logo_triton'] = await fetchImages('Triton College Trojans Athletics logo png');
    results['logo_harford'] = await fetchImages('Harford Fighting Owls Athletics logo png');
    results['logo_msmary'] = await fetchImages('Mount St. Mary\'s Mountaineers Athletics logo png');
    results['logo_xavier'] = await fetchImages('Xavier Musketeers Athletics logo png');
    results['logo_rutgers'] = await fetchImages('Rutgers Scarlet Knights Athletics logo png');
    results['logo_nwfsc'] = await fetchImages('Northwest Florida State Raiders Athletics logo png');
    results['logo_tnstate'] = await fetchImages('Tennessee State Tigers Athletics logo png');
    results['logo_monroe'] = await fetchImages('Monroe College Mustangs Athletics logo png');

    fs.writeFileSync('alumni_media.json', JSON.stringify(results, null, 2));
    console.log("Saved to alumni_media.json");
})();
