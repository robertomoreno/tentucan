System.register(["angular2/core", "./components/users/users.component", "./services/user.service", "angular2/http", "angular2/router", "./components/home/home.component", "./components/users/user-detail.component", "./components/application/application.component", "./services/login.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, users_component_1, user_service_1, http_1, router_1, home_component_1, user_detail_component_1, application_component_1, login_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (users_component_1_1) {
                users_component_1 = users_component_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (user_detail_component_1_1) {
                user_detail_component_1 = user_detail_component_1_1;
            },
            function (application_component_1_1) {
                application_component_1 = application_component_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(loginService) {
                    this.loginService = loginService;
                    this.title = 'Tentucan App';
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.loginService.authenticatedUser().subscribe(function (result) { return console.log(result); }, function (error) { return console.error(error); });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <h1>{{title}}</h1>\n        <a [routerLink]=\"['Home']\">Home</a>\n        <a [routerLink]=\"['Application']\">Application</a>\n        <a [routerLink]=\"['Users']\">Users</a>\n        <router-outlet></router-outlet>\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [user_service_1.UserService, login_service_1.LoginService, http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/public/home',
                            name: 'Home',
                            component: home_component_1.HomeComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/admin/users',
                            name: 'Users',
                            component: users_component_1.UsersComponent
                        },
                        {
                            path: '/admin/users/form',
                            name: 'UsersDetail',
                            component: user_detail_component_1.UserDetailComponent
                        },
                        {
                            path: '/application',
                            name: 'Application',
                            component: application_component_1.ApplicationComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [login_service_1.LoginService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map