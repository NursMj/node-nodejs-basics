import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
    const filePath = __dirname + '/files/fileToRemove.txt';

    try {
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
            console.log(`File deleted successfully: ${filePath}`);
        } else {
            throw new Error('FS operation failed');
        }
    } catch (error) {
        console.error(error);
    }
};

await remove();