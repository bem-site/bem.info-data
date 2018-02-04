{
    "block": "md-root",
    "content": [
        {
            "level": 1,
            "block": "heading",
            "mods": {
                "level": 1
            },
            "content": "idle"
        },
        {
            "block": "paragraph",
            "content": "Блок предоставляет объект, содержащий набор методов для генерации события в момент прекращения пользовательской активности (т.е. пользователь работает с другим окном или не совершает действий)."
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
            "block": "paragraph",
            "content": "Доступен следующий набор событий:"
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
                            "content": "<a href=\"#events-idle\">"
                        },
                        "idle",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    "Браузер простаивает."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#events-wakeup\">"
                        },
                        "wakeup",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    "Пользователь возобновил активность."
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
                    "Возвращаемое значение",
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
                    "Запуск отслеживания пользовательской активности."
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
                    "Остановка отслеживания пользовательской активности."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-isIdle\">"
                        },
                        "isIdle",
                        {
                            "block": "html",
                            "content": "</a>"
                        },
                        "()"
                    ],
                    {
                        "block": "inline-code",
                        "content": "Boolean"
                    },
                    "Проверка текущего состояния."
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
                        "content": "auto"
                    },
                    {
                        "block": "inline-code",
                        "content": "JS"
                    },
                    "Автоматический запуск отслеживания пользовательской активности."
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
            "content": "Подписавшись на события блока можно приостанавливать выполнение операций, например, отображение анимации, при отсутствии пользовательской активности."
        },
        {
            "block": "paragraph",
            "content": [
                "Блок наследуется от класса ",
                {
                    "block": "inline-code",
                    "content": "Emitter"
                },
                " блока ",
                {
                    "block": "inline-code",
                    "content": "events"
                },
                ", что позволяет вызывать его методы."
            ]
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['idle'], function(idle) {\n\nidle\n    .on({\n        idle : function() {\n            // обработчик события idle\n        },\n        wakeup : function() {\n            // обработчик события wakeup\n        }\n    })\n    .start(); // запуск генерации событий\n\n});\n"
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
                    "content": "<a name=\"events-idle\">"
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
                    "content": "idle"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": "Генерируется при прекращении пользовательской активности."
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"events-wakeup\">"
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
                    "content": "wakeup"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": "Генерируется в момент возобновления пользовательской активности."
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
            "content": "Запуск отслеживания пользовательской активности."
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
            "lang": "js",
            "block": "code",
            "content": "modules.require(['idle'], function(idle) {\n\nidle.start()\n\n});\n"
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
            "content": "Служит для прекращения отслеживания пользовательской активности."
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
            "lang": "js",
            "block": "code",
            "content": "modules.require(['idle'], function(idle) {\n\nidle.start() // начинаем отслеживать активность\nidle.stop() // прекращаем отслеживать активность\n\n});\n"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-isIdle\">"
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
                    "content": "isIdle"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": "Служит для проверки наличия пользовательской активности."
        },
        {
            "block": "paragraph",
            "content": "Не принимает аргументов."
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
                ". В случае если активность отсутствует – ",
                {
                    "block": "inline-code",
                    "content": "true"
                },
                "."
            ]
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['idle'], function(idle) {\n\nidle.isIdle() // true или false, в зависимости от текущего состояния\n\n});\n"
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
                "Способ использования: подключается в файле зависимостей ",
                {
                    "block": "inline-code",
                    "content": "deps.js"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": "Автоматический запуск отслеживания пользовательской активности."
        }
    ]
}