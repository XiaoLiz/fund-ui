module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
    },
    "extends": [
        'plugin:vue/vue3-essential',
        "eslint:recommended",
        "plugin:vue/essential",
        "plugin:@typescript-eslint/recommended",
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
    }
}
