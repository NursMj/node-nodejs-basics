import fs from 'fs';
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const folderName = '/files';
	const fileName = 'fileToRead.txt';
	const filePath = path.join(__dirname, folderName, fileName);
    const stream = fs.createReadStream(filePath, { encoding: 'utf-8' });

   
    stream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });

    stream.on('error', (error) => {
        console.error('Error reading file:', error);
    });

};

await read();