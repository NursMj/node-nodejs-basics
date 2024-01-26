import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const revert = 0;

const rename = async () => {
	const wrongFilePath = __dirname + (!revert ? '/files/wrongFilename.txt' : '/files/properFilename.md');
	const properFilePath = __dirname + (!revert ? '/files/properFilename.md' : '/files/wrongFilename.txt');

	try {
		if (fs.existsSync(properFilePath) || !fs.existsSync(wrongFilePath)) {
			throw new Error('FS operation failed');
		} else {
			fs.rename(wrongFilePath, properFilePath, (error) => {
				if (error) {
					console.error(error);
				} else {
					console.log(`File renamed successfully: ${wrongFilePath} -> ${properFilePath}`);
				}
			});
		}
	} catch (error) {
		console.error(error);
	}
};

await rename();