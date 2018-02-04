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
            "content": "<!-- bem-example: tmp/data/bem-core-4.2.1/touch-pad.examples/ua/9d6RqDW969c-01-kFvK8PLS6AXo -->"
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
                    "content": "touch"
                },
                ", блок предоставляет объект, содержащий набор свойств, указывающих особенности мобильного устройства."
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
                            "content": "<a href=\"#fields-ua\">"
                        },
                        "ua",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        {
                            "block": "html",
                            "content": "<code>"
                        },
                        "{String}",
                        {
                            "block": "html",
                            "content": "</code>"
                        }
                    ],
                    "Значение HTTP-заголовка юзер-агента."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-ios\">"
                        },
                        "ios",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        {
                            "block": "html",
                            "content": "<code>"
                        },
                        "{String}",
                        {
                            "block": "html",
                            "content": "</code>"
                        },
                        "|",
                        {
                            "block": "html",
                            "content": "<code>"
                        },
                        "{undefined}",
                        {
                            "block": "html",
                            "content": "</code>"
                        }
                    ],
                    "Версия мобильной платформы iOS."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-android\">"
                        },
                        "android",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        {
                            "block": "html",
                            "content": "<code>"
                        },
                        "{String}",
                        {
                            "block": "html",
                            "content": "</code>"
                        },
                        "|",
                        {
                            "block": "html",
                            "content": "<code>"
                        },
                        "{undefined}",
                        {
                            "block": "html",
                            "content": "</code>"
                        }
                    ],
                    "Версия мобильной платформы Android."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-bada\">"
                        },
                        "bada",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        {
                            "block": "html",
                            "content": "<code>"
                        },
                        "{String}",
                        {
                            "block": "html",
                            "content": "</code>"
                        },
                        "|",
                        {
                            "block": "html",
                            "content": "<code>"
                        },
                        "{undefined}",
                        {
                            "block": "html",
                            "content": "</code>"
                        }
                    ],
                    "Версия мобильной платформы Bada OS."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-wp\">"
                        },
                        "wp",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        {
                            "block": "html",
                            "content": "<code>"
                        },
                        "{String}",
                        {
                            "block": "html",
                            "content": "</code>"
                        },
                        "|",
                        {
                            "block": "html",
                            "content": "<code>"
                        },
                        "{undefined}",
                        {
                            "block": "html",
                            "content": "</code>"
                        }
                    ],
                    "Версия мобильной платформы Windows Phone."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-other\">"
                        },
                        "other",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        {
                            "block": "html",
                            "content": "<code>"
                        },
                        "{Boolean}",
                        {
                            "block": "html",
                            "content": "</code>"
                        }
                    ],
                    "Мобильная платформа неопределена."
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
                    [
                        {
                            "block": "html",
                            "content": "<code>"
                        },
                        "{String}",
                        {
                            "block": "html",
                            "content": "</code>"
                        }
                    ],
                    "Версия браузера Opera."
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
                    [
                        {
                            "block": "html",
                            "content": "<code>"
                        },
                        "{String}",
                        {
                            "block": "html",
                            "content": "</code>"
                        }
                    ],
                    "Версия браузера Chrome."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-iphone\">"
                        },
                        "iphone",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        {
                            "block": "html",
                            "content": "<code>"
                        },
                        "{Boolean}",
                        {
                            "block": "html",
                            "content": "</code>"
                        }
                    ],
                    "Устройство – iPhone."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-ipad\">"
                        },
                        "ipad",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        {
                            "block": "html",
                            "content": "<code>"
                        },
                        "{Boolean}",
                        {
                            "block": "html",
                            "content": "</code>"
                        }
                    ],
                    "Устройство – iPad."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-screenSize\">"
                        },
                        "screenSize",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        {
                            "block": "html",
                            "content": "<code>"
                        },
                        "{String}",
                        {
                            "block": "html",
                            "content": "</code>"
                        }
                    ],
                    "Размер экрана устройства."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-connection\">"
                        },
                        "connection",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        {
                            "block": "html",
                            "content": "<code>"
                        },
                        "{String}",
                        {
                            "block": "html",
                            "content": "</code>"
                        }
                    ],
                    "Тип активного соединения."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-dpr\">"
                        },
                        "dpr",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        {
                            "block": "html",
                            "content": "<code>"
                        },
                        "{Number}",
                        {
                            "block": "html",
                            "content": "</code>"
                        }
                    ],
                    "Относительная плотность пикселей."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-flash\">"
                        },
                        "flash",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        {
                            "block": "html",
                            "content": "<code>"
                        },
                        "{String}",
                        {
                            "block": "html",
                            "content": "</code>"
                        },
                        "|",
                        {
                            "block": "html",
                            "content": "<code>"
                        },
                        "{undefined}",
                        {
                            "block": "html",
                            "content": "</code>"
                        }
                    ],
                    "Версия Adobe Flash."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-video\">"
                        },
                        "video",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        {
                            "block": "html",
                            "content": "<code>"
                        },
                        "{Boolean}",
                        {
                            "block": "html",
                            "content": "</code>"
                        }
                    ],
                    "Поддержка видео."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-width\">"
                        },
                        "width",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        {
                            "block": "html",
                            "content": "<code>"
                        },
                        "{Number}",
                        {
                            "block": "html",
                            "content": "</code>"
                        }
                    ],
                    "Ширина рабочей области экрана в px."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-height\">"
                        },
                        "height",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        {
                            "block": "html",
                            "content": "<code>"
                        },
                        "{Number}",
                        {
                            "block": "html",
                            "content": "</code>"
                        }
                    ],
                    "Высота рабочей области экрана в px."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-landscape\">"
                        },
                        "landscape",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        {
                            "block": "html",
                            "content": "<code>"
                        },
                        "{Boolean}",
                        {
                            "block": "html",
                            "content": "</code>"
                        }
                    ],
                    "Ориентация устройства."
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
                            "content": "<a href=\"#elems-dom\">"
                        },
                        "dom",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "JS"
                    },
                    [
                        "Предоставляет набор модификаторов на основании свойств блока ",
                        {
                            "block": "inline-code",
                            "content": "ua"
                        },
                        " на тач-уровне."
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
            "content": "Модификаторы элемента блока"
        },
        {
            "align": [
                null,
                null,
                null,
                null,
                null
            ],
            "block": "table",
            "rows": [
                [
                    "Элемент",
                    "Модификатор",
                    "Допустимые значения",
                    "Способы использования",
                    "Описание"
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#elems-dom\">"
                        },
                        "dom",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#modifiers-platform\">"
                        },
                        "platform",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        {
                            "block": "inline-code",
                            "content": "'ios'"
                        },
                        ", ",
                        {
                            "block": "inline-code",
                            "content": "'android'"
                        },
                        ", ",
                        {
                            "block": "inline-code",
                            "content": "'bada'"
                        },
                        ", ",
                        {
                            "block": "inline-code",
                            "content": "'wp'"
                        },
                        ", ",
                        {
                            "block": "inline-code",
                            "content": "'other'"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "JS"
                    },
                    "Мобильная платформа пользовательского устройства."
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#modifiers-browser\">"
                        },
                        "browser",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        {
                            "block": "inline-code",
                            "content": "'opera'"
                        },
                        ", ",
                        {
                            "block": "inline-code",
                            "content": "'chrome'"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "JS"
                    },
                    "Тип браузера."
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#modifiers-ios\">"
                        },
                        "ios",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        {
                            "block": "inline-code",
                            "content": "'8'"
                        },
                        ", ",
                        {
                            "block": "inline-code",
                            "content": "'7'"
                        },
                        " ..."
                    ],
                    {
                        "block": "inline-code",
                        "content": "JS"
                    },
                    "Версия операционной системы для устройств iOS."
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#modifiers-ios-subversion\">"
                        },
                        "ios-subversion",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        {
                            "block": "inline-code",
                            "content": "'81'"
                        },
                        ", ",
                        {
                            "block": "inline-code",
                            "content": "'80'"
                        },
                        " ..."
                    ],
                    {
                        "block": "inline-code",
                        "content": "JS"
                    },
                    "Подверсия операционной системы для устройств iOS."
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#modifiers-android\">"
                        },
                        "android",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        {
                            "block": "inline-code",
                            "content": "'4'"
                        },
                        ", ",
                        {
                            "block": "inline-code",
                            "content": "'3'"
                        },
                        " ..."
                    ],
                    {
                        "block": "inline-code",
                        "content": "JS"
                    },
                    "Версия операционной системы для устройств Android."
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#modifiers-screen-size\">"
                        },
                        "screen-size",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        {
                            "block": "inline-code",
                            "content": "'large'"
                        },
                        ", ",
                        {
                            "block": "inline-code",
                            "content": "'normal'"
                        },
                        ", ",
                        {
                            "block": "inline-code",
                            "content": "'small'"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "JS"
                    },
                    "Размер экрана устройства."
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#modifiers-svg\">"
                        },
                        "svg",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        {
                            "block": "inline-code",
                            "content": "'yes'"
                        },
                        ", ",
                        {
                            "block": "inline-code",
                            "content": "'no'"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "JS"
                    },
                    "Поддержка формата SVG."
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#modifiers-orient\">"
                        },
                        "orient",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        {
                            "block": "inline-code",
                            "content": "'landscape'"
                        },
                        ", ",
                        {
                            "block": "inline-code",
                            "content": "'portrait'"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "JS"
                    },
                    "Ориентация устройства."
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
                            "content": "js"
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
                        "content": "Версию мобильной платформы."
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": "Типа браузера."
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
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": "Тип соединения."
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": "Наличие поддержки видео и SVG."
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": "Поддержку технологии Adobe Flash."
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": "Ориентацию и размер экрана."
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": "Соотношение сторон экрана устройства."
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
                    "content": "<a name=\"fields-ua\">"
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
                    "content": "ua"
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
            "content": "Тип мобильного браузера."
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-ios\">"
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
                    "content": "ios"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Тип: ",
                {
                    "block": "inline-code",
                    "content": "{String|undefined}"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": "Версия мобильной платформы. Строка с номером версии, если платформа распознана как iOS."
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-android\">"
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
                    "content": "android"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Тип: ",
                {
                    "block": "inline-code",
                    "content": "{String|undefined}"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": "Версия мобильной платформы. Строка с номером версии, если платформа распознана как Android."
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-bada\">"
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
                    "content": "bada"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Тип: ",
                {
                    "block": "inline-code",
                    "content": "{String|undefined}"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": "Версия мобильной платформы. Строка с номером версии, если платформа распознана как Bada OS."
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-wp\">"
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
                    "content": "wp"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Тип: ",
                {
                    "block": "inline-code",
                    "content": "{String|undefined}"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": "Версия мобильной платформы. Строка с номером версии, если платформа распознана как Windows Phone."
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-other\">"
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
                    "content": "other"
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
                "Мобильная платформа неопределена. Устанавливается в значение ",
                {
                    "block": "inline-code",
                    "content": "true"
                },
                " для всех мобильных платформ, кроме вышеперечисленных."
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
                    "content": "{String}"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": "Версия браузера Opera."
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
                    "content": "{String}"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": "Версия браузера Chrome."
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-iphone\">"
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
                    "content": "iphone"
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
                "Значение ",
                {
                    "block": "inline-code",
                    "content": "true"
                },
                " характеризует устройство как iPhone."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-ipad\">"
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
                    "content": "ipad"
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
                "Значение ",
                {
                    "block": "inline-code",
                    "content": "true"
                },
                " характеризует устройство как iPad."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-screenSize\">"
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
                    "content": "screenSize"
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
            "content": "Размер экрана устройства."
        },
        {
            "block": "paragraph",
            "content": "Доступны следующие значения:"
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
                                "content": "large"
                            },
                            " – размер экрана больше 320 px."
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
                                "content": "normal"
                            },
                            " – размер экрана равен 320 px."
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
                                "content": "small"
                            },
                            " – размер экрана меньше 320 px."
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
                    "content": "<a name=\"fields-connection\">"
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
                    "content": "connection"
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
            "content": "Тип активного сетевого соединения."
        },
        {
            "block": "paragraph",
            "content": "Доступны следующие значения:"
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
                                "content": "wifi"
                            },
                            " – соединение по Wi-Fi."
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
                                "content": "3g"
                            },
                            " – соединение по 3G."
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
                                "content": "2g"
                            },
                            " – соединение по EDGE и GSM."
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
                    "content": "<a name=\"fields-dpr\">"
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
                    "content": "dpr"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Тип: ",
                {
                    "block": "inline-code",
                    "content": "{Number}"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Коэффициент относительной плотности пикселей. Характеризует отношение физических пикселей устройства к аппаратно независимым (dppx). Позволяет определить использует ли устройство дисплей с повышенной плотностью пикселей (например, Retina). По умолчанию ",
                {
                    "block": "inline-code",
                    "content": "1"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": "Например, можно проверить, что устройство использует Retina и отдавать браузеру изображения с высоким разрешением:"
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require('ua', function(ua) {\n\nvar imgFile = ua.dpr === 1 ? 'image.png' : 'image@2x.png';\n// ···\n\n});\n"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-flash\">"
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
                    "content": "flash"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Тип: ",
                {
                    "block": "inline-code",
                    "content": "{String|undefined}"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Версия Adobe Flash. ",
                {
                    "block": "inline-code",
                    "content": "undefined"
                },
                ", если Flash недоступен."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-video\">"
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
                    "content": "video"
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
                "Значение ",
                {
                    "block": "inline-code",
                    "content": "true"
                },
                ", если видео поддерживается."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-svg\">"
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
                    "content": "svg"
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
                "Значение ",
                {
                    "block": "inline-code",
                    "content": "true"
                },
                ", если SVG поддерживается."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-width\">"
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
                    "content": "width"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Тип: ",
                {
                    "block": "inline-code",
                    "content": "{Number}"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": "Ширина рабочей области экрана в пикселях."
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-height\">"
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
                    "content": "height"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Тип: ",
                {
                    "block": "inline-code",
                    "content": "{Number}"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": "Высота рабочей области экрана в пикселях."
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-landscape\">"
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
                    "content": "landscape"
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
                "Значение ",
                {
                    "block": "inline-code",
                    "content": "true"
                },
                " при горизонтальной ориентации."
            ]
        }
    ]
}
{
    "block": "md-root",
    "content": [
        {
            "block": "html",
            "content": "<a name=\"#elems-dom\">\n# Элемент `dom` блока `ua`"
        },
        {
            "block": "paragraph",
            "content": [
                "Элемент служит для дополнения базовой БЭМ-сущности блока ",
                {
                    "block": "inline-code",
                    "content": "ua"
                },
                " набором модификаторов на основе данных, собранных блоком ",
                {
                    "block": "inline-code",
                    "content": "ua"
                },
                " на touch-уровне."
            ]
        },
        {
            "block": "paragraph",
            "content": "Это позволяет учитывать особенности мобильного устройства, проверяя наличие и значение модификаторов."
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.define('ios-test', ['i-bem-dom', 'ua'], function(provide, bemDom, Ua) {\n\nprovide(bemDom.declBlock(this.name, {\n    onSetMod: {\n        js: {\n            inited: function() {\n                this.findParentBlock(Ua).hasMod('platform', 'ios') &&\n                    this.setMod('ios');\n            }\n        },\n        'ios': function() {\n            console.log('You are iOS user');\n        }\n    }\n}));\n\n});\n"
        },
        {
            "block": "paragraph",
            "content": [
                "Элемент автоматически подключается с блоком ",
                {
                    "block": "inline-code",
                    "content": "page"
                },
                ". Не требуется подключать его вручную, если в проекте используется ",
                {
                    "block": "inline-code",
                    "content": "page"
                },
                "."
            ]
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
            "level": 2,
            "block": "heading",
            "mods": {
                "level": 2
            },
            "content": "Модификаторы элемента"
        },
        {
            "block": "paragraph",
            "content": [
                "Значения всех модификаторов элемента, кроме ",
                {
                    "block": "inline-code",
                    "content": "orient"
                },
                ", устанавливаются в момент инициализации блока и остаются неизменными."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"modifiers-platform\">"
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
                "Модификатор ",
                {
                    "block": "inline-code",
                    "content": "platform"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Допустимые значения: ",
                {
                    "block": "inline-code",
                    "content": "'ios'"
                },
                ", ",
                {
                    "block": "inline-code",
                    "content": "'android'"
                },
                ", ",
                {
                    "block": "inline-code",
                    "content": "'bada'"
                },
                ", ",
                {
                    "block": "inline-code",
                    "content": "'wp'"
                },
                ", ",
                {
                    "block": "inline-code",
                    "content": "'other'"
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
            "content": "Модификатор указывает мобильную платформу пользовательского устройства."
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
                                "content": "ios"
                            },
                            " – iOS."
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
                                "content": "android"
                            },
                            " – Android."
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
                                "content": "bada"
                            },
                            " – Bada OS."
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
                                "content": "wp"
                            },
                            " – Windows Phone."
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
                                "content": "other"
                            },
                            " – все остальные мобильные платформы."
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
                    "content": "<a name=\"modifiers-browser\">"
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
                "Модификатор ",
                {
                    "block": "inline-code",
                    "content": "browser"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Допустимые значения: ",
                {
                    "block": "inline-code",
                    "content": "'opera'"
                },
                ", ",
                {
                    "block": "inline-code",
                    "content": "'chrome'"
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
            "content": "Модификатор указывает тип мобильного браузера."
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
                                "content": "opera"
                            },
                            " – Opera."
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
                                "content": "chrome"
                            },
                            " – Chrome."
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
                    "content": "<a name=\"modifiers-ios\">"
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
                "Модификатор ",
                {
                    "block": "inline-code",
                    "content": "ios"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Допустимые значения: ",
                {
                    "block": "inline-code",
                    "content": "'8'"
                },
                ", ",
                {
                    "block": "inline-code",
                    "content": "'7'"
                },
                " ..."
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
            "content": "Модификатор указывает версию операционной системы для устройств iOS."
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"modifiers-ios-subversion\">"
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
                "Модификатор ",
                {
                    "block": "inline-code",
                    "content": "ios-subversion"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Допустимые значения: ",
                {
                    "block": "inline-code",
                    "content": "'81'"
                },
                ", ",
                {
                    "block": "inline-code",
                    "content": "'80'"
                },
                " ..."
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
                "Модификатор указывает подверсию операционной системы для устройств iOS. Номер подверсии состоит из номера версии и первого символа после разделителя. Номер указывается без символов-разделителей ",
                {
                    "block": "inline-code",
                    "content": "'.'"
                },
                ". Например, для iOS версии 8.1.3 значением модификатора будет ",
                {
                    "block": "inline-code",
                    "content": "'81'"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"modifiers-android\">"
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
                "Модификатор ",
                {
                    "block": "inline-code",
                    "content": "android"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Допустимые значения: ",
                {
                    "block": "inline-code",
                    "content": "'4'"
                },
                ", ",
                {
                    "block": "inline-code",
                    "content": "'3'"
                },
                " ..."
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
            "content": "Модификатор указывает версию операционной системы для устройств Android."
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"modifiers-screen-size\">"
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
                "Модификатор ",
                {
                    "block": "inline-code",
                    "content": "screen-size"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Допустимые значения: ",
                {
                    "block": "inline-code",
                    "content": "'large'"
                },
                ", ",
                {
                    "block": "inline-code",
                    "content": "'normal'"
                },
                ", ",
                {
                    "block": "inline-code",
                    "content": "'small'"
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
            "content": "Модификатор указывает размер экрана пользовательского устройства."
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
                                "content": "large"
                            },
                            " – размер экрана больше 320 px."
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
                                "content": "normal"
                            },
                            " – размер экрана равен 320 px."
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
                                "content": "small"
                            },
                            " – размер экрана меньше 320 px."
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
                    "content": "<a name=\"modifiers-svg\">"
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
                "Модификатор ",
                {
                    "block": "inline-code",
                    "content": "svg"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Допустимые значения: ",
                {
                    "block": "inline-code",
                    "content": "'yes'"
                },
                ", ",
                {
                    "block": "inline-code",
                    "content": "'no'"
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
            "content": "Модификатор указывает на наличие у пользовательского устройства поддержки формата SVG."
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
                                "content": "yes"
                            },
                            " – поддержка SVG присутствует."
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
                                "content": "no"
                            },
                            " – поддержка SVG отсутствует."
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
                    "content": "<a name=\"modifiers-orient\">"
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
                "Модификатор ",
                {
                    "block": "inline-code",
                    "content": "orient"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Допустимые значения: ",
                {
                    "block": "inline-code",
                    "content": "'landscape'"
                },
                ", ",
                {
                    "block": "inline-code",
                    "content": "'portrait'"
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
            "content": "Модификатор указывает текущую ориентацию устройства."
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
                                "content": "landscape"
                            },
                            " – горизонтальная ориентация."
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
                                "content": "portrait"
                            },
                            " – вертикальная ориентация."
                        ]
                    }
                }
            ]
        },
        {
            "block": "paragraph",
            "content": "Значение модификатора изменяется динамически при смене ориентации устройства. Поэтому можно подписываться на изменение значения модификатора:"
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.define('inner', ['i-bem-dom', 'ua'], function(provide, bemDom, Ua) {\n\nprovide(bemDom.declBlock(this.name, {\n    onSetMod: {\n        js: {\n            inited: function() {\n                this._ua = this.findParentBlock(Ua);\n\n                this\n                    ._events(this.ua)\n                    .on({ modName : 'orient', modVal : '*' }, this._onOrientChange, this);\n\n                this.setMod('orient', this._ua.getMod('orient'));\n            }\n        },\n\n        'orient': {\n            'portrait': function() {\n                this._reDraw('portrait');\n            },\n            'landscape': function() {\n                this._reDraw('landscape');\n            }\n        }\n    },\n\n    _onOrientChange: function(e, data) {\n        // переключаемся между значениям собственного модификатора `orient`\n        this.setMod(data.modName, data.modVal);\n    },\n\n    _reDraw: function(orient) {\n        // обновляем содержимое контейнера `inner` при смене ориентации устройства\n        console.log(orient);\n        bemDom.update(this.domElem, orient);\n    }\n}));\n\n});\n"
        },
        {
            "block": "paragraph",
            "content": [
                "В примере блок-контейнер ",
                {
                    "block": "inline-code",
                    "content": "inner"
                },
                ", вложенный в ",
                {
                    "block": "inline-code",
                    "content": "page"
                },
                ", подменяет свое содержимое при смене ориентации устройства."
            ]
        }
    ]
}