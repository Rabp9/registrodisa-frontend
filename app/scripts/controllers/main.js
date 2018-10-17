'use strict';

/**
 * @ngdoc function
 * @name registroDisaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the registroDisaApp
 */
angular.module('registroDisaApp')
.controller('MainCtrl', function ($scope, $utilsViewService, ciclistasservice) {
    $scope.terminado = false;
    
    $scope.saveRegistro = function(ciclista, boton, fecha_nac_pre) {
        $utilsViewService.disable('#' + boton);
        $scope.loading = true;
        
        if (fecha_nac_pre !== null) {
            ciclista.fecha_nac = formatDate(fecha_nac_pre);
        }
        ciclistasservice.save(ciclista, function (data) {
            $utilsViewService.enable('#' + boton);
            $scope.message = data;
            $scope.terminado = true;
        });
    };
    
    $scope.onChangePertenecesGrupo = function(perteneces_grupo, ciclista) {
        if (!perteneces_grupo) {
            ciclista.grupo = '';
        }
    };
    
    function formatDate(fecha) {
        if (fecha === undefined) {
            return undefined;
        }
        return fecha.getFullYear() + '-' + str_pad((fecha.getMonth() + 1), '00') + '-' + str_pad(fecha.getDate(), '00');
    }
    
    function str_pad(str, pad) {
        return pad.substring(0, (pad.length - str.toString().length)) + str;
    }
});