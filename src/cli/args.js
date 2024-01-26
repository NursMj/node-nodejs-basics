const parseArgs = () => {
	const args = process.argv.slice(2);
	const pairs = args
		.filter((str) => str.startsWith('--'))
		.map((prop, i) => `${prop} is ${args[args.indexOf(prop) + 1]}`)
		.join(', ');

	console.log(pairs);
};

parseArgs();
