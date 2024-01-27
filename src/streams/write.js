import fs from 'fs';
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const write = async () => {
    const folderName = '/files';
	const fileName = 'fileToWrite.txt';
	const filePath = path.join(__dirname, folderName, fileName);
    const writableStream = fs.createWriteStream(filePath, { encoding: 'utf-8' });

    process.stdin.pipe(writableStream);

    writableStream.on('error', (error) => {
        console.error('Error writing to file:', error);
    });
};

await write();