'use strict';

describe('Service: Imagedata', function () {

  // load the service's module
  beforeEach(module('carouselApp'));

  // instantiate service
  var Imagedata;
  beforeEach(inject(function (_Imagedata_) {
    Imagedata = _Imagedata_;
  }));

  it('should do something', function () {
    expect(!!Imagedata).toBe(true);
  });

});
