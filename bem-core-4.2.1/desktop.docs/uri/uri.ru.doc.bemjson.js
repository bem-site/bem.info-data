{
    "block": "md-root",
    "content": [
        {
            "level": 1,
            "block": "heading",
            "mods": {
                "level": 1
            },
            "content": "uri"
        },
        {
            "block": "paragraph",
            "content": "Блок предоставляет объект, содержащий набор методов для декодирования строки из формата URI."
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
                            "content": "<a href=\"#fields-decodeURI\">"
                        },
                        "decodeURI",
                        {
                            "block": "html",
                            "content": "</a>"
                        },
                        "(",
                        {
                            "block": "inline-code",
                            "content": "str {String}"
                        },
                        ")"
                    ],
                    {
                        "block": "inline-code",
                        "content": "String"
                    },
                    "Служит для декодирования URI."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-decodeURIComponent\">"
                        },
                        "decodeURIComponent",
                        {
                            "block": "html",
                            "content": "</a>"
                        },
                        "(",
                        {
                            "block": "inline-code",
                            "content": "str {String}"
                        },
                        ")"
                    ],
                    {
                        "block": "inline-code",
                        "content": "String"
                    },
                    "Служит для декодирования URI компонента."
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
                            "content": "<a href=\"#elems-querystring\">"
                        },
                        "querystring",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "JS"
                    },
                    "Элемент предоставляет объект, содержащий набор методов для работы со строкой запроса формата URI. предназначен для декодирования строки из формата URI."
                ]
            ]
        },
        {
            "level": 4,
            "block": "heading",
            "mods": {
                "level": 4
            },
            "content": "Свойства и методы объекта"
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
                    "Имя",
                    "Возвращаемое значение",
                    "Описание"
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#elems-querystring\">"
                        },
                        "querystring",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#elems-querystring-fields-parse\">"
                        },
                        "parse",
                        {
                            "block": "html",
                            "content": "</a>"
                        },
                        "(",
                        {
                            "block": "inline-code",
                            "content": "str {String}"
                        },
                        ")"
                    ],
                    {
                        "block": "inline-code",
                        "content": "Object"
                    },
                    "Формирует объект на основании параметров запроса адресной строки."
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#elems-querystring-fields-stringify\">"
                        },
                        "stringify",
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
                        "content": "String"
                    },
                    "Формирует строку запроса на основании свойств объекта."
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
                "Оба метода являются оберткой над соответствующими стандартными методами JavaScript ",
                {
                    "block": "inline-code",
                    "content": "decodeURI"
                },
                " и ",
                {
                    "block": "inline-code",
                    "content": "decodeURIComponent"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": "В ходе работы методы проверяют соответствие формата переданной строки UTF-8. При несоответствии генерируется ошибка."
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-decodeURI\">"
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
                    "content": "decodeURI"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Служит для декодирования URI. Метод идентичен стандартному методу JavaScript ",
                {
                    "href": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURI",
                    "block": "link",
                    "content": "decodeURI"
                },
                ", но поддерживает кириллическую кодировку ",
                {
                    "block": "inline-code",
                    "content": "CP-1251"
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
            "content": {
                "loose": false,
                "checked": null,
                "block": "list-item",
                "content": {
                    "block": "paragraph",
                    "content": [
                        {
                            "block": "inline-code",
                            "content": "str {String}"
                        },
                        " – строка с последовательностями экранирования. Обязательный аргумент."
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
                    "content": "String"
                },
                ". В случае если последовательности экранирования в строке не найдены метод возвращают ее без изменений."
            ]
        },
        {
            "block": "paragraph",
            "content": "Пример:"
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require('uri', function(uri){\n    uri.decodeURI(\"https://developer.mozilla.org/ru/docs/JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B\");\n    // \"https://developer.mozilla.org/ru/docs/JavaScript_шеллы\"\n})\n"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-decodeURIComponent\">"
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
                    "content": "decodeURIComponent"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Служит для декодирование компонента URI. Метод идентичен стандартному методу JavaScript ",
                {
                    "href": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent",
                    "block": "link",
                    "content": "decodeURIComponent"
                },
                ", но поддерживает кириллическую кодировку ",
                {
                    "block": "inline-code",
                    "content": "CP-1251"
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
            "content": {
                "loose": false,
                "checked": null,
                "block": "list-item",
                "content": {
                    "block": "paragraph",
                    "content": [
                        {
                            "block": "inline-code",
                            "content": "str {String}"
                        },
                        " – строка с последовательностями экранирования. Обязательный аргумент."
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
                    "content": "String"
                },
                ". В случае если последовательности экранирования в строке не найдены метод возвращают ее без изменений."
            ]
        },
        {
            "block": "paragraph",
            "content": "Пример:"
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require('uri', function(uri){\n    uri.decodeURIComponent(\"JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B\");\n    // \"JavaScript_шеллы\"\n})\n"
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
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"elems-querystring\">"
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
                    "content": "querystring"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": "Элемент предоставляет объект, содержащий набор методов для работы со строкой запроса формата URI."
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"elems-name-fields\">"
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
                    "content": "<a name=\"elems-querystring-fields-parse\">"
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
                    "content": "parse"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": "Формирует объект на основании строки параметров в формате URI."
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
                            "content": "str {String}"
                        },
                        " – строка с параметрами в виде пар ключ-значение. Ключ отделяется от значения символом ",
                        {
                            "block": "inline-code",
                            "content": "="
                        },
                        ". Пары разделяются символом ",
                        {
                            "block": "inline-code",
                            "content": "&"
                        },
                        ". В процессе обработки, ключи и значения декодируются из формата URI. Обязательный аргумент."
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
                    "content": "Object"
                },
                ". Объект, сформированный на основании параметров адресной строки."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"elems-querystring-fields-stringify\">"
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
                    "content": "stringify"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": "Формирует строку запроса в формате URI на основании объекта."
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
                        " – объект, на основании которого формируется строка. Обязательный аргумент."
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
                    "content": "String"
                },
                ". Имена свойств в строке отделяются от значений символом ",
                {
                    "block": "inline-code",
                    "content": "="
                },
                ", пары разделяются символом ",
                {
                    "block": "inline-code",
                    "content": "&"
                },
                "."
            ]
        }
    ]
}