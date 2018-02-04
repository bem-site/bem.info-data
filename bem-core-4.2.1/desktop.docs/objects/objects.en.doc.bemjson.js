{
    "block": "md-root",
    "content": [
        {
            "level": 1,
            "block": "heading",
            "mods": {
                "level": 1
            },
            "content": "objects"
        },
        {
            "block": "paragraph",
            "content": "This block provides an object with a set of methods for working with JavaScript objects."
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
            "content": "Properties and methods of the object"
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
                    "Return type",
                    "Description"
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-extend\">"
                        },
                        "extend",
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
                            "content": "target {Object}"
                        },
                        ", ",
                        {
                            "block": "html",
                            "content": "<br>"
                        },
                        {
                            "block": "inline-code",
                            "content": "source {Object}"
                        },
                        ")"
                    ],
                    {
                        "block": "inline-code",
                        "content": "Object"
                    },
                    "Extends an object with the properties of another object."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-isEmpty\">"
                        },
                        "isEmpty",
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
                        "content": "Boolean"
                    },
                    "Determines whether the passed object is empty."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-each\">"
                        },
                        "each",
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
                            "content": "obj {Object}"
                        },
                        ", ",
                        {
                            "block": "html",
                            "content": "<br>"
                        },
                        {
                            "block": "inline-code",
                            "content": "fn {Function}"
                        },
                        ", ",
                        {
                            "block": "html",
                            "content": "<br>"
                        },
                        {
                            "block": "inline-code",
                            "content": "[ctx {Object}]"
                        },
                        ")"
                    ],
                    "-",
                    "Iteratively traverses its own object properties."
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
            "content": "Properties and methods of the object"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-extend\">"
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
                {
                    "block": "inline-code",
                    "content": "extend"
                },
                " method"
            ]
        },
        {
            "block": "paragraph",
            "content": "Extends an object with the properties of another object. It only copies its own properties that weren't taken from the prototype chain."
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
                                "content": "target {Object}"
                            },
                            " – Target object. Required argument."
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
                                "content": "source {Object}"
                            },
                            " – The object whose properties are added to the target object. Multiple objects can be passed. The properties of each of them will be added to the target object. Required argument."
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
                    "content": "Return value:"
                },
                " ",
                {
                    "block": "inline-code",
                    "content": "Event"
                },
                ". The target object with the added properties."
            ]
        },
        {
            "block": "paragraph",
            "content": "Example:"
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['objects'], function(objects) {\n\nvar obj1 = { a : 1, b : 2 },\n    obj2 = { b : 3, c : 4 };\n\nconsole.log(objects.extend(obj1, obj2)); // { a : 1, b : 3, c : 4 }\n});\n"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-isEmpty\">"
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
                {
                    "block": "inline-code",
                    "content": "isEmpty"
                },
                " method"
            ]
        },
        {
            "block": "paragraph",
            "content": "Determines whether the passed object is empty. In other words, whether the object has its own properties."
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
                        " – The object to check. Required argument."
                    ]
                }
            }
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
                    "content": "Boolean"
                },
                ". If the object doesn't have its own properties, ",
                {
                    "block": "inline-code",
                    "content": "true"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": "Example:"
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['objects'], function(objects) {\n\nvar obj1 = {},\n    obj2 = { foo : 'bar' };\n\nconsole.log(objects.isEmpty(obj1)); // true\nconsole.log(objects.isEmpty(obj2)); // false\n});\n"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-each\">"
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
                {
                    "block": "inline-code",
                    "content": "each"
                },
                " method"
            ]
        },
        {
            "block": "paragraph",
            "content": "Used for iterating through an object's properties. The handler function is invoked for each of the object's own properties."
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
                                "content": "obj {Object}"
                            },
                            " – The object whose properties are being traversed. Required argument."
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
                                "content": "fn {Function}"
                            },
                            " – The handler function to call for each property. Required argument."
                        ]
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": " – The handler context."
                    }
                }
            ]
        },
        {
            "block": "paragraph",
            "content": "No return value."
        },
        {
            "block": "paragraph",
            "content": "The handler function receives arguments with the value and key of the object property that it was invoked for."
        },
        {
            "block": "paragraph",
            "content": "Example:"
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['objects'], function(objects) {\n    objects.each(\n        { a : 1, b : 2 },\n        function(val, key) {\n            console.log(key, val);\n        });\n    // a 1\n    // b 2\n});\n"
        }
    ]
}