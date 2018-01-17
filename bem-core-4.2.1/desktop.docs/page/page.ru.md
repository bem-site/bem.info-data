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

На уровне переопределения `desktop.blocks` блок предоставляет шаблон, создающий дополнительный HTML-элемент `<meta>`. 

## Обзор

### Специализированные поля блока

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <a href="#declfields-x-ua-compatible">x-ua-compatible</a> | `{String}`&#124;`{Boolean}` | Управляет поведением создаваемого блоком HTML-элемента `<meta>` с атрибутом `http-equiv` `X-UA-Compatible`. |

### Элементы блока

| Элемент | Способы использования | Описание |
| ------- | --------------------- | -------- |
| <a href="#elems-css">css</a> | `BEMJSON` | Элемент служит для подключения CSS. |
| <a href="#elems-conditional-comment">conditional-comment</a> | `BEMJSON` | Помогает использовать условные комментарии. |

### Специализированные поля элементов блока

| Элемент | Поле | Тип | Описание |
| ------- | ---- | --- | -------- |
| <a href="#elems-css">css</a> | <a href="#elems-css-declfields-ie">`ie`</a> | `{String}`&#124;`{Boolean}` | Используется для указания применимости стилей к Internet Explorer версий 6-9 и подключения специальных стилей для Internet Explorer.  |
| <a href="#elems-conditional-comment">conditional-comment</a> | <a href="#elems-conditional-comment-declfields-condition">`condition`</a> | `{String}` | Позволяет указать условие, при выполнении которого содержимое поля `content` декларации элемента, будет доступно.  |
|  | <a href="#elems-conditional-comment-declfields-msieOnly">`msieOnly`</a> | `{Boolean}` | Указывает, предназначен ли данный условный комментарий для использования исключительно в Internet Explorer.  |

### Публичные технологии блока

Блок реализован в технологиях:

* `bh.js`
* `bemhtml`

## Подробности

Создает HTML-элемент `<meta>` с атрибутом `http-equiv` `X-UA-Compatible`, определяющий совместимость с юзер-агентами. По умолчанию, значением атрибута `content` элемента является `IE=edge` (совместим с последними версиями Internet Explorer).

<a name="declfields"></a>
### Специализированные поля блока

<a name="declfields-x-ua-compatible"></a>
#### Поле `x-ua-compatible`

Тип: `{String}`|`{Boolean}`.

Управляет поведением создаваемого блоком HTML-элемента `<meta>` с атрибутом `http-equiv` `X-UA-Compatible`:

* со значением `false` HTML-элемент `<meta>` не будет создаваться.
* 
```js
{
    block : 'page',
    title : 'Hello, World!',
    'x-ua-compatible' : false,
    content : 'Отмена создания HTML-элемента <meta>'
}
```

* строчное значение будет присвоено свойству `content` HTML-элемента `<meta>`.

```js
{
    block : 'page',
    title : 'Hello, World!',
    'x-ua-compatible' : 'IE=6',
    content : 'Совместим с Internet Explorer 6'
}
```


<a name="elems"></a>
### Элементы блока

<a name="elems-css"></a>
#### Элемент `css` 

<a name="elems-css-declfields-ie"></a>
##### Специализированное поле `ie` 

Тип: `{String}`|`{Boolean}`.

Используется для указания применимости стилей к Internet Explorer версий 6-9 и подключения специальных стилей Internet Explorer. 

Допустимы следующие значения:

* строка вида `'lt IE 8'` – элемент `<link>` будет обернут в условные комментарии, для использования в соответствующих версиях Internet Explorer (для текущего примера `lt IE 8` – ниже восьмой версии).
* `false` – будут использоваться условные комментарии, предотвращающие использование стилей в IE 9 и ниже. 
* `true` – используется в случае, если в проекте есть отдельный CSS для каждой версии Internet Explorer. Значением свойства `url`, при этом, должна быть строка с путем и именем файла без суффикса. Во время подключения создаются элементы `<link>` с отдельным суффиксом для каждой версии. Другими словами, при значении `url` равном `foo.com/index` будут подключены стили `foo.com/index.ie6.css`, `foo.com/index.ie7.css` и т.д. до `...ie9.css`. При этом каждый HTML-элемент будет обернут в условный комментарий, обеспечивающий его подключение только в соответствующей версии Internet Explorer.

```js
{
    block : 'page',
    title : 'Page title',
    head : [
        { elem : 'css', url : 'example.css', ie : false },
        { elem : 'css', url : 'example.ie.css', ie : 'lt IE 8' }
    ],
    content : 'Страница с отдельными CSS правилами для IE'
}
```


<a name="elems-conditional-comment"></a>
#### Элемент `conditional-comment`

Позволяет обернуть содержимое поля `content`, определенное в BEMJSON-декларации элемента, в условные комментарии. Условие, при котором содержимое поля будет доступно, определяется специализированным полем `condition`.

```js
({
    block : 'page',
    title : 'page__conditional-comments',
    styles : 
        {
            elem : 'conditional-comment',
            condition : '<= IE 8',
            content : { elem : 'css', url : '_page.ie.css' }
        },
    scripts : 
        {
            elem : 'conditional-comment',
            condition : 'lte IE 8',
            content : { elem : 'js', url : 'https://yastatic.net/es5-shims/0.0.1/es5-shims.min.js' }
        }
})
```


<a name="elems-conditional-comment-declfields-condition"></a>
##### Специализированное поле `condition`

Тип: `{String}`.

Условие, при выполнении которого содержимое поля `content` декларации элемента, будет доступно. Например, определенная версия Internet Explorer.

Значение поля составляется из:

* квантора – `>`, `<`, `=`, `<=`, `>=`, `lt`, `gt`, `e` или `!` (логическое «не»);
* слова `IE` отделенного с обеих сторон пробелами;
* номера версии (6, 7, 8, 9). Может отсутствовать, если указан квантор `!`. Тогда, значение поля `content` будет доступно для всех браузеров, кроме Internet Explorer.

```js
({
    block : 'page',
    head :
        {
            elem : 'conditional-comment',
            condition : '! IE',
            content : 'Not for IE'
        }
})
```


<a name="elems-conditional-comment-declfields-msieOnly"></a>
##### Специализированное поле `msieOnly`

Тип: `{Boolean}`.

Указывает на то, предназначен ли данный условный комментарий для использования исключительно в Internet Explorer. Со значением `true` поле можно не указывать.

```js
({
    block : 'page',
    head :
        {
            elem : 'conditional-comment',
            condition : '> IE 8',
            msieOnly : false,
            content : 'For IE9+ and all other browsers'
        }
})
```

# Элемент `conditional-comments` блока `page`


```javascript
({
    block : 'page',
    title : 'page__conditional-comments',
    head : [
        {
            elem : 'conditional-comment',
            condition : '<= IE 8',
            content : { elem : 'css', url : '_page.ie.css' }
        },
        {
            elem : 'conditional-comment',
            condition : '! IE',
            content : 'Not for IE'
        },
        {
            elem : 'conditional-comment',
            condition : '> IE 8',
            msieOnly : false,
            content : 'For IE9+ and all other browsers'
        }
    ],
    scripts : [
        {
            elem : 'conditional-comment',
            condition : 'lte IE 8',
            content : { elem : 'js', url : 'https://yastatic.net/es5-shims/0.0.1/es5-shims.min.js' }
        }
    ]
})
```
