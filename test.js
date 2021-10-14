import test from 'ava';
import execa from 'execa';

test('main', async t => {
	const {stdout} = await execa('./cli.js');
	t.regex(stdout, /(?:\w+ ){4}\w+/);
});
