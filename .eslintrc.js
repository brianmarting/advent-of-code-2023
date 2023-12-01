module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        node: true
    },
    "extends": "eslint:recommended",
    'parserOptions': {
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    parser: '@typescript-eslint/parser',
    "rules": {
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "no-useless-escape": "off"
    },
    "overrides": [
        {
            "files": [
                "**/*.test.ts"
            ],
            "env": {
                "jest": true
            }
        }
    ]
}