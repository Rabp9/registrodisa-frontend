'use strict';

/**
 * @ngdoc function
 * @name registroDisaApp.controller:ListaCiclistasCtrl
 * @description
 * # ListaCiclistasCtrl
 * Controller of the registroDisaApp
 */
angular.module('registroDisaApp')
.controller('ListaCiclistasCtrl', function ($scope, ciclistasservice) {
    
    $scope.search = {};
    $scope.search.text = '';
    // $scope.search.estado_id = '1';
    $scope.page = 1;
    $scope.items_per_page = 10;
    
    $scope.getCiclistas = function() {
        $scope.ciclistas = [];
        $scope.loading = true;
        ciclistasservice.get({
            text: $scope.search.text,
            items_per_page: $scope.items_per_page,
            page:   $scope.page
            // estado_id: $scope.search.estado_id
        }, function (data) {
            $scope.ciclistas = data.ciclistas;
            $scope.pagination = data.pagination;
            $scope.loading = false;
        });
    };
    
    $scope.init = function() {      
        $scope.getCiclistas();
        $scope.getTotalRegistros();
    };
    
    $scope.getTotalRegistros = function() {
        ciclistasservice.getTotalRegistros(function(data) {
            $scope.total_registros = data.total_registros;
        });
    };
    
    $scope.$watch('search.estado_id', function(oldValue, newValue) {
        $scope.page = 1;
        $scope.getCiclistas();
    });
    
    $scope.$watch('search.text', function(oldValue, newValue) {
        $scope.page = 1;
        $scope.getCiclistas();
    });
    
    
    $scope.pageChanged = function() {
        $scope.getCiclistas();
    };
    
    $scope.onChangeItemsPerPage = function() {
        $scope.page = 1;
        $scope.getCiclistas();
    };
        
    $scope.init();
});