module.exports = {
    root: true,
    env: {
        node: false
    },
    extends: [
        'eslint:recommended',
        'standard',
        'prettier'
    ],
    rules: {},

    overrides: [
        {
            files: ['**/*.spec.js', '**/__tests__/**.js', '**/*.spec.ts', '**/__tests__/**.ts'],
            env: {
                jest: true
            }
        }
    ],

    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaFeatures: {
            legacyDecorators: true
        }
    }
}