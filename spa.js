angular.module('myapp',['ngRoute'])
.config(function($routeProvider)
{
    $routeProvider.when('/home',
    {
        templateUrl : 'home.html',
        controller : 'homectrl'
    }).when('/profile',{
        templateUrl:'profile.html',
        controller:'profilectrl'
    }).when('/contact',{
        templateUrl:'contact.html',
        controller:'contactctrl'
    }).when('/profile/:first/:last/:position',{
        templateUrl:'profile.html',
        controller: 'profilectrl'
    })
        
})

.controller('appctrl',function()
{

})

.controller('profilectrl',function($scope,$routeParams)
{   $scope.message="Welcome "
    $scope.user ={
        first:$routeParams.first,
        last:$routeParams.last,
        position:$routeParams.position
    };
})


.controller('contactctrl',function($scope,$http)
{
    $http.get('https://2147145-divyavprasad.github.io/json/contact.json')
    .then(function(response)
    {
        $scope.contacts = response.data.contact;
    });
})