import fs from 'fs';
import crypto from 'crypto';
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
    const folderName = '/files';
	const fileName = 'fileToCalculateHashFor.txt';
	const filePath = path.join(__dirname, folderName, fileName);
    const hash = crypto.createHash('sha256');
    const stream = fs.createReadStream(filePath);

    stream.on('data', (data) => {
        hash.update(data);
    });

    stream.on('end', () => {
        const fileHash = hash.digest('hex');
        console.log(fileHash);
    });

    stream.on('error', (error) => {
        console.error('Error reading file:', error);
    });

};

await calculateHash();