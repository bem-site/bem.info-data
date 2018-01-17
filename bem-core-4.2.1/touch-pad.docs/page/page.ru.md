# page

Блок предоставляет шаблоны, создающие набор HTML-элементов верхнего уровня страницы: `<html>`, `<head>`, `<body>`.

## Обзор

### Специальные поля блока

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <a href="#declfields-doctype">doctype</a> | `String` | Позволяет переопределить строку DTD текущего документа. |
| <a href="#declfields-title">title</a> | `String` | Позволяет указать содержимое `<title>`. |
| <a href="#declfields-favicon">favicon</a> | `String` | Позволяет указать URL значка страницы (фавиконки). |
| <a href="#declfields-head">head</a> | `BEMJSON` | Позволяет дополнить содержимое `<head>`. |
| <a href="#declfields-styles">styles</a> | `BEMJSON` | Позволяет подключать таблицы стилей CSS. |
| <a href="#declfields-scripts">scripts</a> | `BEMJSON` | Позволяет подключать скрипты в тело документа. |
| <a href="#declfields-content">content</a> | `BEMJSON` | Позволяет указать содержимое страницы. |

### Элементы блока

| Элемент | Способы использования | Описание |
| ------- | --------------------- | -------- |
| <a href="#elems-css">css</a> | `BEMJSON` | Служит для подключения CSS по ссылке или в виде строки. |
| <a href="#elems-js">js</a> | `BEMJSON` | Служит для подключения JS по ссылке или в виде строки. |
| <a href="#elems-meta">meta</a> | `BEMJSON` | Служит для создания HTML-элементов `<meta>`. |

### Специальные поля элементов блока

| Элемент | Поле | Тип | Описание |
| ------- | ---- | --- | -------- |
| <a href="#elems-css">css</a> | <a href="#elems-css-declfields-url">url</a> | `String`  | Позволяет задать URL для загрузки стилей. |
|  | <a href="#elems-css-declfields-content">content</a> | `String`  | Служит для задания стилей в виде строки |
| <a href="#elems-js">js</a> | <a href="#elems-css-declfields-url">url</a> | `String`  | Позволяет задать URL для загрузки скрипта. |
|  | <a href="#elems-css-declfields-content">content</a> | `String`  | Служит для задания скриптов в виде строки |

### Публичные технологии блока

Блок реализован в технологиях:

* `bh.js`
* `bemhtml`

## Описание

Блок отвечает за создание HTML-элементов верхнего уровня, подключение к странице CSS, JS, элементов `<meta>` и указание заголовка. Для этого в BEMJSON-декларации блока и элементов блока зарезервированы специальные поля.

<a name="declfields"></a>

### Специальные поля блока

<a name="declfields-doctype"></a>

#### Поле  `doctype`

Тип: `String`.

Позволяет явно указать строку с DTD (Document Type Definition) текущего документа. Если свойство не задано, по умолчанию будет использоваться `<!DOCTYPE html>`.

<a name="declfields-title"></a>

#### Поле `title`

Тип: `String`.

Название страницы. Становится HTML-элементом `<title>`.

```js
{
    block : 'page',
    title : 'Заголовок страницы',
    content : 'Блок page'
}
```

<a name="declfields-favicon"></a>

#### Поле `favicon`

Тип: `String`.

Позволяет указать URL значка страницы (фавиконки):

```js
{
    block : 'page',
    title : 'Заголовок страницы',
    favicon : 'favicon.ico',
    content : 'Страница с пользовательской фавиконкой'
}
```

<a name="declfields-head"></a>

#### Поле `head`

Тип: `BEMJSON`.

Позволяет дополнить содержимое `HTML`-элемента `<head>`, определенное в шаблоне блока:

```js
{
    block : 'page',
    title : 'Заголовок страницы',
    head : [
        { elem : 'js', url : 'jquery-min.js' },
        { elem : 'meta', attrs : { name : 'description', content : 'Yet another webdev blog' } }
    ],
    content : 'Страница с подключенным JS и meta-данными'
}
```

