/**
 * Commit Lint Config Emoji Log
 *
 * Rules are made up by a name and a configuration array.
 * The configuration array contains:
 * 1. Level:      | [0..2] | 0 = disables | 1 = considered a warning | 2 an error for the rule.
 * 2. Applicable: | always/never | never inverts the rule.
 * 3. Value:      | value to use for this rule.
 *
 * @link https://github.com/marionebl/commitlint/blob/master/docs/reference-rules.md
 */

module.exports = {
	parserPreset: {
		parserOpts: {
			headerPattern: /^(.*\w*): (.*)$/,
			headerCorrespondence: ['type', 'subject']
		}
	},
	rules: {
		'body-leading-blank': [1, 'always'],
		'footer-leading-blank': [1, 'always'],
		'header-max-length': [2, 'always', 72],
		'scope-case': [2, 'always', 'lower-case'], // ?
		'subject-empty': [2, 'never'],
		'subject-full-stop': [2, 'never', '.'],
		'type-empty': [2, 'never'],
		'type-case': [2, 'always', 'upper-case'],
		'type-enum': [2, 'always', ['📦 NEW', '👌 IMPROVE', '🐛 FIX', '🚀 RELEASE', '📖 DOC', '🔎 TEST', '‼️ BREAKING']]
	}
};
