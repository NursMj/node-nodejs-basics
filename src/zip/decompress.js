import fs from 'fs';
import zlib from 'zlib';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
    const folderPath = __dirname + '/files';
	const fileName = 'fileToCompress.txt';
	const compressedFileName = 'archive.gz';
	const inputFilePath = path.join(folderPath, compressedFileName);
	const outputFilePath = path.join(folderPath, fileName);
	const readStream = fs.createReadStream(inputFilePath);
	const gunzipStream = zlib.createGunzip();
	const writeStream = fs.createWriteStream(outputFilePath);

	readStream.pipe(gunzipStream).pipe(writeStream);

	writeStream.on('finish', () => {
		console.log(`File decompressed to ${outputFilePath}`);
	});

	writeStream.on('error', (error) => {
		console.error('Error compressing file:', error);
	});
};

await decompress();