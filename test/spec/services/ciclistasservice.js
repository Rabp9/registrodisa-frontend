'use strict';

describe('Service: ciclistasservice', function () {

  // load the service's module
  beforeEach(module('registroDisaApp'));

  // instantiate service
  var ciclistasservice;
  beforeEach(inject(function (_ciclistasservice_) {
    ciclistasservice = _ciclistasservice_;
  }));

  it('should do something', function () {
    expect(!!ciclistasservice).toBe(true);
  });

});
