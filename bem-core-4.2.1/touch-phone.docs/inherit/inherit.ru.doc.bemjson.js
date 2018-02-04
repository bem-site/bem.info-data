{
    "block": "md-root",
    "content": [
        {
            "level": 1,
            "block": "heading",
            "mods": {
                "level": 1
            },
            "content": "inherit"
        },
        {
            "block": "paragraph",
            "content": "Блок предоставляет функцию, реализующую механизмы для объявления и наследования классов."
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
            "content": "Способы использования функции"
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
                    "Способ",
                    "Сигнатура",
                    "Тип возвращаемого значения",
                    "Описание"
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#runmode-declare\">"
                        },
                        "Объявление базового класса",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        "inherit(",
                        {
                            "block": "html",
                            "content": "<br>"
                        },
                        {
                            "block": "inline-code",
                            "content": "props {Object}"
                        },
                        ", ",
                        {
                            "block": "html",
                            "content": "<br>"
                        },
                        {
                            "block": "inline-code",
                            "content": "[staticProps {Object}]"
                        },
                        ")"
                    ],
                    {
                        "block": "inline-code",
                        "content": "Function"
                    },
                    "Служит для создания (декларации), базового класса на основе свойств объекта."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#runmode-extend\">"
                        },
                        "Создание производного класса",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        "inherit(",
                        {
                            "block": "html",
                            "content": "<br>"
                        },
                        {
                            "block": "inline-code",
                            "content": "BaseClass {Function}"
                        },
                        "|",
                        {
                            "block": "inline-code",
                            "content": "{Array}"
                        },
                        ", ",
                        {
                            "block": "html",
                            "content": "<br>"
                        },
                        {
                            "block": "inline-code",
                            "content": "props {Object}"
                        },
                        ", ",
                        {
                            "block": "html",
                            "content": "<br>"
                        },
                        {
                            "block": "inline-code",
                            "content": "[staticProps {Object}]"
                        },
                        ")"
                    ],
                    {
                        "block": "inline-code",
                        "content": "Function"
                    },
                    "Позволяет наследовать и доопределять свойства и методы базового класса."
                ]
            ]
        },
        {
            "level": 3,
            "block": "heading",
            "mods": {
                "level": 3
            },
            "content": "Специальные поля объявляемого класса"
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
                    "Тип данных",
                    "Описание"
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#constructor\">"
                        },
                        "__constructor",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "Function"
                    },
                    "Функция, которая будет вызвана в ходе создании экземпляра класса."
                ]
            ]
        },
        {
            "level": 3,
            "block": "heading",
            "mods": {
                "level": 3
            },
            "content": "Специальные поля экземпляра объявляемого класса"
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
                    "Тип данных",
                    "Описание"
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#self\">"
                        },
                        "__self",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "*"
                    },
                    "Позволяет получить доступ к классу из его экземпляра."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#base\">"
                        },
                        "__base",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "Function"
                    },
                    "Позволяет внутри производного класса использовать методы базового (supercall)."
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
                "Функция ",
                {
                    "block": "inline-code",
                    "content": "inherit"
                },
                " позволяет:"
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
                        "content": "создавать класс по декларации;"
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": "задавать метод-конструктор;"
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": "использовать миксины;"
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": "вызывать методы базовой реализации (super call);"
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": "получать доступ к статическим свойствам класса из его экземпляра."
                    }
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Блок является основой механизма наследования блоков в ",
                {
                    "block": "inline-code",
                    "content": "bem-core"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": "Функция полиморфна и, в зависимости от типа первого аргумента, может быть использована для:"
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
                            "тип ",
                            {
                                "block": "inline-code",
                                "content": "Object"
                            },
                            " – объявления базового класса."
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
                            "тип ",
                            {
                                "block": "inline-code",
                                "content": "Function"
                            },
                            " – создания производного класса на основе базового."
                        ]
                    }
                }
            ]
        },
        {
            "block": "paragraph",
            "content": "Сигнатуры других аргументов функции зависят от способа выполнения."
        },
        {
            "level": 3,
            "block": "heading",
            "mods": {
                "level": 3
            },
            "content": "Способы использования функции"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"runmode-declare\">"
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
            "content": "Объявление базового класса"
        },
        {
            "block": "paragraph",
            "content": "Способ позволяет объявить базовый класс, передав функции объект со свойствами класса."
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
                                "content": "props {Object}"
                            },
                            " – объект с собственными свойствами базового класса. Обязательный аргумент."
                        ]
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": " – объект со статическими свойствами базового класса."
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
                ". Полностью сформированный класс."
            ]
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['inherit'], function(inherit) {\n\nvar props = {}, // объект свойств базового класса\n    baseClass = inherit(props); // базовый класс\n\n});\n"
        },
        {
            "level": 5,
            "block": "heading",
            "mods": {
                "level": 5
            },
            "content": "Базовый класс со статическими свойствами"
        },
        {
            "block": "paragraph",
            "content": [
                "Свойства объекта ",
                {
                    "block": "inline-code",
                    "content": "staticProps"
                },
                " добавляются как статические к создаваемому классу."
            ]
        },
        {
            "block": "paragraph",
            "content": "Пример:"
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['inherit'], function(inherit) {\n\nvar A = inherit(props, {\n    callMe : function() {\n        console.log('mr.Static');\n    }\n});\n\nA.callMe(); // mr.Static\n\n});\n"
        },
        {
            "level": 5,
            "block": "heading",
            "mods": {
                "level": 5
            },
            "content": "Специальные поля объявляемого класса"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"constructor\">"
                },
                {
                    "block": "html",
                    "content": "</a>"
                }
            ]
        },
        {
            "level": 6,
            "block": "heading",
            "mods": {
                "level": 6
            },
            "content": [
                "Поле ",
                {
                    "block": "inline-code",
                    "content": "__constructor"
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Тип: ",
                {
                    "block": "inline-code",
                    "content": "Function"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Объект собственных свойств базового класса может содержать зарезервированное свойство ",
                {
                    "block": "inline-code",
                    "content": "__constructor"
                },
                " – функцию, которая будет автоматически вызвана при создании экземпляра класса."
            ]
        },
        {
            "block": "paragraph",
            "content": "Пример:"
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['inherit'], function(inherit) {\n\nvar A = inherit({\n        __constructor : function(property) { // конструктор\n            this.property = property;\n        },\n\n        getProperty : function() {\n            return this.property + ' of instanceA';\n        }\n    }),\n    aInst = new A('Property');\n\naInst.getProperty(); // Property of instanceA\n\n});\n"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"runmode-extend\">"
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
            "content": "Создание производного класса"
        },
        {
            "block": "paragraph",
            "content": "Способ позволяет создать производный класс на основе базового класса и объектов статических и собственных свойств."
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
                                "content": "BaseClass {Function} | {Array}"
                            },
                            " – базовый класс. Может быть массивом функций-миксинов. Обязательный аргумент."
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
                                "content": "props {Object}"
                            },
                            " – собственные свойства (добавляются к прототипу). Обязательный аргумент."
                        ]
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": " – статические свойства."
                    }
                }
            ]
        },
        {
            "block": "paragraph",
            "content": "Если один из объектов содержит свойства, которые уже есть в базовом классе – свойства базового класса будут переопределены."
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
                ". Производный класс."
            ]
        },
        {
            "block": "paragraph",
            "content": "Пример:"
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['inherit'], function(inherit) {\n\nvar A = inherit({\n    getType : function() {\n        return 'A';\n    }\n});\n\n// класс, производный от A\nvar B = inherit(A, {\n    getType : function() { // переопределение + 'super' call\n        return this.__base() + 'B';\n    }\n});\n\nvar instanceOfB = new B();\n\ninstanceOfB.getType(); // возвращает 'AB'\n\n});\n"
        },
        {
            "level": 5,
            "block": "heading",
            "mods": {
                "level": 5
            },
            "content": "Создание производного класса с миксинами"
        },
        {
            "block": "paragraph",
            "content": [
                "При объявлении производного класса можно указать дополнительный набор функций. Их свойства будут примешаны к создаваемому классу. Для этого первым аргументом ",
                {
                    "block": "inline-code",
                    "content": "inherit"
                },
                " нужно указать массив, первым элементом которого должен быть базовый класс, а последующими – примешиваемые функции."
            ]
        },
        {
            "block": "paragraph",
            "content": "Пример:"
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['inherit'], function(inherit) {\n\nvar A = inherit({\n    getA : function() {\n        return 'A';\n    }\n});\n\nvar B = inherit({\n    getB : function() {\n        return 'B';\n    }\n});\n\n// класс, производный от A и B\nvar C = inherit([A, B], {\n    getAll : function() {\n        return this.getA() + this.getB();\n    }\n});\n\nvar instanceOfC = new C();\n\ninstanceOfC.getAll(); // возвращает 'AB'\n\n});\n"
        },
        {
            "level": 5,
            "block": "heading",
            "mods": {
                "level": 5
            },
            "content": "Специальные поля экземпляра объявляемого класса"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"self\">"
                },
                {
                    "block": "html",
                    "content": "</a>"
                }
            ]
        },
        {
            "level": 6,
            "block": "heading",
            "mods": {
                "level": 6
            },
            "content": [
                "Поле ",
                {
                    "block": "inline-code",
                    "content": "__self"
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
            "content": "Позволяет получить доступ к классу из его экземпляра."
        },
        {
            "block": "paragraph",
            "content": "Пример:"
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['inherit'], function(inherit) {\n\nvar A = inherit({\n        getStaticProperty : function() {\n            return this.__self.staticMethod; // доступ к статическим методам\n        }\n    }, {\n        staticProperty : 'staticA',\n\n        staticMethod : function() {\n            return this.staticProperty;\n        }\n    }),\n    aInst = new A();\n\naInst.getStaticProperty(); //staticA\n\n});\n"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"base\">"
                },
                {
                    "block": "html",
                    "content": "</a>"
                }
            ]
        },
        {
            "level": 6,
            "block": "heading",
            "mods": {
                "level": 6
            },
            "content": {
                "block": "inline-code",
                "content": "__base"
            }
        },
        {
            "block": "paragraph",
            "content": [
                "Тип: ",
                {
                    "block": "inline-code",
                    "content": "Function"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": "Позволяет внутри производного класса вызывать одноименные методы базового (supercall). При использовании в статическом методе, будет вызван одноименный статический метод базового класса."
        },
        {
            "block": "paragraph",
            "content": "Пример:"
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['inherit'], function(inherit) {\n\nvar A = inherit({\n    getType : function() {\n        return 'A';\n    }\n}, {\n    staticProperty : 'staticA',\n\n    staticMethod : function() {\n        return this.staticProperty;\n    }\n});\n\n// класс, производный от A\nvar B = inherit(A, {\n    getType : function() { // переопределение + 'super' call\n        return this.__base() + 'B';\n    }\n}, {\n    staticMethod : function() { // статическое переопределение + 'super' call\n        return this.__base() + ' of staticB';\n    }\n});\n\nvar instanceOfB = new B();\n\ninstanceOfB.getType(); // возвращает 'AB'\nB.staticMethod(); // возвращает 'staticA of staticB'\n\n});\n"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"extra-examples\">"
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
            "content": "Дополнительные примеры"
        },
        {
            "block": "paragraph",
            "content": [
                "Дополнительные примеры смотрите в репозитории библиотеки ",
                {
                    "href": "https://github.com/dfilatov/inherit",
                    "block": "link",
                    "content": "inherit"
                },
                "."
            ]
        }
    ]
}