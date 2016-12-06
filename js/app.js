var app = angular.module('app', ['ui.router']);

app.config([
    '$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('app', {
                url: '',
                abstract: true,
                templateUrl: './html/index.tpl.html',
            })
            .state('app.home', {
                url: '/home',
                templateUrl: './html/home.tpl.html',
                controller: 'HomeCtrl'
            })
            .state('app.profile', {
                url: '/profile',
                templateUrl: './html/profile.tpl.html',
                controller: 'ProfileCtrl'
            })
            .state('app.message', {
                url: '/message',
                templateUrl: './html/message.tpl.html',
                controller: 'MessageCtrl'
            })
    }
]);