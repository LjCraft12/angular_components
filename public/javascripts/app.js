var app = angular.module('myApp', []);

app.controller('repeatController', function ($scope) {
    $scope.customers = [
        {name: 'Byron', occupation: 'Student', yearsKnown: '22', show: false},
        {name: 'Loring', occupation: 'Va', yearsKnown: '22', show: false},
        {name: 'Derrell', occupation: 'Havertys', yearsKnown: '22', show: false}
    ]

});

app.config(function ($stateProvider) {
    .when('/',{
        controller: 'repqeatController',
        templateUrl: './templates/ng_repeat.html'
    });
    .when('/ng-data',{
        controller: '_2wayDataController',
        templateUrl: './templates/ng_2way.html'
    });

}