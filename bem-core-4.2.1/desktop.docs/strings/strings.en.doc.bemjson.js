{
    "block": "md-root",
    "content": [
        {
            "level": 1,
            "block": "heading",
            "mods": {
                "level": 1
            },
            "content": "strings"
        },
        {
            "block": "paragraph",
            "content": "This block provides helpers for manipulating string data."
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
                            "content": "<a href=\"#elems-escape\">"
                        },
                        "escape",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "JS"
                    },
                    "A set of methods for escaping XML and HTML control characters."
                ]
            ]
        },
        {
            "level": 3,
            "block": "heading",
            "mods": {
                "level": 3
            },
            "content": "Properties and methods of the block elements"
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
                    "Type or return value",
                    "Description"
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#elems-escape\">"
                        },
                        "escape",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#elems-escape-fields-xml\">"
                        },
                        "xml",
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
                    "Use for escaping XML control characters."
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#elems-escape-fields-html\">"
                        },
                        "html",
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
                    "Use for escaping HTML control characters."
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#elems-escape-fields-attr\">"
                        },
                        "attr",
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
                    "Use for escaping control characters in HTML and XML attributes."
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
                    "content": "<a name=\"elems-escape\">"
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
                    "content": "escape"
                },
                " element"
            ]
        },
        {
            "block": "paragraph",
            "content": "This element provides an object with a set of methods for escaping XML and HTML control characters."
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
                    "content": "<a name=\"elems-escape-fields-xml\">"
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
                    "content": "xml"
                },
                " method"
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Use for escaping XML control characters. Processes the symbols ",
                {
                    "block": "inline-code",
                    "content": "&"
                },
                ", ",
                {
                    "block": "inline-code",
                    "content": "<"
                },
                ", ",
                {
                    "block": "inline-code",
                    "content": ">"
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
                        " – String to process. Required argument."
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
                ". The string with escaped control characters."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"elems-escape-fields-html\">"
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
                    "content": "html"
                },
                " method"
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Use for escaping HTML control characters. It is a synonym of the ",
                {
                    "block": "inline-code",
                    "content": "xml"
                },
                " method."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"elems-escape-fields-attr\">"
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
                    "content": "attr"
                },
                " method"
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Use for escaping control characters in HTML and XML attributes. Processes the control characters ",
                {
                    "block": "inline-code",
                    "content": "\""
                },
                ", ",
                {
                    "block": "inline-code",
                    "content": "\\"
                },
                ", ",
                {
                    "block": "inline-code",
                    "content": "'"
                },
                ", ",
                {
                    "block": "inline-code",
                    "content": "&"
                },
                ", ",
                {
                    "block": "inline-code",
                    "content": "<"
                },
                ", ",
                {
                    "block": "inline-code",
                    "content": ">"
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
                        " – String to process. Required argument."
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
                ". The string with escaped control characters."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "For example, in the ",
                {
                    "href": "https://github.com/bem/bem-components/blob/v2/common.blocks/select/select.js#L237",
                    "block": "link",
                    "content": {
                        "block": "inline-code",
                        "content": "common.blocks/select"
                    }
                },
                " block in the ",
                {
                    "block": "inline-code",
                    "content": "bem-components"
                },
                " library, ",
                {
                    "block": "inline-code",
                    "content": "strings__escape"
                },
                " is used for escaping control characters in the ",
                {
                    "block": "inline-code",
                    "content": "value"
                },
                " property of an HTML element:"
            ]
        },
        {
            "lang": "js",
            "block": "code",
            "content": "_createControlHTML : function(name, val) {\n    // Using string concatenation to not depend on template engines\n    return '<input ' +\n        'type=\"hidden\" ' +\n        'name=\"' + name + '\" ' +\n        'class=\"' + this.buildClass('control') + '\" ' +\n        'value=\"' + escape.attr(typeof val === 'object'? JSON.stringify(val) : val) + '\"/>';\n}\n"
        }
    ]
}