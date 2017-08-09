# search-issues [![Build Status](https://travis-ci.org/vadimdemedes/search-issues.svg?branch=master)](https://travis-ci.org/vadimdemedes/search-issues)

> Search GitHub issues


## Install

```
$ npm install search-issues
```


## Usage

```js
const searchIssues = require('search-issues');

const issues = await searchIssues('avajs/ava', 'Babel');
//=>
// [
// 	{
// 		url: 'https://github.com/avajs/ava/issues/709',
// 		number: 709,
// 		title: 'Disabling Babel',
// 		user: 'jamestalmage',
// 		state: 'open'
// 	}
// ]
```


## API

### searchIssues(repository, query)

#### repository

Type: `string`

Repository to search. E.g. `avajs/ava`.

#### query

Type: `string`

Search query.


## License

MIT © [Vadim Demedes](https://github.com/vadimdemedes)
