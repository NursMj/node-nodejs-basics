import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
    const sourceFolder = __dirname + '/files';

	try {
		if (!fs.existsSync(sourceFolder)) {
			throw new Error('FS operation failed');
		} else {
			const files = await fs.promises.readdir(sourceFolder);

			for (const file of files) {
				console.log(file);
			}
		}
	} catch (error) {
		console.log(error);
	}
};

await list();