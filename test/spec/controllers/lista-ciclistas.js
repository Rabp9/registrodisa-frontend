'use strict';

describe('Controller: ListaCiclistasCtrl', function () {

  // load the controller's module
  beforeEach(module('registroDisaApp'));

  var ListaCiclistasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListaCiclistasCtrl = $controller('ListaCiclistasCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ListaCiclistasCtrl.awesomeThings.length).toBe(3);
  });
});
