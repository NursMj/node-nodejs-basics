import { Worker } from 'node:worker_threads';
import os from 'os';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirPath = dirname(__filename);
const fileName = 'worker.js';
const filePath = path.join(__dirPath, fileName);

const n = 10;
const numberOfCores = os.cpus().length; 
const resultArray = []

const performCalculations = async () => {
	for (let i = 0; i < numberOfCores; i++) {
		const worker = new Worker(filePath, {
			workerData: n + i,
		});

		await worker.on('message', (res) => {
            resultArray.push({status: 'resolved', data: res})

            if (resultArray.length === numberOfCores) {

                console.log(resultArray);
            }
		});

		await worker.on('error', () => {

            if (resultArray.length === numberOfCores) {

                console.log(resultArray);
            }
		});
	}
};

await performCalculations();
