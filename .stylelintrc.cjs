module.exports = {
	extends: ['stylelint-config-standard', 'stylelint-config-rational-order', 'stylelint-config-prettier'],
	plugins: ['stylelint-order', 'stylelint-declaration-block-no-ignored-properties'],
	rules: {
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
			},
		],
		'declaration-block-trailing-semicolon': null,
		'no-descending-specificity': null,
	},
	ignoreFiles: ['node_modules/**/*', 'build/**/*'],
}
