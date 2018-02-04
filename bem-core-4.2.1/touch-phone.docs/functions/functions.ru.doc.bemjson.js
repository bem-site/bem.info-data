{
    "block": "md-root",
    "content": [
        {
            "level": 1,
            "block": "heading",
            "mods": {
                "level": 1
            },
            "content": "functions"
        },
        {
            "block": "paragraph",
            "content": "Блок предоставляет объект, содержащий набор методов для работы с функциями JavaScript."
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
                    "Тип или возвращаемое значение",
                    "Описание"
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-isFunction\">"
                        },
                        "isFunction",
                        {
                            "block": "html",
                            "content": "</a>"
                        },
                        "(",
                        {
                            "block": "inline-code",
                            "content": "obj {*}"
                        },
                        ")"
                    ],
                    {
                        "block": "inline-code",
                        "content": "Boolean"
                    },
                    "Проверяет, является ли переданный аргумент функцией."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-noop\">"
                        },
                        "noop",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "Function"
                    },
                    "Пустая функция."
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
                            "content": "<a href=\"#elems-debounce\">"
                        },
                        "debounce",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "JS"
                    },
                    "Декоратор функции. Объединяет несколько вызовов функции, производимых в заданном временном интервале, в один."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#elems-throttle\">"
                        },
                        "throttle",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "JS"
                    },
                    "Декоратор функции. Ограничивает частоту выполнения функции до одного раза в указанный период."
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
                    "content": "<a name=\"fields-isFunction\">"
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
                    "content": "isFunction"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": "Метод проверяет, является ли переданный аргумент функцией.  "
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
                            "content": "obj {*}"
                        },
                        " – проверяемый объект. Обязательный аргумент."
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
                ". В случае, если аргумент является функцией – ",
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
            "content": "modules.require('functions', function(func) {\n    var a = function(){},\n        b = {};\n    console.log(func.isFunction(a)); // true\n    console.log(func.isFunction(b)); // false\n});\n"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-noop\">"
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
                "Свойство ",
                {
                    "block": "inline-code",
                    "content": "noop"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Пустая функция (",
                {
                    "block": "inline-code",
                    "content": "function() {}"
                },
                ")."
            ]
        },
        {
            "block": "paragraph",
            "content": "Не имеет аргументов и возвращаемого значения."
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "inline-code",
                    "content": "noop"
                },
                " можно использовать в ситуациях, когда для работы требуется функция, но нет смысла добавлять логику. Например в качестве «заглушки» для базовых классов при проектировании в парадигме ООП."
            ]
        },
        {
            "block": "paragraph",
            "content": "Пример:"
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.define('base-class', ['inherit', 'functions'], function(provide, inherit, functions) {\n\nprovide(inherit({\n    getData : function() {\n        this._sendRequest();\n    },\n\n    _sendRequest : functions.noop\n\n}));\n\n});\n"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"elems\">"
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
            "content": "Элементы блока"
        },
        {
            "block": "paragraph",
            "content": "Элементы блока реализуют набор декораторов функций."
        },
        {
            "block": "paragraph",
            "content": "Декораторы добавляют функции логику, не меняя ее оригинальной сигнатуры."
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"elems-debounce\">"
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
                "Элемент ",
                {
                    "block": "inline-code",
                    "content": "debounce"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": "Декоратор, откладывающий вызовов функции до истечения задержки. После каждой попытки вызова задержка начинает отсчитываться заново."
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
                                "content": "fn {Function}"
                            },
                            " — оригинальная функция. Обязательный аргумент."
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
                                "content": "timeout {Number}"
                            },
                            " — время задержки в миллисекундах. Обязательный аргумент."
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
                            " — режим работы ",
                            {
                                "block": "inline-code",
                                "content": "debounce"
                            },
                            ". По умолчанию используется первый режим (соответствует значению ",
                            {
                                "block": "inline-code",
                                "content": "false"
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
                        "content": " — контекст для выполнения оригинальной функции."
                    }
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "В зависимости от значения аргумента ",
                {
                    "block": "inline-code",
                    "content": "invokeAsap"
                },
                " ",
                {
                    "block": "inline-code",
                    "content": "debounce"
                },
                " может работать в двух режимах:"
            ]
        },
        {
            "ordered": true,
            "loose": false,
            "block": "list",
            "mods": {
                "ordered": true
            },
            "content": [
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": "Вызов оригинальной функции производится по истечению задержки после последней попытки вызова."
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": "Первый вызов оригинальной функции производится сразу же при вызове декорированной функции. Дальнейшее поведение аналогично режиму 1."
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
                    "content": "Function"
                },
                ". Декорированная функция."
            ]
        },
        {
            "block": "paragraph",
            "content": "Пример:"
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require('functions__debounce', function(provide, debounce) {\n\n    function log() {\n        console.log('hello!');\n    }\n\n    var debouncedLog = debounce(log, 300);\n    setInterval(debouncedLog, 50);\n\n});\n"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"elems-throttle\">"
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
                "Элемент ",
                {
                    "block": "inline-code",
                    "content": "throttle"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": "Декоратор позволяет «затормозить» функцию. Она будет выполняться не чаще одного раза в указанный период, сколько бы раз в течение этого периода ни была вызвана. Все промежуточные вызовы игнорируются."
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
                                "content": "fn {Function}"
                            },
                            " — оригинальная функция. Обязательный аргумент."
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
                                "content": "period {Number}"
                            },
                            " — интервал между вызовами в миллисекундах. Обязательный аргумент."
                        ]
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": " — контекст для выполнения оригинальной функции."
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
                    "content": "Function"
                },
                ". Декорированная функция."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Метод удобно использовать, например, для установки ресурсоемких обработчиков для часто генерируемых событий – ",
                {
                    "block": "inline-code",
                    "content": "resize"
                },
                ", ",
                {
                    "block": "inline-code",
                    "content": "pointermove"
                },
                " и т.п."
            ]
        },
        {
            "block": "paragraph",
            "content": "Пример:"
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require('functions__throttle', function(provide, throttle) {\n\n    function log() {\n        console.log('hello!');\n    }\n\n    var throttledLog = throttle(log, 300);\n    setInterval(throttledLog, 50);\n\n});\n"
        },
        {
            "block": "paragraph",
            "content": "В результате, функция будет выполняться не чаще чем раз в 300 миллисекунд."
        }
    ]
}