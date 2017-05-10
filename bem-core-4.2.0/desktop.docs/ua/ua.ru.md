# ua

Блок служит для сбора данных о браузере пользователя.

## Обзор

### Элементы блока

| Элемент | Способы использования | Описание |
| ------- | --------------------- | -------- |
| <a href="#elems-svg">svg</a> | `deps` | Проверяет, поддерживает ли браузер формат SVG. |

### Публичные технологии блока

Блок реализован в технологиях:

* `bh.js`
* `bemhtml`

## Описание

Блок подключает инлайновый скрипт, добавляющий тегу `<html>` `CSS`-классы, указывающие, включен ли JavaScript – `ua_js_no`/`ua_js_yes`.

Не имеет визуального представления на странице.

Используется внутри блока [page](https://github.com/bem/bem-core/blob/v2/common.blocks/page/page.ru.md) и самостоятельно подключать его к странице обычно не требуется.

<a name="elems"></a>

### Элементы блока

<a name="elems-svg"></a>

#### Элемент `svg`

Элемент подключает инлайновый скрипт, добавляющий тегу `<html>` `CSS`-классы, указывающие, поддерживается ли SVG – `ua_svg_no`/`ua_svg_yes`.

Не имеет визуального представления на странице.

Для использования включите элемент в файл зависимостей `deps.js` блока, которому требуются данные о поддержке SVG:

```js
({ shouldDeps : { block : 'ua', elem : 'svg' } })
```

# ua

На уровне `desktop`, блок предоставляет объект, содержащий набор свойств, указывающих особенности браузера.

## Обзор

### Свойства и методы объекта

| Имя | Тип | Описание |
| --- | -------------- | -------- |
| <a href="#fields-chrome">chrome</a> | `{Boolean}` | Тип браузера: Google Chrome. |
| <a href="#fields-opera">opera</a> | `{Boolean}` | Тип браузера: Opera. |
| <a href="#fields-msie">msie</a> | `{Boolean}` | Тип браузера: Microsoft Internet Explorer. |
| <a href="#fields-mozilla">mozilla</a> | `{Boolean}` | Тип браузера: Mozilla Firefox. |
| <a href="#fields-safari">safari</a> | `{Boolean}` | Тип браузера: Safari. |
| <a href="#fields-webkit">webkit</a> | `{Boolean}` | Браузер построен на движке WebKit. |
| <a href="#fields-version">version</a> | `{String}` | Версия браузера. |

### Публичные технологии блока

Блок реализован в технологиях:

* `js`

## Подробности

Блок позволяет определить:

* Тип браузера.
* Совместимость с WebKit.
* Версию браузера.

```js
modules.require('ua', function(ua) {

console.dir(ua);

});
```


<a name="fields"></a>
### Свойства и методы объекта

<a name="fields-chrome"></a>
#### Свойство `chrome`

Тип: `{Boolean}`.

Тип браузера. `true`, если Google Chrome.

<a name="fields-opera"></a>
#### Свойство `opera`

Тип: `{Boolean}`.

Тип браузера. `true`, если Opera.

<a name="fields-msie"></a>
#### Свойство `msie`

Тип: `{Boolean}`.

Тип браузера. `true`, если Microsoft Internet Explorer.

<a name="fields-mozilla"></a>
#### Свойство `mozilla`

Тип: `{Boolean}`.

Тип браузера. `true`, если Mozilla Firefox.

<a name="fields-safari"></a>
#### Свойство `safari`

Тип: `{Boolean}`.

Тип браузера. `true`, если Safari.

<a name="fields-webkit"></a>
#### Свойство `webkit`

Тип: `{Boolean}`.

`true`, если браузер построен на движке WebKit.

<a name="fields-version"></a>
#### Свойство `version`

Тип: `{String}`.

Значение – строка с версией браузера вида `'600.2.5'` (для Safari). Если определить версию браузера не удается, в качестве значения устанавливается `'0'`.
