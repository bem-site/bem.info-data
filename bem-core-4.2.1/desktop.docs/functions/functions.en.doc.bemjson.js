{
    "block": "md-root",
    "content": [
        {
            "level": 1,
            "block": "heading",
            "mods": {
                "level": 1
            },
            "content": "functions"
        },
        {
            "block": "paragraph",
            "content": "This block provides an object with a set of methods for working with JavaScript functions."
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
                    "Type or return value",
                    "Description"
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-isFunction\">"
                        },
                        "isFunction",
                        {
                            "block": "html",
                            "content": "</a>"
                        },
                        "(",
                        {
                            "block": "inline-code",
                            "content": "obj {*}"
                        },
                        ")"
                    ],
                    {
                        "block": "inline-code",
                        "content": "Boolean"
                    },
                    "Checks whether a passed argument is a function."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-noop\">"
                        },
                        "noop",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "Function"
                    },
                    "Empty function."
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
                            "content": "<a href=\"#elems-debounce\">"
                        },
                        "debounce",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "JS"
                    },
                    "Function decorator that combines multiple function calls within a specified time period into one call."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#elems-throttle\">"
                        },
                        "throttle",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "JS"
                    },
                    "Function decorator that limits the frequency of function execution to once per specified period."
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
                    "content": "<a name=\"fields-isFunction\">"
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
                    "content": "isFunction"
                },
                " method"
            ]
        },
        {
            "block": "paragraph",
            "content": "Checks whether a passed argument is a function.  "
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
                            "content": "obj {*}"
                        },
                        " – The object being checked. Required argument."
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
                ". If the argument is a function, then ",
                {
                    "block": "inline-code",
                    "content": "true"
                },
                "."
            ]
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require('functions', function(func) {\n    var a = function(){},\n        b = {};\n    console.log(func.isFunction(a)); //true\n    console.log(func.isFunction(b)); //false\n});\n"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-noop\">"
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
                    "content": "noop"
                },
                " property"
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Empty function (",
                {
                    "block": "inline-code",
                    "content": "function() {}"
                },
                ")."
            ]
        },
        {
            "block": "paragraph",
            "content": "No arguments or return value."
        },
        {
            "block": "paragraph",
            "content": [
                "You can use ",
                {
                    "block": "inline-code",
                    "content": "noop"
                },
                " when you need a function but there isn't a reason to add the logic. For example, you can use it as a placeholder for base classes at the design stage when using OOP."
            ]
        },
        {
            "block": "paragraph",
            "content": "Example:"
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.define('base-class', ['inherit', 'functions'], function(provide, inherit, functions) {\n\nprovide(inherit({\n    getData : function() {\n        this._sendRequest();\n    },\n\n    _sendRequest : functions.noop\n\n}));\n\n});\n"
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
            "content": "The block elements implement a set of function decorators."
        },
        {
            "block": "paragraph",
            "content": "The decorators add logic to the function without changing its original signature."
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"elems-debounce\">"
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
                    "content": "debounce"
                },
                " element"
            ]
        },
        {
            "block": "paragraph",
            "content": "A decorator that postpones function calls for the specified delay time. After each attempt to make a call, the delay starts over again."
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
                                "content": "fn {Function}"
                            },
                            " — Original function. Required argument."
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
                                "content": "timeout {Number}"
                            },
                            " — Time of delay, in milliseconds. Required argument."
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
                            " — The ",
                            {
                                "block": "inline-code",
                                "content": "debounce"
                            },
                            " mode. By default, the first mode is used (corresponding to the ",
                            {
                                "block": "inline-code",
                                "content": "false"
                            },
                            " value)."
                        ]
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": " — The context for executing the original function."
                    }
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "There are two ",
                {
                    "block": "inline-code",
                    "content": "debounce"
                },
                " modes, depending on the value of ",
                {
                    "block": "inline-code",
                    "content": "invokeAsap"
                },
                ":"
            ]
        },
        {
            "ordered": true,
            "loose": false,
            "block": "list",
            "mods": {
                "ordered": true
            },
            "content": [
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": "The original function is called when the delay expires after the last call attempt."
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": "The original function is first called as soon as the decorated function is called. After this, the behavior is the same as in the first mode."
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
                ". The decorated function."
            ]
        },
        {
            "block": "paragraph",
            "content": "Example:"
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require('functions__debounce', function(provide, debounce) {\n\n    function log() {\n        console.log('hello!');\n    }\n\n    var debouncedLog = debounce(log, 300);\n    setInterval(debouncedLog, 50);\n\n});\n"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"elems-throttle\">"
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
                    "content": "throttle"
                },
                " element"
            ]
        },
        {
            "block": "paragraph",
            "content": "This decorator allows you to \"slow down\" the function. It won't be executed more than once during the specified period, no matter how many times it is called during this time. All calls in the meantime are ignored."
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
                                "content": "fn {Function}"
                            },
                            " — Original function. Required argument."
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
                                "content": "period {Number}"
                            },
                            " — The interval between calls, in milliseconds. Required argument."
                        ]
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": " — The context for executing the original function."
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
                ". The decorated function."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "This method is convenient for setting resource-intensive handlers for frequently generated events, such as ",
                {
                    "block": "inline-code",
                    "content": "resize"
                },
                ", ",
                {
                    "block": "inline-code",
                    "content": "pointermove"
                },
                ", and so on."
            ]
        },
        {
            "block": "paragraph",
            "content": "Example:"
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require('functions__throttle', function(provide, throttle) {\n\n    function log() {\n        console.log('hello!');\n    }\n\n    var throttledLog = throttle(log, 300);\n    setInterval(throttledLog, 50);\n\n});\n"
        },
        {
            "block": "paragraph",
            "content": "As a result, the function is executed no more than once every 300 milliseconds."
        }
    ]
}