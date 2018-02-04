{
    "block": "md-root",
    "content": [
        {
            "level": 1,
            "block": "heading",
            "mods": {
                "level": 1
            },
            "content": "cookie"
        },
        {
            "block": "paragraph",
            "content": [
                "This block provides an object with a set of methods for working with browser cookies (the JS ",
                {
                    "block": "inline-code",
                    "content": "document.cookie"
                },
                " property)."
            ]
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
            "content": "Object properties and methods"
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
                            "content": "<a href=\"#fields-get\">"
                        },
                        "get",
                        {
                            "block": "html",
                            "content": "</a>"
                        },
                        "(",
                        {
                            "block": "inline-code",
                            "content": "name"
                        },
                        ")"
                    ],
                    [
                        {
                            "block": "inline-code",
                            "content": "String"
                        },
                        " ",
                        "|",
                        " ",
                        {
                            "block": "inline-code",
                            "content": "null"
                        }
                    ],
                    "Gets the value stored in a browser cookie."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-set\">"
                        },
                        "set",
                        {
                            "block": "html",
                            "content": "</a>"
                        },
                        "(",
                        {
                            "block": "inline-code",
                            "content": "name"
                        },
                        ", ",
                        {
                            "block": "inline-code",
                            "content": "val"
                        },
                        ", ",
                        {
                            "block": "inline-code",
                            "content": "[options]"
                        },
                        ")"
                    ],
                    {
                        "block": "inline-code",
                        "content": "String"
                    },
                    "Sets the cookie with the specified name."
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
            "content": "Object properties and methods"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-get\">"
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
                    "content": "get"
                },
                " method"
            ]
        },
        {
            "block": "paragraph",
            "content": "Use this method to get the value stored in a cookie for the name passed in the argument."
        },
        {
            "block": "paragraph",
            "content": {
                "block": "strong",
                "content": "Accepted arguments:"
            }
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
                    "Argument",
                    "Type",
                    "Description"
                ],
                [
                    [
                        {
                            "block": "inline-code",
                            "content": "name"
                        },
                        "*"
                    ],
                    {
                        "block": "inline-code",
                        "content": "String"
                    },
                    "The name of the cookie."
                ]
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "*",
                " Required argument."
            ]
        },
        {
            "block": "paragraph",
            "content": {
                "block": "strong",
                "content": "Returns:"
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
                                "content": "String"
                            },
                            " — If a cookie with the specified name was set. The value is automatically decoded using ",
                            {
                                "href": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent",
                                "block": "link",
                                "content": "decodeURIComponent"
                            },
                            "."
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
                                "content": "null"
                            },
                            " — If a cookie with the specified name doesn't exist."
                        ]
                    }
                }
            ]
        },
        {
            "block": "paragraph",
            "content": "Example:"
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require('cookie', function(cookie) {\n\n    cookie.set('mycookie', 'foobar');\n    console.log(cookie.get('mycookie')); // 'foobar'\n    console.log(cookie.get('foo')); // null\n\n});\n"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-set\">"
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
                    "content": "set"
                },
                " method"
            ]
        },
        {
            "block": "paragraph",
            "content": "Use this method to set the cookie with the specified name. In addition to the name and value, you can pass the method a hash with additional cookie parameters."
        },
        {
            "block": "paragraph",
            "content": {
                "block": "strong",
                "content": "Accepted arguments:"
            }
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
                    "Argument",
                    "Type",
                    "Description"
                ],
                [
                    [
                        {
                            "block": "inline-code",
                            "content": "name"
                        },
                        "*"
                    ],
                    {
                        "block": "inline-code",
                        "content": "String"
                    },
                    "The name of the cookie."
                ],
                [
                    [
                        {
                            "block": "inline-code",
                            "content": "val"
                        },
                        "*"
                    ],
                    [
                        {
                            "block": "inline-code",
                            "content": "String"
                        },
                        " ",
                        "|",
                        " ",
                        {
                            "block": "inline-code",
                            "content": "null"
                        }
                    ],
                    [
                        "The value of the cookie. If the value is set to ",
                        {
                            "block": "inline-code",
                            "content": "null"
                        },
                        ", the cookie is deleted."
                    ]
                ],
                [
                    null,
                    {
                        "block": "inline-code",
                        "content": "Object"
                    },
                    [
                        "Options. ",
                        {
                            "block": "html",
                            "content": "</br>"
                        },
                        {
                            "block": "html",
                            "content": "</br>"
                        },
                        " Object properties",
                        {
                            "block": "html",
                            "content": "</br>"
                        },
                        {
                            "block": "html",
                            "content": "</br>"
                        },
                        " ",
                        "•",
                        " ",
                        {
                            "block": "inline-code",
                            "content": "expires"
                        },
                        " (",
                        {
                            "block": "inline-code",
                            "content": "Number"
                        },
                        ") – The cookie's time to live, in days. If the value is negative, the cookie is deleted. Alternatively, you can pass a generated date object (",
                        {
                            "block": "inline-code",
                            "content": "new Date()"
                        },
                        ") for the value. ",
                        {
                            "block": "html",
                            "content": "</br>"
                        },
                        " ",
                        "•",
                        " ",
                        {
                            "block": "inline-code",
                            "content": "path"
                        },
                        " (",
                        {
                            "block": "inline-code",
                            "content": "String"
                        },
                        ") – The path from the domain root where the cookie will be available. ",
                        {
                            "block": "html",
                            "content": "</br>"
                        },
                        " ",
                        "•",
                        " ",
                        {
                            "block": "inline-code",
                            "content": "domain"
                        },
                        " (",
                        {
                            "block": "inline-code",
                            "content": "String"
                        },
                        ") – The domain. By default, this is the current domain. ",
                        {
                            "block": "html",
                            "content": "</br>"
                        },
                        " ",
                        "•",
                        " ",
                        {
                            "block": "inline-code",
                            "content": "secure"
                        },
                        " (",
                        {
                            "block": "inline-code",
                            "content": "Boolean"
                        },
                        ") – Flag indicating that an encrypted SSL connection must be used with the cookie. By default, it is ",
                        {
                            "block": "inline-code",
                            "content": "false"
                        },
                        "."
                    ]
                ]
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "*",
                " Required argument."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "strong",
                    "content": "Returns:"
                },
                " the ",
                {
                    "block": "inline-code",
                    "content": "this"
                },
                " object."
            ]
        },
        {
            "block": "paragraph",
            "content": "Example:"
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require('cookie', function(cookie) {\n\n    cookie.set('mycookie', 'foobar', {\n        expires : 1, // lifetime is one day\n        path : '/', // available for all pages secure\n        secure : true // only send the cookie over SSL\n    });\n\n    console.log(cookie.get('mycookie')); // 'foobar'\n\n    cookie.set('mycookie', null); // deleting the cookie\n    console.log(cookie.get('mycookie')); // null\n\n});\n"
        }
    ]
}