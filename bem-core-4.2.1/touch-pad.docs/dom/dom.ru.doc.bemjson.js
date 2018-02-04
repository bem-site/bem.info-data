{
    "block": "md-root",
    "content": [
        {
            "level": 1,
            "block": "heading",
            "mods": {
                "level": 1
            },
            "content": "dom"
        },
        {
            "block": "paragraph",
            "content": "Блок предоставляет объект, содержащий набор методов для работы с DOM-деревом."
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
                            "content": "<a href=\"#fields-contains\">"
                        },
                        "contains",
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
                            "content": "ctx {jQuery}"
                        },
                        ",",
                        {
                            "block": "html",
                            "content": "<br>"
                        },
                        {
                            "block": "inline-code",
                            "content": "domElem {jQuery}"
                        },
                        ")"
                    ],
                    {
                        "block": "inline-code",
                        "content": "Boolean"
                    },
                    "Проверяет, содержит ли один DOM-элемент другой."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-getFocused\">"
                        },
                        "getFocused",
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
                            "content": "domElem {jQuery}"
                        },
                        ")"
                    ],
                    {
                        "block": "inline-code",
                        "content": "jQuery"
                    },
                    "Служит для получения ссылки на DOM-элемент в фокусе."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-containsFocus\">"
                        },
                        "containsFocus",
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
                            "content": "domElem {jQuery}"
                        },
                        ")"
                    ],
                    {
                        "block": "inline-code",
                        "content": "Boolean"
                    },
                    "Проверят, содержит ли DOM-элемент или его потомки фокус."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-isFocusable\">"
                        },
                        "isFocusable",
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
                            "content": "domElem {jQuery}"
                        },
                        ")"
                    ],
                    {
                        "block": "inline-code",
                        "content": "Boolean"
                    },
                    "Проверят, может ли DOM-элемент находиться в фокусе."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-isEditable\">"
                        },
                        "isEditable",
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
                            "content": "domElem {jQuery}"
                        },
                        ")"
                    ],
                    {
                        "block": "inline-code",
                        "content": "Boolean"
                    },
                    "Проверят, возможен ли в DOM-элементе ввод текста."
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
                    "content": "<a name=\"fields-contains\">"
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
                    "content": "contains"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Метод позволяет проверить содержит ли некоторый DOM-элемент ",
                {
                    "block": "inline-code",
                    "content": "ctx"
                },
                " элемент ",
                {
                    "block": "inline-code",
                    "content": "domElem"
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
                                "content": "ctx {jQuery}"
                            },
                            " – DOM-элемент внутри которого производится поиск. Обязательный аргумент."
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
                                "content": "domElem {jQuery}"
                            },
                            " – искомый DOM-элемент. Обязательный аргумент."
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
                    "content": "Boolean"
                },
                ". Если искомый элемент найден – ",
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
            "content": "modules.require(['dom', 'jquery'], function(dom, $) {\n\n/*\n<div class=\"block1\">\n  <div class=\"block2\"></div>\n</div>\n*/\n\ndom.contains($('.block1'), $('.block2'));  // true\n\n});\n"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-getFocused\">"
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
                    "content": "getFocused"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": "Метод служит для получения ссылки на DOM-элемент, находящийся в фокусе."
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
                    "content": "jQuery"
                },
                " – объект в фокусе."
            ]
        },
        {
            "block": "paragraph",
            "content": "Пример:"
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['dom'], function(dom) {\n\ndom.getFocused(); // ссылка на элемент в фокусе\n\n});\n"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-containsFocus\">"
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
                    "content": "containsFocus"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": "Метод проверяет находится ли в фокусе переданный аргументом DOM-элемент или один из его потомков."
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
                            "content": "domElem {jQuery}"
                        },
                        " – проверяемый DOM-элемент. Обязательный аргумент."
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
                ". Если искомый элемент в фокусе – ",
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
            "content": "modules.require(['dom', 'jquery'], function(dom, $) {\n\n/*\n<div class=\"block1\">\n  <input class=\"block1__control\"></div>\n</div>\n*/\n\n$('.block1__control').focus();\ndom.containsFocus($('.block1'));  // true\n\n});\n"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-isFocusable\">"
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
                    "content": "isFocusable"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": "Метод проверят может ли браузер пользователя установить фокус на переданный аргументом DOM-элемент.   "
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
                            "content": "domElem {jQuery}"
                        },
                        " – проверяемый DOM-элемент. Обязательный аргумент. Если в jQuery-цепочке несколько DOM-элементов, то проверяется первый из них."
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
                ". Если фокус может быть установлен – ",
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
            "content": "modules.require(['dom', 'jquery'], function(dom, $) {\n\n/*\n<div class=\"menu\">\n  <a class=\"menu__item\" href=\"/\">Link 1</a>\n</div>\n*/\n\ndom.isFocusable($('.menu__item')); // true\n\n/*\n<div class=\"menu\">\n  <span class=\"menu__item menu__item_current\">Link 1</span>\n</div>\n*/\n\ndom.isFocusable($('.menu__item')); // false\n\n});\n"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-isEditable\">"
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
                    "content": "isEditable"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": "Метод проверят возможен ли в переданном аргументом DOM-элементе ввод текста. Другими словами, с помощью метода можно проверить является ли элемент полем ввода, текстовой областью и т.п."
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
                            "content": "domElem {jQuery}"
                        },
                        " – проверяемый DOM-элемент. Обязательный аргумент. Если в jQuery-цепочке несколько DOM-элементов, то проверяется первый из них."
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
                ". Если ввод текста в элементе возможен – ",
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
            "content": "modules.require(['dom', 'jquery'], function(dom, $) {\n\ndom.isEditable($('input, textarea')); // true\n\n});\n"
        }
    ]
}