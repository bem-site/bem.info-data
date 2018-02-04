{
    "block": "md-root",
    "content": [
        {
            "level": 1,
            "block": "heading",
            "mods": {
                "level": 1
            },
            "content": "jquery"
        },
        {
            "block": "paragraph",
            "content": [
                "This block is for downloading the ",
                {
                    "href": "https://jquery.com",
                    "block": "link",
                    "content": "jQuery"
                },
                " library and its extensions and enabling them on a page.\nExtensions are enabled via dependencies on the block elements."
            ]
        },
        {
            "level": 2,
            "block": "heading",
            "mods": {
                "level": 2
            },
            "content": "Usage"
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['jquery'], function($) {\n    console.log($);\n});\n"
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
                            "content": "<a href=\"#elems-config\">"
                        },
                        "config",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "JS"
                    },
                    "jQuery configuration."
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#elems-event\">"
                        },
                        "event",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    {
                        "block": "inline-code",
                        "content": "JS"
                    },
                    "Extensions for the jQuery event model."
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
                    "Return type",
                    "Description"
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#elems-config\">"
                        },
                        "config",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#fields-url\">"
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
                    "String with the URL for connecting the jQuery library."
                ]
            ]
        },
        {
            "level": 3,
            "block": "heading",
            "mods": {
                "level": 3
            },
            "content": "Events of the block elements"
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
                    "Name",
                    "Description"
                ],
                [
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#elems-event\">"
                        },
                        "event",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#events-pointerclick\">"
                        },
                        "pointerclick",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        "Eliminates the delay of the ",
                        {
                            "block": "inline-code",
                            "content": "click"
                        },
                        " event on touch devices."
                    ]
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#events-pointerover\">"
                        },
                        "pointerover",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    "Generated when the pointer on the input device is over an element."
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#events-pointerenter\">"
                        },
                        "pointerenter",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    "Generated when the pointer enters an element's active area."
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#events-pointerdown\">"
                        },
                        "pointerdown",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    "Generated when the input device enters the active button state."
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#events-pointermove\">"
                        },
                        "pointermove",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    "Generated when the pointer's coordinates change."
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#events-pointerup\">"
                        },
                        "pointerup",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    "Generated when exiting the active button state."
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#events-pointerout\">"
                        },
                        "pointerout",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    "Generated when the pointer leaves the area over an element."
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#events-pointerleave\">"
                        },
                        "pointerleave",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    "Generated when the pointer leaves an element's active area."
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#events-pointerpress\">"
                        },
                        "pointerpress",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        "Generated on the ",
                        {
                            "block": "inline-code",
                            "content": "pointerdown"
                        },
                        " event."
                    ]
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#events-pointerrelease\">"
                        },
                        "pointerrelease",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        "Generated on the ",
                        {
                            "block": "inline-code",
                            "content": "pointerup"
                        },
                        " and ",
                        {
                            "block": "inline-code",
                            "content": "pointercancel"
                        },
                        " events."
                    ]
                ],
                [
                    null,
                    [
                        {
                            "block": "html",
                            "content": "<a href=\"#events-pointercancel\">"
                        },
                        "pointercancel",
                        {
                            "block": "html",
                            "content": "</a>"
                        }
                    ],
                    [
                        "Generated when more pointer events are not expected to occur, or after generating the ",
                        {
                            "block": "inline-code",
                            "content": "pointerdown"
                        },
                        " event."
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
                    "content": "<a name=\"elems-event\">"
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
                    "content": "event"
                },
                " element in the ",
                {
                    "block": "inline-code",
                    "content": "jquery"
                },
                " block"
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "This element implements support for additional types of jQuery events. The additional types are enabled using the corresponding values of the ",
                {
                    "block": "inline-code",
                    "content": "type"
                },
                " modifier."
            ]
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
            "level": 2,
            "block": "heading",
            "mods": {
                "level": 2
            },
            "content": "Element modifiers"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"modifiers-name\">"
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
                    "content": "type"
                },
                " modifier"
            ]
        },
        {
            "block": "paragraph",
            "content": "Provides a set of polyfills that implement the abstraction layer over jQuery events on input devices. This allows you to create a shared logic for different platforms (desktop, phone, etc.) and supplement it with methods specific to the device type."
        },
        {
            "block": "paragraph",
            "content": [
                "Each polyfill adds a set of ",
                {
                    "block": "strong",
                    "content": "pointer events"
                },
                " for creating hardware agnostic logic."
            ]
        },
        {
            "block": "paragraph",
            "content": "All the pointer events are jQuery user events. Subscribe to pointer events in the standard way:"
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.define('pointer-test', ['i-bem-dom'], function(provide, bemDom) {\n\nprovide(bemDom.declBlock(this.name, /** @lends pointer-test.prototype */ {\n    onSetMod : {\n        js : {\n            inited : function() {\n                // subscribing to pointerpress on the block itself during initialization\n                this._domEvents().on('pointerpress', this._onPress);\n            }\n        }\n    },\n    _onPress : function(e) {\n        console.log(e.type);\n        // subscribing to pointerrelease when calling the pointerpress handler\n        this._domEvents().on('pointerrelease', this._onRelease);\n    },\n    _onRelease : function(e) {\n        console.log(e.type);\n        // unsubscribing from pointerrelease when calling the pointerrelease handler\n        this._domEvents().un('pointerrelease', this._onRelease);\n    }\n}));\n});\n"
        },
        {
            "block": "paragraph",
            "content": "Different polyfills are enabled depending on the modifier's value."
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"modifiers-type-pointer\">"
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
                " modifier with the ",
                {
                    "block": "inline-code",
                    "content": "pointer"
                },
                " value"
            ]
        },
        {
            "block": "paragraph",
            "content": "This is a modifier for enabling all types of pointer events. It doesn't introduce additional logic."
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"modifiers-type-pointerclick\">"
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
                " modifier with the ",
                {
                    "block": "inline-code",
                    "content": "pointerclick"
                },
                " value"
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Enables a polyfill that implements the ",
                {
                    "block": "inline-code",
                    "content": "pointerclick"
                },
                " event."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"events-pointerclick\">"
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
                    "content": "pointerclick"
                },
                " event"
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Generated for a left click or a touch on the device screen. Using ",
                {
                    "block": "inline-code",
                    "content": "pointerclick"
                },
                " eliminates the delay of the ",
                {
                    "block": "inline-code",
                    "content": "click"
                },
                " event on touch devices."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"modifiers-type-pointernative\">"
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
                " modifier with the ",
                {
                    "block": "inline-code",
                    "content": "pointernative"
                },
                " value"
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Enables a polyfill that implements the basic functionality of the ",
                {
                    "href": "http://www.w3.org/TR/pointerevents/",
                    "block": "link",
                    "content": "W3C Pointer Events"
                },
                " model."
            ]
        },
        {
            "block": "paragraph",
            "content": "The following set of events is available with the modifier:"
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"events-pointerover\">"
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
                    "content": "pointerover"
                },
                " event"
            ]
        },
        {
            "block": "paragraph",
            "content": "Generated:"
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
                        "content": "When the pointer is over an element."
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": [
                            "Before a ",
                            {
                                "block": "inline-code",
                                "content": "pointerdown"
                            },
                            " event for devices that don't support ",
                            {
                                "block": "inline-code",
                                "content": "hover"
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
                    "block": "html",
                    "content": "<a name=\"events-pointerenter\">"
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
                    "content": "pointerenter"
                },
                " event"
            ]
        },
        {
            "block": "paragraph",
            "content": "Generated:"
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
                            "When the pointer enters the element's ",
                            {
                                "block": "emphasis",
                                "content": "active area"
                            },
                            ". When the pointer is over the element or one of its descendants."
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
                            "On a ",
                            {
                                "block": "inline-code",
                                "content": "pointerdown"
                            },
                            " event for devices that don't support ",
                            {
                                "block": "inline-code",
                                "content": "hover"
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
                "This event is the same as ",
                {
                    "block": "inline-code",
                    "content": "pointerover"
                },
                ", but it doesn't bubble."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"events-pointerdown\">"
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
                    "content": "pointerdown"
                },
                " event"
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Generated when the input device is in the ",
                {
                    "block": "emphasis",
                    "content": "active buttons"
                },
                " state."
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
                        "content": "For a mouse, this is when at least one button is pressed."
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": "For pen and touch devices, this is when physical contact is made with the device screen."
                    }
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"events-pointermove\">"
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
                    "content": "pointermove"
                },
                " event"
            ]
        },
        {
            "block": "paragraph",
            "content": "Generated when the pointer's coordinates change."
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"events-pointerup\">"
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
                    "content": "pointerup"
                },
                " event"
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Generated when exiting the ",
                {
                    "block": "emphasis",
                    "content": "active button"
                },
                " state:"
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
                        "content": "For a mouse, this is the transition from having one or more buttons pressed to the state of no buttons pressed."
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": "For pen and touch devices, this is when physical contact is removed from the device screen."
                    }
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"events-pointerout\">"
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
                    "content": "pointerout"
                },
                " event"
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Generated when the pointer leaves the element's ",
                {
                    "block": "emphasis",
                    "content": "active area"
                },
                ":"
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
                        "content": "When the pointer leaves the area over the element or one of its descendants."
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": [
                            "After ",
                            {
                                "block": "inline-code",
                                "content": "pointerup"
                            },
                            " and ",
                            {
                                "block": "inline-code",
                                "content": "pointercancel"
                            },
                            " events for devices that don't support ",
                            {
                                "block": "inline-code",
                                "content": "hover"
                            },
                            ". For example, when the stylus or finger leaves the device's working area."
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
                    "content": "<a name=\"events-pointerleave\">"
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
                    "content": "pointerleave"
                },
                " event"
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Generated when the pointer leaves the element's ",
                {
                    "block": "emphasis",
                    "content": "active area"
                },
                ":"
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
                        "content": "When the pointer leaves the area over the element or one of its descendants."
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": [
                            "After ",
                            {
                                "block": "inline-code",
                                "content": "pointerup"
                            },
                            " and ",
                            {
                                "block": "inline-code",
                                "content": "pointercancel"
                            },
                            " events for devices that don't support ",
                            {
                                "block": "inline-code",
                                "content": "hover"
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
                "This event is the same as ",
                {
                    "block": "inline-code",
                    "content": "pointerout"
                },
                ", but it doesn't bubble."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"events-pointercancel\">"
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
                    "content": "pointercancel"
                },
                " event"
            ]
        },
        {
            "block": "paragraph",
            "content": "Generated when:"
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
                        "content": "Further pointer events are not expected to occur (for example, after changing hardware settings)."
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": [
                            "The ",
                            {
                                "block": "inline-code",
                                "content": "pointerdown"
                            },
                            " event has been generated, if the pointer was used for zooming the page."
                        ]
                    }
                }
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "For example, this event is generated when changing the device orientation while it is in the ",
                {
                    "block": "emphasis",
                    "content": "active buttons"
                },
                " state. Or after reaching the maximum number of simultaneous clicks on the device."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "After generating the ",
                {
                    "block": "inline-code",
                    "content": "pointercancel"
                },
                " event, the ",
                {
                    "block": "inline-code",
                    "content": "pointerout"
                },
                " and ",
                {
                    "block": "inline-code",
                    "content": "pointerleave"
                },
                " events are generated in succession."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"modifiers-type-pointerpressrealease\">"
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
                " modifier with the ",
                {
                    "block": "inline-code",
                    "content": "pointerpressrelease"
                },
                " value"
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Enables a polyfill that implements the ",
                {
                    "block": "inline-code",
                    "content": "pointerpress"
                },
                " and ",
                {
                    "block": "inline-code",
                    "content": "pointerrelease"
                },
                " events. The polyfill uses Pointer Events."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"events-pointerpress\">"
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
                    "content": "pointerpress"
                },
                " event"
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Generated on the ",
                {
                    "block": "inline-code",
                    "content": "pointerdown"
                },
                " event."
            ]
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "html",
                    "content": "<a name=\"events-pointerrelease\">"
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
                    "content": "pointerrelease"
                },
                " event"
            ]
        },
        {
            "block": "paragraph",
            "content": [
                "Generated on the ",
                {
                    "block": "inline-code",
                    "content": "pointerup"
                },
                " and ",
                {
                    "block": "inline-code",
                    "content": "pointercancel"
                },
                " events."
            ]
        }
    ]
}