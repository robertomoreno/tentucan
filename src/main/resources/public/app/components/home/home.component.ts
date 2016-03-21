import {Component} from "angular2/core";

@Component({
    selector: 'tentucan-home',
    template: `
        <h3>My Home</h3>
        <a href="/login">Login</a>
        <a href="/logout">Logout</a>
        <p>{{content}}</p>
    `
})
export class HomeComponent {
    content = "my home content"
}