import test from 'ava';
import thinkHashids from '../index';

test('hashids', t => {
  const hashids = thinkHashids;
  t.is(typeof hashids, 'function');
});

test('encode', t => {
  const hashids = thinkHashids().think.hashids;
  const id = hashids.encode(1);
  t.is(id, 'jR');
});

test('decode', t => {
  const hashids = thinkHashids().think.hashids;
  const [numbers] = hashids.decode('jR');
  t.is(numbers, 1);
});

test('encode BigInt', t => {
  const hashids = thinkHashids().think.hashids;
  const id = hashids.encode(9007199254740993n);
  t.is(id, 'n6WOO7OkrgY');
});

test('decode BigInt', t => {
  const hashids = thinkHashids().think.hashids;
  const [numbers] = hashids.decode('n6WOO7OkrgY');
  t.is(numbers, 9007199254740993n);
});

test('encodeHex', t => {
  const hashids = thinkHashids().think.hashids;
  const id = hashids.encodeHex('507f1f77bcf86cd799439011');
  t.is(id, 'y42LW46J9luq3Xq9XMly');
});

test('decodeHex', t => {
  const hashids = thinkHashids().think.hashids;
  const id = hashids.decodeHex('y42LW46J9luq3Xq9XMly');
  t.is(id, '507f1f77bcf86cd799439011');
});

test('encode salt', t => {
  const option = {
    salt: 'this is salt'
  };
  const hashids = thinkHashids(option).think.hashids;
  const id = hashids.encode(1);
  t.is(id, 'Vn');
});

test('decode salt', t => {
  const option = {
    salt: 'this is salt'
  };
  const hashids = thinkHashids(option).think.hashids;
  const [numbers] = hashids.decode('Vn');
  t.is(numbers, 1);
});

test('encode minLength', t => {
  const option = {
    minLength: 10
  };
  const hashids = thinkHashids(option).think.hashids;
  const id = hashids.encode(1);
  t.is(id, 'VolejRejNm');
});

test('decode minLength', t => {
  const option = {
    minLength: 10
  };
  const hashids = thinkHashids(option).think.hashids;
  const [numbers] = hashids.decode('VolejRejNm');
  t.is(numbers, 1);
});

test('encode alphabet', t => {
  const option = {
    alphabet: 'abcdefghijklmnopqrstuvwxyz'
  };
  const hashids = thinkHashids(option).think.hashids;
  const id = hashids.encode(1);
  t.is(id, 'ej');
});

test('decode alphabet', t => {
  const option = {
    alphabet: 'abcdefghijklmnopqrstuvwxyz'
  };
  const hashids = thinkHashids(option).think.hashids;
  const [numbers] = hashids.decode('ej');
  t.is(numbers, 1);
});

test('context', t => {
  const hashids = thinkHashids().context.hashids;
  const id = hashids.encode(1);
  t.is(id, 'jR');
});

test('controller', t => {
  const hashids = thinkHashids().controller.hashids;
  const id = hashids.encode(1);
  t.is(id, 'jR');
});
