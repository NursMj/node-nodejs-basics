import fs from 'fs';
import zlib from 'zlib';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
	const folderPath = __dirname + '/files';
	const fileName = 'fileToCompress.txt';
	const compressedFileName = 'archive.gz';
	const inputFilePath = path.join(folderPath, fileName);
	const outputFilePath = path.join(folderPath, compressedFileName);
	const readStream = fs.createReadStream(inputFilePath, { encoding: 'utf-8' });
	const gzipStream = zlib.createGzip();
	const writeStream = fs.createWriteStream(outputFilePath);

	readStream.pipe(gzipStream).pipe(writeStream);

	writeStream.on('finish', () => {
		console.log(`File compressed to ${outputFilePath}`);
	});

	writeStream.on('error', (error) => {
		console.error('Error compressing file:', error);
	});
};

await compress();
