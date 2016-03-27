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
                }
                AppComponent.prototype.logout = function () {
                    var _this = this;
                    this.loginService.logout().subscribe(function (result) { return _this.loggedUser = null; }, function (error) { return error; });
                };
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.loginService.authenticatedUser().subscribe(function (user) { return _this.loggedUser = user; }, function (error) { return error; });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'tentucan-app',
                        template: "\n        <header class=\"mdl-layout__header mdl-layout__header--scroll mdl-color--primary\">\n            <div class=\"mdl-layout--large-screen-only mdl-layout__header-row\">\n              <h3>Tentucan App</h3>\n            </div>\n            <div class=\"mdl-layout--large-screen-only mdl-layout__header-row\"></div>\n            \n            <div class=\"mdl-layout__tab-bar mdl-js-ripple-effect mdl-color--primary-dark\">\n                <a [routerLink]=\"['Home']\" class=\"mdl-layout__tab is-active\">Home</a>\n                <a [routerLink]=\"['Application']\" *ngIf=\"loggedUser\" class=\"mdl-layout__tab\">Application</a>\n                <a [routerLink]=\"['Users']\" *ngIf=\"loggedUser\" class=\"mdl-layout__tab\">Users</a>\n                <div *ngIf=\"loggedUser\">\n                    <h3>hello {{loggedUser.name}}</h3>\n                    <button (click)=\"logout()\">Logout</button>\n                </div>\n            </div>\n            \n        </header>\n        \n        <main class=\"mdl-layout__content\">\n            <div class=\"mdl-layout__tab-panel\">\n                <router-outlet></router-outlet>\n            </div>\n            \n            <footer class=\"mdl-mega-footer\">\n          <div class=\"mdl-mega-footer--middle-section\">\n            <div class=\"mdl-mega-footer--drop-down-section\">\n              <input class=\"mdl-mega-footer--heading-checkbox\" type=\"checkbox\" checked>\n              <h1 class=\"mdl-mega-footer--heading\">Features</h1>\n              <ul class=\"mdl-mega-footer--link-list\">\n                <li><a href=\"#\">About</a></li>\n                <li><a href=\"#\">Terms</a></li>\n                <li><a href=\"#\">Partners</a></li>\n                <li><a href=\"#\">Updates</a></li>\n              </ul>\n            </div>\n            <div class=\"mdl-mega-footer--drop-down-section\">\n              <input class=\"mdl-mega-footer--heading-checkbox\" type=\"checkbox\" checked>\n              <h1 class=\"mdl-mega-footer--heading\">Details</h1>\n              <ul class=\"mdl-mega-footer--link-list\">\n                <li><a href=\"#\">Spec</a></li>\n                <li><a href=\"#\">Tools</a></li>\n                <li><a href=\"#\">Resources</a></li>\n              </ul>\n            </div>\n            <div class=\"mdl-mega-footer--drop-down-section\">\n              <input class=\"mdl-mega-footer--heading-checkbox\" type=\"checkbox\" checked>\n              <h1 class=\"mdl-mega-footer--heading\">Technology</h1>\n              <ul class=\"mdl-mega-footer--link-list\">\n                <li><a href=\"#\">How it works</a></li>\n                <li><a href=\"#\">Patterns</a></li>\n                <li><a href=\"#\">Usage</a></li>\n                <li><a href=\"#\">Products</a></li>\n                <li><a href=\"#\">Contracts</a></li>\n              </ul>\n            </div>\n            <div class=\"mdl-mega-footer--drop-down-section\">\n              <input class=\"mdl-mega-footer--heading-checkbox\" type=\"checkbox\" checked>\n              <h1 class=\"mdl-mega-footer--heading\">FAQ</h1>\n              <ul class=\"mdl-mega-footer--link-list\">\n                <li><a href=\"#\">Questions</a></li>\n                <li><a href=\"#\">Answers</a></li>\n                <li><a href=\"#\">Contact us</a></li>\n              </ul>\n            </div>\n          </div>\n          <div class=\"mdl-mega-footer--bottom-section\">\n            <div class=\"mdl-logo\">\n              More Information\n            </div>\n            <ul class=\"mdl-mega-footer--link-list\">\n              <li><a href=\"https://developers.google.com/web/starter-kit/\">Web Starter Kit</a></li>\n              <li><a href=\"#\">Help</a></li>\n              <li><a href=\"#\">Privacy and Terms</a></li>\n            </ul>\n          </div>\n        </footer>\n        </main>\n  ",
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