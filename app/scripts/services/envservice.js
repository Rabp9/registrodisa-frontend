'use strict';

/**
 * @ngdoc service
 * @name registroDisaApp.envservice
 * @description
 * # envservice
 * Factory in the registroDisaApp.
 */
angular.module('registroDisaApp')
.factory('EnvService', function () {
    return {
        getHost: function() {
            switch (window.location.hostname) {
                case 'localhost':
                    return 'http://localhost:8000/registro-disa-backend/';
                case 'www.trujillocletearrutear.com':
                    return 'http://trujillocletearrutear.com/registro/api/';
                case 'trujillocletearrutear.com':
                    return 'http://trujillocletearrutear.com/registro/api/';
            }
        }
    };
});