{
    "block": "md-root",
    "content": [
        {
            "level": 1,
            "block": "heading",
            "mods": {
                "level": 1
            },
            "content": "tick"
        },
        {
            "block": "paragraph",
            "content": [
                "This block provides an object for working with a regularly generated ",
                {
                    "block": "inline-code",
                    "content": "tick"
                },
                " event (to implement the polling pattern)."
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
            "content": "Object events"
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
                            "content": "<a href=\"#events-tick\">"
                        },
                        "tick",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    "A regularly generated event."
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
                    "Return type",
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
                    [
                        "Starts generating ",
                        {
                            "block": "inline-code",
                            "content": "tick"
                        },
                        " events if the process hasn't started yet."
                    ]
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
                    [
                        "Stops generating ",
                        {
                            "block": "inline-code",
                            "content": "tick"
                        },
                        " events if the process hasn't stopped yet."
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
                        "content": "'auto'"
                    },
                    {
                        "block": "inline-code",
                        "content": "JS"
                    },
                    "Automatically starts generating events"
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
                    "content": "<a name=\"events-tick\">"
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
                    "content": "tick"
                },
                " event"
            ]
        },
        {
            "block": "paragraph",
            "content": "Subscribe to the event to use it to implement the polling pattern."
        },
        {
            "block": "paragraph",
            "content": "An event is generated every 50 milliseconds."
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
                " block, which allows it to call these classes."
            ]
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require('tick', function(tick) {\n\nvar update = function() { /* ... */ };\n\ntick\n    .on('tick', update) // subscribing to the tick event\n    .start(); // starting generation of tick events\n});\n"
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
            "content": [
                "Starts generating ",
                {
                    "href": "#fields-tick",
                    "block": "link",
                    "content": "tick"
                },
                " events if the process hasn't started yet. A ",
                {
                    "block": "inline-code",
                    "content": "tick"
                },
                " is generated with an interval of 50 milliseconds after invoking the method."
            ]
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
            "content": [
                "Stops generating ",
                {
                    "href": "#fields-tick",
                    "block": "link",
                    "content": "tick"
                },
                " events."
            ]
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
                "Use the block with the ",
                {
                    "block": "inline-code",
                    "content": "start"
                },
                " modifier set to ",
                {
                    "block": "inline-code",
                    "content": "auto"
                },
                " in order to automatically start generating ",
                {
                    "href": "#fields-tick",
                    "block": "link",
                    "content": "tick"
                },
                " events. The event starts being generated at the time of block initialization."
            ]
        }
    ]
}