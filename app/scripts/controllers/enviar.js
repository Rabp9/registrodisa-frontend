'use strict';

/**
 * @ngdoc function
 * @name registroDisaApp.controller:EnviarCtrl
 * @description
 * # EnviarCtrl
 * Controller of the registroDisaApp
 */
angular.module('registroDisaApp')
.controller('EnviarCtrl', function ($scope, $utilsViewService, ciclistasservice, $rootScope) {
    $scope.tmpPathPages = $rootScope.pathLocation + 'img' + '/mensajes/';
    $scope.loading = false;
    
    $scope.tinymcePagesOptions = {
        toolbar: "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | table | fontsizeselect | fontselect ",
        fontsize_formats: "8pt 10pt 11pt 12pt 13pt 14pt 15pt 16pt 17pt 18pt 19pt 20pt 21pt 22pt 23pt 24pt 25pt 26pt 27pt 28pt",
        plugins: 'lists autolink textcolor colorpicker link media preview table code image',
        language_url : 'scripts/langs_tinymce/es.js',
        file_browser_callback_types: 'image',
        file_browser_callback: function(field_name, url, type, win) {
            $scope.input = field_name;
            $('#flImagen').click();
        }
    };
    
    $scope.send = function(mensaje, boton) {
        $('#' + boton + ' .btnText').text('Enviando...');
        $utilsViewService.disable('#' + boton);
        
        ciclistasservice.send(mensaje, function(data) {
            $scope.mensaje = {};
            $utilsViewService.enable('#' + boton);
            $('#' + boton + ' .btnText').text('Enviar');
            $scope.message = data;
        }, function (err) {
            $utilsViewService.enable('#' + boton);
            $('#' + boton + ' .btnText').text('Enviar');
        });
    };
    
    $scope.upload = function(image, errFiles) {
        var fd = new FormData();
        fd.append('file', image);
        
        ciclistasservice.upload(fd, function(data) {
            $scope.url = $scope.tmpPathPages + data.filename;
            document.getElementById($scope.input).value = $scope.url;
        });
    };
});