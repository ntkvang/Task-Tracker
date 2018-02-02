angular.module('app', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('');

        $routeProvider
            .when("/",{
                templateUrl:'scripts/timeline/templates/timeline.html',
                controller:'MainCtrl'
            })
            .when("/task",{
                templateUrl:'scripts/task/templates/task.html',
                controller:'CreateTaskCtrl'
            })
            .when("/timeline",{
                templateUrl:'scripts/timeline/templates/timeline.html'
                // controller:'MaintCtrl'
            })
            .when("/project",{
                templateUrl:'scripts/project/templates/project.html'
                // controller:'MaintCtrl'
            })
            .otherwise({
                redirectTo: '/timeline'
            });
    }])
    .controller('MainCtrl', ['$scope', function($scope){
        $scope.title = 'This is Time line page'
    }]);