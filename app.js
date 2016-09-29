var myApp=angular.module("myApp", ["store-products"]);


angular.module("myApp").directive("myExample", function(){
    return{
        template: '<div> MyExample Directive here!</div>'
    };
});


myApp.controller("ReviewController", function($scope){
    ($scope).review = {};
    
    $scope.addReview = function(product){
        
        if (!product.reviews)
            produect.reviews = [];
        
        product.reviews.push($scope.review);
        
        $scope.review = {};
    };
});


myApp.controller("PanelController", function(){ 
    this.tab = 1;
    
    this.selectTab = function (setTab) {
        this.tab = setTab;
    };
    this.isSelected = function(checkTab){
        return this.tab === checkTab;
    };
});
    
myApp.controller('myController', ['$http', '$scope', '$log', 'ProductsService', 'gravatar', function ($http, $scope, $log, productsService, gravatar){
    $scope.model = [];
    
    productsService.get().then(
        function (response){
            $scope.model = response.data;
    },
    function(response) {
        $scope.error = true;
        $log.log("could not load products" + response.status)
        //Error! How do we handle this?
        
        
        });
    
    $scope.gravatarUrl = function (email){
        return gravatar.generate(email);
    }

}
                                 ]);

myApp.directive('myExample', function () {
    return { template: "<div>My Example Directive Here.</div>" };
});
