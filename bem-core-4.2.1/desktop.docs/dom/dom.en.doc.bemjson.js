{
    "block": "md-root",
    "content": [
        {
            "level": 1,
            "block": "heading",
            "mods": {
                "level": 1
            },
            "content": "dom"
        },
        {
            "block": "paragraph",
            "content": "This block provides an object with a set of methods for working with the DOM tree."
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
                            "content": "<a href=\"#fields-contains\">"
                        },
                        "contains",
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
                            "content": "ctx {jQuery}"
                        },
                        ",",
                        {
                            "block": "html",
                            "content": "<br>"
                        },
                        {
                            "block": "inline-code",
                            "content": "domElem {jQuery}"
                        },
                        ")"
                    ],
                    {
                        "block": "inline-code",
                        "content": "Boolean"
                    },
                    "Checks whether a DOM element contains another DOM element."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-getFocused\">"
                        },
                        "getFocused",
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
                            "content": "domElem {jQuery}"
                        },
                        ")"
                    ],
                    {
                        "block": "inline-code",
                        "content": "jQuery"
                    },
                    "Gets a reference to the DOM element that is in focus."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-containsFocus\">"
                        },
                        "containsFocus",
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
                            "content": "domElem {jQuery}"
                        },
                        ")"
                    ],
                    {
                        "block": "inline-code",
                        "content": "Boolean"
                    },
                    "Checks whether a DOM element or its descendants contains the focus."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-isFocusable\">"
                        },
                        "isFocusable",
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
                            "content": "domElem {jQuery}"
                        },
                        ")"
                    ],
                    {
                        "block": "inline-code",
                        "content": "Boolean"
                    },
                    "Checks whether the DOM element is in focus."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-isEditable\">"
                        },
                        "isEditable",
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
                            "content": "domElem {jQuery}"
                        },
                        ")"
                    ],
                    {
                        "block": "inline-code",
                        "content": "Boolean"
                    },
                    "Checks whether text can be entered in the DOM element."
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
                    "content": "<a name=\"fields-contains\">"
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
                    "content": "contains"
                },
                " method"
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Use this method to check whether a ",
                {
                    "block": "inline-code",
                    "content": "ctx"
                },
                " DOM element contains ",
                {
                    "block": "inline-code",
                    "content": "domElem"
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
                                "content": "ctx {jQuery}"
                            },
                            " – The DOM element to search inside. Required argument."
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
                                "content": "domElem {jQuery}"
                            },
                            " – The DOM element to search for. Required argument."
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
                    "content": "Boolean"
                },
                ". If found, then ",
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
            "content": "modules.require(['dom', 'jquery'], function(dom, $) {\n\n/*\n<div class=\"block1\">\n  <div class=\"block2\"></div>\n</div>\n*/\n\ndom.contains($('.block1'), $('.block2'));  // true\n\n});\n"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-getFocused\">"
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
                    "content": "getFocused"
                },
                " method"
            ]
        },
        {
            "block": "paragraph",
            "content": "Gets a reference to the DOM element that is in focus."
        },
        {
            "block": "paragraph",
            "content": "Doesn't accept arguments."
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
                    "content": "jQuery"
                },
                " – The object in focus."
            ]
        },
        {
            "block": "paragraph",
            "content": "Example:"
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['dom'], function(dom) {\n\ndom.getFocused(); // a reference to the element in focus\n\n});\n"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-containsFocus\">"
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
                    "content": "containsFocus"
                },
                " method"
            ]
        },
        {
            "block": "paragraph",
            "content": "This method checks whether the focus is on the DOM element passed in the argument or one of its descendants."
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
                            "content": "domElem {jQuery}"
                        },
                        " – The DOM element to check. Required argument."
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
                ". If this element is in focus, then ",
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
            "content": "modules.require(['dom', 'jquery'], function(dom, $) {\n\n/*\n<div class=\"block1\">\n  <input class=\"block1__control\"></div>\n</div>\n*/\n\n$('.block1__control').focus();\ndom.containsFocus($('.block1'));  // true\n\n});\n"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-isFocusable\">"
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
                    "content": "isFocusable"
                },
                " method"
            ]
        },
        {
            "block": "paragraph",
            "content": "This method checks whether the user's browser can set the focus on the DOM element passed in the argument.   "
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
                            "content": "domElem {jQuery}"
                        },
                        " – The DOM element to check. Required argument. If there are mutiple DOM elements in the jQuery chain, the first one is checked."
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
                ". If the focus can be set on this element, then ",
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
            "content": "modules.require(['dom', 'jquery'], function(dom, $) {\n\n/*\n<div class=\"menu\">\n  <a class=\"menu__item\" href=\"/\">Link 1</a>\n</div>\n*/\n\ndom.isFocusable($('.menu__item')); // true\n\n/*\n<div class=\"menu\">\n  <span class=\"menu__item menu__item_current\">Link 1</span>\n</div>\n*/\n\ndom.isFocusable($('.menu__item')); // false\n\n});\n"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-isEditable\">"
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
                    "content": "isEditable"
                },
                " method"
            ]
        },
        {
            "block": "paragraph",
            "content": "This method checks whether text can be entered in the DOM element passed in the argument. In other words, you can use this method to check whether the element is an input field, text field, and so on."
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
                            "content": "domElem {jQuery}"
                        },
                        " – The DOM element to check. Required argument. If there are mutiple DOM elements in the jQuery chain, the first one is checked."
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
                ". If text can be entered in the DOM element, then ",
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
            "content": "modules.require(['dom', 'jquery'], function(dom, $) {\n\ndom.isEditable($('input, textarea')); // true\n\n});\n"
        }
    ]
}