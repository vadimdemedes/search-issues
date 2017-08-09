'use strict';

const got = require('got');

module.exports = (repository, query) => {
	return got(`https://api.github.com/search/issues?q=${encodeURIComponent(query)}+repo:${repository}`, {
		json: true
	}).then(res => {
		return res.body.items.map(issue => ({
			url: issue.html_url, // eslint-disable-line camelcase
			number: issue.number,
			title: issue.title,
			user: issue.user.login,
			state: issue.state
		}));
	});
};
