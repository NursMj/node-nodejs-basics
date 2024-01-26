import fs, {promises} from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
    const folderPath = __dirname + '/files';
	const fileName = 'fresh.txt';
	const filePath = path.join(folderPath, fileName);

	try {
		if (!fs.existsSync(filePath)) {
			throw new Error('FS operation failed');
		} else {
			const content = await promises.readFile(filePath, 'utf-8');

            console.log('File content:\n', content);
		}
	} catch (error) {
		console.log(error);
	}
};

await list();