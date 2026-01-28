import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_PATH = path.join(__dirname, '../dist');

const routes = [
    '/',
    '/cozumler',
    '/urunler/tek-faz',
    '/urunler/uc-faz',
    '/urunler/dc',
    '/cozumler/hizmetler/guc-kalitesi-analizi',
    '/cozumler/hizmetler/guc-faktoru-duzeltme',
    '/cozumler/hizmetler/anahtar-teslimi-teknoloji-cozumleri',
    '/cozumler/hizmetler/adf-guc-ayari',
    '/cozumler/sinetamer/la-rm-uniteleri',
    '/cozumler/sinetamer/avantaj-uniteleri',
    '/cozumler/sinetamer/orta-gerilim-uniteleri',
    '/cozumler/sinetamer/mv-detaylari',
    '/cozumler/sinetamer/veri-telekom-uniteleri',
    '/cozumler/sinetamer/bireysel-devre-uniteleri',
    '/cozumler/sinetamer/bireysel-devre-veri-sayfalari',
    '/cozumler/sinetamer/asiri-gerilim-koruma-cihazi',
    '/cozumler/sinetamer/kurulum-sayfalari',
    '/cozumler/sinetamer/musteriler',
    '/cozumler/sinetamer/asansor-korumasi',
    '/cozumler/teknik-makaleler',
    '/daha-fazlasi',
    '/daha-fazlasi/teknoloji-konulari',
    '/daha-fazlasi/brosurler',
    '/daha-fazlasi/videolar',
    '/daha-fazlasi/sinetamer-a-sorun',
    '/daha-fazlasi/blog',
    '/daha-fazlasi/blog/1',
    '/daha-fazlasi/blog/2',
    '/daha-fazlasi/blog/3',
    '/daha-fazlasi/blog/4',
    '/daha-fazlasi/blog/5',
    '/daha-fazlasi/blog/6',
    '/daha-fazlasi/blog/7',
    '/daha-fazlasi/blog/8',
    '/daha-fazlasi/blog/9',
    '/daha-fazlasi/blog/10',
];

async function prerender() {
    const app = express();
    app.use(express.static(DIST_PATH));

    // Fallback to index.html for SPA routing during prerender
    app.use((req, res) => {
        res.sendFile(path.join(DIST_PATH, 'index.html'));
    });

    const server = app.listen(3000, async () => {
        console.log('Static server started at http://localhost:3000');

        const browser = await puppeteer.launch({ headless: true });

        for (const route of routes) {
            const page = await browser.newPage();

            console.log(`Prerendering ${route}...`);

            // Navigate to the route
            await page.goto(`http://localhost:3000${route}`, { waitUntil: 'networkidle0' });

            // Wait for the custom render-event we added to App.jsx
            try {
                await page.evaluate(() => {
                    return new Promise(resolve => {
                        if (window.fullyRendered) return resolve();
                        document.addEventListener('render-event', resolve, { once: true });
                        // Timeout as fallback
                        setTimeout(resolve, 5000);
                    });
                });
            } catch (e) {
                console.warn(`Timeout waiting for render-event on ${route}, capturing anyway.`);
            }

            const html = await page.content();

            // Determine output path
            const outputDir = path.join(DIST_PATH, route);
            if (!fs.existsSync(outputDir)) {
                fs.mkdirSync(outputDir, { recursive: true });
            }

            fs.writeFileSync(path.join(outputDir, 'index.html'), html);
            console.log(`Saved ${path.join(outputDir, 'index.html')}`);

            await page.close();
        }

        await browser.close();
        server.close();
        console.log('Prerendering complete!');
        process.exit(0);
    });
}

prerender();
