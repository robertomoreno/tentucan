import {Component} from "angular2/core";
import {UsersComponent} from "./components/users/users.component";
import {UserService} from "./services/user.service";
import {HTTP_PROVIDERS} from "angular2/http";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {HomeComponent} from "./components/home/home.component";
import {UserDetailComponent} from "./components/users/user-detail.component";
import {ApplicationComponent} from "./components/application/application.component";


@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <a [routerLink]="['Home']">Home</a>
        <a [routerLink]="['Application']">Application</a>
        <a [routerLink]="['Users']">Users</a>
        <router-outlet></router-outlet>
  `,
    directives: [ROUTER_DIRECTIVES],
    providers: [UserService, HTTP_PROVIDERS, ROUTER_PROVIDERS]
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
export class AppComponent {
    title = 'Tentucan App';
}