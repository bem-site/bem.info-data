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
                "This block provides templates that create a set of top-level HTML elements for a page: ",
                {
                    "block": "inline-code",
                    "content": "<html>"
                },
                ", ",
                {
                    "block": "inline-code",
                    "content": "<head>"
                },
                ", and ",
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
            "content": "Overview"
        },
        {
            "level": 3,
            "block": "heading",
            "mods": {
                "level": 3
            },
            "content": "Special fields of the block"
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
                    "Type",
                    "Description"
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
                    "Use this field to redefine the DTD string for the current document."
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
                        "Use this field to specify the content of ",
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
                    "Use this field to specify the URL of the favicon for the page."
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
                        "Use this field to add content to ",
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
                    "Use this field to connect CSS style sheets to the document."
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
                    "Use this field to embed scripts in the body of the document."
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
                    "Use this field to set the page content."
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
                    "Connects CSS using a URL or a string."
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
                    "Connects JS using a URL or a string."
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
                        "Creates ",
                        {
                            "block": "inline-code",
                            "content": "<meta>"
                        },
                        " HTML elements."
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
            "content": "Special fields of block elements"
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
                    "Field",
                    "Type",
                    "Description"
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
                    "Sets the URL for downloading styles."
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
                    "Sets styles in string format."
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
                    "Sets the URL for downloading a script."
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
                    "Sets scripts in string format"
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
            "content": "Description"
        },
        {
            "block": "paragraph",
            "content": [
                "This block is responsible for creating top-level HTML elements, connecting CSS, JS, and ",
                {
                    "block": "inline-code",
                    "content": "<meta>"
                },
                " elements to a page, and defining the title. The BEMJSON declaration for the block and its elements have special fields reserved for this purpose."
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
            "content": "Special fields of the block"
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
                {
                    "block": "inline-code",
                    "content": "doctype"
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
                    "content": "String"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Use this field to explicitly set the DTD (Document Type Definition) for the current document. If omitted, ",
                {
                    "block": "inline-code",
                    "content": "<!DOCTYPE html>"
                },
                " is used by default."
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
                {
                    "block": "inline-code",
                    "content": "title"
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
                    "content": "String"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Title of the page. It becomes the ",
                {
                    "block": "inline-code",
                    "content": "<title>"
                },
                " HTML element."
            ]
        },
        {
            "block": "html",
            "content": "<!-- bem-example: tmp/data/bem-core-4.2.1/touch-phone.examples/page/1XbHawxtflVM-qdPJwcvW-qayC4 -->"
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
                {
                    "block": "inline-code",
                    "content": "favicon"
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
                    "content": "String"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": "Use this field to specify the URL of the favicon for the page:"
        },
        {
            "block": "html",
            "content": "<!-- bem-example: tmp/data/bem-core-4.2.1/touch-phone.examples/page/X-TO8Z7nDRiM8DF4H6051sfaxTw -->"
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
                {
                    "block": "inline-code",
                    "content": "head"
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
                    "content": "BEMJSON"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Use this field to add content to the ",
                {
                    "block": "inline-code",
                    "content": "<head>"
                },
                " ",
                {
                    "block": "inline-code",
                    "content": "HTML"
                },
                " element that is defined in the block template:"
            ]
        },
        {
            "block": "html",
            "content": "<!-- bem-example: tmp/data/bem-core-4.2.1/touch-phone.examples/page/C5JlpbYiEJJi1-CF_BiQsfyVBfE -->"
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
                {
                    "block": "inline-code",
                    "content": "styles"
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
                    "content": "BEMJSON"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Use this field to connect ",
                {
                    "block": "inline-code",
                    "content": "CSS"
                },
                ":"
            ]
        },
        {
            "block": "html",
            "content": "<!-- bem-example: tmp/data/bem-core-4.2.1/touch-phone.examples/page/HYH3vutSDd2joR1oc9kPHCb6K-w -->"
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
                {
                    "block": "inline-code",
                    "content": "scripts"
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
                    "content": "BEMJSON"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Embeds JS in the body of the page, at the end of the ",
                {
                    "block": "inline-code",
                    "content": "<body>"
                },
                " HTML element:"
            ]
        },
        {
            "block": "html",
            "content": "<!-- bem-example: tmp/data/bem-core-4.2.1/touch-phone.examples/page/A_vbuJFTtKNZSs2LP0r6Oc8Kwsw -->"
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
                {
                    "block": "inline-code",
                    "content": "content"
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
                    "content": "BEMJSON"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": "Use this field to set the page content."
        },
        {
            "block": "html",
            "content": "<!-- bem-example: tmp/data/bem-core-4.2.1/touch-phone.examples/page/XFUP7dDCxja7SQdMGjfwW5UDO2M -->"
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
                {
                    "block": "inline-code",
                    "content": "css"
                },
                " element"
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Connects CSS using a URL or a string. Depending on whether the ",
                {
                    "block": "inline-code",
                    "content": "url"
                },
                " field is specified in the element declaration, an HTML element is created with the tag:"
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
                            " and the ",
                            {
                                "block": "inline-code",
                                "content": "stylesheet"
                            },
                            " property, if ",
                            {
                                "block": "inline-code",
                                "content": "url"
                            },
                            " is specified."
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
                            ", if ",
                            {
                                "block": "inline-code",
                                "content": "url"
                            },
                            " is omitted. In this case, it is assumed that the element content is passed using the ",
                            {
                                "block": "inline-code",
                                "content": "content"
                            },
                            " property in the element's BEMJSON declaration."
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
                "Specialized ",
                {
                    "block": "inline-code",
                    "content": "content"
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
                    "content": "String"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Use this field for explicitly passing the content of the ",
                {
                    "block": "inline-code",
                    "content": "<style>"
                },
                " HTML element:"
            ]
        },
        {
            "block": "html",
            "content": "<!-- bem-example: tmp/data/bem-core-4.2.1/touch-phone.examples/page/PeIoncFtgjqSTzb7R7VpvEI_Av0 -->"
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
                "Specialized ",
                {
                    "block": "inline-code",
                    "content": "url"
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
                    "content": "String"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Sets the URL for downloading CSS. The value of the ",
                {
                    "block": "inline-code",
                    "content": "url"
                },
                " field in the BEMJSON declaration is passed to the ",
                {
                    "block": "inline-code",
                    "content": "href"
                },
                " property in the created HTML element."
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
                {
                    "block": "inline-code",
                    "content": "js"
                },
                " element"
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Connects JS using a URL or a string. Creates the ",
                {
                    "block": "inline-code",
                    "content": "<script>"
                },
                " HTML element."
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
                "Specialized ",
                {
                    "block": "inline-code",
                    "content": "content"
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
                    "content": "String"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Use this field for explicitly passing the content of the ",
                {
                    "block": "inline-code",
                    "content": "<script>"
                },
                " HTML element:"
            ]
        },
        {
            "block": "html",
            "content": "<!-- bem-example: tmp/data/bem-core-4.2.1/touch-phone.examples/page/gyO3dP0eqhvRshKuh46fxynk9hQ -->"
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
                "Specialized ",
                {
                    "block": "inline-code",
                    "content": "url"
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
                    "content": "String"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Sets the URL for downloading a script. The value of the ",
                {
                    "block": "inline-code",
                    "content": "url"
                },
                " field in the BEMJSON declaration is passed to the ",
                {
                    "block": "inline-code",
                    "content": "src"
                },
                " property in the created HTML element."
            ]
        },
        {
            "block": "html",
            "content": "<!-- bem-example: tmp/data/bem-core-4.2.1/touch-phone.examples/page/wRN9Y9I9KBSKKEWD1yt-9EuU5Lc -->"
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
                {
                    "block": "inline-code",
                    "content": "meta"
                },
                " element"
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Creates ",
                {
                    "block": "inline-code",
                    "content": "<meta>"
                },
                " HTML elements and defines user metadata for them. Metadata is passed as keys and values of attribute hashes, the ",
                {
                    "block": "inline-code",
                    "content": "attrs"
                },
                " properties in the BEMJSON declaration of the element:"
            ]
        },
        {
            "block": "html",
            "content": "<!-- bem-example: tmp/data/bem-core-4.2.1/touch-phone.examples/page/4fuUSAPd1pnoU76FCeeED0ohlTU -->"
        },
        {
            "block": "paragraph",
            "content": [
                "For more information, see the documentation for ",
                {
                    "block": "inline-code",
                    "content": "<meta>"
                },
                " ",
                {
                    "href": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta",
                    "block": "link",
                    "content": "at MDN"
                },
                "."
            ]
        }
    ]
}