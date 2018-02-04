{
    "block": "md-root",
    "content": [
        {
            "level": 1,
            "block": "heading",
            "mods": {
                "level": 1
            },
            "content": "idle"
        },
        {
            "block": "paragraph",
            "content": "This block provides an object with a set of methods for generating an event when user activity ends (i.e. the user switches to another window or doesn't finish actions)."
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
            "content": "Object events"
        },
        {
            "block": "paragraph",
            "content": "The following events are available:"
        },
        {
            "align": [
                null,
                null
            ],
            "block": "table",
            "rows": [
                [
                    "Name",
                    "Description"
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#events-idle\">"
                        },
                        "idle",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    "The browser is idle."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#events-wakeup\">"
                        },
                        "wakeup",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    "The user has resumed activity."
                ]
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
            "align": [
                null,
                null,
                null
            ],
            "block": "table",
            "rows": [
                [
                    "Name",
                    "Returned value",
                    "Description"
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-start\">"
                        },
                        "start",
                        {
                            "block": "html",
                            "content": "</a>"
                        },
                        "()"
                    ],
                    "-",
                    "Starts tracking user activity."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-stop\">"
                        },
                        "stop",
                        {
                            "block": "html",
                            "content": "</a>"
                        },
                        "()"
                    ],
                    "-",
                    "Stops tracking user activity."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-isIdle\">"
                        },
                        "isIdle",
                        {
                            "block": "html",
                            "content": "</a>"
                        },
                        "()"
                    ],
                    {
                        "block": "inline-code",
                        "content": "Boolean"
                    },
                    "Checks the current state."
                ]
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
                            "content": "<a href=\"#modifiers-start\">"
                        },
                        "start",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "auto"
                    },
                    {
                        "block": "inline-code",
                        "content": "JS"
                    },
                    "Automatically starts tracking user activity."
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
            "content": "Subscribing to the block's event allows you to suspend operations, such as displaying animation, when there isn't any user activity."
        },
        {
            "block": "paragraph",
            "content": [
                "The block is a descendant of the ",
                {
                    "block": "inline-code",
                    "content": "Emitter"
                },
                " class in the ",
                {
                    "block": "inline-code",
                    "content": "events"
                },
                " block, which allows it to call these methods."
            ]
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['idle'], function(idle) {\n\nidle\n    .on({\n        idle : function() {\n            // idle event handler\n        },\n        wakeup : function() {\n            // wakeup event handler\n        }\n    })\n    .start(); // start event generation\n\n});\n"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"events\">"
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
            "content": "Object events"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"events-idle\">"
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
                    "content": "idle"
                },
                " event"
            ]
        },
        {
            "block": "paragraph",
            "content": "Generated when user activity ends."
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"events-wakeup\">"
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
                    "content": "wakeup"
                },
                " event"
            ]
        },
        {
            "block": "paragraph",
            "content": "Generated when user activity resumes."
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
                    "content": "<a name=\"fields-start\">"
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
                    "content": "start"
                },
                " method"
            ]
        },
        {
            "block": "paragraph",
            "content": "Starts tracking user activity."
        },
        {
            "block": "paragraph",
            "content": "Doesn't accept arguments."
        },
        {
            "block": "paragraph",
            "content": "No return value."
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['idle'], function(idle) {\n\nidle.start()\n\n});\n"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-stop\">"
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
                    "content": "stop"
                },
                " method"
            ]
        },
        {
            "block": "paragraph",
            "content": "Stops user activity tracking."
        },
        {
            "block": "paragraph",
            "content": "Doesn't accept arguments."
        },
        {
            "block": "paragraph",
            "content": "No return value."
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['idle'], function(idle) {\n\nidle.start() // start tracking activity\nidle.stop() // stop tracking activity\n\n});\n"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-isIdle\">"
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
                    "content": "isIdle"
                },
                " method"
            ]
        },
        {
            "block": "paragraph",
            "content": "Checks whether there is any user activity."
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
                    "content": "Boolean"
                },
                ". If there isn't any activity, ",
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
            "content": "modules.require(['idle'], function(idle) {\n\nidle.isIdle() // true or false, depending on the current state\n\n});\n"
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
                    "content": "<a name=\"modifiers-start\">"
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
                    "content": "start"
                },
                " modifier"
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Acceptable values: ",
                {
                    "block": "inline-code",
                    "content": "'auto'"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Usage: enabled in the ",
                {
                    "block": "inline-code",
                    "content": "deps.js"
                },
                " dependencies file."
            ]
        },
        {
            "block": "paragraph",
            "content": "Automatically starts tracking user activity."
        }
    ]
}