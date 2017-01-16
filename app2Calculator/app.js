
/*start with an immediately invoked function expression (IIFE) */
(function(){
    'use strict'; /*blocks accidental declaration of variables with out 'var', which would
                  allow the variable to be created in the global scope, which we don't want */
    
    angular.module("myFirstApp",[])
    
            .controller("myFirstController", function($scope){
        $scope.name = "Frodo";

        $scope.sayHello = function(){
            return "Hello!";
        };
    });
    
})();