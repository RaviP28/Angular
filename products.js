var app = angular.module("store-products", []);

app.directive("productTitle", function(){
    return {
        restrict: "E",
        templateUrl: "title.html"
    }
});

app.directive("productPanels", function(){
    return {
        restrict:"E",
        templateUrl: "product-panels.html",
        controller: function ($scope){
            $scope.tab = 1;
        
        
            $scope.selectTab = function (setTab){
                $scope.tab = setTab;
            }
        
            $scope.isSelected = function (checkTab){
                return $scope.tab === checkTab;
            }
        },
        controllerAs: "panels"
    }
});

