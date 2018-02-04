{
    "block": "md-root",
    "content": [
        {
            "level": 1,
            "block": "heading",
            "mods": {
                "level": 1
            },
            "content": "i18n"
        },
        {
            "block": "paragraph",
            "content": "Блок предоставляет функцию для интернационализации проекта.\nМожет быть использован в браузере и в node.js-окружении."
        },
        {
            "level": 2,
            "block": "heading",
            "mods": {
                "level": 2
            },
            "content": "Сигнатура"
        },
        {
            "lang": "js",
            "block": "code",
            "content": "/**\n * @exports\n * @param {String} keyset\n * @param {String} key\n * @param {Object} [params]\n * @returns {String}\n */\ni18n(keyset, key, params);\n"
        },
        {
            "block": "paragraph",
            "content": "Например:"
        },
        {
            "lang": "js",
            "block": "code",
            "content": "i18n('keyset1', 'key2', { a : '1' });\n"
        },
        {
            "block": "paragraph",
            "content": [
                "Для добавления переводов используется метод ",
                {
                    "block": "inline-code",
                    "content": "decl"
                },
                ":"
            ]
        },
        {
            "lang": "js",
            "block": "code",
            "content": "i18n.decl({\n    keyset1 : {\n        key1 : 'keyset1 key1 string',\n        key2 : function(params) {\n            return 'keyset1 key2 function ' + JSON.stringify(params);\n        },\n        key3 : function(params) {\n            return 'keyset1 key3 ' + this('keyset1', 'key2', params);\n        }\n    }\n});\n"
        },
        {
            "block": "paragraph",
            "content": [
                "Документацию на сборку проекта с интернационализацией см. в пакете для сборки ",
                {
                    "href": "https://ru.bem.info/tools/bem/enb-bem-i18n/readme/",
                    "block": "link",
                    "content": "enb-bem-i18n"
                },
                "."
            ]
        }
    ]
}