'use strict';

/**
 * @ngdoc service
 * @name registroDisaApp.ciclistasservice
 * @description
 * # ciclistasservice
 * Factory in the registroDisaApp.
 */
angular.module('registroDisaApp')
.factory('ciclistasservice', function ($resource, EnvService) {
    return $resource(EnvService.getHost() + 'ciclistas/:id.json', {}, {
        getTotalRegistros: {
            method: 'GET',
            url: EnvService.getHost() + 'ciclistas/getTotalRegistros.json',
        },
        upload: {
            method: 'POST',
            url: EnvService.getHost() + 'ciclistas/upload/.json',
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        },
    });
});