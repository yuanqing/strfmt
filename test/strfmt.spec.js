/* globals describe, it, expect */
'use strict';

var strfmt = require('..');

describe('strfmt(tmpl)(data)', function() {

  it('works without `data`', function() {
    expect(strfmt('foo')()).toBe('foo');
    expect(strfmt('foo')({})).toBe('foo');
  });

  it('interpolates non-nested values from `data` into `tmpl`', function() {
    var obj = { foo: 'bar' };
    expect(strfmt('{foo}')(obj)).toBe('bar');
    expect(strfmt('{ foo }')(obj)).toBe('bar');
    expect(strfmt('{foo:%s}')(obj)).toBe('bar');
    expect(strfmt('{ foo : %s }')(obj)).toBe('bar');
  });

  it('interpolates nested values from `data` into `tmpl`', function() {
    var obj = [{ foo: 42 }, { bar: 3.14159 }];
    expect(strfmt('{0.foo}')(obj)).toBe('42');
    expect(strfmt('{ 0 . foo }')(obj)).toBe('42');
    expect(strfmt('{1.bar:%.2f}')(obj)).toBe('3.14');
    expect(strfmt('{ 1.bar : %.2f }')(obj)).toBe('3.14');
  });

  it('throws if a variable referenced in `tmpl` is not in `data`', function(done) {
    try {
      strfmt('{foo.bar}')({});
    } catch(err) {
      expect(err.message.indexOf('No key "foo.bar" in data') !== -1).toBe(true);
      done();
    }
  });

});
