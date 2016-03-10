import {Component, OnInit} from 'angular2/core';
import {User} from './../../model/User';
import {UserDetailComponent} from './user-detail.component';
import {UserService} from "./../../services/user.service";
import 'rxjs/Rx';
import {Router} from "angular2/router";

@Component({
    selector: 'tentucan-users',
    directives: [UserDetailComponent],
    template: `
        <header *ngIf="errorMessage">{{errorMessage}}</header>
        <button (click)="goToUserForm()"> Add User </button>
        <h1>{{title}}</h1>
        <h2>My Users</h2>
        <ul>
          <li *ngFor="#user of users" (click)="onSelect(user)">
            <span>{{user.name}}</span> {{user.mail}}
          </li>
        </ul>
    `
})
export class UsersComponent implements OnInit {
    constructor(private router:Router,
                private userService:UserService) {
    }

    users:User[];
    selectedUser:User;
    errorMessage;

    goToUserForm() {
        this.router.navigate(['UsersDetail']);
    }

    onSelect(user:User) {
        this.selectedUser = user;
        this.router.navigate(['UsersDetail', {name: user.name}]);
    }

    fetchUsers() {
        this.userService.getUsers().subscribe(
            users => {
                this.users = users
            },
            error => this.errorMessage = <any> error);
    }

    ngOnInit() {
        this.fetchUsers();
    }
}