<a name="declfields-styles"></a>

#### Поле `styles`

Тип: `BEMJSON`.

Позволяет подключить `CSS`:

```js
{
    block : 'page',
    title : 'Заголовок страницы',
    styles : { elem : 'css', url : '_index.css' },
    content : 'Страница с подключенным CSS'
}
```

<a name="declfields-scripts"></a>

#### Поле `scripts`

Тип: `BEMJSON`.

Позволяет подключать JS в тело страницы в конец HTML-элемента `<body>`:

```js
{
    block : 'page',
    title : 'Заголовок страницы',
    scripts : { elem : 'js', url : '_index.js' },
    content : 'Страница со скриптом подключенным в body'
}
```

<a name="declfields-content"></a>

#### Поле `content`

Тип: `BEMJSON`.

Позволяет указать содержимое страницы.

```js
{
    block : 'page',
    title : 'Заголовок страницы',
    content : {
        block : 'link',
        mods : { pseudo : 'yes', togcolor : 'yes', color : 'green' },
        url : '#',
        target : '_blank',
        title : 'Кликни меня',
        content : 'Псевдоссылка, меняющая цвет по клику'
    }
}
```

<a name="elems"></a>

### Элементы блока

<a name="elems-css"></a>

#### Элемент `css`

Служит для подключения CSS по ссылке или в виде строки. В зависимости от того, указано ли в декларации элемента поле `url`, создается HTML-элемент с тегом:

* `<link>` и свойством `stylesheet`, если `url` есть.
* `<style>`, если поле `url` неуказано. В этом случае предполагается, что содержимое элемента передается с помощью свойства `content` BEMJSON-декларации элемента.

<a name="elems-css-declfields-content"></a>

##### Специализированное поле `content`

Тип: `String`.

Служит для явной передачи содержимого HTML-элементу `<style>`:

```js
{
    block : 'page',
    title : 'Page title',
    styles : {
        elem : 'css',
        content : '.page { color : #f00 }'
    },
    content : 'Страница с тэгом <style>'
 }
```

<a name="elems-css-declfields-url"></a>

##### Специализированное поле `url`

Тип: `String`.

Позволяет задать URL для загрузки таблицы CSS. Значение поля `url` BEMJSON-декларации передается свойству `href` создаваемого HTML-элемента.

<a name="elems-js"></a>

#### Элемент `js`

Служит для подключения JS по ссылке или в виде строки. Создает HTML-элемент `<script>`.

<a name="elems-js-declfields-content"></a>

##### Специализированное поле `content`

Тип: `String`.

Служит для явной передачи содержимого HTML-элементу `<script>`:

```js
{
    block : 'page',
    title : 'Page title',
    scripts : {
        elem : 'js',
        content : 'console.log(document.title)'
    },
    content : 'Страница с тэгом <script>'
}
```

<a name="elems-js-declfields-url"></a>

##### Специализированное поле `url`

Тип: `String`.

Позволяет задать URL для загрузки скрипта. Значение поля `url` BEMJSON-декларации передается свойству `src` создаваемого HTML-элемента.

```js
{
    block : 'page',
    title : 'Page title',
    styles : { elem : 'css', url : '_index.css' },
    content : 'Страница с тэгом style'
}
```

<a name="elems-meta"></a>

#### Элемент `meta`

Служит для создания HTML-элементов `<meta>` и указания для них пользовательских метаданных. Метаданные передаются как ключи и значения хеша атрибутов – свойства `attrs` BEMJSON-декларации элемента:

```js
{
    block : 'page',
    title : 'Заголовок страницы',
    head : [
        { elem : 'css', url : 'example.css' },
        { elem : 'meta', attrs : { name : 'keywords', content : 'js, css, html' } }
    ],
    content : 'Страница с подключенным CSS и meta-данными'
}
```

Подробнее смотрите в документации к `<meta>` [на MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta).

