import fs from 'fs';
const dir = 'C:\\Users\\Sreid\\.gemini\\antigravity\\brain\\330f669a-3170-473e-ab25-878fa9e4d801';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.png'));
for (const f of files) {
    const b = fs.readFileSync(dir + '\\' + f);
    if (b.length > 24 && b[0] === 0x89 && b[1] === 0x50) {
        const width = b.readUInt32BE(16);
        const height = b.readUInt32BE(20);
        console.log(f, width + "x" + height, b.length + " bytes");
    }
}
