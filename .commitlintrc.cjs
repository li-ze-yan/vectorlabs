module.exports = {
	// 采用cz自定义的提交规范
	extends: ['cz'],
	scopes: [],
	rules: {
		'type-empty': [2, 'never'],
		'type-enum': [
			2,
			'always',
			['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'revert', 'ci', 'perf', 'build', 'init'],
		],
		// 允许空的scope
		'scope-empty': [2, 'always'],
		'subject-full-stop': [0, 'never'],
		'subject-empty': [2, 'never'],
		'subject-case': [0, 'never'],
	},
}
