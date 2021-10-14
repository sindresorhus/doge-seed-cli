#!/usr/bin/env node
import path from 'node:path';
import process from 'node:process';
import {fileURLToPath} from 'node:url';
import meow from 'meow';
import terminalImage from 'terminal-image';
import termImg from 'term-img';
import chalk from 'chalk';
import boxen from 'boxen';
import uniqueRandomArray from 'unique-random-array';
import dogeSeed from 'doge-seed';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const isIterm = process.env.TERM_PROGRAM === 'iTerm.app';
const dogeImage = path.join(__dirname, 'doge.png');

const randomColor = uniqueRandomArray([
	'red',
	'green',
	'yellow',
	'blue',
	'magenta',
	'cyan',
]);

const cli = meow(`
	Usage
	  $ doge-seed [bits]

	The first argument is the number of bits to derive a BIP39 mnemonic from.
	Must be an integer, divisible by 32, in the range 128...256.
	The default value is 128.
`, {
	importMeta: import.meta,
});

(async () => {
	const bits = cli.input[0];

	const seed = (bits ? dogeSeed(Number(bits)) : dogeSeed())
		.split(' ')
		.map(word => chalk[randomColor()](word))
		.join(' ');

	const seedBox = boxen(seed, {
		float: 'center',
		padding: 1,
		borderStyle: 'round',
		borderColor: 'yellow',
		dimBorder: true,
	});

	if (isIterm) {
		console.log(termImg(dogeImage, {width: '100%'}));
	} else {
		console.log(await terminalImage.file(dogeImage));
	}

	console.log(seedBox, '\n\n\n');
})();
