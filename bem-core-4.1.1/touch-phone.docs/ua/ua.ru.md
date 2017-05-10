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

## Подробности

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
({ shouldDeps: { block : 'ua', elem : 'svg' } })
``` 

# ua

На уровне `touch`, блок предоставляет объект, содержащий набор свойств, указывающих особенности мобильного устройства.

## Обзор

### Свойства и методы объекта

| Имя | Тип | Описание |
| --- | --- | -------- |
| <a href="#fields-ua">ua</a> | <code>{String}</code> | Значение HTTP-заголовка юзер-агента. |
| <a href="#fields-ios">ios</a> | <code>{String}</code>&#124;<code>{undefined}</code> | Версия мобильной платформы iOS. |
| <a href="#fields-android">android</a> | <code>{String}</code>&#124;<code>{undefined}</code> | Версия мобильной платформы Android. |
| <a href="#fields-bada">bada</a> | <code>{String}</code>&#124;<code>{undefined}</code> | Версия мобильной платформы Bada OS. |
| <a href="#fields-wp">wp</a> | <code>{String}</code>&#124;<code>{undefined}</code> | Версия мобильной платформы Windows Phone. |
| <a href="#fields-other">other</a> | <code>{Boolean}</code> | Мобильная платформа неопределена. |
| <a href="#fields-opera">opera</a> | <code>{String}</code> | Версия браузера Opera. |
| <a href="#fields-chrome">chrome</a> | <code>{String}</code> | Версия браузера Chrome. |
| <a href="#fields-iphone">iphone</a> | <code>{Boolean}</code> | Устройство – iPhone. |
| <a href="#fields-ipad">ipad</a> | <code>{Boolean}</code> | Устройство – iPad. |
| <a href="#fields-screenSize">screenSize</a> | <code>{String}</code> | Размер экрана устройства. |
| <a href="#fields-connection">connection</a> | <code>{String}</code> | Тип активного соединения. |
| <a href="#fields-dpr">dpr</a> | <code>{Number}</code> | Относительная плотность пикселей. |
| <a href="#fields-flash">flash</a> | <code>{String}</code>&#124;<code>{undefined}</code> | Версия Adobe Flash. |
| <a href="#fields-video">video</a> | <code>{Boolean}</code> | Поддержка видео. |
| <a href="#fields-width">width</a> | <code>{Number}</code> | Ширина рабочей области экрана в px. |
| <a href="#fields-height">height</a> | <code>{Number}</code> | Высота рабочей области экрана в px. |
| <a href="#fields-landscape">landscape</a> | <code>{Boolean}</code> | Ориентация устройства. |

### Элементы блока

| Элемент | Способы использования | Описание |
| ------- | --------------------- | -------- |
| <a href="#elems-dom">dom</a> | `JS` | Предоставляет набор модификаторов на основании свойств блока `ua` на тач-уровне. |

### Модификаторы элемента блока

| Элемент | Модификатор | Допустимые значения | Способы использования | Описание |
| ------- | ----------- | ------------------- | --------------------- | -------- |
| <a href="#elems-dom">dom</a> | <a href="#modifiers-platform">platform</a> | `'ios'`, `'android'`, `'bada'`, `'wp'`, `'other'` | `JS` | Мобильная платформа пользовательского устройства. |
|  | <a href="#modifiers-browser">browser</a> | `'opera'`, `'chrome'` | `JS` | Тип браузера. |
|  | <a href="#modifiers-ios">ios</a> | `'8'`, `'7'` ... | `JS` | Версия операционной системы для устройств iOS. |
|  | <a href="#modifiers-ios-subversion">ios-subversion</a> | `'81'`, `'80'` ... | `JS` | Подверсия операционной системы для устройств iOS. |
|  | <a href="#modifiers-android">android</a> | `'4'`, `'3'` ... | `JS` | Версия операционной системы для устройств Android. |
|  | <a href="#modifiers-screen-size">screen-size</a> | `'large'`, `'normal'`, `'small'` | `JS` | Размер экрана устройства. |
|  | <a href="#modifiers-svg">svg</a> | `'yes'`, `'no'` | `JS` | Поддержка формата SVG. |
|  | <a href="#modifiers-orient">orient</a> | `'landscape'`, `'portrait'` | `JS` | Ориентация устройства. |

### Публичные технологии блока

Блок реализован в технологиях:

* `js`
* `bh.js`
* `bemhtml`

## Подробности

Блок позволяет определить:

* Версию мобильной платформы.
* Типа браузера.
* Версию браузера.
* Тип соединения.
* Наличие поддержки видео и SVG.
* Поддержку технологии Adobe Flash.
* Ориентацию и размер экрана.
* Соотношение сторон экрана устройства.

```js
modules.require('ua', function(ua) {

console.dir(ua);

});
```


<a name="fields"></a>
### Свойства и методы объекта

<a name="fields-ua"></a>
#### Свойство `ua`

Тип: `{String}`.

Тип мобильного браузера.

<a name="fields-ios"></a>
#### Свойство `ios`

Тип: `{String|undefined}`.

Версия мобильной платформы. Строка с номером версии, если платформа распознана как iOS.

<a name="fields-android"></a>
#### Свойство `android`

Тип: `{String|undefined}`.

Версия мобильной платформы. Строка с номером версии, если платформа распознана как Android.

<a name="fields-bada"></a>
#### Свойство `bada`

Тип: `{String|undefined}`.

Версия мобильной платформы. Строка с номером версии, если платформа распознана как Bada OS.

<a name="fields-wp"></a>
#### Свойство `wp`

Тип: `{String|undefined}`.

Версия мобильной платформы. Строка с номером версии, если платформа распознана как Windows Phone.

<a name="fields-other"></a>
#### Свойство `other`

Тип: `{Boolean}`.

Мобильная платформа неопределена. Устанавливается в значение `true` для всех мобильных платформ, кроме вышеперечисленных.


<a name="fields-opera"></a>
#### Свойство `opera`

Тип: `{String}`.

Версия браузера Opera.

<a name="fields-chrome"></a>
#### Свойство `chrome`

Тип: `{String}`.

Версия браузера Chrome.

<a name="fields-iphone"></a>
#### Свойство `iphone`

Тип: `{Boolean}`.

Значение `true` характеризует устройство как iPhone.

<a name="fields-ipad"></a>
#### Свойство `ipad`

Тип: `{Boolean}`.

Значение `true` характеризует устройство как iPad.

<a name="fields-screenSize"></a>
#### Свойство `screenSize`

Тип: `{String}`.

Размер экрана устройства.

Доступны следующие значения:

* `large` – размер экрана больше 320 px.
* `normal` – размер экрана равен 320 px.
* `small` – размер экрана меньше 320 px.

<a name="fields-connection"></a>
#### Свойство `connection`

Тип: `{String}`.

Тип активного сетевого соединения.

Доступны следующие значения:

* `wifi` – соединение по Wi-Fi.
* `3g` – соединение по 3G.
* `2g` – соединение по EDGE и GSM.

<a name="fields-dpr"></a>
#### Свойство `dpr`

Тип: `{Number}`.

Коэффициент относительной плотности пикселей. Характеризует отношение физических пикселей устройства к аппаратно независимым (dppx). Позволяет определить использует ли устройство дисплей с повышенной плотностью пикселей (например, Retina). По умолчанию `1`.

Например, можно проверить, что устройство использует Retina и отдавать браузеру изображения с высоким разрешением:

```js
modules.require('ua', function(ua) {

var imgFile = ua.dpr === 1 ? 'image.png' : 'image@2x.png';
// ···

});
```

<a name="fields-flash"></a>
#### Свойство `flash`

Тип: `{String|undefined}`.

Версия Adobe Flash. `undefined`, если Flash недоступен.

<a name="fields-video"></a>
#### Свойство `video`

Тип: `{Boolean}`.

Значение `true`, если видео поддерживается.

<a name="fields-svg"></a>
#### Свойство `svg`

Тип: `{Boolean}`.

Значение `true`, если SVG поддерживается.

<a name="fields-width"></a>
#### Свойство `width`

Тип: `{Number}`.

Ширина рабочей области экрана в пикселях.

<a name="fields-height"></a>
#### Свойство `height`

Тип: `{Number}`.

Высота рабочей области экрана в пикселях.


<a name="fields-landscape"></a>
#### Свойство `landscape`

Тип: `{Boolean}`.

Значение `true` при горизонтальной ориентации.

<a name="#elems-dom">
# Элемент `dom` блока `ua`

Элемент служит для дополнения базовой БЭМ-сущности блока `ua` набором модификаторов на основе данных, собранных блоком `ua` на touch-уровне.

Это позволяет учитывать особенности мобильного устройства, проверяя наличие и значение модификаторов.

```js
modules.define('ios-test', ['i-bem-dom', 'ua'], function(provide, bemDom, Ua) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                this.findParentBlock(Ua).hasMod('platform', 'ios') &&
                    this.setMod('ios');
            }
        },
        'ios': function() {
            console.log('You are iOS user');
        }
    }
}));

});
```

Элемент автоматически подключается с блоком `page`. Не требуется подключать его вручную, если в проекте используется `page`.

<a name="modifiers"></a>
## Модификаторы элемента

Значения всех модификаторов элемента, кроме `orient`, устанавливаются в момент инициализации блока и остаются неизменными.

<a name="modifiers-platform"></a>
### Модификатор `platform`

Допустимые значения: `'ios'`, `'android'`, `'bada'`, `'wp'`, `'other'`.

Способ использования: `JS`.

Модификатор указывает мобильную платформу пользовательского устройства.

* `ios` – iOS.
* `android` – Android.
* `bada` – Bada OS.
* `wp` – Windows Phone.
* `other` – все остальные мобильные платформы.

<a name="modifiers-browser"></a>
### Модификатор `browser`

Допустимые значения: `'opera'`, `'chrome'`.

Способ использования: `JS`.

Модификатор указывает тип мобильного браузера.

* `opera` – Opera.
* `chrome` – Chrome.

<a name="modifiers-ios"></a>
### Модификатор `ios`

Допустимые значения: `'8'`, `'7'` ...

Способ использования: `JS`.

Модификатор указывает версию операционной системы для устройств iOS.

<a name="modifiers-ios-subversion"></a>
### Модификатор `ios-subversion`

Допустимые значения: `'81'`, `'80'` ...

Способ использования: `JS`.

Модификатор указывает подверсию операционной системы для устройств iOS. Номер подверсии состоит из номера версии и первого символа после разделителя. Номер указывается без символов-разделителей `'.'`. Например, для iOS версии 8.1.3 значением модификатора будет `'81'`.

<a name="modifiers-android"></a>
### Модификатор `android`

Допустимые значения: `'4'`, `'3'` ...

Способ использования: `JS`.

Модификатор указывает версию операционной системы для устройств Android.

<a name="modifiers-screen-size"></a>
### Модификатор `screen-size`

Допустимые значения: `'large'`, `'normal'`, `'small'`.

Способ использования: `JS`.

Модификатор указывает размер экрана пользовательского устройства.

* `large` – размер экрана больше 320 px.
* `normal` – размер экрана равен 320 px.
* `small` – размер экрана меньше 320 px.

<a name="modifiers-svg"></a>
### Модификатор `svg`

Допустимые значения: `'yes'`, `'no'`.

Способ использования: `JS`.

Модификатор указывает на наличие у пользовательского устройства поддержки формата SVG.

* `yes` – поддержка SVG присутствует.
* `no` – поддержка SVG отсутствует.

<a name="modifiers-orient"></a>
### Модификатор `orient`

Допустимые значения: `'landscape'`, `'portrait'`.

Способ использования: `JS`.

Модификатор указывает текущую ориентацию устройства.

* `landscape` – горизонтальная ориентация.
* `portrait` – вертикальная ориентация.

Значение модификатора изменяется динамически при смене ориентации устройства. Поэтому можно подписываться на изменение значения модификатора:

```js
modules.define('inner', ['i-bem-dom', 'ua'], function(provide, bemDom, Ua) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                this._ua = this.findParentBlock(Ua);

                this
                    ._events(this.ua)
                    .on({ modName : 'orient', modVal : '*' }, this._onOrientChange, this);

                this.setMod('orient', this._ua.getMod('orient'));
            }
        },

        'orient': {
            'portrait': function() {
                this._reDraw('portrait');
            },
            'landscape': function() {
                this._reDraw('landscape');
            }
        }
    },

    _onOrientChange: function(e, data) {
        // переключаемся между значениям собственного модификатора `orient`
        this.setMod(data.modName, data.modVal);
    },

    _reDraw: function(orient) {
        // обновляем содержимое контейнера `inner` при смене ориентации устройства
        console.log(orient);
        bemDom.update(this.domElem, orient);
    }
}));

});
```

В примере блок-контейнер `inner`, вложенный в `page`, подменяет свое содержимое при смене ориентации устройства.
