{
    "block": "md-root",
    "content": [
        {
            "level": 1,
            "block": "heading",
            "mods": {
                "level": 1
            },
            "content": "ua"
        },
        {
            "block": "paragraph",
            "content": "Use this block to collect data about the user's browser."
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
                            "content": "<a href=\"#elems-svg\">"
                        },
                        "svg",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "deps"
                    },
                    "Checks whether the browser supports SVG format."
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
                "The block enables an inline script that adds ",
                {
                    "block": "inline-code",
                    "content": "CSS"
                },
                " classes to the ",
                {
                    "block": "inline-code",
                    "content": "<html>"
                },
                " tag to specify whether JavaScript is enabled – ",
                {
                    "block": "inline-code",
                    "content": "ua_js_no"
                },
                " or ",
                {
                    "block": "inline-code",
                    "content": "ua_js_yes"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": "It doesn't have a visual representation on the page."
        },
        {
            "block": "paragraph",
            "content": [
                "Used inside the ",
                {
                    "href": "https://github.com/bem/bem-core/blob/v2/common.blocks/page/page.en.md",
                    "block": "link",
                    "content": "page"
                },
                " block. You normally don't need to connect it to the page yourself."
            ]
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
                    "content": "<a name=\"elems-svg\">"
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
                    "content": "svg"
                },
                " element"
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "This element enables an inline script that adds ",
                {
                    "block": "inline-code",
                    "content": "CSS"
                },
                " classes to the ",
                {
                    "block": "inline-code",
                    "content": "<html>"
                },
                " tag to specify whether SVG is supported – ",
                {
                    "block": "inline-code",
                    "content": "ua_svg_no"
                },
                " or ",
                {
                    "block": "inline-code",
                    "content": "ua_svg_yes"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": "It doesn't have a visual representation on the page."
        },
        {
            "block": "paragraph",
            "content": [
                "To use it, add the element to the ",
                {
                    "block": "inline-code",
                    "content": "deps.js"
                },
                " dependencies file for the block that needs information about SVG support:"
            ]
        },
        {
            "block": "html",
            "content": "<!-- bem-example: tmp/data/bem-core-4.2.1/touch-pad.examples/ua/9d6RqDW969c-01-kFvK8PLS6AXo -->"
        }
    ]
}