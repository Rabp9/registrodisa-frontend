'use strict';

/**
 * @ngdoc overview
 * @name registroDisaApp
 * @description
 * # registroDisaApp
 *
 * Main module of the application.
 */
angular
.module('registroDisaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'angularValidator',
    'scrollable-table',
    'ui.bootstrap',
    'ui.tinymce'
])
.config(function($stateProvider, $urlRouterProvider) {
    var mainState = {
        name: 'main',
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        title: 'Inicio'
    };
    
    var listaCiclistasState = {
        name: 'listaCiclistas',
        url: '/lista-ciclistas',
        templateUrl: 'views/lista-ciclistas.html',
        controller: 'ListaCiclistasCtrl',
        controllerAs: 'listaCiclistas',
        title: 'Lista de Ciclistas'
    };
    
    var enviarState = {
        name: 'enviar',
        url: '/enviar',
        templateUrl: 'views/enviar.html',
        controller: 'EnviarCtrl',
        controllerAs: 'enviar',
        title: 'Enviar Mensaje'
    };
    
    $stateProvider.state(mainState);
    $stateProvider.state(listaCiclistasState);
    $stateProvider.state(enviarState);
    $urlRouterProvider.when('', '/');
});
