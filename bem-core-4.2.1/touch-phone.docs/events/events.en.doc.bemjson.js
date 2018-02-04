{
    "block": "md-root",
    "content": [
        {
            "level": 1,
            "block": "heading",
            "mods": {
                "level": 1
            },
            "content": "events"
        },
        {
            "block": "paragraph",
            "content": "This block provides a set of JS classes for working with events."
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
            "content": "Classes provided by the block"
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
                    "Class",
                    "Constructor",
                    "Description"
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#class-Event\">"
                        },
                        "Event",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        "Event(",
                        {
                            "block": "html",
                            "content": "<br>"
                        },
                        {
                            "block": "inline-code",
                            "content": "type {String}"
                        },
                        ", ",
                        {
                            "block": "html",
                            "content": "<br>"
                        },
                        {
                            "block": "inline-code",
                            "content": "target {Object}"
                        },
                        ")"
                    ],
                    "Creates the event object and changes and checks its states."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#class-Emitter\">"
                        },
                        "Emitter",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    "-",
                    "Generates events and subscriptions to them."
                ]
            ]
        },
        {
            "level": 3,
            "block": "heading",
            "mods": {
                "level": 3
            },
            "content": "Properties and methods of the class object"
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
                    "Class",
                    "Name",
                    "Type or return value",
                    "Description"
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#class-Event\">"
                        },
                        "Event",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-type\">"
                        },
                        "type",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "String"
                    },
                    "Type of event."
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-result\">"
                        },
                        "result",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "*"
                    },
                    "The result returned by the event's last handler."
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-target\">"
                        },
                        "target",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "Object"
                    },
                    "The object where the event occurred."
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-data\">"
                        },
                        "data",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "*"
                    },
                    "Data to pass to the handler as an argument."
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-preventDefault\">"
                        },
                        "preventDefault",
                        {
                            "block": "html",
                            "content": "</a>"
                        },
                        "()"
                    ],
                    "-",
                    "Allows you to prevent execution of the default action for the event."
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-isDefaultPrevented\">"
                        },
                        "isDefaultPrevented",
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
                    "Checks whether the default action for the event was prevented from being executed."
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-stopPropagation\">"
                        },
                        "stopPropagation",
                        {
                            "block": "html",
                            "content": "</a>"
                        },
                        "()"
                    ],
                    "-",
                    "Allows you to stop event propagation."
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-isPropagationStopped\">"
                        },
                        "isPropagationStopped",
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
                    "Checks whether event propagation was stopped."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#class-Emitter\">"
                        },
                        "Emitter",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-on\">"
                        },
                        "on",
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
                            "content": "type {String}"
                        },
                        ", ",
                        {
                            "block": "html",
                            "content": "<br>"
                        },
                        {
                            "block": "inline-code",
                            "content": "[data {Object}]"
                        },
                        ", ",
                        {
                            "block": "html",
                            "content": "<br>"
                        },
                        {
                            "block": "inline-code",
                            "content": "fn {Function}"
                        },
                        ", ",
                        {
                            "block": "html",
                            "content": "<br>"
                        },
                        {
                            "block": "inline-code",
                            "content": "[ {Object} ctx]"
                        },
                        ")"
                    ],
                    "-",
                    "Subscribes to a specific type of event."
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-once\">"
                        },
                        "once",
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
                            "content": "type {String}"
                        },
                        ", ",
                        {
                            "block": "html",
                            "content": "<br>"
                        },
                        {
                            "block": "inline-code",
                            "content": "[data {Object}]"
                        },
                        ", ",
                        {
                            "block": "html",
                            "content": "<br>"
                        },
                        {
                            "block": "inline-code",
                            "content": "fn {Function}"
                        },
                        ", ",
                        {
                            "block": "html",
                            "content": "<br>"
                        },
                        {
                            "block": "inline-code",
                            "content": "[ctx {Object}]"
                        },
                        ")"
                    ],
                    "-",
                    "Subscribes to a specific type of event. The handler executes only once."
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-un\">"
                        },
                        "un",
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
                            "content": "type {String}"
                        },
                        ", ",
                        {
                            "block": "html",
                            "content": "<br>"
                        },
                        {
                            "block": "inline-code",
                            "content": "fn {Function}"
                        },
                        ", ",
                        {
                            "block": "html",
                            "content": "<br>"
                        },
                        {
                            "block": "inline-code",
                            "content": "[ctx {Object}]"
                        },
                        ")"
                    ],
                    "-",
                    "Unsubscribes to a specific type of event."
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-emit\">"
                        },
                        "emit",
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
                            "content": "type {String"
                        },
                        "|",
                        {
                            "block": "inline-code",
                            "content": "events:Event}"
                        },
                        ", ",
                        {
                            "block": "html",
                            "content": "<br>"
                        },
                        {
                            "block": "inline-code",
                            "content": "[data {Object}]"
                        },
                        ")"
                    ],
                    "-",
                    "Generates an event."
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
                            "content": "<a href=\"#elems-channels\">"
                        },
                        "channels",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "JS"
                    },
                    "Used for working with named event channels."
                ]
            ]
        },
        {
            "level": 3,
            "block": "heading",
            "mods": {
                "level": 3
            },
            "content": "Functions provided by block elements"
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
                    "Function",
                    "Return type",
                    "Description"
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#elems-channels\">"
                        },
                        "channels",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        "channels(",
                        {
                            "block": "html",
                            "content": "<br>"
                        },
                        {
                            "block": "inline-code",
                            "content": "[id {String}]"
                        },
                        ", ",
                        {
                            "block": "html",
                            "content": "<br>"
                        },
                        {
                            "block": "inline-code",
                            "content": "[drop {Boolean}]"
                        },
                        ")"
                    ],
                    [
                        {
                            "block": "inline-code",
                            "content": "Object"
                        },
                        "|",
                        {
                            "block": "inline-code",
                            "content": "undefined"
                        }
                    ],
                    "Creates or deletes a named event channel."
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
                    "content": "<a name=\"class-Event\">"
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
            "content": [
                {
                    "block": "inline-code",
                    "content": "Event"
                },
                " class"
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "You can use this class to instantiate an event object by indicating its type and source. To do this, use the ",
                {
                    "block": "inline-code",
                    "content": "Event"
                },
                " constructor function."
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
                                "content": "type {String}"
                            },
                            " – Type of event. Required argument."
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
                                "content": "target {Object}"
                            },
                            " – Object (source) where the event occurred. Required argument."
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
                    "content": "Event"
                },
                ". The event object."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-Event\">"
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
            "content": "Properties and methods of the class object"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-type\">"
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
                " property"
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
            "content": "Type of event."
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['events'], function(events) {\n\n    var myevent = new events.Event('myevent', this);\n    console.log(myevent.type); // 'myevent'\n\n});\n"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-type\">"
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
                    "content": "target"
                },
                " property"
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Type: ",
                {
                    "block": "inline-code",
                    "content": "Object"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": "The object where the event occurred."
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-result\">"
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
                    "content": "result"
                },
                " property"
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Type: ",
                {
                    "block": "inline-code",
                    "content": "*"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": "Contains the data returned by the event's last handler function."
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['events'], function(events) {\n\n    var myEmitter = new events.Emitter();\n    myEmitter.on('myevent', function() { return 'hi-hi-hi'; });\n\n    var myEvent = new events.Event('myevent');\n    myEmitter.emit(myEvent)\n\n    console.log(myEvent.result);    // 'hi-hi-hi'\n});\n"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-data\">"
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
                    "content": "data"
                },
                " property"
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Type: ",
                {
                    "block": "inline-code",
                    "content": "*"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": "Contains the data passed to the event's handler function as an argument."
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['events'], function(events) {\n\n    var myEmitter = new events.Emitter();\n    myEmitter.on('myevent', 'my-data', function(e) { console.log(e.data); });\n\n    myEmitter.emit('myevent'); // my-data\n});\n"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-preventDefault\">"
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
                    "content": "preventDefault"
                },
                " method"
            ]
        },
        {
            "block": "paragraph",
            "content": "Allows you to prevent execution of the default action for the event."
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
                    "content": "<a name=\"fields-isDefaultPrevented\">"
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
                    "content": "isDefaultPrevented"
                },
                " method"
            ]
        },
        {
            "block": "paragraph",
            "content": "Allows you to check whether the default action for the event was prevented from being executed."
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
                ". If the default action for the event was prevented from being executed, it is ",
                {
                    "block": "inline-code",
                    "content": "true"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-stopPropagation\">"
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
                    "content": "stopPropagation"
                },
                " method"
            ]
        },
        {
            "block": "paragraph",
            "content": "Allows you to stop event propagation."
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
                    "content": "<a name=\"fields-isPropagationStopped\">"
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
                    "content": "isPropagationStopped"
                },
                " method"
            ]
        },
        {
            "block": "paragraph",
            "content": "Allows you to check whether event propagation was stopped."
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
                ". If event propagation was stopped, it is ",
                {
                    "block": "inline-code",
                    "content": "true"
                },
                "."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"class-Emitter\">"
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
            "content": [
                {
                    "block": "inline-code",
                    "content": "Emitter"
                },
                " class"
            ]
        },
        {
            "block": "paragraph",
            "content": "This class instantiates objects that you can use for generating events and subscribing to them."
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['events'], function(events) {\n\n    var myEmitter = new events.Emitter();\n\n});\n"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-Event\">"
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
            "content": "Properties and methods of the class object"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-on\">"
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
                    "content": "on"
                },
                " method"
            ]
        },
        {
            "block": "paragraph",
            "content": "Subscribes to a specific type of event."
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
                                "content": "type {String}"
                            },
                            " – The type of event being subscribed to. Required argument."
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
                            " – Additional data available to the handler as the value of the ",
                            {
                                "block": "inline-code",
                                "content": "e.data"
                            },
                            " field in the event object."
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
                                "content": "fn {Function}"
                            },
                            " – The handler function to call for the event. Required argument."
                        ]
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": " – Context for the handler function."
                    }
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Returns the ",
                {
                    "block": "inline-code",
                    "content": "this"
                },
                " object."
            ]
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['events'], function(events) {\n\n    var myEmitter = new events.Emitter();\n\n    myEmitter.on('myevent', function() { console.log('foo'); });\n    myEmitter.emit('myevent'); // 'foo'\n});\n"
        },
        {
            "block": "paragraph",
            "content": [
                "In addition, the value of the ",
                {
                    "block": "inline-code",
                    "content": "type"
                },
                " argument may be:"
            ]
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
                    "content": "Multiple event types separated by spaces, in order to set a single handler function for all of them."
                }
            }
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['events'], function(events) {\n\n    var myEmitter = new events.Emitter();\n\n    myEmitter.on('myevent1 myevent2', function(e) { console.log(e.type) });\n\n    myEmitter.emit('myevent1'); // 'myevent1'\n    myEmitter.emit('myevent2'); // 'myevent2'\n});\n"
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
                        "A hash of ",
                        {
                            "block": "inline-code",
                            "content": "{ 'event-1' : handler-1, ... , 'event-n' : handler-n }"
                        },
                        ", in order to set multiple handlers for different event types."
                    ]
                }
            }
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['events'], function(events) {\n\n    var myEmitter = new events.Emitter();\n\n    myEmitter.on({\n        myevent1 : function(e) { console.log(e.type) },\n        myevent2 : function(e) { console.log(e.type) }\n    });  \n\n    myEmitter.emit('myevent1'); // 'myevent1'\n    myEmitter.emit('myevent2'); // 'myevent2'\n});\n"
        },
        {
            "block": "paragraph",
            "content": [
                "The same is true for the ",
                {
                    "block": "inline-code",
                    "content": "once"
                },
                " and ",
                {
                    "block": "inline-code",
                    "content": "un"
                },
                " methods."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-once\">"
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
                    "content": "once"
                },
                " method"
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Identical to the ",
                {
                    "block": "inline-code",
                    "content": "on"
                },
                " method, but it only executes once. After the first event, the subscription is removed."
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
                                "content": "type {String}"
                            },
                            " – The type of event being subscribed to. Required argument."
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
                            " – Additional data available as the value of the ",
                            {
                                "block": "inline-code",
                                "content": "e.data"
                            },
                            " field in the event object."
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
                                "content": "fn {Function}"
                            },
                            " – The handler function to call for the event. Required argument."
                        ]
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": " – Context for the handler function."
                    }
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Returns the ",
                {
                    "block": "inline-code",
                    "content": "this"
                },
                " object."
            ]
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['events'], function(events) {\n\n    var myEmitter = new events.Emitter();\n\n    myEmitter.on('myevent', function() { console.log('foo') });\n\n    myEmitter.emit('myevent'); // 'foo'\n    myEmitter.emit('myevent'); //handler isn't called\n});\n"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-un\">"
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
                    "content": "un"
                },
                " method"
            ]
        },
        {
            "block": "paragraph",
            "content": "Removes a previously set subscription to a specific type of event."
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
                                "content": "type {String}"
                            },
                            " – The type of event being unsubscribed from. Required argument."
                        ]
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": " – The handler to delete."
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": " – The handler context."
                    }
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "The method returns a reference to the ",
                {
                    "block": "inline-code",
                    "content": "this"
                },
                " object."
            ]
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['events'], function(events) {\n\n    var myEmitter = new events.Emitter(),\n        shout = function() { console.log('foo') };\n\n    myEmitter.on('myevent', shout);\n    myEmitter.emit('myevent'); // 'foo'\n\n    myEmitter.un('myevent', shout);\n    myEmitter.emit('myevent'); //handler isn't called\n});\n"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"fields-emit\">"
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
                    "content": "emit"
                },
                " method"
            ]
        },
        {
            "block": "paragraph",
            "content": "Generates an event."
        },
        {
            "block": "paragraph",
            "content": "This method calls all the handler functions set for the event."
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
                                "content": "type {String|events:Event}"
                            },
                            " – The event to generate, in the form of a string or a prepared event object. Required argument."
                        ]
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": " – Additional data available as the second argument of the handler function."
                    }
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Returns the ",
                {
                    "block": "inline-code",
                    "content": "this"
                },
                " object."
            ]
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['events'], function(events) {\n\n    var myEmitter = new events.Emitter();\n\n    myEmitter.on('myevent', function(e, data) { console.log(data) });\n    myEmitter.emit('myevent', 'ololo');  // 'ololo'\n});\n"
        },
        {
            "level": 4,
            "block": "heading",
            "mods": {
                "level": 4
            },
            "content": "Static methods of the class"
        },
        {
            "block": "paragraph",
            "content": "The set of static methods and their signatures is exactly the same as for the methods of the object being instantiated by the class."
        }
    ]
}
{
    "block": "md-root",
    "content": [
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"elems-channels\">"
                },
                {
                    "block": "html",
                    "content": "</a>"
                }
            ]
        },
        {
            "level": 1,
            "block": "heading",
            "mods": {
                "level": 1
            },
            "content": [
                {
                    "block": "inline-code",
                    "content": "channels"
                },
                " element in the ",
                {
                    "block": "inline-code",
                    "content": "events"
                },
                " block"
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Use the ",
                {
                    "block": "inline-code",
                    "content": "channels"
                },
                " element in the ",
                {
                    "block": "inline-code",
                    "content": "events"
                },
                " block for working with named event channels. Named channels allow you to work with events using the observer pattern (also known as the publish-subscribe pattern)."
            ]
        },
        {
            "block": "paragraph",
            "content": "This element implements a function to:"
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
                            "Get a reference to a named channel by its ",
                            {
                                "block": "inline-code",
                                "content": "id"
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
                        "content": "Get a reference to a standard channel."
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": [
                            "Remove a standard channel or a named channel with an ",
                            {
                                "block": "inline-code",
                                "content": "id"
                            },
                            "."
                        ]
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
                        "content": [
                            " – Channel ID. If omitted, the default channel is used (",
                            {
                                "block": "inline-code",
                                "content": "'default'"
                            },
                            ")."
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
                            " – A boolean flag to remove the channel (when ",
                            {
                                "block": "inline-code",
                                "content": "true"
                            },
                            "). By default, ",
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
            "content": {
                "block": "strong",
                "content": "Returned value:"
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
                                "content": "Object"
                            },
                            ". Object of the ",
                            {
                                "block": "inline-code",
                                "content": "Emitter"
                            },
                            " \"class\" – a named channel."
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
                                "content": "undefined"
                            },
                            ". If the function was called with the ",
                            {
                                "block": "inline-code",
                                "content": "drop"
                            },
                            " parameter set to ",
                            {
                                "block": "inline-code",
                                "content": "true"
                            },
                            "."
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
            "content": "modules.require(['events__channels'], function(channels) {\n\nvar myChannel = channels('my-channel');\nmyChannel.on('test', function(e, data) { console.log(data.foo) });\n\nmyChannel.emit('test', { foo : 'bar' }); // 'bar'\n\n});\n"
        }
    ]
}