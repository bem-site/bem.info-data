{
    "block": "md-root",
    "content": [
        {
            "level": 1,
            "block": "heading",
            "mods": {
                "level": 1
            },
            "content": "cookie"
        },
        {
            "block": "paragraph",
            "content": [
                "Блок предоставляет объект, содержащий набор методов для работы с cookie браузера (JS-свойство ",
                {
                    "block": "inline-code",
                    "content": "document.cookie"
                },
                ")."
            ]
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
                            "content": "<a href=\"#fields-get\">"
                        },
                        "get",
                        {
                            "block": "html",
                            "content": "</a>"
                        },
                        "(",
                        {
                            "block": "inline-code",
                            "content": "name"
                        },
                        ")"
                    ],
                    [
                        {
                            "block": "inline-code",
                            "content": "String"
                        },
                        " ",
                        "|",
                        " ",
                        {
                            "block": "inline-code",
                            "content": "null"
                        }
                    ],
                    "Служит для получения значения, хранящегося в cookie браузера."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-set\">"
                        },
                        "set",
                        {
                            "block": "html",
                            "content": "</a>"
                        },
                        "(",
                        {
                            "block": "inline-code",
                            "content": "name"
                        },
                        ", ",
                        {
                            "block": "inline-code",
                            "content": "val"
                        },
                        ", ",
                        {
                            "block": "inline-code",
                            "content": "[options]"
                        },
                        ")"
                    ],
                    {
                        "block": "inline-code",
                        "content": "String"
                    },
                    "Cлужит для записи cookie с заданным именем."
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
                        "content": "js"
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
                    "content": "<a name=\"fields-get\">"
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
                    "content": "get"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": "Метод служит для получения значения, хранящегося в cookie, для имени переданного аргументом."
        },
        {
            "block": "paragraph",
            "content": {
                "block": "strong",
                "content": "Принимаемые аргументы:"
            }
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
                    "Аргумент",
                    "Тип",
                    "Описание"
                ],
                [
                    [
                        {
                            "block": "inline-code",
                            "content": "name"
                        },
                        "*"
                    ],
                    {
                        "block": "inline-code",
                        "content": "String"
                    },
                    "Имя cookie."
                ]
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "*",
                " Обязательный аргумент."
            ]
        },
        {
            "block": "paragraph",
            "content": {
                "block": "strong",
                "content": "Возвращает:"
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
                                "content": "String"
                            },
                            " — если cookie с заданным именем было установлено. Значение автоматически декодируется с помощью ",
                            {
                                "href": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent",
                                "block": "link",
                                "content": "decodeURIComponent"
                            },
                            "."
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
                                "content": "null"
                            },
                            " — если cookie с заданным именем отсутствует."
                        ]
                    }
                }
            ]
        },
        {
            "block": "paragraph",
            "content": "Пример:"
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require('cookie', function(cookie) {\n\n    cookie.set('mycookie', 'foobar');\n    console.log(cookie.get('mycookie')); // 'foobar'\n    console.log(cookie.get('foo')); // null\n\n});\n"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-set\">"
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
                    "content": "set"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": "Метод служит для записи cookie с заданным именем. Помимо имени и значения, методу можно передать хеш с дополнительными параметрами cookie."
        },
        {
            "block": "paragraph",
            "content": {
                "block": "strong",
                "content": "Принимаемые аргументы:"
            }
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
                    "Аргумент",
                    "Тип",
                    "Описание"
                ],
                [
                    [
                        {
                            "block": "inline-code",
                            "content": "name"
                        },
                        "*"
                    ],
                    {
                        "block": "inline-code",
                        "content": "String"
                    },
                    "Имя cookie."
                ],
                [
                    [
                        {
                            "block": "inline-code",
                            "content": "val"
                        },
                        "*"
                    ],
                    [
                        {
                            "block": "inline-code",
                            "content": "String"
                        },
                        " ",
                        "|",
                        " ",
                        {
                            "block": "inline-code",
                            "content": "null"
                        }
                    ],
                    [
                        "Значение cookie. При установке в качестве значения ",
                        {
                            "block": "inline-code",
                            "content": "null"
                        },
                        " cookie удаляется."
                    ]
                ],
                [
                    null,
                    {
                        "block": "inline-code",
                        "content": "Object"
                    },
                    [
                        "Опции. ",
                        {
                            "block": "html",
                            "content": "</br>"
                        },
                        {
                            "block": "html",
                            "content": "</br>"
                        },
                        " Свойства объекта: ",
                        {
                            "block": "html",
                            "content": "</br>"
                        },
                        {
                            "block": "html",
                            "content": "</br>"
                        },
                        " ",
                        "•",
                        " ",
                        {
                            "block": "inline-code",
                            "content": "expires"
                        },
                        " (",
                        {
                            "block": "inline-code",
                            "content": "Number"
                        },
                        ") – срок жизни cookie в сутках. При отрицательном значении cookie будет удалено. Альтернативно, можно передать в качестве значения сформированный объект даты (",
                        {
                            "block": "inline-code",
                            "content": "new Date()"
                        },
                        "). ",
                        {
                            "block": "html",
                            "content": "</br>"
                        },
                        " ",
                        "•",
                        " ",
                        {
                            "block": "inline-code",
                            "content": "path"
                        },
                        " (",
                        {
                            "block": "inline-code",
                            "content": "String"
                        },
                        ") – путь от корня домена внутри которого будет доступно cookie. ",
                        {
                            "block": "html",
                            "content": "</br>"
                        },
                        " ",
                        "•",
                        " ",
                        {
                            "block": "inline-code",
                            "content": "domain"
                        },
                        " (",
                        {
                            "block": "inline-code",
                            "content": "String"
                        },
                        ") – домен. По умолчанию текущий домен. ",
                        {
                            "block": "html",
                            "content": "</br>"
                        },
                        " ",
                        "•",
                        " ",
                        {
                            "block": "inline-code",
                            "content": "secure"
                        },
                        " (",
                        {
                            "block": "inline-code",
                            "content": "Boolean"
                        },
                        ") – флаг, указывающий на необходимость использования с cookie шифрованного соединения SSL. По умолчанию ",
                        {
                            "block": "inline-code",
                            "content": "false"
                        },
                        "."
                    ]
                ]
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "*",
                " Обязательный аргумент."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "strong",
                    "content": "Возвращает:"
                },
                " объект ",
                {
                    "block": "inline-code",
                    "content": "this"
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
            "content": "modules.require('cookie', function(cookie) {\n\n    cookie.set('mycookie', 'foobar', {\n        expires : 1, // срок жизни одни сутки\n        path : '/', // доступно для всех страниц\n        secure : true // передавать cookie только по SSL\n    });\n\n    console.log(cookie.get('mycookie')); // 'foobar'\n\n    cookie.set('mycookie', null); // удаляем cookie\n    console.log(cookie.get('mycookie')); // null\n\n});\n"
        }
    ]
}