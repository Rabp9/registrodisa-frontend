'use strict';

/**
 * @ngdoc service
 * @name registroDisaApp.utilsViewService
 * @description
 * # utilsViewService
 * Factory in the registroDisaApp.
 */
angular.module('registroDisaApp')
.factory('$utilsViewService', function () {
    return {
        enable: function(id) {
            $(id).removeClass('disabled');
            $(id).prop('disabled', false);
        },
        disable: function(id) {
            $(id).addClass('disabled');
            $(id).prop('disabled', true);
        }
    };
});