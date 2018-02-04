{
    "block": "md-root",
    "content": [
        {
            "level": 1,
            "block": "heading",
            "mods": {
                "level": 1
            },
            "content": "events"
        },
        {
            "block": "paragraph",
            "content": "Блок предоставляет набор JS-классов, реализующий механизмы работы с событиями."
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
            "content": "Классы, предоставляемые блоком"
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
                    "Класс",
                    "Конструктор",
                    "Описание"
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#class-Event\">"
                        },
                        "Event",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        "Event(",
                        {
                            "block": "html",
                            "content": "<br>"
                        },
                        {
                            "block": "inline-code",
                            "content": "type {String}"
                        },
                        ", ",
                        {
                            "block": "html",
                            "content": "<br>"
                        },
                        {
                            "block": "inline-code",
                            "content": "target {Object}"
                        },
                        ")"
                    ],
                    "Служит для создания объекта события, изменения и проверки его состояний."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#class-Emitter\">"
                        },
                        "Emitter",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    "-",
                    "Служит для генерации событий и подписки на них."
                ]
            ]
        },
        {
            "level": 3,
            "block": "heading",
            "mods": {
                "level": 3
            },
            "content": "Свойства и методы объекта класса"
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
                    "Класс",
                    "Имя",
                    "Тип или возвращаемое значение",
                    "Описание"
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#class-Event\">"
                        },
                        "Event",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-type\">"
                        },
                        "type",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "String"
                    },
                    "Тип события."
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-result\">"
                        },
                        "result",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "*"
                    },
                    "Результат, возвращенный последним обработчиком события."
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-target\">"
                        },
                        "target",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "Object"
                    },
                    "Объект на котором возникло событие."
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-data\">"
                        },
                        "data",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "*"
                    },
                    "Данные, передаваемые как аргумент обработчику."
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-preventDefault\">"
                        },
                        "preventDefault",
                        {
                            "block": "html",
                            "content": "</a>"
                        },
                        "()"
                    ],
                    "-",
                    "Позволяет предотвратить выполнение стандартного действия предусмотренного для события."
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-isDefaultPrevented\">"
                        },
                        "isDefaultPrevented",
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
                    "Проверяет, было ли предотвращено выполнение стандартного действия, предусмотренного для события."
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-stopPropagation\">"
                        },
                        "stopPropagation",
                        {
                            "block": "html",
                            "content": "</a>"
                        },
                        "()"
                    ],
                    "-",
                    "Позволяет остановить всплывание события."
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-isPropagationStopped\">"
                        },
                        "isPropagationStopped",
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
                    "Проверяет, было ли остановлено всплывание события."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#class-Emitter\">"
                        },
                        "Emitter",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-on\">"
                        },
                        "on",
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
                            "content": "type {String}"
                        },
                        ", ",
                        {
                            "block": "html",
                            "content": "<br>"
                        },
                        {
                            "block": "inline-code",
                            "content": "[data {Object}]"
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
                            "content": "[ {Object} ctx]"
                        },
                        ")"
                    ],
                    "-",
                    "Служит для подписки на событие определенного типа."
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-once\">"
                        },
                        "once",
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
                            "content": "type {String}"
                        },
                        ", ",
                        {
                            "block": "html",
                            "content": "<br>"
                        },
                        {
                            "block": "inline-code",
                            "content": "[data {Object}]"
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
                    "Служит для подписки на событие определенного типа. Обработчик выполняется единожды."
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-un\">"
                        },
                        "un",
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
                            "content": "type {String}"
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
                    "Служит для удаления подписки на событие определенного типа."
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-emit\">"
                        },
                        "emit",
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
                            "content": "type {String"
                        },
                        "|",
                        {
                            "block": "inline-code",
                            "content": "events:Event}"
                        },
                        ", ",
                        {
                            "block": "html",
                            "content": "<br>"
                        },
                        {
                            "block": "inline-code",
                            "content": "[data {Object}]"
                        },
                        ")"
                    ],
                    "-",
                    "Служит для генерации события."
                ]
            ]
        },
        {
            "level": 3,
            "block": "heading",
            "mods": {
                "level": 3
            },
            "content": "Элементы блока"
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
                    "Элемент",
                    "Способы использования",
                    "Описание"
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#elems-channels\">"
                        },
                        "channels",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "JS"
                    },
                    "Предназначен для работы с именованными каналами событий."
                ]
            ]
        },
        {
            "level": 3,
            "block": "heading",
            "mods": {
                "level": 3
            },
            "content": "Функции предоставляемые элементами блока"
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
                    "Элемент",
                    "Функция",
                    "Тип возвращаемого значения",
                    "Описание"
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#elems-channels\">"
                        },
                        "channels",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        "channels(",
                        {
                            "block": "html",
                            "content": "<br>"
                        },
                        {
                            "block": "inline-code",
                            "content": "[id {String}]"
                        },
                        ", ",
                        {
                            "block": "html",
                            "content": "<br>"
                        },
                        {
                            "block": "inline-code",
                            "content": "[drop {Boolean}]"
                        },
                        ")"
                    ],
                    [
                        {
                            "block": "inline-code",
                            "content": "Object"
                        },
                        "|",
                        {
                            "block": "inline-code",
                            "content": "undefined"
                        }
                    ],
                    "Создает или удаляет именованный канал событий."
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
                    "content": "<a name=\"class-Event\">"
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
            "content": [
                "Класс ",
                {
                    "block": "inline-code",
                    "content": "Event"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "С помощью класса можно инстанцировать объект события, указав его тип и источник. Для этого нужно воспользоваться функцией-конструктором ",
                {
                    "block": "inline-code",
                    "content": "Event"
                },
                "."
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
                        "content": [
                            {
                                "block": "inline-code",
                                "content": "type {String}"
                            },
                            " – тип события. Обязательный аргумент."
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
                                "content": "target {Object}"
                            },
                            " – объект (источник) на котором событие возникло. Обязательный аргумент."
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
                    "content": "Event"
                },
                ". Объект события."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-Event\">"
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
            "content": "Свойства и методы объекта класса"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-type\">"
                },
                {
                    "block": "html",
                    "content": "</a>"
                }
            ]
        },
        {
            "level": 5,
            "block": "heading",
            "mods": {
                "level": 5
            },
            "content": [
                "Свойство ",
                {
                    "block": "inline-code",
                    "content": "type"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Тип: ",
                {
                    "block": "inline-code",
                    "content": "String"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": "Тип события."
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['events'], function(events) {\n\n    var myevent = new events.Event('myevent', this);\n    console.log(myevent.type); // 'myevent'\n\n});\n"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-type\">"
                },
                {
                    "block": "html",
                    "content": "</a>"
                }
            ]
        },
        {
            "level": 5,
            "block": "heading",
            "mods": {
                "level": 5
            },
            "content": [
                "Свойство ",
                {
                    "block": "inline-code",
                    "content": "target"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Тип: ",
                {
                    "block": "inline-code",
                    "content": "Object"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": "Объект, на котором возникло событие."
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-result\">"
                },
                {
                    "block": "html",
                    "content": "</a>"
                }
            ]
        },
        {
            "level": 5,
            "block": "heading",
            "mods": {
                "level": 5
            },
            "content": [
                "Свойство ",
                {
                    "block": "inline-code",
                    "content": "result"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Тип: ",
                {
                    "block": "inline-code",
                    "content": "*"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": "Содержит данные, возвращаемые последней функцией-обработчиком события."
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['events'], function(events) {\n\n    var myEmitter = new events.Emitter();\n    myEmitter.on('myevent', function() { return 'hi-hi-hi'; });\n\n    var myEvent = new events.Event('myevent');\n    myEmitter.emit(myEvent)\n\n    console.log(myEvent.result);    // 'hi-hi-hi'\n});\n"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-data\">"
                },
                {
                    "block": "html",
                    "content": "</a>"
                }
            ]
        },
        {
            "level": 5,
            "block": "heading",
            "mods": {
                "level": 5
            },
            "content": [
                "Свойство ",
                {
                    "block": "inline-code",
                    "content": "data"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Тип: ",
                {
                    "block": "inline-code",
                    "content": "*"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": "Содержит данные, передаваемые функции-обработчику события в качестве аргумента."
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['events'], function(events) {\n\n    var myEmitter = new events.Emitter();\n    myEmitter.on('myevent', 'my-data', function(e) { console.log(e.data); });\n\n    myEmitter.emit('myevent'); // my-data\n});\n"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-preventDefault\">"
                },
                {
                    "block": "html",
                    "content": "</a>"
                }
            ]
        },
        {
            "level": 5,
            "block": "heading",
            "mods": {
                "level": 5
            },
            "content": [
                "Метод ",
                {
                    "block": "inline-code",
                    "content": "preventDefault"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": "Позволяет предотвратить выполнение стандартного действия предусмотренного для события."
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
                    "content": "<a name=\"fields-isDefaultPrevented\">"
                },
                {
                    "block": "html",
                    "content": "</a>"
                }
            ]
        },
        {
            "level": 5,
            "block": "heading",
            "mods": {
                "level": 5
            },
            "content": [
                "Метод ",
                {
                    "block": "inline-code",
                    "content": "isDefaultPrevented"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": "Позволяет проверить было ли предотвращено выполнение стандартного действия для события."
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
                ". В случае, если выполнение стандартного действия было предотвращено – ",
                {
                    "block": "inline-code",
                    "content": "true"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-stopPropagation\">"
                },
                {
                    "block": "html",
                    "content": "</a>"
                }
            ]
        },
        {
            "level": 5,
            "block": "heading",
            "mods": {
                "level": 5
            },
            "content": [
                "Метод ",
                {
                    "block": "inline-code",
                    "content": "stopPropagation"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": "Позволяет остановить всплывание события."
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
                    "content": "<a name=\"fields-isPropagationStopped\">"
                },
                {
                    "block": "html",
                    "content": "</a>"
                }
            ]
        },
        {
            "level": 5,
            "block": "heading",
            "mods": {
                "level": 5
            },
            "content": [
                "Метод ",
                {
                    "block": "inline-code",
                    "content": "isPropagationStopped"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": "Позволяет проверить, было ли остановлено всплывание события."
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
                ". В случае, если всплывание события было остановлено – ",
                {
                    "block": "inline-code",
                    "content": "true"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"class-Emitter\">"
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
            "content": [
                "Класс ",
                {
                    "block": "inline-code",
                    "content": "Emitter"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": "Класс позволяет инстанцировать объекты, с помощью которых можно генерировать события и осуществлять подписку на них."
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['events'], function(events) {\n\n    var myEmitter = new events.Emitter();\n\n});\n"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-Event\">"
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
            "content": "Свойства и методы объекта класса"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-on\">"
                },
                {
                    "block": "html",
                    "content": "</a>"
                }
            ]
        },
        {
            "level": 5,
            "block": "heading",
            "mods": {
                "level": 5
            },
            "content": [
                "Метод ",
                {
                    "block": "inline-code",
                    "content": "on"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": "Служит для подписки на событие определенного типа."
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
                                "content": "type {String}"
                            },
                            " – тип события, на которое производится подписка. Обязательный аргумент."
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
                            " – дополнительные данные, доступные обработчику как значение поля ",
                            {
                                "block": "inline-code",
                                "content": "e.data"
                            },
                            " объекта события."
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
                            " – функция-обработчик, вызываемая для события. Обязательный аргумент."
                        ]
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": " – контекст функции-обработчика."
                    }
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Возвращает объект ",
                {
                    "block": "inline-code",
                    "content": "this"
                },
                "."
            ]
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['events'], function(events) {\n\n    var myEmitter = new events.Emitter();\n\n    myEmitter.on('myevent', function() { console.log('foo'); });\n    myEmitter.emit('myevent'); // 'foo'\n});\n"
        },
        {
            "block": "paragraph",
            "content": [
                "Кроме того, значением аргумента ",
                {
                    "block": "inline-code",
                    "content": "type"
                },
                " могут быть:"
            ]
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
                    "content": "несколько типов событий, перечисленных через пробел – чтобы установить для них общую функцию-обработчик;"
                }
            }
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['events'], function(events) {\n\n    var myEmitter = new events.Emitter();\n\n    myEmitter.on('myevent1 myevent2', function(e) { console.log(e.type) });\n\n    myEmitter.emit('myevent1'); // 'myevent1'\n    myEmitter.emit('myevent2'); // 'myevent2'\n});\n"
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
                        "хеш вида ",
                        {
                            "block": "inline-code",
                            "content": "{ 'событие-1' : обработчик-1, ... , 'событие-n' : обработчик-n }"
                        },
                        " – чтобы установить сразу несколько обработчиков для разных типов событий;"
                    ]
                }
            }
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['events'], function(events) {\n\n    var myEmitter = new events.Emitter();\n\n    myEmitter.on({\n        myevent1 : function(e) { console.log(e.type) },\n        myevent2 : function(e) { console.log(e.type) }\n    });  \n\n    myEmitter.emit('myevent1'); // 'myevent1'\n    myEmitter.emit('myevent2'); // 'myevent2'\n});\n"
        },
        {
            "block": "paragraph",
            "content": [
                "Сказанное выше верно и для методов ",
                {
                    "block": "inline-code",
                    "content": "once"
                },
                " и ",
                {
                    "block": "inline-code",
                    "content": "un"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-once\">"
                },
                {
                    "block": "html",
                    "content": "</a>"
                }
            ]
        },
        {
            "level": 5,
            "block": "heading",
            "mods": {
                "level": 5
            },
            "content": [
                "Метод ",
                {
                    "block": "inline-code",
                    "content": "once"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Идентичен методу ",
                {
                    "block": "inline-code",
                    "content": "on"
                },
                ", но выполняется единожды – после первого события подписка удаляется."
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
                        "content": [
                            {
                                "block": "inline-code",
                                "content": "type {String}"
                            },
                            " – тип события, на которое производится подписка. Обязательный аргумент."
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
                            " – дополнительные данные, доступные как значение поля ",
                            {
                                "block": "inline-code",
                                "content": "e.data"
                            },
                            " объекта события."
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
                            " – функция-обработчик, вызываемая для события. Обязательный аргумент."
                        ]
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": " – контекст функции-обработчика."
                    }
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Возвращает объект ",
                {
                    "block": "inline-code",
                    "content": "this"
                },
                "."
            ]
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['events'], function(events) {\n\n    var myEmitter = new events.Emitter();\n\n    myEmitter.on('myevent', function() { console.log('foo') });\n\n    myEmitter.emit('myevent'); // 'foo'\n    myEmitter.emit('myevent'); // обработчик не вызывается\n});\n"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-un\">"
                },
                {
                    "block": "html",
                    "content": "</a>"
                }
            ]
        },
        {
            "level": 5,
            "block": "heading",
            "mods": {
                "level": 5
            },
            "content": [
                "Метод ",
                {
                    "block": "inline-code",
                    "content": "un"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": "Служит для удаления установленной ранее подписки на событие определенного типа."
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
                                "content": "type {String}"
                            },
                            " – тип события, подписка на которое удаляется. Обязательный аргумент."
                        ]
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": " – удаляемый обработчик."
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
            "content": [
                "Метод возвращает ссылку на объект ",
                {
                    "block": "inline-code",
                    "content": "this"
                },
                "."
            ]
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['events'], function(events) {\n\n    var myEmitter = new events.Emitter(),\n        shout = function() { console.log('foo') };\n\n    myEmitter.on('myevent', shout);\n    myEmitter.emit('myevent'); // 'foo'\n\n    myEmitter.un('myevent', shout);\n    myEmitter.emit('myevent'); // обработчик не вызывается\n});\n"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-emit\">"
                },
                {
                    "block": "html",
                    "content": "</a>"
                }
            ]
        },
        {
            "level": 5,
            "block": "heading",
            "mods": {
                "level": 5
            },
            "content": [
                "Метод ",
                {
                    "block": "inline-code",
                    "content": "emit"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": "Служит для генерации события."
        },
        {
            "block": "paragraph",
            "content": "Метод вызывает все функции-обработчики, заданные для события."
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
                                "content": "type {String|events:Event}"
                            },
                            " – генерируемое событие в виде строки или готового объекта события. Обязательный аргумент."
                        ]
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": " – дополнительные данные, доступные как второй аргумент функции-обработчика."
                    }
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Возвращает объект ",
                {
                    "block": "inline-code",
                    "content": "this"
                },
                "."
            ]
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['events'], function(events) {\n\n    var myEmitter = new events.Emitter();\n\n    myEmitter.on('myevent', function(e, data) { console.log(data) });\n    myEmitter.emit('myevent', 'ololo');  // 'ololo'\n});\n"
        },
        {
            "level": 4,
            "block": "heading",
            "mods": {
                "level": 4
            },
            "content": "Статические методы класса"
        },
        {
            "block": "paragraph",
            "content": "Набор и сигнатуры статических методов идентичны набору и сигнатурам методов объекта, инстанцируемого классом."
        }
    ]
}
{
    "block": "md-root",
    "content": [
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"elems-channels\">"
                },
                {
                    "block": "html",
                    "content": "</a>"
                }
            ]
        },
        {
            "level": 1,
            "block": "heading",
            "mods": {
                "level": 1
            },
            "content": [
                "Элемент ",
                {
                    "block": "inline-code",
                    "content": "channels"
                },
                " блока ",
                {
                    "block": "inline-code",
                    "content": "events"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Элемент ",
                {
                    "block": "inline-code",
                    "content": "channels"
                },
                " блока ",
                {
                    "block": "inline-code",
                    "content": "events"
                },
                " предназначен для работы с именованными каналами событий. Именные каналы позволяют организовать работу с событиями, используя шаблон проектирования «наблюдатель» (также известный как Publisher-subscriber)."
            ]
        },
        {
            "block": "paragraph",
            "content": "Элемент реализует функцию, позволяющую:"
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
                            "получить ссылку на именной канал по ",
                            {
                                "block": "inline-code",
                                "content": "id"
                            },
                            ";"
                        ]
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": "получить ссылку на стандартный канал;"
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": [
                            "удалить канал – стандартный или по ",
                            {
                                "block": "inline-code",
                                "content": "id"
                            },
                            "."
                        ]
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
                        "content": [
                            " – Идентификатор канала. Если не задан будет использоваться канал по умолчанию (",
                            {
                                "block": "inline-code",
                                "content": "'default'"
                            },
                            ")."
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
                            " – Логический флаг, указывающий (в значении ",
                            {
                                "block": "inline-code",
                                "content": "true"
                            },
                            ") на необходимость удалить канал. По умолчанию ",
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
            "content": {
                "block": "strong",
                "content": "Возвращаемое значение:"
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
                                "content": "Object"
                            },
                            ". Объект «класса» ",
                            {
                                "block": "inline-code",
                                "content": "Emitter"
                            },
                            " – именной канал."
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
                                "content": "undefined"
                            },
                            ". В случае если функция была вызвана с параметром ",
                            {
                                "block": "inline-code",
                                "content": "drop"
                            },
                            " в значении ",
                            {
                                "block": "inline-code",
                                "content": "true"
                            },
                            "."
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
            "content": "modules.require(['events__channels'], function(channels) {\n\nvar myChannel = channels('my-channel');\nmyChannel.on('test', function(e, data) { console.log(data.foo) });\n\nmyChannel.emit('test', { foo : 'bar' }); // 'bar'\n\n});\n"
        }
    ]
}