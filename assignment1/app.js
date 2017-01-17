

(function() {

    'use strict';

    angular.module("NameCalculator", [])

            .controller("nameController", function($scope) {
                $scope.lunchItems = '';
                $scope.response = '';
                $scope.color = "limegreen";
                $scope.borderColor = "black";
                
                
                
                $scope.checkItems = function(){
                    
                    var items = $scope.lunchItems.split(',');
                    var numOfItems = items.length;
                    var blank = 0;
                    
                    
                    for (var i = 0; i < items.length; i++)
                    {
                        if ((items[i].replace(/\s/g, '').length) < 1)
                            blank--;
                    }
                    numOfItems += blank;
                    
                    if (numOfItems < 4 && numOfItems > 0)
                    {
                        $scope.response = "Enjoy!";
                        $scope.borderColor = "limegreen";
                        $scope.color = "limegreen";
                    }
                    else if (numOfItems > 3)
                    {
                        $scope.response = "Too much!";
                        $scope.borderColor = "limegreen";
                        $scope.color = "limegreen";
                    }
                    else
                    {
                        $scope.response = "Please enter data first ";
                        $scope.borderColor = "red";
                        $scope.color = "red";
                    }
                };
            });
})();