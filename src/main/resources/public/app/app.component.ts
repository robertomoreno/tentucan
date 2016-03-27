import {Component, OnInit} from "angular2/core";
import {UsersComponent} from "./components/users/users.component";
import {UserService} from "./services/user.service";
import {HTTP_PROVIDERS} from "angular2/http";
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "angular2/router";
import {HomeComponent} from "./components/home/home.component";
import {UserDetailComponent} from "./components/users/user-detail.component";
import {ApplicationComponent} from "./components/application/application.component";
import {LoginService} from "./services/login.service";
import {User} from "./model/User";


@Component({
    selector: 'tentucan-app',
    template: `
        <header class="mdl-layout__header mdl-layout__header--scroll mdl-color--primary">
            <div class="mdl-layout--large-screen-only mdl-layout__header-row">
              <h3>Tentucan App</h3>
            </div>
            <div class="mdl-layout--large-screen-only mdl-layout__header-row"></div>
            
            <div class="mdl-layout__tab-bar mdl-js-ripple-effect mdl-color--primary-dark">
                <a [routerLink]="['Home']" class="mdl-layout__tab is-active">Home</a>
                <a [routerLink]="['Application']" *ngIf="loggedUser" class="mdl-layout__tab">Application</a>
                <a [routerLink]="['Users']" *ngIf="loggedUser" class="mdl-layout__tab">Users</a>
                <div *ngIf="loggedUser">
                    <h3>hello {{loggedUser.name}}</h3>
                    <button (click)="logout()">Logout</button>
                </div>
            </div>
            
        </header>
        
        <main class="mdl-layout__content">
            <div class="mdl-layout__tab-panel">
                <router-outlet></router-outlet>
            </div>
            
            <footer class="mdl-mega-footer">
          <div class="mdl-mega-footer--middle-section">
            <div class="mdl-mega-footer--drop-down-section">
              <input class="mdl-mega-footer--heading-checkbox" type="checkbox" checked>
              <h1 class="mdl-mega-footer--heading">Features</h1>
              <ul class="mdl-mega-footer--link-list">
                <li><a href="#">About</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Partners</a></li>
                <li><a href="#">Updates</a></li>
              </ul>
            </div>
            <div class="mdl-mega-footer--drop-down-section">
              <input class="mdl-mega-footer--heading-checkbox" type="checkbox" checked>
              <h1 class="mdl-mega-footer--heading">Details</h1>
              <ul class="mdl-mega-footer--link-list">
                <li><a href="#">Spec</a></li>
                <li><a href="#">Tools</a></li>
                <li><a href="#">Resources</a></li>
              </ul>
            </div>
            <div class="mdl-mega-footer--drop-down-section">
              <input class="mdl-mega-footer--heading-checkbox" type="checkbox" checked>
              <h1 class="mdl-mega-footer--heading">Technology</h1>
              <ul class="mdl-mega-footer--link-list">
                <li><a href="#">How it works</a></li>
                <li><a href="#">Patterns</a></li>
                <li><a href="#">Usage</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Contracts</a></li>
              </ul>
            </div>
            <div class="mdl-mega-footer--drop-down-section">
              <input class="mdl-mega-footer--heading-checkbox" type="checkbox" checked>
              <h1 class="mdl-mega-footer--heading">FAQ</h1>
              <ul class="mdl-mega-footer--link-list">
                <li><a href="#">Questions</a></li>
                <li><a href="#">Answers</a></li>
                <li><a href="#">Contact us</a></li>
              </ul>
            </div>
          </div>
          <div class="mdl-mega-footer--bottom-section">
            <div class="mdl-logo">
              More Information
            </div>
            <ul class="mdl-mega-footer--link-list">
              <li><a href="https://developers.google.com/web/starter-kit/">Web Starter Kit</a></li>
              <li><a href="#">Help</a></li>
              <li><a href="#">Privacy and Terms</a></li>
            </ul>
          </div>
        </footer>
        </main>
  `,
    directives: [ROUTER_DIRECTIVES],
    providers: [UserService, LoginService, HTTP_PROVIDERS, ROUTER_PROVIDERS]
})
@RouteConfig([
    {
        path: '/public/home',
        name: 'Home',
        component: HomeComponent,
        useAsDefault: true
    },
    {
        path: '/admin/users',
        name: 'Users',
        component: UsersComponent
    },
    {
        path: '/admin/users/form',
        name: 'UsersDetail',
        component: UserDetailComponent
    },
    {
        path: '/application',
        name: 'Application',
        component: ApplicationComponent
    }
])
export class AppComponent implements OnInit {
    constructor(private loginService:LoginService) {
    }

    public loggedUser:User;

    private logout() {
        this.loginService.logout().subscribe(
            result => this.loggedUser = null,
            error => error
        );
    }

    ngOnInit() {
        this.loginService.authenticatedUser().subscribe(
            user => this.loggedUser = user,
            error => error
        );
    }
}