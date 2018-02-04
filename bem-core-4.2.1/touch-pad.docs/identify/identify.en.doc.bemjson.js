{
    "block": "md-root",
    "content": [
        {
            "level": 1,
            "block": "heading",
            "mods": {
                "level": 1
            },
            "content": "identify"
        },
        {
            "block": "paragraph",
            "content": "This block provides a function for working with unique identifiers. It allows you to:"
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
                        "content": "Create object identifiers."
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": "Check whether objects have an identifier."
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": "Create a unique identifier string."
                    }
                }
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
                        "content": " – The object to identify."
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": [
                            " – Flag for checking whether the object has an identifier. If ",
                            {
                                "block": "inline-code",
                                "content": "true"
                            },
                            ", the function returns a string with the identifier if the object was previously assigned an identifier. By default, ",
                            {
                                "block": "inline-code",
                                "content": "false"
                            },
                            "."
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
                    "content": "String"
                },
                ". A string with the identifier assigned to the object. Subsequent calls will always return the same identifier."
            ]
        },
        {
            "block": "paragraph",
            "content": "Example:"
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['identify'], function(identify) {\n    var a = {},\n        b = {},\n        identA = identify(a);\n\n    console.log(identA === identify(a)); //true\n    console.log(identA === identify(b)); //false\n});\n"
        },
        {
            "block": "paragraph",
            "content": "When called without arguments, the function returns a string with a unique identifier every time."
        },
        {
            "block": "paragraph",
            "content": "Example:"
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['identify'], function(identify) {\n    var a = identify(),\n        b = identify();\n\n    console.log(a === b); //false\n});\n"
        },
        {
            "level": 2,
            "block": "heading",
            "mods": {
                "level": 2
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
        }
    ]
}