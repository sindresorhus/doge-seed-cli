#!/usr/bin/env node
'use strict';
const path = require('path');
const meow = require('meow');
const terminalImage = require('terminal-image');
const termImg = require('term-img');
const chalk = require('chalk');
const boxen = require('boxen');
const uniqueRandomArray = require('unique-random-array');
const dogeSeed = require('doge-seed');

const isIterm = process.env.TERM_PROGRAM === 'iTerm.app';
const dogeImage = path.join(__dirname, 'doge.png');

const randomColor = uniqueRandomArray([
	'red',
	'green',
	'yellow',
	'blue',
	'magenta',
	'cyan'
]);

const cli = meow(`
	Usage
	  $ doge-seed [bits]

	The first argument is the number of bits to derive a BIP39 mnemonic from.
	Must be an integer, divisible by 32, in the range 128...256.
	The default value is 128.
`);

(async () => {
	const bits = cli.input[0];

	const seed = (bits ? dogeSeed(Number(bits)) : dogeSeed())
		.split(' ')
		.map(x => chalk[randomColor()](x))
		.join(' ');

	const seedBox = boxen(seed, {
		float: 'center',
		padding: 1,
		borderStyle: 'round',
		borderColor: 'yellow',
		dimBorder: true
	});

	if (isIterm) {
		termImg(dogeImage, {width: '100%'});
	} else {
		console.log(await terminalImage.file(dogeImage));
	}

	console.log(seedBox, '\n\n\n');
})();
