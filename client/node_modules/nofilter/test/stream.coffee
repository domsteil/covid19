NoFilter = require '../'
expect = require('chai').expect

describe 'When streaming', ->
  it 'listens for pipe events', ->
    nf1 = new NoFilter
      objectMode: true
    nf2 = new NoFilter
      objectMode: false

    nf1.pipe nf2
    expect(nf2._readableState.objectMode).true

  it 'does not have to listen for pipe events', ->
    nf1 = new NoFilter
      objectMode: true
    nf2 = new NoFilter
      objectMode: false
      watchPipe: false

    nf1.pipe nf2
    expect(nf2._readableState.objectMode).false

  it 'does not allow piping after writing', ->
    nf1 = new NoFilter
      objectMode: true
    nf2 = new NoFilter
      objectMode: false
    nf2.write '123'
    expect ->
      nf1.pipe nf2
    .to.throw Error
