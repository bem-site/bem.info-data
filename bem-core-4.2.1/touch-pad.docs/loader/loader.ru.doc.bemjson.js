{
    "block": "md-root",
    "content": [
        {
            "level": 1,
            "block": "heading",
            "mods": {
                "level": 1
            },
            "content": "loader"
        },
        {
            "block": "paragraph",
            "content": [
                "Блок ",
                {
                    "block": "inline-code",
                    "content": "loader"
                },
                " служит для загрузки и подключения скриптов по URL."
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
                            "content": "<a href=\"#modifiers-type\">"
                        },
                        "type",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        {
                            "block": "inline-code",
                            "content": "'js'"
                        },
                        ", ",
                        {
                            "block": "inline-code",
                            "content": "'bundle'"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "JS"
                    },
                    "Позволяет по URL получить и подключить JS-код или бандл."
                ]
            ]
        },
        {
            "level": 3,
            "block": "heading",
            "mods": {
                "level": 3
            },
            "content": "Функции, подключаемые модификаторами блока"
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
                    "Функция",
                    "Возвращаемое значение",
                    "Описание"
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#modifiers-type-js\">"
                        },
                        "js",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        "loader(",
                        {
                            "block": "html",
                            "content": "</br>"
                        },
                        {
                            "block": "inline-code",
                            "content": "id {String}"
                        },
                        ",",
                        {
                            "block": "html",
                            "content": "</br>"
                        },
                        " ",
                        {
                            "block": "inline-code",
                            "content": "url {String}"
                        },
                        ",",
                        {
                            "block": "html",
                            "content": "</br>"
                        },
                        " ",
                        {
                            "block": "inline-code",
                            "content": "[success {Function}]"
                        },
                        ",",
                        {
                            "block": "html",
                            "content": "</br>"
                        },
                        " ",
                        {
                            "block": "inline-code",
                            "content": "[error {Function}]"
                        },
                        ")"
                    ],
                    "-",
                    "Загружает и подключает фрагмент JavaScript-кода."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#modifiers-type-bundle\">"
                        },
                        "bundle",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        "loader(",
                        {
                            "block": "html",
                            "content": "</br>"
                        },
                        {
                            "block": "inline-code",
                            "content": "url {String}"
                        },
                        ",",
                        {
                            "block": "html",
                            "content": "</br>"
                        },
                        " ",
                        {
                            "block": "inline-code",
                            "content": "success {Function}"
                        },
                        ",",
                        {
                            "block": "html",
                            "content": "</br>"
                        },
                        " ",
                        {
                            "block": "inline-code",
                            "content": "[error {Function}]"
                        },
                        ")"
                    ],
                    "-",
                    "Загружает и подключает пакет, собранный из CSS и JS-файлов – «бандл»."
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
                    "content": "<a name=\"modifiers-type\">"
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
                    "content": "type"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": "Предоставляет набор функций для загрузки и подключение различных типов данных."
        },
        {
            "block": "paragraph",
            "content": [
                "Допустимые значения: ",
                {
                    "block": "inline-code",
                    "content": "'js'"
                },
                ", ",
                {
                    "block": "inline-code",
                    "content": "'bundle'"
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
                "В зависимости от значения модификатора ",
                {
                    "block": "inline-code",
                    "content": "type"
                },
                " блок ",
                {
                    "block": "inline-code",
                    "content": "loader"
                },
                " позволяет получить по URL и подключить:"
            ]
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
                                "content": "js"
                            },
                            " – фрагмент JS-кода."
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
                                "content": "bundle"
                            },
                            " – пакет, собранный из CSS и JS-файлов – «бандл»."
                        ]
                    }
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"modifiers-type-js\">"
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
                "Модификатор ",
                {
                    "block": "inline-code",
                    "content": "type"
                },
                " в значении ",
                {
                    "block": "inline-code",
                    "content": "js"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": "Предоставляет функцию, позволяющую загрузить и подключить фрагмент JS-кода."
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
                                "content": "url {String}"
                            },
                            " – URL загружаемого фрагмента JS-кода. Обязательный аргумент."
                        ]
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": " – callback-функция, выполняемая по завершению загрузки кода."
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": " – callback-функция, выполняемая при ошибке в ходе загрузки кода."
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
            "content": [
                "Например, ",
                {
                    "block": "inline-code",
                    "content": "loader_type_js"
                },
                " может использоваться для загрузки и подключения jQuery:"
            ]
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.define('jquery', ['loader_type_js'], function(provide, loader) {\n\n    loader(\n        'https://yastatic.net/jquery/2.2.0/jquery.min.js',\n        function() { provide(jQuery) });\n\n});\n"
        },
        {
            "block": "paragraph",
            "content": [
                "Расширенный пример смотрите в блоке ",
                {
                    "href": "https://github.com/bem/bem-core/blob/v2/common.blocks/jquery/jquery.js",
                    "block": "link",
                    "content": "common.blocks/jquery"
                },
                " библиотеки ",
                {
                    "block": "inline-code",
                    "content": "bem-core"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"modifiers-type-bundle\">"
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
                "Модификатор ",
                {
                    "block": "inline-code",
                    "content": "type"
                },
                " в значении ",
                {
                    "block": "inline-code",
                    "content": "bundle"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": "Предоставляет функцию, позволяющую загрузить и подключить пакет, собранный из CSS и JS-файлов – «бандл»."
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
                                "content": "id {String}"
                            },
                            " – идентификатор бандла. Обязательный аргумент."
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
                                "content": "url {String}"
                            },
                            " – путь до файла бандла в формате URL. Обязательный аргумент."
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
                                "content": "onSuccess {Function}"
                            },
                            " – callback, вызываемая по завершению загрузки бандла. Обязательный аргумент."
                        ]
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": " – callback, вызываемая при неудачной загрузке бандла."
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
            "content": [
                "Спецификации технологии ",
                {
                    "block": "inline-code",
                    "content": "bundle"
                },
                " находятся в процессе разработки. Для получения детальной информации пишите на ",
                {
                    "href": "https://ru.bem.info/forum/",
                    "block": "link",
                    "content": "форум"
                },
                "."
            ]
        },
        {
            "level": 6,
            "block": "heading",
            "mods": {
                "level": 6
            },
            "content": [
                "Статический метод ",
                {
                    "block": "inline-code",
                    "content": "_loaded"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Функция, подключаемая с модификатором ",
                {
                    "block": "inline-code",
                    "content": "type_bundle"
                },
                ", обладает статическим методом – ",
                {
                    "block": "inline-code",
                    "content": "_loaded"
                },
                ". Он используется как вспомогательный после успешной загрузки бандла."
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
                            "content": "id {String}"
                        },
                        " – идентификатор бандла. Обязательный аргумент."
                    ]
                }
            }
        },
        {
            "block": "paragraph",
            "content": "Не имеет возвращаемого значения."
        }
    ]
}