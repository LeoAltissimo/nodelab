'use strict';

let a = [1, 2, 3];
let b = Buffer.from(a);

console.log(b);

let a2 = new Uint8Array([1, 2, 3]);
let b2 = Buffer.from(a2);

console.log(b2);

let b3 = Buffer.alloc(10);

console.log(b3);

let b4 = Buffer.allocUnsafe(10);

console.log(b4);

let buf = Buffer.from('This is my pretty example');
let json = JSON.stringify(buf);

let buf2 = Buffer.from(JSON.parse(json).data);

console.log(buf);
console.log(JSON.parse(json).data);
console.log(buf2.toString());

let StringDecoder = require('string_decoder').StringDecoder;
let decoder = new StringDecoder('utf8');

let euro = new Buffer.from([0xE2, 0x82]);
let euro2 = new Buffer.from([0xAC]);

console.log(decoder.write(euro));
console.log(decoder.write(euro2));
console.log(euro.toString());
console.log(euro2.toString());

let euro3 = Buffer.alloc(3);
euro3.write('€', 'utf-8');

console.log(decoder.write(euro3));
console.log(euro3.toString());