import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
	const sourceFolder = __dirname + '/files';
	const destinationFolder = __dirname + '/files_copys';

	try {
		if (fs.existsSync(destinationFolder) || !fs.existsSync(sourceFolder)) {
			throw new Error('FS operation failed');
		} else {
			await fs.promises.mkdir(destinationFolder);

			const files = await fs.promises.readdir(sourceFolder);

			for (const file of files) {
				const sourcePath = path.join(sourceFolder, file);
				const destinationPath = path.join(destinationFolder, file);

				await fs.promises.copyFile(sourcePath, destinationPath);
			}
		}
	} catch (error) {
		console.log(error.message);
	}
};

await copy();
