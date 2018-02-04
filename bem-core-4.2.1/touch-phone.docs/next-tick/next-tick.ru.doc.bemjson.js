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
            "content": "Блок предоставляет функцию, производящую асинхронный вызов callback-функции, переданной аргументом, в следующем витке событийного цикла."
        },
        {
            "block": "paragraph",
            "content": [
                {
                    "block": "inline-code",
                    "content": "next-tick"
                },
                " – полифил, реализующий:"
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
                        "content": "симуляцию событийного цикла для старых версий браузеров;"
                    }
                },
                {
                    "loose": false,
                    "checked": null,
                    "block": "list-item",
                    "content": {
                        "block": "paragraph",
                        "content": "унифицированный интерфейс для работы с различными браузерами и NodeJS."
                    }
                }
            ]
        },
        {
            "block": "paragraph",
            "content": "Функция подходит для случаев, когда нужно, чтобы callback был выполнен после того, как другие функции в рамках событийного цикла отработали. Например, чтобы убедиться что доступны данные, динамически вычислявшиеся в текущем цикле."
        },
        {
            "block": "paragraph",
            "content": {
                "block": "strong",
                "content": "Принимаемые аргументы:"
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
                        " – функция, которую нужно вызвать в следующем событийном цикле. Обязательный аргумент."
                    ]
                }
            }
        },
        {
            "block": "paragraph",
            "content": "Не имеет возвращаемого значения."
        },
        {
            "block": "paragraph",
            "content": "Пример:"
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
            "content": "Порядок вызова callback"
        },
        {
            "block": "paragraph",
            "content": "В рамках событийного цикла работы блок формирует очередь, добавляя каждую следующую callback функцию в ее конец. Порядок вызова callback сохраняется."
        },
        {
            "block": "paragraph",
            "content": "Пример:"
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
            "content": "Публичные технологии блока"
        },
        {
            "block": "paragraph",
            "content": "Блок реализован в технологиях:"
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