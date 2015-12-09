/**
 * Created by Rain on 2015/12/9.
 */
var assert = require("assert");
var fs = require('fs');

describe('File', function () {
  //describe('#readFile()', function () {
  //  it('should read test.ls without error', function (done) {
  //    fs.readFile('app.js', function (err) {
  //      if (err) throw err;
  //      done();
  //    })
  //  });
  //
  //  it('should read test.js without error', function (done) {
  //    fs.readFile('app.ls', function (err) {
  //      if (err) throw err;
  //      done();
  //    })
  //  })
  //});

  describe('#readFile()', function () {
    it.skip('should read test.ls without error', function (done) {
      fs.readFile('app.js', function (err) {
        if (err) throw err;
        done();
      });
    });

    it('should read test.js without err', function (done) {

    })

  })
});