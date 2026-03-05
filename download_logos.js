import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const domains = [
    'auburn.edu', 'hofstra.edu', 'stonybrook.edu', 'tnstate.edu',
    'nwfsc.edu', 'harford.edu', 'msmary.edu', 'xavier.edu', 'monroecollege.edu'
];

const download = (url, dest) => {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            if (res.statusCode === 200) {
                const file = fs.createWriteStream(dest);
                res.pipe(file);
                file.on('finish', () => { file.close(resolve); });
            } else {
                reject(new Error(`Status Code ${res.statusCode}`));
            }
        }).on('error', reject);
    });
};

const dir = path.join(__dirname, 'public/assets/logos');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

(async () => {
    for (const domain of domains) {
        const url = `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${domain}&size=128`;
        const dest = path.join(dir, `${domain}.png`);
        try {
            if (!fs.existsSync(dest)) {
                await download(url, dest);
                console.log(`Downloaded ${domain}.png`);
            } else {
                console.log(`Skipped ${domain}.png (exists)`);
            }
        } catch (e) {
            console.error(`Failed ${domain}: ${e.message}`);
        }
    }
})();
