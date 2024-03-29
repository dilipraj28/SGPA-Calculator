app.controller('DeveloperController', ['$scope', function($scope){
	
  $scope.type=function(){
      $("#ext").typed({
        strings: ["First sentence.", "Second sentence."],
        typeSpeed: 10
      });
    }

}]);

app.directive('ext', [function() {
   return {
      restrict: 'A',
      link: function(scope, elem, attrs) {
         $(elem).typed({
            strings: [
                ".py",".html",".css",".js",".php",".sql",".json",".apk",
                ".py",".html",".css",".js",".php",".sql",".json",".apk",
                ".py",".html",".css",".js",".php",".sql",".json",".apk"
            ],
            typeSpeed: 1000
         });
      }
   };

}]);
