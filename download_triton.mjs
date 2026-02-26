import fs from 'fs';

const download = async (url, dest) => {
    try {
        const response = await fetch(url, {
            headers: { 'User-Agent': 'Mozilla/5.0' }
        });
        if (!response.ok) throw new Error(`unexpected response ${response.statusText} for ${url}`);
        const arrayBuffer = await response.arrayBuffer();
        fs.writeFileSync(dest, Buffer.from(arrayBuffer));
        console.log(`Success: ${dest}`);
    } catch (err) {
        console.error(`Failed to download ${dest}:`, err.message);
    }
};

download('https://s3.amazonaws.com/sidearm.sites/tritonathletics.com/images/2023/11/27/Triton_College_Logo.jpg', 'public/assets/logos/triton.edu.jpg');
