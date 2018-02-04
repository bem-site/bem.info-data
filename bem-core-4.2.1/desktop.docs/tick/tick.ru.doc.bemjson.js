{
    "block": "md-root",
    "content": [
        {
            "level": 1,
            "block": "heading",
            "mods": {
                "level": 1
            },
            "content": "tick"
        },
        {
            "block": "paragraph",
            "content": [
                "Блок предоставляет объект для работы с регулярно генерируемым событием ",
                {
                    "block": "inline-code",
                    "content": "tick"
                },
                " (для реализации паттерна polling)."
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
            "content": "События объекта"
        },
        {
            "align": [
                null,
                null
            ],
            "block": "table",
            "rows": [
                [
                    "Имя",
                    "Описание"
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#events-tick\">"
                        },
                        "tick",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    "Регулярно генерируемое событие."
                ]
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
            "align": [
                null,
                null,
                null
            ],
            "block": "table",
            "rows": [
                [
                    "Имя",
                    "Тп возвращаемого значения",
                    "Описание"
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-start\">"
                        },
                        "start",
                        {
                            "block": "html",
                            "content": "</a>"
                        },
                        "()"
                    ],
                    "-",
                    [
                        "Запускает генерацию события ",
                        {
                            "block": "inline-code",
                            "content": "tick"
                        },
                        ", если она еще не запущена."
                    ]
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-stop\">"
                        },
                        "stop",
                        {
                            "block": "html",
                            "content": "</a>"
                        },
                        "()"
                    ],
                    "-",
                    [
                        "Останавливает генерацию события ",
                        {
                            "block": "inline-code",
                            "content": "tick"
                        },
                        ", если она еще не остановлена."
                    ]
                ]
            ]
        },
        {
            "level": 3,
            "block": "heading",
            "mods": {
                "level": 3
            },
            "content": "Модификаторы блока"
        },
        {
            "align": [
                null,
                null,
                null,
                null
            ],
            "block": "table",
            "rows": [
                [
                    "Модификатор",
                    "Допустимые значения",
                    "Способы использования",
                    "Описание"
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#modifiers-start\">"
                        },
                        "start",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "'auto'"
                    },
                    {
                        "block": "inline-code",
                        "content": "JS"
                    },
                    "Автоматический запуск генерации события"
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
                    "content": "<a name=\"events\">"
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
            "content": "События объекта"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"events-tick\">"
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
                "Событие ",
                {
                    "block": "inline-code",
                    "content": "tick"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": "Подписавшись на событие, можно использовать его для реализации паттерна polling."
        },
        {
            "block": "paragraph",
            "content": "Событие генерируется с интервалом в 50 миллисекунд."
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
                "Блок наследуется от клсаса ",
                {
                    "block": "inline-code",
                    "content": "Emitter"
                },
                " блока ",
                {
                    "block": "inline-code",
                    "content": "events"
                },
                ", что позволяет вызывать методы класса."
            ]
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require('tick', function(tick) {\n\nvar update = function() { /* ... */ };\n\ntick\n    .on('tick', update) // подписываемся на событие tick\n    .start(); // запускаем генерацию события tick\n});\n"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-start\">"
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
                    "content": "start"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Запускает генерацию события ",
                {
                    "href": "#fields-tick",
                    "block": "link",
                    "content": "tick"
                },
                ", если они еще не запущены. Событие ",
                {
                    "block": "inline-code",
                    "content": "tick"
                },
                " генерируется через интервал в 50 миллисекунд после вызова метода."
            ]
        },
        {
            "block": "paragraph",
            "content": "Не принимает аргументов."
        },
        {
            "block": "paragraph",
            "content": "Не имеет возвращаемого значения."
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-stop\">"
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
                    "content": "stop"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Останавливает генерацию события ",
                {
                    "href": "#fields-tick",
                    "block": "link",
                    "content": "tick"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": "Не принимает аргументов."
        },
        {
            "block": "paragraph",
            "content": "Не имеет возвращаемого значения."
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"modifiers\">"
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
            "content": "Модификаторы блока"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"modifiers-start\">"
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
                "Модификатор ",
                {
                    "block": "inline-code",
                    "content": "start"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Допустимые значения: ",
                {
                    "block": "inline-code",
                    "content": "'auto'"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Способ использования: ",
                {
                    "block": "inline-code",
                    "content": "JS"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Блок с модификатором ",
                {
                    "block": "inline-code",
                    "content": "start"
                },
                " в значении ",
                {
                    "block": "inline-code",
                    "content": "auto"
                },
                " используется для автоматического запуска генерации события ",
                {
                    "href": "#fields-tick",
                    "block": "link",
                    "content": "tick"
                },
                ". Событие начинает генерироваться в момент инициализации блока."
            ]
        }
    ]
}