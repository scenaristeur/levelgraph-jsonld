// https://github.com/Level/level/blob/master/test.js
'use strict'

const test = require('tape')
const { v4: uuid } = require('uuid')
const { Level } = require('level')

// Because we directly export classic-level or browser-level
// without wrapping them, there's no need for further tests here.
test('smoke test', async function (t) {
  const db = new Level('db/' + uuid())
  await db.put('abc', '123')
  t.is(await db.get('abc'), '123')
  return db.close()
})