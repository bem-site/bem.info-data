{
    "block": "md-root",
    "content": [
        {
            "level": 1,
            "block": "heading",
            "mods": {
                "level": 1
            },
            "content": "loader"
        },
        {
            "block": "paragraph",
            "content": [
                "Use the ",
                {
                    "block": "inline-code",
                    "content": "loader"
                },
                " block for downloading and connecting scripts by URLs."
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
            "content": "Block modifiers"
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
                    "Modifier",
                    "Acceptable values",
                    "Usage",
                    "Description"
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#modifiers-type\">"
                        },
                        "type",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        {
                            "block": "inline-code",
                            "content": "'js'"
                        },
                        ", ",
                        {
                            "block": "inline-code",
                            "content": "'bundle'"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "JS"
                    },
                    "Uses a URL to get and connect JS code or a bundle."
                ]
            ]
        },
        {
            "level": 3,
            "block": "heading",
            "mods": {
                "level": 3
            },
            "content": "Functions enabled by block elements"
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
                    "Modifier",
                    "Function",
                    "Returned value",
                    "Description"
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#modifiers-type-js\">"
                        },
                        "js",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        "loader(",
                        {
                            "block": "html",
                            "content": "</br>"
                        },
                        {
                            "block": "inline-code",
                            "content": "id {String}"
                        },
                        ",",
                        {
                            "block": "html",
                            "content": "</br>"
                        },
                        " ",
                        {
                            "block": "inline-code",
                            "content": "url {String}"
                        },
                        ",",
                        {
                            "block": "html",
                            "content": "</br>"
                        },
                        " ",
                        {
                            "block": "inline-code",
                            "content": "[success {Function}]"
                        },
                        ",",
                        {
                            "block": "html",
                            "content": "</br>"
                        },
                        " ",
                        {
                            "block": "inline-code",
                            "content": "[error {Function}]"
                        },
                        ")"
                    ],
                    "-",
                    "Downloads and connects a fragment of JavaScript code."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#modifiers-type-bundle\">"
                        },
                        "bundle",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        "loader(",
                        {
                            "block": "html",
                            "content": "</br>"
                        },
                        {
                            "block": "inline-code",
                            "content": "url {String}"
                        },
                        ",",
                        {
                            "block": "html",
                            "content": "</br>"
                        },
                        " ",
                        {
                            "block": "inline-code",
                            "content": "success {Function}"
                        },
                        ",",
                        {
                            "block": "html",
                            "content": "</br>"
                        },
                        " ",
                        {
                            "block": "inline-code",
                            "content": "[error {Function}]"
                        },
                        ")"
                    ],
                    "-",
                    "Downloads and connects a bundle of CSS and JS files."
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
                    "content": "<a name=\"modifiers\">"
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
            "content": "Block modifiers"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"modifiers-type\">"
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
                    "content": "type"
                },
                " modifier"
            ]
        },
        {
            "block": "paragraph",
            "content": "Provides a set of functions to download and connect different data types."
        },
        {
            "block": "paragraph",
            "content": [
                "Acceptable values: ",
                {
                    "block": "inline-code",
                    "content": "'js'"
                },
                ", ",
                {
                    "block": "inline-code",
                    "content": "'bundle'"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Usage: ",
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
                "Depending on the value of the ",
                {
                    "block": "inline-code",
                    "content": "type"
                },
                " modifier, the ",
                {
                    "block": "inline-code",
                    "content": "loader"
                },
                " block lets you download from a URL and connect:"
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
                                "content": "js"
                            },
                            " – A JavaScript fragment."
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
                                "content": "bundle"
                            },
                            " – A bundle of CSS and JS files."
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
                    "content": "<a name=\"modifiers-type-js\">"
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
                {
                    "block": "inline-code",
                    "content": "type"
                },
                " modifier with the ",
                {
                    "block": "inline-code",
                    "content": "js"
                },
                " value"
            ]
        },
        {
            "block": "paragraph",
            "content": "Provides a function to download and connect a JavaScript fragment."
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
                                "content": "url {String}"
                            },
                            " – URL of the JavaScript fragment to download. Required argument."
                        ]
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": " – The callback function to run when the code is loaded successfully."
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": " – The callback function to run when the code couldn't load because of an error."
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
            "content": [
                "For example, ",
                {
                    "block": "inline-code",
                    "content": "loader_type_js"
                },
                " can be used for downloading and enabling jQuery:"
            ]
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.define('jquery', ['loader_type_js'], function(provide, loader) {\n\n    loader(\n        'https://yastatic.net/jquery/2.2.0/jquery.min.js',\n        function() { provide(jQuery) });\n\n});\n"
        },
        {
            "block": "paragraph",
            "content": [
                "For a more advanced example, see the ",
                {
                    "href": "https://github.com/bem/bem-core/blob/v2/common.blocks/jquery/jquery.js",
                    "block": "link",
                    "content": "common.blocks/jquery"
                },
                " block in the ",
                {
                    "block": "inline-code",
                    "content": "bem-core"
                },
                " library."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"modifiers-type-bundle\">"
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
                {
                    "block": "inline-code",
                    "content": "type"
                },
                " modifier with the ",
                {
                    "block": "inline-code",
                    "content": "bundle"
                },
                " value"
            ]
        },
        {
            "block": "paragraph",
            "content": "Provides a function to download and connect a bundle of CSS and JS files."
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
                                "content": "id {String}"
                            },
                            " – Bundle ID. Required argument."
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
                                "content": "url {String}"
                            },
                            " – The path to the bundle file in URL format. Required argument."
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
                                "content": "onSuccess {Function}"
                            },
                            " – The callback to run when the bundle is loaded successfully. Required argument."
                        ]
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": " – The callback to run when the bundle didn't load."
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
            "content": [
                "The specification for the ",
                {
                    "block": "inline-code",
                    "content": "bundle"
                },
                " technology is currently under development. For more details, write your questions in the ",
                {
                    "href": "https://ru.bem.info/forum/",
                    "block": "link",
                    "content": "forum"
                },
                "."
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
                    "content": "_loaded"
                },
                " static method"
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "The function connected with the ",
                {
                    "block": "inline-code",
                    "content": "type_bundle"
                },
                " modifier has the ",
                {
                    "block": "inline-code",
                    "content": "_loaded"
                },
                " static method. It is used as a helper method after successfully loading the bundle."
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
                            "content": "id {String}"
                        },
                        " – Bundle ID. Required argument."
                    ]
                }
            }
        },
        {
            "block": "paragraph",
            "content": "No return value."
        }
    ]
}