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
            "content": "This block provides a function for declaring and inheriting classes."
        },
        {
            "level": 2,
            "block": "heading",
            "mods": {
                "level": 2
            },
            "content": "Overview"
        },
        {
            "level": 3,
            "block": "heading",
            "mods": {
                "level": 3
            },
            "content": "Usage"
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
                    "Use",
                    "Signature",
                    "Return type",
                    "Description"
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#runmode-declare\">"
                        },
                        "Declaring a base class",
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
                    "Use for creating (declaring) a base class from the object properties."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#runmode-extend\">"
                        },
                        "Creating a derived class",
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
                    "Use for inheriting and redefining the properties and methods of a base class."
                ]
            ]
        },
        {
            "level": 3,
            "block": "heading",
            "mods": {
                "level": 3
            },
            "content": "Special fields of the declared class"
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
                    "Name",
                    "Data type",
                    "Description"
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
                    "The function that will be called when creating a class instance."
                ]
            ]
        },
        {
            "level": 3,
            "block": "heading",
            "mods": {
                "level": 3
            },
            "content": "Special fields of the declared class instance"
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
                    "Field",
                    "Data type",
                    "Description"
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
                    "Allows you to access the class and its instance."
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
                    "Allows you to use the methods of the base class inside the derived class (super call)."
                ]
            ]
        },
        {
            "level": 3,
            "block": "heading",
            "mods": {
                "level": 3
            },
            "content": "Public block technologies"
        },
        {
            "block": "paragraph",
            "content": "The block is implemented in:"
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
            "content": "Description"
        },
        {
            "block": "paragraph",
            "content": [
                "Use the ",
                {
                    "block": "inline-code",
                    "content": "inherit"
                },
                " function to:"
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
                        "content": "Create a class using a declaration."
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": "Set a constructor method."
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": "Use mix-ins."
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": "Call the methods of the base implementation (super call)."
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": "Get access to static properties of a class from its instance."
                    }
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "This is the main block inheritance mechanism in ",
                {
                    "block": "inline-code",
                    "content": "bem-core"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": "The function is polymorphic and, depending on the first argument type, it can be used for:"
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
                                "content": "Object"
                            },
                            " type – declaring the base class."
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
                                "content": "Function"
                            },
                            " type – deriving a class from the base class."
                        ]
                    }
                }
            ]
        },
        {
            "block": "paragraph",
            "content": "The signature of the function's other arguments depends on how it is run."
        },
        {
            "level": 3,
            "block": "heading",
            "mods": {
                "level": 3
            },
            "content": "Usage"
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
            "content": "Declaring a base class"
        },
        {
            "block": "paragraph",
            "content": "This approach allows you to define the base class by passing the function an object with the class properties."
        },
        {
            "block": "paragraph",
            "content": {
                "block": "strong",
                "content": "Accepted arguments:"
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
                            " – An object with its own properties for the base class. Required argument."
                        ]
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": " – An object with static properties of the base class."
                    }
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "strong",
                    "content": "Return value:"
                },
                " ",
                {
                    "block": "inline-code",
                    "content": "Function"
                },
                ". The fully-formed class."
            ]
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['inherit'], function(inherit) {\n\nvar props = {}, // object for the base class properties\n    baseClass = inherit(props); // base class\n\n});\n"
        },
        {
            "level": 5,
            "block": "heading",
            "mods": {
                "level": 5
            },
            "content": "Base class with static properties"
        },
        {
            "block": "paragraph",
            "content": [
                "Properties of the ",
                {
                    "block": "inline-code",
                    "content": "staticProps"
                },
                " object are added as static properties for the class being created."
            ]
        },
        {
            "block": "paragraph",
            "content": "Example:"
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
            "content": "Special fields of the declared class"
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
                {
                    "block": "inline-code",
                    "content": "__constructor"
                },
                " field"
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Type: ",
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
                "The object with the base class properties can contain the reserved ",
                {
                    "block": "inline-code",
                    "content": "__constructor"
                },
                " property, a function that is called automatically when a class instance is created."
            ]
        },
        {
            "block": "paragraph",
            "content": "Example:"
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['inherit'], function(inherit) {\n\nvar A = inherit({\n        __constructor : function(property) { // constructor\n            this.property = property;\n        },\n\n        getProperty : function() {\n            return this.property + ' of instanceA';\n        }\n    }),\n    aInst = new A('Property');\n\naInst.getProperty(); // Property of instanceA\n\n});\n"
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
            "content": "Creating a derived class"
        },
        {
            "block": "paragraph",
            "content": "This approach allows you to create a derived class from the base class and the objects with the static properties and the custom properties."
        },
        {
            "block": "paragraph",
            "content": {
                "block": "strong",
                "content": "Accepted arguments:"
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
                            " – The base class. Can be an array of mix-in functions. Required argument."
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
                            " – Custom properties (added to the prototype). Required argument."
                        ]
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": " – Static properties."
                    }
                }
            ]
        },
        {
            "block": "paragraph",
            "content": "If one of the objects contains properties that already exist in the base class, the base class properties are redefined."
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "strong",
                    "content": "Return value:"
                },
                " ",
                {
                    "block": "inline-code",
                    "content": "Function"
                },
                ". Derived class."
            ]
        },
        {
            "block": "paragraph",
            "content": "Example:"
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['inherit'], function(inherit) {\n\nvar A = inherit({\n    getType : function() {\n        return 'A';\n    }\n});\n\n// class derived from A\nvar B = inherit(A, {\n    getType : function() { // redefinition + super call\n        return this.__base() + 'B';\n    }\n});\n\nvar instanceOfB = new B();\n\ninstanceOfB.getType(); // returns 'AB'\n\n});\n"
        },
        {
            "level": 5,
            "block": "heading",
            "mods": {
                "level": 5
            },
            "content": "Creating a derived class with mix-ins"
        },
        {
            "block": "paragraph",
            "content": [
                "When declaring a derived class, you can specify an additional set of functions. Their properties will be mixed in to the created class. To do this, the first argument for ",
                {
                    "block": "inline-code",
                    "content": "inherit"
                },
                " should specify an array that has the base class as its first element, followed by the functions to mix in."
            ]
        },
        {
            "block": "paragraph",
            "content": "Example:"
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['inherit'], function(inherit) {\n\nvar A = inherit({\n    getA : function() {\n        return 'A';\n    }\n});\n\nvar B = inherit({\n    getB : function() {\n        return 'B';\n    }\n});\n\n// class derived from A and B\nvar C = inherit([A, B], {\n    getAll : function() {\n        return this.getA() + this.getB();\n    }\n});\n\nvar instanceOfC = new C();\n\ninstanceOfC.getAll(); // returns 'AB'\n\n});\n"
        },
        {
            "level": 5,
            "block": "heading",
            "mods": {
                "level": 5
            },
            "content": "Special fields of the declared class instance"
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
                {
                    "block": "inline-code",
                    "content": "__self"
                },
                " field"
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Type: ",
                {
                    "block": "inline-code",
                    "content": "*"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": "Allows you to access the class and its instance."
        },
        {
            "block": "paragraph",
            "content": "Example:"
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['inherit'], function(inherit) {\n\nvar A = inherit({\n        getStaticProperty : function() {\n            return this.__self.staticMethod; // access to static methods\n        }\n    }, {\n        staticProperty : 'staticA',\n\n        staticMethod : function() {\n            return this.staticProperty;\n        }\n    }),\n    aInst = new A();\n\naInst.getStaticProperty(); //staticA\n\n});\n"
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
                "Type: ",
                {
                    "block": "inline-code",
                    "content": "Function"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": "Allows you to call base class methods inside the derived class (super call). When used in a static method, it will call the static method of the same name in the base class."
        },
        {
            "block": "paragraph",
            "content": "Example:"
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['inherit'], function(inherit) {\n\nvar A = inherit({\n    getType : function() {\n        return 'A';\n    }\n}, {\n    staticProperty : 'staticA',\n\n    staticMethod : function() {\n        return this.staticProperty;\n    }\n});\n\n// class derived from A\nvar B = inherit(A, {\n    getType : function() { // redefinition + super call\n        return this.__base() + 'B';\n    }\n}, {\n    staticMethod : function() { // static redefinition + super call\n        return this.__base() + ' of staticB';\n    }\n});\n\nvar instanceOfB = new B();\n\ninstanceOfB.getType(); // returns 'AB'\nB.staticMethod(); // returns 'staticA of staticB'\n\n});\n"
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
            "content": "More examples"
        },
        {
            "block": "paragraph",
            "content": [
                "For more examples, see the repository of the ",
                {
                    "href": "https://github.com/dfilatov/inherit",
                    "block": "link",
                    "content": "inherit"
                },
                " library."
            ]
        }
    ]
}