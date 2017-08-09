import test from 'ava';
import search from '.';

test('search issues', async t => {
	const issues = await search('avajs/ava', 'babel');

	t.true(issues.length > 0);

	issues.forEach(issue => {
		t.deepEqual(Object.keys(issue).sort(), [
			'url',
			'number',
			'title',
			'user',
			'state'
		].sort());
	});
});
