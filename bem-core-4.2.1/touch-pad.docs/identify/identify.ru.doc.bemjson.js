{
    "block": "md-root",
    "content": [
        {
            "level": 1,
            "block": "heading",
            "mods": {
                "level": 1
            },
            "content": "identify"
        },
        {
            "block": "paragraph",
            "content": "Блок предоставляет функцию для работы с уникальными идентификаторами, которая позволяет:"
        },
        {
            "ordered": false,
            "loose": false,
            "block": "list",
            "content": [
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": "создавать идентификаторы объектов;"
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": "проверять у объектов наличие идентификатора;"
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": "создавать уникальную строку-идентификатор."
                    }
                }
            ]
        },
        {
            "block": "paragraph",
            "content": {
                "block": "strong",
                "content": "Принимаемые аргументы:"
            }
        },
        {
            "ordered": false,
            "loose": false,
            "block": "list",
            "content": [
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": " – идентифицируемый объект."
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": [
                            " – флаг для проверки наличия у объекта идентификатора. Если ",
                            {
                                "block": "inline-code",
                                "content": "true"
                            },
                            ", функция будет возвращать строку с идентификатором только если объект был заранее идентифицирован. По умолчанию ",
                            {
                                "block": "inline-code",
                                "content": "false"
                            },
                            "."
                        ]
                    }
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "strong",
                    "content": "Возвращаемое значение:"
                },
                " ",
                {
                    "block": "inline-code",
                    "content": "String"
                },
                ". Строка с идентификатором, присвоенным объекту. При последующих вызовах всегда будет возвращаться один и тот же идентификатор."
            ]
        },
        {
            "block": "paragraph",
            "content": "Пример:"
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['identify'], function(identify) {\n    var a = {},\n        b = {},\n        identA = identify(a);\n\n    console.log(identA === identify(a)); // true\n    console.log(identA === identify(b)); // false\n});\n"
        },
        {
            "block": "paragraph",
            "content": "При вызове без аргументов, функция будет каждый раз возвращать строку с уникальным идентификатором."
        },
        {
            "block": "paragraph",
            "content": "Пример:"
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['identify'], function(identify) {\n    var a = identify(),\n        b = identify();\n\n    console.log(a === b); // false\n});\n"
        },
        {
            "level": 2,
            "block": "heading",
            "mods": {
                "level": 2
            },
            "content": "Публичные технологии блока"
        },
        {
            "block": "paragraph",
            "content": "Блок реализован в технологиях:"
        },
        {
            "ordered": false,
            "loose": false,
            "block": "list",
            "content": {
                "loose": false,
                "checked": null,
                "block": "list-item",
                "content": {
                    "block": "paragraph",
                    "content": {
                        "block": "inline-code",
                        "content": "vanilla.js"
                    }
                }
            }
        }
    ]
}