import puppeteer from 'puppeteer';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROUTES = [
    '/',
    '/about',
    '/academics',
    '/basketball',
    '/admissions',
    '/faculty',
    '/alumni',
    '/donate',
    '/contact'
];

const PORT = 4173; // Vite preview port by default
const BASE_URL = `http://localhost:${PORT}`;
const DIST_DIR = path.resolve(__dirname, '../dist');

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function prerender() {
    console.log('🚀 Starting Prerender...');

    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();

    for (const route of ROUTES) {
        try {
            const url = `${BASE_URL}${route}`;
            console.log(`Rendering: ${url}`);

            await page.goto(url, { waitUntil: 'networkidle0' });
            await sleep(500); // Wait a bit for animations/JS to settle

            const content = await page.content();

            // Determine file path: / -> index.html, /about -> about/index.html
            const routePath = route === '/' ? '' : route;
            const dirPath = path.join(DIST_DIR, routePath);

            if (routePath) {
                await fs.mkdir(dirPath, { recursive: true });
            }

            const filePath = path.join(dirPath, 'index.html');
            await fs.writeFile(filePath, content);
            console.log(`✅ Saved: ${filePath}`);

        } catch (err) {
            console.error(`❌ Error rendering ${route}:`, err);
        }
    }

    await browser.close();
    console.log('✨ Prerender complete!');
}

prerender();
