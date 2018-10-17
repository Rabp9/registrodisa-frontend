'use strict';

describe('Controller: EnviarCtrl', function () {

  // load the controller's module
  beforeEach(module('registroDisaApp'));

  var EnviarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EnviarCtrl = $controller('EnviarCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EnviarCtrl.awesomeThings.length).toBe(3);
  });
});
