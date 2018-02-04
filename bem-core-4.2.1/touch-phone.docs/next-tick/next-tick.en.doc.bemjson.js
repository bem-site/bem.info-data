{
    "block": "md-root",
    "content": [
        {
            "level": 1,
            "block": "heading",
            "mods": {
                "level": 1
            },
            "content": "next-tick"
        },
        {
            "block": "paragraph",
            "content": "This block provides a function that performs an asynchronous call of the callback function passed as an argument in the next tick of the event loop."
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "inline-code",
                    "content": "next-tick"
                },
                " – A polyfill that implements:"
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
                        "content": "A simulated event loop for outdated browser versions."
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": "A unified interface for working with various browsers and NodeJS."
                    }
                }
            ]
        },
        {
            "block": "paragraph",
            "content": "This function works in cases when you need the callback to be invoked after the other functions in the event loop have finished. For example, you need to be sure that data will be available that is dynamically calculated in the current loop."
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
                            "content": "fn {Function}"
                        },
                        " – The function to invoke in the next event loop. Required argument."
                    ]
                }
            }
        },
        {
            "block": "paragraph",
            "content": "No return value."
        },
        {
            "block": "paragraph",
            "content": "Example:"
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['next-tick', 'events'], function(nextTick, events) {\n\nvar event = new events.Event();\n\nnextTick(function() { event.emit('click') }); \n\n// ··· \n\nevent.on('click', function(e) { console.log(e.type) })\n});\n"
        },
        {
            "level": 2,
            "block": "heading",
            "mods": {
                "level": 2
            },
            "content": "Order of callbacks"
        },
        {
            "block": "paragraph",
            "content": "The block forms a queue within the event cycle, adding each subsequent callback function to the end of the queue. The callbacks are invoked in order."
        },
        {
            "block": "paragraph",
            "content": "Example:"
        },
        {
            "lang": "js",
            "block": "code",
            "content": "modules.require(['next-tick'], function(nextTick) {\n  \nvar order = [];\n\nnextTick(function() { order.push(1); });\nnextTick(function() { order.push(2); });\nnextTick(function() { order.push(3); });\nnextTick(function() { console.log(order); }); // should be [1, 2, 3]\n});\n"
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