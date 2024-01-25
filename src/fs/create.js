import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
	const folderPath = __dirname + '/files';
	const fileName = 'fresh.txt';
	const filePath = path.join(folderPath, fileName);
	const fileContent = 'I am fresh and young';

	try {
		if (fs.existsSync(filePath)) {
			throw new Error('FS operation failed');
		}
		fs.writeFileSync(filePath, fileContent);
		console.log(`File "${fileName}" created successfully at "${folderPath}"`);
	} catch (error) {
		console.error(`Error: ${error.message}`);
	}
};

await create();
