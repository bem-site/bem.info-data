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
            "content": "<!-- bem-example: tmp/data/bem-core-4.2.1/desktop.examples/page/YCTx6xsVrddmPuGQRLMdhqEqE1Y -->"
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
            "content": "<!-- bem-example: tmp/data/bem-core-4.2.1/desktop.examples/page/ceNNZlU7epqWA6ruzTr_WO7anlM -->"
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
            "content": "<!-- bem-example: tmp/data/bem-core-4.2.1/desktop.examples/page/N-eAMQv5I0XgY2UOqj0ptK-zzU8 -->"
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
            "content": "<!-- bem-example: tmp/data/bem-core-4.2.1/desktop.examples/page/kgdjTaKprV4f0O6cAbHi9jQk2cY -->"
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
            "content": "<!-- bem-example: tmp/data/bem-core-4.2.1/desktop.examples/page/fzvgtDGmv5OZYzUs8xUtIXmJNJk -->"
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
            "content": "<!-- bem-example: tmp/data/bem-core-4.2.1/desktop.examples/page/Q7n0PErQwC7HB0ThZZXH_nNIsCc -->"
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
            "content": "<!-- bem-example: tmp/data/bem-core-4.2.1/desktop.examples/page/o1AyMtl0VnhgdroCUO0K7JfsmDE -->"
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
            "content": "<!-- bem-example: tmp/data/bem-core-4.2.1/desktop.examples/page/JLTta5hnL74dwUmyVFQMaMTlffk -->"
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
            "content": "<!-- bem-example: tmp/data/bem-core-4.2.1/desktop.examples/page/L_TVR3Z3IhnnJemi6iD9y5VeGDA -->"
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
            "content": "<!-- bem-example: tmp/data/bem-core-4.2.1/desktop.examples/page/5QJT7MP9NZFPOnOE7a6oCm-IzIA -->"
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
                    "content": "desktop.blocks"
                },
                " блок предоставляет шаблон, создающий дополнительный HTML-элемент ",
                {
                    "block": "inline-code",
                    "content": "<meta>"
                },
                ". "
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
                            "content": "<a href=\"#declfields-x-ua-compatible\">"
                        },
                        "x-ua-compatible",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        {
                            "block": "inline-code",
                            "content": "{String}"
                        },
                        "|",
                        {
                            "block": "inline-code",
                            "content": "{Boolean}"
                        }
                    ],
                    [
                        "Управляет поведением создаваемого блоком HTML-элемента ",
                        {
                            "block": "inline-code",
                            "content": "<meta>"
                        },
                        " с атрибутом ",
                        {
                            "block": "inline-code",
                            "content": "http-equiv"
                        },
                        " ",
                        {
                            "block": "inline-code",
                            "content": "X-UA-Compatible"
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
                    "Элемент служит для подключения CSS."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#elems-conditional-comment\">"
                        },
                        "conditional-comment",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "BEMJSON"
                    },
                    "Помогает использовать условные комментарии."
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
                            "content": "<a href=\"#elems-css-declfields-ie\">"
                        },
                        {
                            "block": "inline-code",
                            "content": "ie"
                        },
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        {
                            "block": "inline-code",
                            "content": "{String}"
                        },
                        "|",
                        {
                            "block": "inline-code",
                            "content": "{Boolean}"
                        }
                    ],
                    "Используется для указания применимости стилей к Internet Explorer версий 6-9 и подключения специальных стилей для Internet Explorer."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#elems-conditional-comment\">"
                        },
                        "conditional-comment",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#elems-conditional-comment-declfields-condition\">"
                        },
                        {
                            "block": "inline-code",
                            "content": "condition"
                        },
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "{String}"
                    },
                    [
                        "Позволяет указать условие, при выполнении которого содержимое поля ",
                        {
                            "block": "inline-code",
                            "content": "content"
                        },
                        " декларации элемента, будет доступно."
                    ]
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#elems-conditional-comment-declfields-msieOnly\">"
                        },
                        {
                            "block": "inline-code",
                            "content": "msieOnly"
                        },
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "{Boolean}"
                    },
                    "Указывает, предназначен ли данный условный комментарий для использования исключительно в Internet Explorer."
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
            "content": [
                "Создает HTML-элемент ",
                {
                    "block": "inline-code",
                    "content": "<meta>"
                },
                " с атрибутом ",
                {
                    "block": "inline-code",
                    "content": "http-equiv"
                },
                " ",
                {
                    "block": "inline-code",
                    "content": "X-UA-Compatible"
                },
                ", определяющий совместимость с юзер-агентами. По умолчанию, значением атрибута ",
                {
                    "block": "inline-code",
                    "content": "content"
                },
                " элемента является ",
                {
                    "block": "inline-code",
                    "content": "IE=edge"
                },
                " (совместим с последними версиями Internet Explorer)."
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
                    "content": "<a name=\"declfields-x-ua-compatible\">"
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
                    "content": "x-ua-compatible"
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
                "|",
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
                "Управляет поведением создаваемого блоком HTML-элемента ",
                {
                    "block": "inline-code",
                    "content": "<meta>"
                },
                " с атрибутом ",
                {
                    "block": "inline-code",
                    "content": "http-equiv"
                },
                " ",
                {
                    "block": "inline-code",
                    "content": "X-UA-Compatible"
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
                                "content": "false"
                            },
                            " HTML-элемент ",
                            {
                                "block": "inline-code",
                                "content": "<meta>"
                            },
                            " не будет создаваться."
                        ]
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item"
                }
            ]
        },
        {
            "block": "html",
            "content": "<!-- bem-example: tmp/data/bem-core-4.2.1/desktop.examples/page/g8EYIdh9AgJh6QysDURNL8NjhuM -->"
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
                        "строчное значение будет присвоено свойству ",
                        {
                            "block": "inline-code",
                            "content": "content"
                        },
                        " HTML-элемента ",
                        {
                            "block": "inline-code",
                            "content": "<meta>"
                        },
                        "."
                    ]
                }
            }
        },
        {
            "block": "html",
            "content": "<!-- bem-example: tmp/data/bem-core-4.2.1/desktop.examples/page/nYszvjsryletmINPgotIe_iEnD4 -->"
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
                {
                    "block": "html",
                    "content": "<a name=\"elems-css-declfields-ie\">"
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
                    "content": "ie"
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
                "|",
                {
                    "block": "inline-code",
                    "content": "{Boolean}"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": "Используется для указания применимости стилей к Internet Explorer версий 6-9 и подключения специальных стилей Internet Explorer. "
        },
        {
            "block": "paragraph",
            "content": "Допустимы следующие значения:"
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
                            "строка вида ",
                            {
                                "block": "inline-code",
                                "content": "'lt IE 8'"
                            },
                            " – элемент ",
                            {
                                "block": "inline-code",
                                "content": "<link>"
                            },
                            " будет обернут в условные комментарии, для использования в соответствующих версиях Internet Explorer (для текущего примера ",
                            {
                                "block": "inline-code",
                                "content": "lt IE 8"
                            },
                            " – ниже восьмой версии)."
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
                                "content": "false"
                            },
                            " – будут использоваться условные комментарии, предотвращающие использование стилей в IE 9 и ниже. "
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
                                "content": "true"
                            },
                            " – используется в случае, если в проекте есть отдельный CSS для каждой версии Internet Explorer. Значением свойства ",
                            {
                                "block": "inline-code",
                                "content": "url"
                            },
                            ", при этом, должна быть строка с путем и именем файла без суффикса. Во время подключения создаются элементы ",
                            {
                                "block": "inline-code",
                                "content": "<link>"
                            },
                            " с отдельным суффиксом для каждой версии. Другими словами, при значении ",
                            {
                                "block": "inline-code",
                                "content": "url"
                            },
                            " равном ",
                            {
                                "block": "inline-code",
                                "content": "foo.com/index"
                            },
                            " будут подключены стили ",
                            {
                                "block": "inline-code",
                                "content": "foo.com/index.ie6.css"
                            },
                            ", ",
                            {
                                "block": "inline-code",
                                "content": "foo.com/index.ie7.css"
                            },
                            " и т.д. до ",
                            {
                                "block": "inline-code",
                                "content": "...ie9.css"
                            },
                            ". При этом каждый HTML-элемент будет обернут в условный комментарий, обеспечивающий его подключение только в соответствующей версии Internet Explorer."
                        ]
                    }
                }
            ]
        },
        {
            "block": "html",
            "content": "<!-- bem-example: tmp/data/bem-core-4.2.1/desktop.examples/page/VmOuMDBTNYEwDgQndLtVKQSoes0 -->"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"elems-conditional-comment\">"
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
                    "content": "conditional-comment"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Позволяет обернуть содержимое поля ",
                {
                    "block": "inline-code",
                    "content": "content"
                },
                ", определенное в BEMJSON-декларации элемента, в условные комментарии. Условие, при котором содержимое поля будет доступно, определяется специализированным полем ",
                {
                    "block": "inline-code",
                    "content": "condition"
                },
                "."
            ]
        },
        {
            "block": "html",
            "content": "<!-- bem-example: tmp/data/bem-core-4.2.1/desktop.examples/page/NDffWuTwuV4aVmfWk_CX4ZVb0o8 -->"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"elems-conditional-comment-declfields-condition\">"
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
                    "content": "condition"
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
                "Условие, при выполнении которого содержимое поля ",
                {
                    "block": "inline-code",
                    "content": "content"
                },
                " декларации элемента, будет доступно. Например, определенная версия Internet Explorer."
            ]
        },
        {
            "block": "paragraph",
            "content": "Значение поля составляется из:"
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
                            "квантора – ",
                            {
                                "block": "inline-code",
                                "content": ">"
                            },
                            ", ",
                            {
                                "block": "inline-code",
                                "content": "<"
                            },
                            ", ",
                            {
                                "block": "inline-code",
                                "content": "="
                            },
                            ", ",
                            {
                                "block": "inline-code",
                                "content": "<="
                            },
                            ", ",
                            {
                                "block": "inline-code",
                                "content": ">="
                            },
                            ", ",
                            {
                                "block": "inline-code",
                                "content": "lt"
                            },
                            ", ",
                            {
                                "block": "inline-code",
                                "content": "gt"
                            },
                            ", ",
                            {
                                "block": "inline-code",
                                "content": "e"
                            },
                            " или ",
                            {
                                "block": "inline-code",
                                "content": "!"
                            },
                            " (логическое «не»);"
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
                            "слова ",
                            {
                                "block": "inline-code",
                                "content": "IE"
                            },
                            " отделенного с обеих сторон пробелами;"
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
                            "номера версии (6, 7, 8, 9). Может отсутствовать, если указан квантор ",
                            {
                                "block": "inline-code",
                                "content": "!"
                            },
                            ". Тогда, значение поля ",
                            {
                                "block": "inline-code",
                                "content": "content"
                            },
                            " будет доступно для всех браузеров, кроме Internet Explorer."
                        ]
                    }
                }
            ]
        },
        {
            "block": "html",
            "content": "<!-- bem-example: tmp/data/bem-core-4.2.1/desktop.examples/page/eyUuFBVSYhzbS3R8qvDkBF9ADx0 -->"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"elems-conditional-comment-declfields-msieOnly\">"
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
                    "content": "msieOnly"
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
                "Указывает на то, предназначен ли данный условный комментарий для использования исключительно в Internet Explorer. Со значением ",
                {
                    "block": "inline-code",
                    "content": "true"
                },
                " поле можно не указывать."
            ]
        },
        {
            "block": "html",
            "content": "<!-- bem-example: tmp/data/bem-core-4.2.1/desktop.examples/page/v41Pvo2n8kS4QZRqWFryyDdHyYo -->"
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
            "content": [
                "Элемент ",
                {
                    "block": "inline-code",
                    "content": "conditional-comments"
                },
                " блока ",
                {
                    "block": "inline-code",
                    "content": "page"
                }
            ]
        },
        {
            "lang": "javascript",
            "block": "code",
            "content": "({\n    block : 'page',\n    title : 'page__conditional-comments',\n    head : [\n        {\n            elem : 'conditional-comment',\n            condition : '<= IE 8',\n            content : { elem : 'css', url : '_page.ie.css' }\n        },\n        {\n            elem : 'conditional-comment',\n            condition : '! IE',\n            content : 'Not for IE'\n        },\n        {\n            elem : 'conditional-comment',\n            condition : '> IE 8',\n            msieOnly : false,\n            content : 'For IE9+ and all other browsers'\n        }\n    ],\n    scripts : [\n        {\n            elem : 'conditional-comment',\n            condition : 'lte IE 8',\n            content : { elem : 'js', url : 'https://yastatic.net/es5-shims/0.0.1/es5-shims.min.js' }\n        }\n    ]\n})\n"
        }
    ]
}