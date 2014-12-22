# strfmt.js [![npm Version](http://img.shields.io/npm/v/strfmt.svg?style=flat)](https://www.npmjs.org/package/strfmt) [![Build Status](https://img.shields.io/travis/yuanqing/strfmt.svg?style=flat)](https://travis-ci.org/yuanqing/strfmt) [![Coverage Status](https://img.shields.io/coveralls/yuanqing/strfmt.svg?style=flat)](https://coveralls.io/r/yuanqing/strfmt)

> Named string interpolation, with format specifiers.

## Usage

```js
var tmpl = '{ date.day : %02d }-{ date.month : %02d }-{ date.year }';
var data = {
  date: {
    day: 25,
    month: 1,
    year: 2015
  }
};

strfmt(tmpl)(data); //=> '25-01-2015'
```

1. Keys in `tmpl` are delimited by `{` and `}`.
2. Reference a nested value in `data` using a dot-delimited string (eg. `date.day` above).
2. Optionally state a format specifier for each key after a `:` character. The `%s` format specifier is assumed for keys without one.

More usage examples are in [the tests](https://github.com/yuanqing/strfmt/blob/master/test/strfmt.spec.js).

Note that under the hood, strfmt uses:
- [sprintf.js](https://github.com/alexei/sprintf.js) for rendering the format specifiers
- [Jaunt](https://github.com/yuanqing/jaunt) for key access

## API

### strfmt(tmpl)(data)

Returns a String, the result of interpolating `data` into `tmpl`.

- `tmpl` &mdash; The template String.
- `data` &mdash; An Object literal of values.

## Installation

Install via [npm](https://www.npmjs.org/):

```bash
$ npm i --save strfmt
```

Install via [bower](http://bower.io/):

```bash
$ bower i --save yuanqing/strfmt
```

To use strfmt in the browser, include [the minified script](https://github.com/yuanqing/strfmt/blob/master/dist/strfmt.min.js) in your HTML:

```html
<body>
  <!-- ... -->
  <script src="path/to/dist/strfmt.min.js"></script>
  <script>
    // strfmt available here
  </script>
</body>
```

## Changelog

- 0.1.0
  - Initial release

## License

[MIT license](https://github.com/yuanqing/strfmt/blob/master/LICENSE)
