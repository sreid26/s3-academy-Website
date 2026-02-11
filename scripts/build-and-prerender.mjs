
import { spawn } from 'child_process';
import path from 'path';

const isWin = process.platform === "win32";

function runCommand(command, args, options = {}) {
    return new Promise((resolve, reject) => {
        const proc = spawn(command, args, { stdio: 'inherit', shell: true, ...options });
        proc.on('close', (code) => {
            if (code === 0) resolve();
            else reject(new Error(`${command} exited with code ${code}`));
        });
    });
}

async function main() {
    let previewProcess;
    try {
        // Step 1: Build
        console.log('\n📦 Running Build...');
        await runCommand('npm', ['run', 'build']);

        // Step 2: Start Preview Server
        console.log('\n🚀 Starting Preview Server...');
        // We need to pipe stdout to trigger the next step when ready, or just wait.
        // Using 'inherit' for now and a delay for simplicity, improving robustness later if needed.
        previewProcess = spawn('npm', ['run', 'preview', '--', '--port', '4173'], {
            stdio: 'inherit',
            shell: true
        });

        // Give Vite some time to start
        console.log('⏳ Waiting for server to spin up...');
        await new Promise(resolve => setTimeout(resolve, 3000));

        // Step 3: Prerender
        console.log('\n📸 Running Prerender...');
        await runCommand('node', ['scripts/prerender.mjs']);

        console.log('\n✨ Build & Prerender Sequence Complete!');

    } catch (error) {
        console.error('\n❌ Error during build/prerender sequence:', error);
        process.exit(1);
    } finally {
        if (previewProcess) {
            console.log('🛑 Stopping Preview Server...');
            if (isWin) {
                spawn("taskkill", ["/pid", previewProcess.pid, '/f', '/t']);
            } else {
                previewProcess.kill();
            }
        }
    }
}

main();
