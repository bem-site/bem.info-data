{
    "block": "md-root",
    "content": [
        {
            "level": 1,
            "block": "heading",
            "mods": {
                "level": 1
            },
            "content": "ua"
        },
        {
            "block": "paragraph",
            "content": "Блок служит для сбора данных о браузере пользователя."
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
                            "content": "<a href=\"#elems-svg\">"
                        },
                        "svg",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "deps"
                    },
                    "Проверяет, поддерживает ли браузер формат SVG."
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
            "content": [
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": {
                            "block": "inline-code",
                            "content": "bh.js"
                        }
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": {
                            "block": "inline-code",
                            "content": "bemhtml"
                        }
                    }
                }
            ]
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
                "Блок подключает инлайновый скрипт, добавляющий тегу ",
                {
                    "block": "inline-code",
                    "content": "<html>"
                },
                " ",
                {
                    "block": "inline-code",
                    "content": "CSS"
                },
                "-классы, указывающие, включен ли JavaScript – ",
                {
                    "block": "inline-code",
                    "content": "ua_js_no"
                },
                "/",
                {
                    "block": "inline-code",
                    "content": "ua_js_yes"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": "Не имеет визуального представления на странице."
        },
        {
            "block": "paragraph",
            "content": [
                "Используется внутри блока ",
                {
                    "href": "https://github.com/bem/bem-core/blob/v2/common.blocks/page/page.ru.md",
                    "block": "link",
                    "content": "page"
                },
                " и самостоятельно подключать его к странице обычно не требуется."
            ]
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
                    "content": "<a name=\"elems-svg\">"
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
                    "content": "svg"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Элемент подключает инлайновый скрипт, добавляющий тегу ",
                {
                    "block": "inline-code",
                    "content": "<html>"
                },
                " ",
                {
                    "block": "inline-code",
                    "content": "CSS"
                },
                "-классы, указывающие, поддерживается ли SVG – ",
                {
                    "block": "inline-code",
                    "content": "ua_svg_no"
                },
                "/",
                {
                    "block": "inline-code",
                    "content": "ua_svg_yes"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": "Не имеет визуального представления на странице."
        },
        {
            "block": "paragraph",
            "content": [
                "Для использования включите элемент в файл зависимостей ",
                {
                    "block": "inline-code",
                    "content": "deps.js"
                },
                " блока, которому требуются данные о поддержке SVG:"
            ]
        },
        {
            "block": "html",
            "content": "<!-- bem-example: tmp/data/bem-core-4.2.1/desktop.examples/ua/9d6RqDW969c-01-kFvK8PLS6AXo -->"
        }
    ]
}
{
    "block": "md-root",
    "content": [
        {
            "level": 1,
            "block": "heading",
            "mods": {
                "level": 1
            },
            "content": "ua"
        },
        {
            "block": "paragraph",
            "content": [
                "На уровне ",
                {
                    "block": "inline-code",
                    "content": "desktop"
                },
                ", блок предоставляет объект, содержащий набор свойств, указывающих особенности браузера."
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
                    "Тип",
                    "Описание"
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-chrome\">"
                        },
                        "chrome",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "{Boolean}"
                    },
                    "Тип браузера: Google Chrome."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-opera\">"
                        },
                        "opera",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "{Boolean}"
                    },
                    "Тип браузера: Opera."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-msie\">"
                        },
                        "msie",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "{Boolean}"
                    },
                    "Тип браузера: Microsoft Internet Explorer."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-mozilla\">"
                        },
                        "mozilla",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "{Boolean}"
                    },
                    "Тип браузера: Mozilla Firefox."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-safari\">"
                        },
                        "safari",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "{Boolean}"
                    },
                    "Тип браузера: Safari."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-webkit\">"
                        },
                        "webkit",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "{Boolean}"
                    },
                    "Браузер построен на движке WebKit."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-version\">"
                        },
                        "version",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "{String}"
                    },
                    "Версия браузера."
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
            "content": "Подробности"
        },
        {
            "block": "paragraph",
            "content": "Блок позволяет определить:"
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
                        "content": "Тип браузера."
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": "Совместимость с WebKit."
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": "Версию браузера."
                    }
                }
            ]
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require('ua', function(ua) {\n\nconsole.dir(ua);\n\n});\n"
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
                    "content": "<a name=\"fields-chrome\">"
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
                    "content": "chrome"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Тип: ",
                {
                    "block": "inline-code",
                    "content": "{Boolean}"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Тип браузера. ",
                {
                    "block": "inline-code",
                    "content": "true"
                },
                ", если Google Chrome."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-opera\">"
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
                    "content": "opera"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Тип: ",
                {
                    "block": "inline-code",
                    "content": "{Boolean}"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Тип браузера. ",
                {
                    "block": "inline-code",
                    "content": "true"
                },
                ", если Opera."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-msie\">"
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
                    "content": "msie"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Тип: ",
                {
                    "block": "inline-code",
                    "content": "{Boolean}"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Тип браузера. ",
                {
                    "block": "inline-code",
                    "content": "true"
                },
                ", если Microsoft Internet Explorer."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-mozilla\">"
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
                    "content": "mozilla"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Тип: ",
                {
                    "block": "inline-code",
                    "content": "{Boolean}"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Тип браузера. ",
                {
                    "block": "inline-code",
                    "content": "true"
                },
                ", если Mozilla Firefox."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-safari\">"
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
                    "content": "safari"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Тип: ",
                {
                    "block": "inline-code",
                    "content": "{Boolean}"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Тип браузера. ",
                {
                    "block": "inline-code",
                    "content": "true"
                },
                ", если Safari."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-webkit\">"
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
                    "content": "webkit"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Тип: ",
                {
                    "block": "inline-code",
                    "content": "{Boolean}"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "inline-code",
                    "content": "true"
                },
                ", если браузер построен на движке WebKit."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-version\">"
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
                    "content": "version"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Тип: ",
                {
                    "block": "inline-code",
                    "content": "{String}"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Значение – строка с версией браузера вида ",
                {
                    "block": "inline-code",
                    "content": "'600.2.5'"
                },
                " (для Safari). Если определить версию браузера не удается, в качестве значения устанавливается ",
                {
                    "block": "inline-code",
                    "content": "'0'"
                },
                "."
            ]
        }
    ]
}