{
    "block": "md-root",
    "content": [
        {
            "level": 1,
            "block": "heading",
            "mods": {
                "level": 1
            },
            "content": "page"
        },
        {
            "block": "paragraph",
            "content": [
                "Блок предоставляет шаблоны, создающие набор HTML-элементов верхнего уровня страницы: ",
                {
                    "block": "inline-code",
                    "content": "<html>"
                },
                ", ",
                {
                    "block": "inline-code",
                    "content": "<head>"
                },
                ", ",
                {
                    "block": "inline-code",
                    "content": "<body>"
                },
                "."
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
            "content": "Специальные поля блока"
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
                    "Поле",
                    "Тип",
                    "Описание"
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#declfields-doctype\">"
                        },
                        "doctype",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "String"
                    },
                    "Позволяет переопределить строку DTD текущего документа."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#declfields-title\">"
                        },
                        "title",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "String"
                    },
                    [
                        "Позволяет указать содержимое ",
                        {
                            "block": "inline-code",
                            "content": "<title>"
                        },
                        "."
                    ]
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#declfields-favicon\">"
                        },
                        "favicon",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "String"
                    },
                    "Позволяет указать URL значка страницы (фавиконки)."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#declfields-head\">"
                        },
                        "head",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "BEMJSON"
                    },
                    [
                        "Позволяет дополнить содержимое ",
                        {
                            "block": "inline-code",
                            "content": "<head>"
                        },
                        "."
                    ]
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#declfields-styles\">"
                        },
                        "styles",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "BEMJSON"
                    },
                    "Позволяет подключать таблицы стилей CSS."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#declfields-scripts\">"
                        },
                        "scripts",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "BEMJSON"
                    },
                    "Позволяет подключать скрипты в тело документа."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#declfields-content\">"
                        },
                        "content",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "BEMJSON"
                    },
                    "Позволяет указать содержимое страницы."
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
                            "content": "<a href=\"#elems-css\">"
                        },
                        "css",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "BEMJSON"
                    },
                    "Служит для подключения CSS по ссылке или в виде строки."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#elems-js\">"
                        },
                        "js",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "BEMJSON"
                    },
                    "Служит для подключения JS по ссылке или в виде строки."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#elems-meta\">"
                        },
                        "meta",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "BEMJSON"
                    },
                    [
                        "Служит для создания HTML-элементов ",
                        {
                            "block": "inline-code",
                            "content": "<meta>"
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
            "content": "Специальные поля элементов блока"
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
                    "Поле",
                    "Тип",
                    "Описание"
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#elems-css\">"
                        },
                        "css",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#elems-css-declfields-url\">"
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
                    "Позволяет задать URL для загрузки стилей."
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#elems-css-declfields-content\">"
                        },
                        "content",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "String"
                    },
                    "Служит для задания стилей в виде строки"
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#elems-js\">"
                        },
                        "js",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#elems-css-declfields-url\">"
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
                    "Позволяет задать URL для загрузки скрипта."
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#elems-css-declfields-content\">"
                        },
                        "content",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "String"
                    },
                    "Служит для задания скриптов в виде строки"
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
                "Блок отвечает за создание HTML-элементов верхнего уровня, подключение к странице CSS, JS, элементов ",
                {
                    "block": "inline-code",
                    "content": "<meta>"
                },
                " и указание заголовка. Для этого в BEMJSON-декларации блока и элементов блока зарезервированы специальные поля."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"declfields\">"
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
            "content": "Специальные поля блока"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"declfields-doctype\">"
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
                "Поле  ",
                {
                    "block": "inline-code",
                    "content": "doctype"
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
            "content": [
                "Позволяет явно указать строку с DTD (Document Type Definition) текущего документа. Если свойство не задано, по умолчанию будет использоваться ",
                {
                    "block": "inline-code",
                    "content": "<!DOCTYPE html>"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"declfields-title\">"
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
                "Поле ",
                {
                    "block": "inline-code",
                    "content": "title"
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
            "content": [
                "Название страницы. Становится HTML-элементом ",
                {
                    "block": "inline-code",
                    "content": "<title>"
                },
                "."
            ]
        },
        {
            "block": "html",
            "content": "<!-- bem-example: tmp/data/bem-core-4.2.1/touch-phone.examples/page/YCTx6xsVrddmPuGQRLMdhqEqE1Y -->"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"declfields-favicon\">"
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
                "Поле ",
                {
                    "block": "inline-code",
                    "content": "favicon"
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
            "content": "Позволяет указать URL значка страницы (фавиконки):"
        },
        {
            "block": "html",
            "content": "<!-- bem-example: tmp/data/bem-core-4.2.1/touch-phone.examples/page/ceNNZlU7epqWA6ruzTr_WO7anlM -->"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"declfields-head\">"
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
                "Поле ",
                {
                    "block": "inline-code",
                    "content": "head"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Тип: ",
                {
                    "block": "inline-code",
                    "content": "BEMJSON"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Позволяет дополнить содержимое ",
                {
                    "block": "inline-code",
                    "content": "HTML"
                },
                "-элемента ",
                {
                    "block": "inline-code",
                    "content": "<head>"
                },
                ", определенное в шаблоне блока:"
            ]
        },
        {
            "block": "html",
            "content": "<!-- bem-example: tmp/data/bem-core-4.2.1/touch-phone.examples/page/N-eAMQv5I0XgY2UOqj0ptK-zzU8 -->"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"declfields-styles\">"
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
                "Поле ",
                {
                    "block": "inline-code",
                    "content": "styles"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Тип: ",
                {
                    "block": "inline-code",
                    "content": "BEMJSON"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Позволяет подключить ",
                {
                    "block": "inline-code",
                    "content": "CSS"
                },
                ":"
            ]
        },
        {
            "block": "html",
            "content": "<!-- bem-example: tmp/data/bem-core-4.2.1/touch-phone.examples/page/kgdjTaKprV4f0O6cAbHi9jQk2cY -->"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"declfields-scripts\">"
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
                "Поле ",
                {
                    "block": "inline-code",
                    "content": "scripts"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Тип: ",
                {
                    "block": "inline-code",
                    "content": "BEMJSON"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Позволяет подключать JS в тело страницы в конец HTML-элемента ",
                {
                    "block": "inline-code",
                    "content": "<body>"
                },
                ":"
            ]
        },
        {
            "block": "html",
            "content": "<!-- bem-example: tmp/data/bem-core-4.2.1/touch-phone.examples/page/fzvgtDGmv5OZYzUs8xUtIXmJNJk -->"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"declfields-content\">"
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
                "Поле ",
                {
                    "block": "inline-code",
                    "content": "content"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Тип: ",
                {
                    "block": "inline-code",
                    "content": "BEMJSON"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": "Позволяет указать содержимое страницы."
        },
        {
            "block": "html",
            "content": "<!-- bem-example: tmp/data/bem-core-4.2.1/touch-phone.examples/page/Q7n0PErQwC7HB0ThZZXH_nNIsCc -->"
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
                    "content": "<a name=\"elems-css\">"
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
                    "content": "css"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Служит для подключения CSS по ссылке или в виде строки. В зависимости от того, указано ли в декларации элемента поле ",
                {
                    "block": "inline-code",
                    "content": "url"
                },
                ", создается HTML-элемент с тегом:"
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
                                "content": "<link>"
                            },
                            " и свойством ",
                            {
                                "block": "inline-code",
                                "content": "stylesheet"
                            },
                            ", если ",
                            {
                                "block": "inline-code",
                                "content": "url"
                            },
                            " есть."
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
                                "content": "<style>"
                            },
                            ", если поле ",
                            {
                                "block": "inline-code",
                                "content": "url"
                            },
                            " неуказано. В этом случае предполагается, что содержимое элемента передается с помощью свойства ",
                            {
                                "block": "inline-code",
                                "content": "content"
                            },
                            " BEMJSON-декларации элемента."
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
                    "content": "<a name=\"elems-css-declfields-content\">"
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
                "Специализированное поле ",
                {
                    "block": "inline-code",
                    "content": "content"
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
            "content": [
                "Служит для явной передачи содержимого HTML-элементу ",
                {
                    "block": "inline-code",
                    "content": "<style>"
                },
                ":"
            ]
        },
        {
            "block": "html",
            "content": "<!-- bem-example: tmp/data/bem-core-4.2.1/touch-phone.examples/page/o1AyMtl0VnhgdroCUO0K7JfsmDE -->"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"elems-css-declfields-url\">"
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
                "Специализированное поле ",
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
            "content": [
                "Позволяет задать URL для загрузки таблицы CSS. Значение поля ",
                {
                    "block": "inline-code",
                    "content": "url"
                },
                " BEMJSON-декларации передается свойству ",
                {
                    "block": "inline-code",
                    "content": "href"
                },
                " создаваемого HTML-элемента."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"elems-js\">"
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
                    "content": "js"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Служит для подключения JS по ссылке или в виде строки. Создает HTML-элемент ",
                {
                    "block": "inline-code",
                    "content": "<script>"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"elems-js-declfields-content\">"
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
                "Специализированное поле ",
                {
                    "block": "inline-code",
                    "content": "content"
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
            "content": [
                "Служит для явной передачи содержимого HTML-элементу ",
                {
                    "block": "inline-code",
                    "content": "<script>"
                },
                ":"
            ]
        },
        {
            "block": "html",
            "content": "<!-- bem-example: tmp/data/bem-core-4.2.1/touch-phone.examples/page/JLTta5hnL74dwUmyVFQMaMTlffk -->"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"elems-js-declfields-url\">"
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
                "Специализированное поле ",
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
            "content": [
                "Позволяет задать URL для загрузки скрипта. Значение поля ",
                {
                    "block": "inline-code",
                    "content": "url"
                },
                " BEMJSON-декларации передается свойству ",
                {
                    "block": "inline-code",
                    "content": "src"
                },
                " создаваемого HTML-элемента."
            ]
        },
        {
            "block": "html",
            "content": "<!-- bem-example: tmp/data/bem-core-4.2.1/touch-phone.examples/page/L_TVR3Z3IhnnJemi6iD9y5VeGDA -->"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"elems-meta\">"
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
                    "content": "meta"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Служит для создания HTML-элементов ",
                {
                    "block": "inline-code",
                    "content": "<meta>"
                },
                " и указания для них пользовательских метаданных. Метаданные передаются как ключи и значения хеша атрибутов – свойства ",
                {
                    "block": "inline-code",
                    "content": "attrs"
                },
                " BEMJSON-декларации элемента:"
            ]
        },
        {
            "block": "html",
            "content": "<!-- bem-example: tmp/data/bem-core-4.2.1/touch-phone.examples/page/5QJT7MP9NZFPOnOE7a6oCm-IzIA -->"
        },
        {
            "block": "paragraph",
            "content": [
                "Подробнее смотрите в документации к ",
                {
                    "block": "inline-code",
                    "content": "<meta>"
                },
                " ",
                {
                    "href": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta",
                    "block": "link",
                    "content": "на MDN"
                },
                "."
            ]
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
            "content": "page"
        },
        {
            "block": "paragraph",
            "content": [
                "На уровне переопределения ",
                {
                    "block": "inline-code",
                    "content": "touch.blocks"
                },
                " блок предоставляет шаблоны, создающие дополнительный набор HTML-элементов внутри ",
                {
                    "block": "inline-code",
                    "content": "head"
                },
                "."
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
            "content": "Специализированные поля блока"
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
                    "Поле",
                    "Тип",
                    "Описание"
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#elems-meta-declfields-zoom\">"
                        },
                        "zoom",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "{Boolean}"
                    },
                    "Наличие масштабирования."
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
                            "content": "<a href=\"#elems-icon\">"
                        },
                        "icon",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "BEMJSON"
                    },
                    "Позволяет задать ссылку на значки Web Clips, для отображения на рабочем столе iOS при добавлении ссылки на сайт."
                ]
            ]
        },
        {
            "level": 3,
            "block": "heading",
            "mods": {
                "level": 3
            },
            "content": "Специализированные поля элементов блока"
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
                    "Поле",
                    "Тип",
                    "Описание"
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#elems-icon\">"
                        },
                        "icon",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#elems-icon-declfields-src\">"
                        },
                        "src{X}",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "{String}"
                    },
                    "Используются для указания пути к файлу значка."
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
            "content": "Подробности"
        },
        {
            "block": "paragraph",
            "content": "Блок создает HTML-элементы:"
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
                                "content": "<meta>"
                            },
                            " с атрибутом ",
                            {
                                "block": "inline-code",
                                "content": "name"
                            },
                            " в значении ",
                            {
                                "block": "inline-code",
                                "content": "'format-detection'"
                            },
                            ". Значением ",
                            {
                                "block": "inline-code",
                                "content": "content"
                            },
                            " служит ",
                            {
                                "block": "inline-code",
                                "content": "'telephone=no'"
                            },
                            ". Элемент отключает автоматическое распознавание телефонных номеров в html-коде и их набор по нажатию."
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
                                "content": "<link>"
                            },
                            " с атрибутом ",
                            {
                                "block": "inline-code",
                                "content": "name"
                            },
                            " в значении ",
                            {
                                "block": "inline-code",
                                "content": "'apple-mobile-web-app-capable'"
                            },
                            ". Значением ",
                            {
                                "block": "inline-code",
                                "content": "content"
                            },
                            " служит ",
                            {
                                "block": "inline-code",
                                "content": "'yes'"
                            },
                            ". Элемент задает для страницы полноэкранный режим отображения на устройствах с iOS."
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
                                "content": "<meta>"
                            },
                            " с атрибутом ",
                            {
                                "block": "inline-code",
                                "content": "name"
                            },
                            " в значении ",
                            {
                                "block": "inline-code",
                                "content": "'viewport'"
                            },
                            ". Элемент позволяет управлять масштабированием страницы. По умолчанию, масштабирование отключено. Для включения используйте специализированное поле ",
                            {
                                "block": "inline-code",
                                "content": "zoom"
                            },
                            " со значением ",
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
            "content": [
                "Кроме того, к элементу ",
                {
                    "block": "html",
                    "content": "<body>"
                },
                " с классом ",
                {
                    "block": "inline-code",
                    "content": "page"
                },
                " подмешивается блок ",
                {
                    "href": "https://github.com/bem/bem-core/blob/v2/desktop.blocks/ua/ua.ru.md",
                    "block": "link",
                    "content": "ua"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"declfields\">"
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
            "content": "Специализированные поля блока"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"declfields-zoom\">"
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
                "Специализированное поле ",
                {
                    "block": "inline-code",
                    "content": "zoom"
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
                "Управляет масштабированием страницы. Определяет значение атрибута ",
                {
                    "block": "inline-code",
                    "content": "content"
                },
                " HTML-элемент ",
                {
                    "block": "inline-code",
                    "content": "<meta>"
                },
                " с атрибутом ",
                {
                    "block": "inline-code",
                    "content": "name"
                },
                " в значении ",
                {
                    "block": "inline-code",
                    "content": "'viewport'"
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
                        "content": [
                            "со значением ",
                            {
                                "block": "inline-code",
                                "content": "true"
                            },
                            " – ",
                            {
                                "block": "inline-code",
                                "content": "'initial-scale=1'"
                            },
                            ". Масштабирование включено. Масштаб по умолчанию устанавливается равным 100%."
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
                            "без значения или ",
                            {
                                "block": "inline-code",
                                "content": "false"
                            },
                            " – ",
                            {
                                "block": "inline-code",
                                "content": "'maximum-scale=1,initial-scale=1,user-scalable=no'"
                            },
                            ". Масштаб по умолчанию устанавливается равным 100%. Масштабирование отключено."
                        ]
                    }
                }
            ]
        },
        {
            "block": "html",
            "content": "<!-- bem-example: tmp/data/bem-core-4.2.1/touch-phone.examples/page/vlRfK-0h-FynykvbfEEmC9ZNui0 -->"
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
                    "content": "<a name=\"elems-icon\">"
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
                    "content": "icon"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Позволяет задать ссылку на значки Web Clips, для отображения на рабочем столе iOS при добавлении ссылки на сайт. Ссылка задается через специализированное поле ",
                {
                    "block": "inline-code",
                    "content": "src{X}"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"elems-icon-declfields-src\">"
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
                "Специализированное поле ",
                {
                    "block": "inline-code",
                    "content": "src{X}"
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
            "content": [
                "Поле вида ",
                {
                    "block": "inline-code",
                    "content": "src{X}"
                },
                " используются для указания пути к файлу значка. В зависимости от значения ",
                {
                    "block": "inline-code",
                    "content": "{X}"
                },
                " элемент ",
                {
                    "block": "inline-code",
                    "content": "icon"
                },
                " преобразуется в HTML-элемент:"
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
                                "content": "src16"
                            },
                            " – ",
                            {
                                "block": "inline-code",
                                "content": "<link>"
                            },
                            " c атрибутом ",
                            {
                                "block": "inline-code",
                                "content": "rel"
                            },
                            " со значением ",
                            {
                                "block": "inline-code",
                                "content": "'shortcut icon'"
                            },
                            ". "
                        ]
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": [
                        {
                            "block": "paragraph",
                            "content": [
                                {
                                    "block": "inline-code",
                                    "content": "src57"
                                },
                                " – ",
                                {
                                    "block": "inline-code",
                                    "content": "<link>"
                                },
                                " c атрибутами: "
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
                                                "content": "sizes"
                                            },
                                            " со значением ",
                                            {
                                                "block": "inline-code",
                                                "content": "'57x57'"
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
                                        "content": [
                                            {
                                                "block": "inline-code",
                                                "content": "rel"
                                            },
                                            " со значением ",
                                            {
                                                "block": "inline-code",
                                                "content": "'apple-touch-icon-precomposed'"
                                            },
                                            ". "
                                        ]
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": [
                        {
                            "block": "paragraph",
                            "content": [
                                {
                                    "block": "inline-code",
                                    "content": "src72"
                                },
                                " – ",
                                {
                                    "block": "inline-code",
                                    "content": "<link>"
                                },
                                " c атрибутами: "
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
                                                "content": "sizes"
                                            },
                                            " со значением ",
                                            {
                                                "block": "inline-code",
                                                "content": "'72x72'"
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
                                        "content": [
                                            {
                                                "block": "inline-code",
                                                "content": "rel"
                                            },
                                            " со значением ",
                                            {
                                                "block": "inline-code",
                                                "content": "'apple-touch-icon-precomposed'"
                                            },
                                            ". "
                                        ]
                                    }
                                }
                            ]
                        }
                    ]
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
                                "content": "src114"
                            },
                            " – ",
                            {
                                "block": "inline-code",
                                "content": "<link>"
                            },
                            " c атрибутом ",
                            {
                                "block": "inline-code",
                                "content": "rel"
                            },
                            " со значением ",
                            {
                                "block": "inline-code",
                                "content": "'apple-touch-icon-precomposed'"
                            },
                            ". "
                        ]
                    }
                }
            ]
        },
        {
            "block": "html",
            "content": "<!-- bem-example: tmp/data/bem-core-4.2.1/touch-phone.examples/page/J0cxzgE-Ee3kPiWuhduim8BKFI4 -->"
        }
    ]
}