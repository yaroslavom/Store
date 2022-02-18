// {
//     "root": true,
//     "parser": "@typescript-eslint/parser",
//     "plugins": ["@typescript-eslint"],
//     "extends": [
//         "eslint:recommended",
//         "plugin:@typescript-eslint/eslint-recommended",
//         "plugin:@typescript-eslint/recommended",
//         "plugin:prettier/recommended"
//     ],
//     "rules": {
//         "@typescript-eslint/ban-types": "off",
//         "@typescript-eslint/no-unused-vars": [
//             "off"
//         ],
//         "@typescript-eslint/no-explicit-any": "off",
//         "@typescript-eslint/explicit-function-return-type": [
//             "warn"
//         ],
//         "prettier/prettier": [
//             "error",
//             {
//                 "singleQuote": true,
//                 "trailingComma": "all",
//                 "useTabs": true,
//                 "tabWidth": 2,
//                 "semi": true,
//                 "bracketSpacing": true,
//                 "printWidth": 100,
//                 "endOfLine": "auto"
//             }
//         ]
//     }
// }

module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: [
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'plugin:jsx-a11y/recommended',
		'plugin:eslint-comments/recommended',
		'prettier/@typescript-eslint',
		'plugin:prettier/recommended',
	],
	rules: {
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': ['error'],
		'@typescript-eslint/no-var-requires': 'off',
		'react/prop-types': 'off',
		'react/jsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
	},
};
