import {Component} from 'angular2/core';
import {User} from './../../model/User';
import {UserService} from "../../services/user.service";
import {RouteParams} from "angular2/router";
import {OnInit} from "angular2/core";
import {Router} from "angular2/router";

@Component({
    selector: 'tentucan-user-form',
    template: `
          <h2>{{user.name}} details!</h2>
          <header *ngIf="errorMessage">{{errorMessage}}</header>
          <div><label>id: </label>{{user.id}}</div>
          <div>
            <label>name: </label>
            <input [(ngModel)]="user.name" placeholder="name"/>
          </div>
          <div>
            <label>mail: </label>
            <input [(ngModel)]="user.mail" placeholder="mail"/>
          </div>
          <div>
            <button (click)="onSave(user)">Save</button>
            <button *ngIf="isEditMode" (click)="onDelete(user.name)">Delete</button>
            <button (click)="onReturn()">Return</button>
          </div>
    `
})
export class UserDetailComponent implements OnInit {
    constructor(private router:Router,
                private userService:UserService,
                private routeParams:RouteParams) {
    }

    user:User = {id: "", name: "", mail: ""};
    errorMessage;
    isEditMode = false;

    onSave(user:User) {
        if (this.isEditMode) {
            this.userService.updateUser(user).subscribe(
                result => this.returnToUsersScreen(),
                error => this.errorMessage = error
            );
        } else {
            this.userService.addUser(user).subscribe(
                result => this.returnToUsersScreen(),
                error => this.errorMessage = error
            );
        }
    }

    onDelete(name:String) {
        if (this.isEditMode) {
            this.userService.deleteUser(name).subscribe(
                result => this.returnToUsersScreen(),
                error => this.errorMessage = error
            );
        }
    }

    onReturn() {
        this.returnToUsersScreen();
    }

    ngOnInit() {
        let name = this.routeParams.get('name');
        if (name) {
            this.userService.getUser(name).subscribe(
                user => {
                    this.user = user;
                    this.isEditMode = true
                },
                error => this.errorMessage = <any> error);
        }
    }

    private returnToUsersScreen() {
        this.router.navigate(['Users']);
    }

}