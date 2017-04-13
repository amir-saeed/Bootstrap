angular.module('pure360').config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
    .state('home', {
        url: '/',
        template: '<email-lists></email-lists>'
    }) 
    .state('details', {
        url: '/details/:id',
        template: '<email-details></email-details>'                  
    });    
});