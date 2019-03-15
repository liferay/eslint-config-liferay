/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: MIT
 */

'use strict';

const config = {
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ['react', 'react-hooks'],
	rules: {
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'react/jsx-boolean-value': 'error',
		'react/jsx-handler-names': 'error',
		'react/jsx-key': 'error',
		'react/jsx-no-bind': 'error',
		'react/jsx-no-literals': 'error',
		'react/jsx-sort-props': 'error',
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
	},
};

module.exports = config;
