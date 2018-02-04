{
    "block": "md-root",
    "content": [
        {
            "level": 1,
            "block": "heading",
            "mods": {
                "level": 1
            },
            "content": "jquery"
        },
        {
            "block": "paragraph",
            "content": [
                "Блок служит для загрузки и подключения на страницу библиотеки ",
                {
                    "href": "https://jquery.com",
                    "block": "link",
                    "content": "jQuery"
                },
                " и ее расширений.\nРасширения подключаются через зависимости от элементов блока."
            ]
        },
        {
            "level": 2,
            "block": "heading",
            "mods": {
                "level": 2
            },
            "content": "Способы использования"
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['jquery'], function($) {\n    console.log($);\n});\n"
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
                            "content": "<a href=\"#elems-config\">"
                        },
                        "config",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "JS"
                    },
                    "Настройки jQuery."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#elems-event\">"
                        },
                        "event",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "JS"
                    },
                    "Расширения событийной модели jQuery."
                ]
            ]
        },
        {
            "level": 3,
            "block": "heading",
            "mods": {
                "level": 3
            },
            "content": "Свойства и методы элементов блока"
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
                    "Тип возвращаемого значения",
                    "Описание"
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#elems-config\">"
                        },
                        "config",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-url\">"
                        },
                        "url",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "String"
                    },
                    "Строка с URL, подключаемой библиотеки jQuery."
                ]
            ]
        },
        {
            "level": 3,
            "block": "heading",
            "mods": {
                "level": 3
            },
            "content": "События элементов блока"
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
                    "Имя",
                    "Описание"
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#elems-event\">"
                        },
                        "event",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#events-pointerclick\">"
                        },
                        "pointerclick",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        "Позволяет избавиться от задержки события ",
                        {
                            "block": "inline-code",
                            "content": "click"
                        },
                        " на тач-устройствах."
                    ]
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#events-pointerover\">"
                        },
                        "pointerover",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    "Генерируется, когда указатель устройства ввода находится над элементом."
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#events-pointerenter\">"
                        },
                        "pointerenter",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    "Генерируется при входе указателя в активную зону элемента."
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#events-pointerdown\">"
                        },
                        "pointerdown",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    "Генерируется при входе устройства ввода в состояние активного нажатия."
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#events-pointermove\">"
                        },
                        "pointermove",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    "Генерируется при изменении координат указателя."
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#events-pointerup\">"
                        },
                        "pointerup",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    "Генерируется по выходу из состояния активного нажатия."
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#events-pointerout\">"
                        },
                        "pointerout",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    "Генерируется когда указатель покидает зону над элементаом."
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#events-pointerleave\">"
                        },
                        "pointerleave",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    "Генерируется при выходе указателя из активной зоны элемента."
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#events-pointerpress\">"
                        },
                        "pointerpress",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        "Генерируется по событию ",
                        {
                            "block": "inline-code",
                            "content": "pointerdown"
                        },
                        "."
                    ]
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#events-pointerrelease\">"
                        },
                        "pointerrelease",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        "Генерируется по событиям ",
                        {
                            "block": "inline-code",
                            "content": "pointerup"
                        },
                        " и ",
                        {
                            "block": "inline-code",
                            "content": "pointercancel"
                        },
                        "."
                    ]
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#events-pointercancel\">"
                        },
                        "pointercancel",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        "Генерируется в случаях, когда не предполагается дальнейшее возникновение pointer-событий или после генерации события ",
                        {
                            "block": "inline-code",
                            "content": "pointerdown"
                        },
                        "."
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
                    "content": "<a name=\"elems-config\">"
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
                    "content": "config"
                },
                " блока ",
                {
                    "block": "inline-code",
                    "content": "jquery"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": "Элемент предоставляет объект с настройками подключаемой библиотеки jQuery. Настройки хранятся как свойства объекта."
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
            "level": 2,
            "block": "heading",
            "mods": {
                "level": 2
            },
            "content": "Свойства и методы объекта"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-url\">"
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
                "Свойство ",
                {
                    "block": "inline-code",
                    "content": "url"
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
            "content": "Содержит строку с URL для загрузки jQuery.\nВ проекте значение свойства может быть переопределено. Тогда при подключении блока будет использовано новое значение, если библиотека jQuery не была подключена предварительно."
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.define('jquery__config', function(provide) {\n\nprovide({ url: '//foo.bar/my-custom-jquery.js' });\n\n});\n"
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
                    "content": "<a name=\"elems-event\">"
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
                    "content": "event"
                },
                " блока ",
                {
                    "block": "inline-code",
                    "content": "jquery"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Элемент реализует поддержку дополнительных типов событий jQuery. Дополнительные типы подключаются с помощью соответствующих значений модификатора ",
                {
                    "block": "inline-code",
                    "content": "type"
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
                {
                    "block": "html",
                    "content": "<a name=\"modifiers-name\">"
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
                    "content": "type"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": "Предоставляет набор полифилов, реализующих уровень абстракции над jQuery-событиями устройств ввода. Это позволяет создавать общую логику для различных платформ (десктопы, телефоны и т.д.) и дополнять ее методами, специфическими для конкретного вида устройств."
        },
        {
            "block": "paragraph",
            "content": [
                "Каждый полифил добавляет набор ",
                {
                    "block": "strong",
                    "content": "pointer-событий"
                },
                ", для создания аппаратно-независимой логики."
            ]
        },
        {
            "block": "paragraph",
            "content": "Все pointer-события являются пользовательскими событиями jQuery. Подписка на pointer-события осуществляется стандартным образом:"
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.define('pointer-test', ['i-bem-dom'], function(provide, bemDom) {\n\nprovide(bemDom.declBlock(this.name, /** @lends pointer-test.prototype */ {\n    onSetMod : {\n        js : {\n            inited : function() {\n                // при инициализации подписываемся на pointerpress на самом блоке\n                this._domEvents().on('pointerpress', this._onPress);\n            }\n        }\n    },\n    _onPress : function(e) {\n        console.log(e.type);\n        // при вызове обработчика для pointerpress подписываемся на pointerrelease\n        this._domEvents().on('pointerrelease', this._onRelease);\n    },\n    _onRelease : function(e) {\n        console.log(e.type);\n        // при вызове обработчика для pointerrelease отписываемся от pointerrelease\n        this._domEvents().un('pointerrelease', this._onRelease);\n    }\n}));\n});\n"
        },
        {
            "block": "paragraph",
            "content": "В зависимости от значения модификатора, будут подключены разные полифилы."
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"modifiers-type-pointer\">"
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
                },
                " в значении ",
                {
                    "block": "inline-code",
                    "content": "pointer"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": "Модификатор для подключения всех типов pointer-событий. Не вводит дополнительной логики."
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"modifiers-type-pointerclick\">"
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
                },
                " в значении ",
                {
                    "block": "inline-code",
                    "content": "pointerclick"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Подключает полифил, реализующий событие ",
                {
                    "block": "inline-code",
                    "content": "pointerclick"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"events-pointerclick\">"
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
                "Событие ",
                {
                    "block": "inline-code",
                    "content": "pointerclick"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Генерируется по нажатию левой клавиши мыши или в момент контакта с рабочей поверхностью устройства. Использование ",
                {
                    "block": "inline-code",
                    "content": "pointerclick"
                },
                " позволяет избавиться от задержки события ",
                {
                    "block": "inline-code",
                    "content": "click"
                },
                " на тач-устройствах."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"modifiers-type-pointernative\">"
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
                },
                " в значении ",
                {
                    "block": "inline-code",
                    "content": "pointernative"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Подключает полифил, реализующий базовую функциональность модели ",
                {
                    "href": "http://www.w3.org/TR/pointerevents/",
                    "block": "link",
                    "content": "W3C Pointer Events"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": "С модификатором доступен следующий набор событий:"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"events-pointerover\">"
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
                "Событие ",
                {
                    "block": "inline-code",
                    "content": "pointerover"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": "Генерируется:"
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
                        "content": "Когда указатель находится над элементом."
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": [
                            "Перед событием ",
                            {
                                "block": "inline-code",
                                "content": "pointerdown"
                            },
                            ", для устройств, не поддерживающих ",
                            {
                                "block": "inline-code",
                                "content": "hover"
                            },
                            "."
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
                    "content": "<a name=\"events-pointerenter\">"
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
                "Событие ",
                {
                    "block": "inline-code",
                    "content": "pointerenter"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": "Генерируется:"
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
                            "При входе указателя в ",
                            {
                                "block": "emphasis",
                                "content": "активную зону"
                            },
                            " элемента. Когда указатель находится над элементом или одним из его потомков."
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
                            "По событию ",
                            {
                                "block": "inline-code",
                                "content": "pointerdown"
                            },
                            " для устройств, не поддерживающих ",
                            {
                                "block": "inline-code",
                                "content": "hover"
                            },
                            "."
                        ]
                    }
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Событие аналогично ",
                {
                    "block": "inline-code",
                    "content": "pointerover"
                },
                ", но не всплывает."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"events-pointerdown\">"
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
                "Событие ",
                {
                    "block": "inline-code",
                    "content": "pointerdown"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Генерируется в момент, когда устройство ввода входит в состояние ",
                {
                    "block": "emphasis",
                    "content": "активного нажатия"
                },
                ":"
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
                        "content": "Для мыши – когда хотя бы одна клавиша нажата."
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": "Для перьевых и тач- устройств – состояние контакта с рабочей поверхностью устройства."
                    }
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"events-pointermove\">"
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
                "Событие ",
                {
                    "block": "inline-code",
                    "content": "pointermove"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": "Генерируется при изменении координат указателя."
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"events-pointerup\">"
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
                "Событие ",
                {
                    "block": "inline-code",
                    "content": "pointerup"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Генерируется по выходу из состояния ",
                {
                    "block": "emphasis",
                    "content": "активного нажатия"
                },
                ":"
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
                        "content": "Для мыши это соответствует переходу от состояния, когда была нажата хотя бы одна клавиша, к состоянию без нажатых клавиш."
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": "Для перьевых и тач- устройств – моменту разрыва контакта с рабочей поверхностью устройства."
                    }
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"events-pointerout\">"
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
                "Событие ",
                {
                    "block": "inline-code",
                    "content": "pointerout"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Генерируется при выходе указателя из ",
                {
                    "block": "emphasis",
                    "content": "активной зоны"
                },
                " элемента:"
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
                        "content": "Когда указатель покидает зону над элементом или одним из его потомков."
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": [
                            "После событий ",
                            {
                                "block": "inline-code",
                                "content": "pointerup"
                            },
                            " и ",
                            {
                                "block": "inline-code",
                                "content": "pointercancel"
                            },
                            " для устройств, не поддерживающих ",
                            {
                                "block": "inline-code",
                                "content": "hover"
                            },
                            ". Например, когда стилус (палец) покидает рабочую зону устройства."
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
                    "content": "<a name=\"events-pointerleave\">"
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
                "Событие ",
                {
                    "block": "inline-code",
                    "content": "pointerleave"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Генерируется при выходе указателя из ",
                {
                    "block": "emphasis",
                    "content": "активной зоны"
                },
                " элемента:"
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
                        "content": "Когда указатель покидает зону над элементом или одним из его потомков."
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": [
                            "После событий ",
                            {
                                "block": "inline-code",
                                "content": "pointerup"
                            },
                            " и ",
                            {
                                "block": "inline-code",
                                "content": "pointercancel"
                            },
                            " для устройств, не поддерживающих ",
                            {
                                "block": "inline-code",
                                "content": "hover"
                            },
                            "."
                        ]
                    }
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Событие аналогично ",
                {
                    "block": "inline-code",
                    "content": "pointerout"
                },
                ", но не всплывает."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"events-pointercancel\">"
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
                "Событие ",
                {
                    "block": "inline-code",
                    "content": "pointercancel"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": "Генерируется в случаях, когда:"
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
                        "content": "Не предполагается дальнейшее возникновение pointer-событий (например, в следствие изменения аппаратных настроек)."
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": [
                            "После генерации события ",
                            {
                                "block": "inline-code",
                                "content": "pointerdown"
                            },
                            ", если указатель был использован для масштабирования страницы."
                        ]
                    }
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Например, событие генерируется при изменении ориентации устройства пока оно находится в состояние ",
                {
                    "block": "emphasis",
                    "content": "активного нажатия"
                },
                ". Или при превышении лимита на количество одновременных нажатий, поддерживаемых устройством."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "После генерации события ",
                {
                    "block": "inline-code",
                    "content": "pointercancel"
                },
                " последовательно генерируются события ",
                {
                    "block": "inline-code",
                    "content": "pointerout"
                },
                " и ",
                {
                    "block": "inline-code",
                    "content": "pointerleave"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"modifiers-type-pointerpressrealease\">"
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
                },
                " в значении ",
                {
                    "block": "inline-code",
                    "content": "pointerpressrealease"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Подключает полифил, реализующий события ",
                {
                    "block": "inline-code",
                    "content": "pointerpress"
                },
                " и ",
                {
                    "block": "inline-code",
                    "content": "pointerrelease"
                },
                ". Полифил использует события Pointer Events."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"events-pointerpress\">"
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
                "Событие ",
                {
                    "block": "inline-code",
                    "content": "pointerpress"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Генерируется по событию ",
                {
                    "block": "inline-code",
                    "content": "pointerdown"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"events-pointerrelease\">"
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
                "Событие ",
                {
                    "block": "inline-code",
                    "content": "pointerrelease"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Генерируется по событиям ",
                {
                    "block": "inline-code",
                    "content": "pointerup"
                },
                " и ",
                {
                    "block": "inline-code",
                    "content": "pointercancel"
                },
                "."
            ]
        }
    ]
}