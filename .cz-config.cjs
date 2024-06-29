module.exports = {
	types: [
		{ value: 'feat', name: '✨ feat:            new features' },
		{ value: 'fix', name: '🐛 fix:             fix bugs' },
		{ value: 'docs', name: '📜 docs:            change document' },
		{ value: 'style', name: '🔖 style:           format repair' },
		{ value: 'refactor', name: '️♻️  refactor:        code refactoring' },
		{ value: 'perf', name: '️️⚡️ perf:            performance improvement' },
		{ value: 'test', name: '🪲  test:            test authoring' },
		{ value: 'build', name: '🔧 build:           infrastructure integration' },
		{ value: 'rollback', name: '⏪ rollback:        version rollback' },
		{ value: 'addLog', name: '🫡  addLog:      add Log' },
	],
	messages: {
		type: "Select the type of change that you're committing:",
		subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
		confirmCommit: 'Are you sure you want to proceed with the commit above?',
	},
	subjectLimit: 100,
	skipQuestions: ['scope', 'body', 'breaking', 'footer'],
}
