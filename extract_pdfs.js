const fs = require('fs');
const pdf = require('pdf-parse');

const files = [
    'public/resume_2026.pdf'
];

async function extract() {
    for (const file of files) {
        try {
            if (fs.existsSync(file)) {
                const dataBuffer = fs.readFileSync(file);
                const data = await pdf(dataBuffer);
                console.log(`\n--- START OF ${file} ---\n`);
                console.log(data.text.substring(0, 4000)); 
                console.log(`\n--- END OF ${file} ---\n`);
            } else {
                console.log(`File not found: ${file}`);
            }
        } catch (e) {
            console.error(`Error reading ${file}:`, e);
        }
    }
}

extract();