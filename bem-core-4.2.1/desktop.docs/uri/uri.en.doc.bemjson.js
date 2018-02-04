{
    "block": "md-root",
    "content": [
        {
            "level": 1,
            "block": "heading",
            "mods": {
                "level": 1
            },
            "content": "uri"
        },
        {
            "block": "paragraph",
            "content": "This block provides an object with a set of methods for decoding a URI-encoded string."
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
                            "content": "<a href=\"#fields-decodeURI\">"
                        },
                        "decodeURI",
                        {
                            "block": "html",
                            "content": "</a>"
                        },
                        "(",
                        {
                            "block": "inline-code",
                            "content": "str {String}"
                        },
                        ")"
                    ],
                    {
                        "block": "inline-code",
                        "content": "String"
                    },
                    "Decodes a URI."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-decodeURIComponent\">"
                        },
                        "decodeURIComponent",
                        {
                            "block": "html",
                            "content": "</a>"
                        },
                        "(",
                        {
                            "block": "inline-code",
                            "content": "str {String}"
                        },
                        ")"
                    ],
                    {
                        "block": "inline-code",
                        "content": "String"
                    },
                    "Decodes a URI component."
                ]
            ]
        },
        {
            "level": 3,
            "block": "heading",
            "mods": {
                "level": 3
            },
            "content": "Elements of the block"
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
                    "Element",
                    "Usage",
                    "Description"
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#elems-querystring\">"
                        },
                        "querystring",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "JS"
                    },
                    "This element provides an object with a set of methods for working with a URI query string. It decodes the string from URI format."
                ]
            ]
        },
        {
            "level": 4,
            "block": "heading",
            "mods": {
                "level": 4
            },
            "content": "Properties and methods of the object"
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
                    "Element",
                    "Name",
                    "Returned value",
                    "Description"
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#elems-querystring\">"
                        },
                        "querystring",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#elems-querystring-fields-parse\">"
                        },
                        "parse",
                        {
                            "block": "html",
                            "content": "</a>"
                        },
                        "(",
                        {
                            "block": "inline-code",
                            "content": "str {String}"
                        },
                        ")"
                    ],
                    {
                        "block": "inline-code",
                        "content": "Object"
                    },
                    "Creates an object using the query parameters from the address bar."
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#elems-querystring-fields-stringify\">"
                        },
                        "stringify",
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
                        "content": "String"
                    },
                    "Creates a query string based on the object properties."
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
                "Both of these methods function as wrappers for the standard JavaScript methods ",
                {
                    "block": "inline-code",
                    "content": "decodeURI"
                },
                " and ",
                {
                    "block": "inline-code",
                    "content": "decodeURIComponent"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": "As they execute, the methods check whether the passed string is in UTF-8 format. If not, they generate an error."
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-decodeURI\">"
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
                    "content": "decodeURI"
                },
                " method"
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Decodes a URI. This method is identical to the standard JavaScript method ",
                {
                    "href": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURI",
                    "block": "link",
                    "content": "decodeURI"
                },
                ", but it supports Cyrillic encoding ",
                {
                    "block": "inline-code",
                    "content": "CP-1251"
                },
                "."
            ]
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
                            "content": "str {String}"
                        },
                        " – A string with escape sequences. Required argument."
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
                    "content": "String"
                },
                ". If escape sequences are not found in the string, the method returns the string without any changes."
            ]
        },
        {
            "block": "paragraph",
            "content": "Example:"
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require('uri', function(uri){\n    uri.decodeURI(\"https://developer.mozilla.org/ru/docs/JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B\");\n    // \"https://developer.mozilla.org/ru/docs/JavaScript_Shells\"\n})\n"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-decodeURIComponent\">"
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
                    "content": "decodeURIComponent"
                },
                " method"
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Decodes a URI component. This method is identical to the standard JavaScript method ",
                {
                    "href": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent",
                    "block": "link",
                    "content": "decodeURIComponent"
                },
                ", but it supports Cyrillic encoding ",
                {
                    "block": "inline-code",
                    "content": "CP-1251"
                },
                "."
            ]
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
                            "content": "str {String}"
                        },
                        " – A string with escape sequences. Required argument."
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
                    "content": "String"
                },
                ". If escape sequences are not found in the string, the method returns the string without any changes."
            ]
        },
        {
            "block": "paragraph",
            "content": "Example:"
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require('uri', function(uri){\n    uri.decodeURIComponent(\"JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B\");\n    // \"JavaScript_Shells\"\n})\n"
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
            "content": "Elements of the block"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"elems-querystring\">"
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
                    "content": "querystring"
                },
                " element"
            ]
        },
        {
            "block": "paragraph",
            "content": "This element provides an object with a set of methods for working with a URI query string."
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"elems-name-fields\">"
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
                    "content": "<a name=\"elems-querystring-fields-parse\">"
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
                    "content": "parse"
                },
                " method"
            ]
        },
        {
            "block": "paragraph",
            "content": "Creates an object using the parameters from a URI query string."
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
                            "content": "str {String}"
                        },
                        " – A string with parameters as key-value pairs. The ",
                        {
                            "block": "inline-code",
                            "content": "="
                        },
                        " symbol separates a key from its value. Pairs are separated by the ",
                        {
                            "block": "inline-code",
                            "content": "&"
                        },
                        " symbol. During parsing, keys and values are decoded from URI format. Required argument."
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
                    "content": "Object"
                },
                ". The object created from the parameters in the address bar."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"elems-querystring-fields-stringify\">"
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
                    "content": "stringify"
                },
                " method"
            ]
        },
        {
            "block": "paragraph",
            "content": "Creates a URI query string from an object."
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
                        " – The object to create the string from. Required argument."
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
                    "content": "String"
                },
                ". Property names are separated from values by the ",
                {
                    "block": "inline-code",
                    "content": "="
                },
                " symbol, and the ",
                {
                    "block": "inline-code",
                    "content": "&"
                },
                " symbol separates pairs in the string."
            ]
        }
    ]
}