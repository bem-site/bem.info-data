{
    "block": "md-root",
    "content": [
        {
            "level": 1,
            "block": "heading",
            "mods": {
                "level": 1
            },
            "content": "objects"
        },
        {
            "block": "paragraph",
            "content": "Блок предоставляет объект, содержащий набор методов для работы с объектами JavaScript."
        },
        {
            "level": 2,
            "block": "heading",
            "mods": {
                "level": 2
            },
            "content": "Обзор"
        },
        {
            "level": 3,
            "block": "heading",
            "mods": {
                "level": 3
            },
            "content": "Свойства и методы объекта"
        },
        {
            "align": [
                null,
                null,
                null
            ],
            "block": "table",
            "rows": [
                [
                    "Имя",
                    "Тип возвращаемого значения",
                    "Описание"
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-extend\">"
                        },
                        "extend",
                        {
                            "block": "html",
                            "content": "</a>"
                        },
                        "(",
                        {
                            "block": "html",
                            "content": "<br>"
                        },
                        {
                            "block": "inline-code",
                            "content": "target {Object}"
                        },
                        ", ",
                        {
                            "block": "html",
                            "content": "<br>"
                        },
                        {
                            "block": "inline-code",
                            "content": "source {Object}"
                        },
                        ")"
                    ],
                    {
                        "block": "inline-code",
                        "content": "Object"
                    },
                    "Расширяет объект свойствами другого объекта."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-isEmpty\">"
                        },
                        "isEmpty",
                        {
                            "block": "html",
                            "content": "</a>"
                        },
                        "(",
                        {
                            "block": "inline-code",
                            "content": "obj {Object}"
                        },
                        ")"
                    ],
                    {
                        "block": "inline-code",
                        "content": "Boolean"
                    },
                    "Позволяет выяснить пуст ли переданный объект."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-each\">"
                        },
                        "each",
                        {
                            "block": "html",
                            "content": "</a>"
                        },
                        "(",
                        {
                            "block": "html",
                            "content": "<br>"
                        },
                        {
                            "block": "inline-code",
                            "content": "obj {Object}"
                        },
                        ", ",
                        {
                            "block": "html",
                            "content": "<br>"
                        },
                        {
                            "block": "inline-code",
                            "content": "fn {Function}"
                        },
                        ", ",
                        {
                            "block": "html",
                            "content": "<br>"
                        },
                        {
                            "block": "inline-code",
                            "content": "[ctx {Object}]"
                        },
                        ")"
                    ],
                    "-",
                    "Итеративно обходит собственные свойства объекта."
                ]
            ]
        },
        {
            "level": 3,
            "block": "heading",
            "mods": {
                "level": 3
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
        },
        {
            "level": 2,
            "block": "heading",
            "mods": {
                "level": 2
            },
            "content": "Описание"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields\">"
                },
                {
                    "block": "html",
                    "content": "</a>"
                }
            ]
        },
        {
            "level": 3,
            "block": "heading",
            "mods": {
                "level": 3
            },
            "content": "Свойства и методы объекта"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-extend\">"
                },
                {
                    "block": "html",
                    "content": "</a>"
                }
            ]
        },
        {
            "level": 4,
            "block": "heading",
            "mods": {
                "level": 4
            },
            "content": [
                "Метод ",
                {
                    "block": "inline-code",
                    "content": "extend"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": "Расширяет объект свойствами другого объекта. Копируются только собственные свойства, не полученные по цепочке прототипов."
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
                        "content": [
                            {
                                "block": "inline-code",
                                "content": "target {Object}"
                            },
                            " – целевой объект. Обязательный аргумент."
                        ]
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": [
                            {
                                "block": "inline-code",
                                "content": "source {Object}"
                            },
                            " – объект, свойства которого добавляются к целевому. Может быть передано несколько объектов. Свойства каждого из них будут добавлены к целевому. Обязательный аргумент."
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
                    "content": "Object"
                },
                ". Целевой объект с добавленными свойствами."
            ]
        },
        {
            "block": "paragraph",
            "content": "Пример:"
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['objects'], function(objects) {\n\nvar obj1 = { a : 1, b : 2 },\n    obj2 = { b : 3, c : 4 };\n\nconsole.log(objects.extend(obj1, obj2)); // { a : 1, b : 3, c : 4 }\n});\n"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-isEmpty\">"
                },
                {
                    "block": "html",
                    "content": "</a>"
                }
            ]
        },
        {
            "level": 4,
            "block": "heading",
            "mods": {
                "level": 4
            },
            "content": [
                "Метод ",
                {
                    "block": "inline-code",
                    "content": "isEmpty"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": "Позволяет выяснить пуст ли переданный объект. Другими словами, имеет ли объект собственные свойства."
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
            "content": {
                "loose": false,
                "checked": null,
                "block": "list-item",
                "content": {
                    "block": "paragraph",
                    "content": [
                        {
                            "block": "inline-code",
                            "content": "obj {Object}"
                        },
                        " – объект для проверки. Обязательный аргумент."
                    ]
                }
            }
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
                    "content": "Boolean"
                },
                ". В случае, если объект не имеет собственных свойств – ",
                {
                    "block": "inline-code",
                    "content": "true"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": "Пример:"
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['objects'], function(objects) {\n\nvar obj1 = {},\n    obj2 = { foo : 'bar' };\n\nconsole.log(objects.isEmpty(obj1)); // true\nconsole.log(objects.isEmpty(obj2)); // false\n});\n"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-each\">"
                },
                {
                    "block": "html",
                    "content": "</a>"
                }
            ]
        },
        {
            "level": 4,
            "block": "heading",
            "mods": {
                "level": 4
            },
            "content": [
                "Метод ",
                {
                    "block": "inline-code",
                    "content": "each"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": "Служит для итерации по собственным свойствам объекта. Для каждого собственного свойства вызывается функция-обработчик."
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
                        "content": [
                            {
                                "block": "inline-code",
                                "content": "obj {Object}"
                            },
                            " – объект, обход свойств которого производится. Обязательный аргумент."
                        ]
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": [
                            {
                                "block": "inline-code",
                                "content": "fn {Function}"
                            },
                            " – функция-обработчик, вызываемая для каждого свойства. Обязательный аргумент."
                        ]
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": " – контекст обработчика."
                    }
                }
            ]
        },
        {
            "block": "paragraph",
            "content": "Не имеет возвращаемого значения."
        },
        {
            "block": "paragraph",
            "content": "Функция-обработчик получает в качестве аргументов значение и ключ свойства объекта, для которого была вызвана."
        },
        {
            "block": "paragraph",
            "content": "Пример:"
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['objects'], function(objects) {\n    objects.each(\n        { a : 1, b : 2 },\n        function(val, key) {\n            console.log(key, val);\n        });\n    // a 1\n    // b 2\n});\n"
        }
    ]
}