﻿# page

На уровне переопределения `touch.blocks` блок предоставляет шаблоны, создающие дополнительный набор HTML-элементов внутри `head`.

## Обзор

### Специализированные поля блока

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <a href="#elems-meta-declfields-zoom">zoom</a> | `{Boolean}` | Наличие масштабирования. |

### Элементы блока

| Элемент | Способы использования | Описание |
| ------- | --------------------- | -------- |
| <a href="#elems-icon">icon</a> | `BEMJSON` | Позволяет задать ссылку на значки Web Clips, для отображения на рабочем столе iOS при добавлении ссылки на сайт. |

### Специализированные поля элементов блока

| Элемент | Поле | Тип | Описание |
| ------- | ---- | --- | -------- |
| <a href="#elems-icon">icon</a> | <a href="#elems-icon-declfields-src">src{X}</a> | `{String}` | Используются для указания пути к файлу значка. |

### Публичные технологии блока

Блок реализован в технологиях:

* `bh.js`
* `bemhtml`

## Подробности

Блок создает HTML-элементы:

* `<meta>` с атрибутом `name` в значении `'format-detection'`. Значением `content` служит `'telephone=no'`. Элемент отключает автоматическое распознавание телефонных номеров в html-коде и их набор по нажатию.
* `<link>` с атрибутом `name` в значении `'apple-mobile-web-app-capable'`. Значением `content` служит `'yes'`. Элемент задает для страницы полноэкранный режим отображения на устройствах с iOS.
* `<meta>` с атрибутом `name` в значении `'viewport'`. Элемент позволяет управлять масштабированием страницы. По умолчанию, масштабирование отключено. Для включения используйте специализированное поле `zoom` со значением `true`.

Кроме того, к элементу <body> с классом `page` подмешивается блок [ua](https://github.com/bem/bem-core/blob/v2/desktop.blocks/ua/ua.ru.md).

<a name="declfields"></a>
### Специализированные поля блока

<a name="declfields-zoom"></a>
##### Специализированное поле `zoom`

Тип: `{Boolean}`.

Управляет масштабированием страницы. Определяет значение атрибута `content` HTML-элемент `<meta>` с атрибутом `name` в значении `'viewport'`:

* со значением `true` – `'initial-scale=1'`. Масштабирование включено. Масштаб по умолчанию устанавливается равным 100%.
* без значения или `false` – `'maximum-scale=1,initial-scale=1,user-scalable=no'`. Масштаб по умолчанию устанавливается равным 100%. Масштабирование отключено.

```js
{
    block : 'page',
    title : 'Hello, World!',
    zoom : true,
    content : 'Включение масштабирования страницы'
}
```


<a name="elems"></a>
### Элементы блока

<a name="elems-icon"></a>
#### Элемент `icon` 

Позволяет задать ссылку на значки Web Clips, для отображения на рабочем столе iOS при добавлении ссылки на сайт. Ссылка задается через специализированное поле `src{X}`.

<a name="elems-icon-declfields-src"></a>
##### Специализированное поле `src{X}`

Тип: `String`.

Поле вида `src{X}` используются для указания пути к файлу значка. В зависимости от значения `{X}` элемент `icon` преобразуется в HTML-элемент:

* `src16` – `<link>` c атрибутом `rel` со значением `'shortcut icon'`. 
* `src57` – `<link>` c атрибутами: 
    * `sizes` со значением `'57x57'`;
    * `rel` со значением `'apple-touch-icon-precomposed'`. 
* `src72` – `<link>` c атрибутами: 
    * `sizes` со значением `'72x72'`;
    * `rel` со значением `'apple-touch-icon-precomposed'`. 
* `src114` – `<link>` c атрибутом `rel` со значением `'apple-touch-icon-precomposed'`. 

```js
{
    block : 'page',
    title : 'Page title',
    head : { elem : 'icon', src72 : 'example.png' },
    content : 'Страница с подключенным значком'
}
```
