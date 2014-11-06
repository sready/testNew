angular.module('directory', ['ionic', 'forceng', 'directory.controllers', 'directory.services'])
    
    .run(function ($ionicPlatform, $state, force) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }

            // Authenticate using Salesforce OAuth
            force.login().then(function() {
                $state.go('app.contactlist');
            });

        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "templates/menu.html",
                controller: 'AppCtrl'
            })

            .state('app.contactlist', {
                url: "/contactlist",
                views: {
                    'menuContent': {
                        templateUrl: "templates/contact-list.html",
                        controller: 'ContactListCtrl'
                    }
                }
            })

            .state('app.contact', {
                url: "/contacts/:contactId",
                views: {
                    'menuContent': {
                        templateUrl: "templates/contact.html",
                        controller: 'ContactCtrl'
                    }
                }
            })

            .state('app.edit-contact', {
                url: "/edit-contact/:contactId",
                views: {
                    'menuContent': {
                        templateUrl: "templates/edit-contact.html",
                        controller: 'EditContactCtrl'
                    }
                }
            })

            .state('app.add-contact', {
                url: "/create-contact",
                views: {
                    'menuContent': {
                        templateUrl: "templates/edit-contact.html",
                        controller: 'CreateContactCtrl'
                    }
                }
            })

            .state('app.accountlist', {
                url: "/accountlist",
                views: {
                    'menuContent': {
                        templateUrl: "templates/account-list.html",
                        controller: 'AccountListCtrl'
                    }
                }
            })

            .state('app.account', {
                url: "/accounts/:accountId",
                views: {
                    'menuContent': {
                        templateUrl: "templates/account.html",
                        controller: 'AccountCtrl'
                    }
                }
            });
    });
    /*.run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('search', {
                url: '/search',
                templateUrl: 'templates/employee-list.html',
                controller: 'EmployeeListCtrl'
            })

            .state('employee', {
                url: '/employees/:employeeId',
                templateUrl: 'templates/employee-detail.html',
                controller: 'EmployeeDetailCtrl'
            })

            .state('reports', {
                url: '/employees/:employeeId/reports',
                templateUrl: 'templates/employee-reports.html',
                controller: 'EmployeeReportsCtrl'
            });

        $urlRouterProvider.otherwise('/search');

    });*/